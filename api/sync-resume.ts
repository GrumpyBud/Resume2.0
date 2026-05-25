import type { VercelRequest, VercelResponse } from "@vercel/node";
import { put } from "@vercel/blob";
import { JWT } from "google-auth-library";

export const config = { maxDuration: 60 };

export default async function handler(
  request: VercelRequest,
  response: VercelResponse,
): Promise<void> {
  const expectedAuth = `Bearer ${process.env.CRON_SECRET}`;
  if (!process.env.CRON_SECRET || request.headers.authorization !== expectedAuth) {
    response.status(401).send("Unauthorized");
    return;
  }

  const credsRaw = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  const docId = process.env.GOOGLE_DOC_ID;
  if (!credsRaw || !docId) {
    response
      .status(500)
      .json({ ok: false, error: "Missing GOOGLE_SERVICE_ACCOUNT_JSON or GOOGLE_DOC_ID" });
    return;
  }

  const creds = JSON.parse(credsRaw) as { client_email: string; private_key: string };
  const jwt = new JWT({
    email: creds.client_email,
    key: creds.private_key,
    scopes: ["https://www.googleapis.com/auth/drive.readonly"],
  });

  const { token } = await jwt.getAccessToken();
  if (!token) {
    response.status(500).json({ ok: false, error: "Failed to obtain access token" });
    return;
  }

  const exportUrl = `https://www.googleapis.com/drive/v3/files/${docId}/export?mimeType=application/pdf`;
  const pdfResponse = await fetch(exportUrl, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!pdfResponse.ok) {
    const detail = await pdfResponse.text();
    response
      .status(502)
      .json({ ok: false, error: `Drive export failed: ${pdfResponse.status}`, detail });
    return;
  }

  const pdf = await pdfResponse.arrayBuffer();

  const { url } = await put("resume.pdf", pdf, {
    access: "public",
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: "application/pdf",
    cacheControlMaxAge: 60,
  });

  response.status(200).json({
    ok: true,
    url,
    bytes: pdf.byteLength,
    syncedAt: new Date().toISOString(),
  });
}

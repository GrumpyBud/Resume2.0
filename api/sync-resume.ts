import { put } from "@vercel/blob";
import { JWT } from "google-auth-library";

export const config = { maxDuration: 60 };

export default async function handler(request: Request): Promise<Response> {
  const expectedAuth = `Bearer ${process.env.CRON_SECRET}`;
  if (!process.env.CRON_SECRET || request.headers.get("authorization") !== expectedAuth) {
    return new Response("Unauthorized", { status: 401 });
  }

  const credsRaw = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  const docId = process.env.GOOGLE_DOC_ID;
  if (!credsRaw || !docId) {
    return Response.json(
      { ok: false, error: "Missing GOOGLE_SERVICE_ACCOUNT_JSON or GOOGLE_DOC_ID" },
      { status: 500 },
    );
  }

  const creds = JSON.parse(credsRaw) as { client_email: string; private_key: string };
  const jwt = new JWT({
    email: creds.client_email,
    key: creds.private_key,
    scopes: ["https://www.googleapis.com/auth/drive.readonly"],
  });

  const { token } = await jwt.getAccessToken();
  if (!token) {
    return Response.json({ ok: false, error: "Failed to obtain access token" }, { status: 500 });
  }

  const exportUrl = `https://www.googleapis.com/drive/v3/files/${docId}/export?mimeType=application/pdf`;
  const pdfResponse = await fetch(exportUrl, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!pdfResponse.ok) {
    const detail = await pdfResponse.text();
    return Response.json(
      { ok: false, error: `Drive export failed: ${pdfResponse.status}`, detail },
      { status: 502 },
    );
  }

  const pdf = await pdfResponse.arrayBuffer();

  const { url } = await put("resume.pdf", pdf, {
    access: "public",
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: "application/pdf",
    cacheControlMaxAge: 60,
  });

  return Response.json({
    ok: true,
    url,
    bytes: pdf.byteLength,
    syncedAt: new Date().toISOString(),
  });
}

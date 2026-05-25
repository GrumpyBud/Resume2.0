import type { VercelRequest, VercelResponse } from "@vercel/node";
import { getDownloadUrl, head } from "@vercel/blob";

export default async function handler(
  _request: VercelRequest,
  response: VercelResponse,
): Promise<void> {
  try {
    const { url } = await head("resume.pdf");
    response.redirect(302, getDownloadUrl(url));
  } catch {
    response.redirect(302, "/resume.pdf");
  }
}

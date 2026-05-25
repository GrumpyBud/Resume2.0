import { getDownloadUrl, head } from "@vercel/blob";

export default async function handler(request: Request): Promise<Response> {
  try {
    const { url } = await head("resume.pdf");
    return Response.redirect(getDownloadUrl(url), 302);
  } catch {
    return Response.redirect(new URL("/resume.pdf", request.url), 302);
  }
}

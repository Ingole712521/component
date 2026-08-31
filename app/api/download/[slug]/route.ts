import { NextResponse } from "next/server";
import { buildTemplateZip } from "@/lib/template-zip";
import { getTemplate } from "@/templates";

type DownloadContext = {
  params: Promise<{ slug: string }>;
};

export async function GET(_request: Request, context: DownloadContext) {
  const { slug } = await context.params;
  const template = getTemplate(slug);

  if (!template) {
    return NextResponse.json({ error: "Template not found" }, { status: 404 });
  }

  const zip = await buildTemplateZip(slug);

  if (!zip) {
    return NextResponse.json({ error: "Source not ready" }, { status: 404 });
  }

  return new NextResponse(Buffer.from(zip), {
    headers: {
      "Content-Type": "application/zip",
      "Content-Disposition": `attachment; filename="animioui-${slug}.zip"`,
      "Cache-Control": "no-store",
    },
  });
}

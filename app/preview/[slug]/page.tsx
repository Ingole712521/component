import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PreviewChrome } from "@/app/_components/preview-chrome";
import { getTemplate, getTemplateSlugs } from "@/templates";

type PreviewPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getTemplateSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PreviewPageProps): Promise<Metadata> {
  const { slug } = await params;
  const template = getTemplate(slug);

  if (!template) {
    return { title: "Template" };
  }

  return {
    title: `${template.name} preview`,
    description: template.tagline,
  };
}

export default async function PreviewPage({ params }: PreviewPageProps) {
  const { slug } = await params;
  const template = getTemplate(slug);

  if (!template) {
    notFound();
  }

  const { Component } = template;

  return (
    <>
      <PreviewChrome template={template} />
      <main id="main-content">
        <Component />
      </main>
    </>
  );
}

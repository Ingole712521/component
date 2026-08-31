import { templates } from "@/templates";
import { TemplateCard } from "./template-card";

export function TemplateGallery() {
  const [featured, secondary, ...rest] = templates;

  if (!featured) {
    return (
      <p className="body-lg">
        No templates yet. Add a folder under <code>templates/</code> and
        register it.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-5">
      <div className="lg:col-span-7">
        <TemplateCard template={featured} featured />
      </div>
      {secondary ? (
        <div className="lg:col-span-5">
          <TemplateCard template={secondary} featured />
        </div>
      ) : null}
      {rest.map((template) => (
        <div key={template.slug} className="lg:col-span-12">
          <TemplateCard template={template} />
        </div>
      ))}
    </div>
  );
}

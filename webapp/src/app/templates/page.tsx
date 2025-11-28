import { CopyPlus, LayoutTemplate, Paintbrush2, Wand2 } from "lucide-react";

const templates = [
  {
    name: "Evergreen capture",
    description: "High-intent product inquiries with dynamic product dropdowns.",
    status: "Published",
    badge: "Most popular",
  },
  {
    name: "Holiday blitz",
    description: "Seasonal offers with countdown timers and limited stock alerts.",
    status: "Draft",
    badge: "New",
  },
  {
    name: "Wholesale request",
    description: "B2B qualification with account-level approval routing.",
    status: "Published",
    badge: "B2B",
  },
  {
    name: "Post-purchase feedback",
    description: "Delivery satisfaction tracking and surprise & delight offers.",
    status: "Published",
    badge: "Retention",
  },
];

export default function TemplatesPage() {
  return (
    <div className="space-y-8">
      <header className="glass-card border border-emerald-100 bg-gradient-to-br from-white via-white to-emerald-50/50 p-6 md:p-8">
        <p className="section-heading">Templates</p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-800">
          Jumpstart with curated form experiences
        </h1>
        <p className="mt-3 max-w-3xl text-sm text-slate-600">
          Pick from Shopify-optimized templates or clone existing funnels to
          launch in minutes.
        </p>
      </header>

      <section className="glass-card border border-slate-200 p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-sm text-slate-600">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
              <LayoutTemplate className="h-5 w-5" />
            </span>
            <div>
              <p className="font-semibold text-slate-800">Template Library</p>
              <p className="text-xs text-slate-500">Launch-ready experiences</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
            <button className="flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-slate-600 hover:border-emerald-200 hover:text-emerald-700">
              <CopyPlus className="h-3.5 w-3.5" />
              New from existing
            </button>
            <button className="flex items-center gap-2 rounded-full border border-emerald-200 px-3 py-1 text-emerald-700 hover:bg-emerald-50">
              <Paintbrush2 className="h-3.5 w-3.5" />
              Blank template
            </button>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {templates.map((template) => (
            <div
              key={template.name}
              className="rounded-xl border border-slate-200 bg-slate-50/70 p-5 text-sm text-slate-600 transition hover:border-emerald-200 hover:bg-white"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-800">
                  {template.name}
                </p>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  {template.badge}
                </span>
              </div>
              <p className="mt-2 text-xs text-slate-500">
                {template.description}
              </p>
              <div className="mt-4 flex items-center justify-between text-xs">
                <span className="rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-600">
                  {template.status}
                </span>
                <button className="rounded-full border border-slate-200 px-3 py-1 font-semibold text-slate-600 hover:border-emerald-200 hover:text-emerald-700">
                  Customize
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="glass-card border border-emerald-100 bg-emerald-50/50 p-6 text-sm text-emerald-700">
        <div className="flex flex-wrap items-center gap-3">
          <div className="rounded-full bg-white/80 p-3 text-emerald-700 shadow-sm">
            <Wand2 className="h-5 w-5" />
          </div>
          <div>
            <p className="font-semibold text-emerald-800">
              AI template recommendations
            </p>
            <p className="text-xs text-emerald-600">
              We scan your store metrics to surface the next best playbook.
            </p>
          </div>
          <span className="ml-auto rounded-full bg-white/80 px-4 py-1 text-xs font-semibold text-emerald-700">
            Coming soon
          </span>
        </div>
      </section>
    </div>
  );
}

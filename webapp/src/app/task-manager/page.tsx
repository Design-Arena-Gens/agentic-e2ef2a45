import { CheckSquare, ClipboardList, Lightbulb, Timer } from "lucide-react";

const setupSteps = [
  {
    title: "Connect Shopify store",
    description: "Authenticate embedded dashboard and pull storefront metadata.",
    status: "Completed",
    due: "Today",
  },
  {
    title: "Publish lead capture form",
    description: "Use the builder to launch the evergreen acquisition form.",
    status: "In Progress",
    due: "Tomorrow",
  },
  {
    title: "Automate nurture sequence",
    description: "Sync to Klaviyo, configure dynamic segments, and activate flows.",
    status: "Queued",
    due: "Friday",
  },
  {
    title: "Enable delivery callbacks",
    description: "Tie delivery exceptions to task routing inside operations.",
    status: "Pending",
    due: "Next week",
  },
];

const playbooks = [
  {
    title: "Holiday conversion blitz",
    summary: "Launch seasonal templates with double opt-in and urgency triggers.",
  },
  {
    title: "Wholesale onboarding",
    summary: "Capture B2B leads and assign to sales pods with SLA monitoring.",
  },
  {
    title: "Post-purchase reactivation",
    summary: "Target lapsed customers with personalized bundle offers via SMS.",
  },
];

export default function TaskManagerGuidePage() {
  return (
    <div className="space-y-8">
      <header className="glass-card border border-emerald-100 bg-gradient-to-br from-white via-white to-emerald-50/50 p-6 md:p-8">
        <p className="section-heading">Task Manager Guide</p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-800">
          Guided onboarding for your embedded suite
        </h1>
        <p className="mt-3 max-w-3xl text-sm text-slate-600">
          Follow the workflow to connect your store, publish forms, activate marketing automation, and align your delivery operations. Each stage assigns tasks with due dates and owners.
        </p>
      </header>

      <section className="glass-card border border-slate-200">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 px-6 py-4">
          <div>
            <p className="section-heading">Setup Timeline</p>
            <h2 className="text-lg font-semibold text-slate-800">
              Milestones & tasks
            </h2>
          </div>
          <button className="rounded-full border border-emerald-200 px-4 py-1.5 text-sm font-semibold text-emerald-700 hover:bg-emerald-50">
            Export plan
          </button>
        </div>
        <ul className="divide-y divide-slate-100 text-sm text-slate-600">
          {setupSteps.map((step) => (
            <li key={step.title} className="flex items-start gap-4 px-6 py-4">
              <span className="mt-1 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                <ClipboardList className="h-4 w-4" />
              </span>
              <div className="flex-1">
                <p className="font-semibold text-slate-800">{step.title}</p>
                <p>{step.description}</p>
                <p className="text-xs text-emerald-600">{step.status}</p>
              </div>
              <div className="flex flex-col items-end gap-2 text-xs text-slate-500">
                <span className="rounded-full bg-emerald-50 px-3 py-1 font-semibold text-emerald-700">
                  Due {step.due}
                </span>
                <button className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 hover:border-emerald-200 hover:text-emerald-700">
                  Assign owner
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="glass-card border border-emerald-100 bg-emerald-50/50 p-6">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-white/80 p-3 text-emerald-700 shadow-sm">
            <CheckSquare className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-800">
              Automation checklist
            </p>
            <p className="text-xs text-slate-600">
              Track critical automations before launching your embedded dashboard.
            </p>
          </div>
          <span className="ml-auto rounded-full bg-white/80 px-4 py-1 text-xs font-semibold text-emerald-700">
            3/8 Complete
          </span>
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {[
            { label: "Marketing syncs", value: "Active" },
            { label: "Delivery automations", value: "In setup" },
            { label: "Lead routing", value: "Approved" },
            { label: "Compliance review", value: "Queued" },
            { label: "Template publishing", value: "In progress" },
            { label: "Analytics dashboards", value: "Live" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-lg border border-emerald-100 bg-white/80 px-4 py-3 text-sm text-slate-600"
            >
              <p className="text-xs uppercase tracking-wide text-emerald-600">
                {item.label}
              </p>
              <p className="mt-1 text-lg font-semibold text-slate-800">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="glass-card border border-slate-200 p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="section-heading">Playbooks</p>
            <h2 className="text-lg font-semibold text-slate-800">
              Recommended next moves
            </h2>
          </div>
          <button className="rounded-full border border-emerald-200 px-4 py-1.5 text-sm font-semibold text-emerald-700 hover:bg-emerald-50">
            Browse library
          </button>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {playbooks.map((playbook) => (
            <div
              key={playbook.title}
              className="rounded-xl border border-slate-200 bg-slate-50/70 p-5 text-sm text-slate-600 transition hover:border-emerald-200 hover:bg-white"
            >
              <div className="flex items-center gap-3 text-slate-700">
                <Lightbulb className="h-5 w-5 text-emerald-600" />
                <span className="font-semibold text-slate-800">
                  {playbook.title}
                </span>
              </div>
              <p className="mt-3">{playbook.summary}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="glass-card border border-slate-200 p-6">
        <div className="flex flex-wrap items-center gap-4">
          <div className="rounded-full bg-emerald-100/80 p-3 text-emerald-700">
            <Timer className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-800">
              Next milestone
            </p>
            <p className="text-xs text-slate-600">
              Go-live rehearsal scheduled for Thursday at 3:00 PM.
            </p>
          </div>
          <span className="ml-auto rounded-full bg-emerald-50 px-4 py-1 text-xs font-semibold text-emerald-700">
            RSVP
          </span>
          <button className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 hover:border-emerald-200 hover:text-emerald-700">
            Add to calendar
          </button>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-500">
            Hosted by Ops
          </span>
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {[
            {
              label: "Pre-flight checklist",
              detail: "Ensure analytics tags fire and leads flow to CRM.",
            },
            {
              label: "Stakeholder alignment",
              detail: "Confirm marketing, ops, and support owners.",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-lg border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-600"
            >
              <p className="font-semibold text-slate-800">{item.label}</p>
              <p className="mt-1 text-xs text-slate-500">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

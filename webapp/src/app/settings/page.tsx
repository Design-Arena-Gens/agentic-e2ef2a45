import {
  Building2,
  Lock,
  Mail,
  ShieldCheck,
  UserCog,
  Workflow,
} from "lucide-react";

const settingsSections = [
  {
    title: "Organization Profile",
    description:
      "Storefront identity, billing profile, and localization defaults for embedded experiences.",
    icon: Building2,
    fields: [
      { label: "Store name", placeholder: "Aurora Mart" },
      { label: "Primary domain", placeholder: "auroramart.shopify.com" },
      { label: "Region defaults", placeholder: "United States, Canada" },
    ],
  },
  {
    title: "User Governance",
    description:
      "Assign roles and configure workspace-level permissions for managers and contributors.",
    icon: UserCog,
    fields: [
      { label: "Role templates", placeholder: "Growth, Operations, Support" },
      { label: "Invite email", placeholder: "team@auroramart.com" },
      {
        label: "Required approvals",
        placeholder: "Superadmin for new publish requests",
      },
    ],
  },
  {
    title: "Security Controls",
    description:
      "Enable compliance automations, audit logs, and SSO options for enterprise teams.",
    icon: ShieldCheck,
    fields: [
      { label: "Enforce SSO", placeholder: "Enabled via Okta" },
      { label: "Audit retention", placeholder: "180 days" },
      { label: "Secure fields", placeholder: "Payment method, address" },
    ],
  },
];

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <header className="glass-card border border-emerald-100 bg-gradient-to-br from-white via-white to-emerald-50/50 p-6 md:p-8">
        <p className="section-heading">Workspace Settings</p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-800">
          Configure governance & collaboration policies
        </h1>
        <p className="mt-3 max-w-3xl text-sm text-slate-600">
          Maintain compliance-ready workflows by centrally managing Shopify
          access, automation controls, and notification policies for teams
          across marketing, operations, and support.
        </p>
      </header>

      <section className="grid gap-6 lg:grid-cols-3">
        <div className="glass-card border border-slate-200 lg:col-span-2">
          <div className="border-b border-slate-100 px-6 py-4">
            <p className="section-heading">Configuration</p>
            <h2 className="text-lg font-semibold text-slate-800">
              Control center
            </h2>
          </div>
          <div className="space-y-6 px-6 py-6">
            {settingsSections.map((section) => (
              <div
                key={section.title}
                className="rounded-xl border border-slate-200 bg-slate-50/70 p-5"
              >
                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <section.icon className="h-4 w-4" />
                  </span>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-slate-800">
                      {section.title}
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                      {section.description}
                    </p>
                    <div className="mt-4 grid gap-3 md:grid-cols-2">
                      {section.fields.map((field) => (
                        <label
                          key={field.label}
                          className="text-xs font-medium uppercase tracking-wide text-slate-500"
                        >
                          {field.label}
                          <input
                            className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 shadow-sm focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                            placeholder={field.placeholder}
                            type="text"
                          />
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className="glass-card flex flex-col gap-6 border border-emerald-100 bg-emerald-50/60 p-6">
          <div>
            <p className="section-heading">Notifications</p>
            <h2 className="text-lg font-semibold text-slate-800">
              Channels & alerts
            </h2>
          </div>
          <div className="space-y-4 text-sm text-slate-600">
            <div className="flex items-center gap-3 rounded-lg border border-emerald-100 bg-white/70 p-4">
              <Mail className="h-4 w-4 text-emerald-600" />
              <div>
                <p className="font-semibold text-slate-800">
                  Weekly performance digest
                </p>
                <p className="text-xs text-slate-500">
                  Delivered Mondays at 8:00 AM
                </p>
              </div>
              <button className="ml-auto rounded-full border border-emerald-200 px-3 py-1 text-xs font-semibold text-emerald-700 hover:bg-emerald-100">
                Manage
              </button>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-emerald-100 bg-white/70 p-4">
              <Workflow className="h-4 w-4 text-emerald-600" />
              <div>
                <p className="font-semibold text-slate-800">
                  Automation approvals
                </p>
                <p className="text-xs text-slate-500">
                  Trigger Slack notifications for publish requests
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-emerald-100 bg-white/70 p-4">
              <Lock className="h-4 w-4 text-emerald-600" />
              <div>
                <p className="font-semibold text-slate-800">
                  Security incidents
                </p>
                <p className="text-xs text-slate-500">
                  PagerDuty escalation for critical issues
                </p>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}

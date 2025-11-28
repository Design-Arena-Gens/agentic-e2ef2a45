import {
  Activity,
  Building,
  CheckCircle2,
  KeyRound,
  ShieldAlert,
  Users,
} from "lucide-react";

const governanceTiles = [
  {
    title: "Workspace Hierarchy",
    description:
      "Manage multi-store environments, regional instances, and delegated administrators.",
    metric: "6 active workspaces",
    icon: Building,
  },
  {
    title: "Access Controls",
    description:
      "Audit permissions, session policies, and SSO enforcement for every team member.",
    metric: "23 admins • 58 collaborators",
    icon: KeyRound,
  },
  {
    title: "Compliance Center",
    description:
      "Enforce GDPR & CCPA readiness with automated data retention and consent tracking.",
    metric: "Compliant",
    icon: ShieldAlert,
  },
];

export default function SuperadminPage() {
  return (
    <div className="space-y-8">
      <header className="glass-card border border-emerald-100 bg-gradient-to-br from-white via-white to-emerald-50/50 p-6 md:p-8">
        <p className="section-heading">Superadmin Panel</p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-800">
          Enterprise governance & control tower
        </h1>
        <p className="mt-3 max-w-3xl text-sm text-slate-600">
          Oversee every Shopify workspace, enforce compliance, and resolve
          escalations from a single pane of glass. Recommended for enterprise
          operations staff.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        {governanceTiles.map((tile) => (
          <div
            key={tile.title}
            className="glass-card border border-slate-200 bg-white/90 p-6 transition hover:border-emerald-200 hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                <tile.icon className="h-5 w-5" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-wide text-emerald-600">
                {tile.metric}
              </span>
            </div>
            <h2 className="mt-5 text-lg font-semibold text-slate-800">
              {tile.title}
            </h2>
            <p className="mt-2 text-sm text-slate-600">{tile.description}</p>
          </div>
        ))}
      </section>

      <section className="glass-card border border-slate-200">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 px-6 py-4">
          <div>
            <p className="section-heading">Escalations</p>
            <h2 className="text-lg font-semibold text-slate-800">
              Approval queue
            </h2>
          </div>
          <button className="rounded-full border border-emerald-200 px-4 py-1.5 text-sm font-semibold text-emerald-700 hover:bg-emerald-50">
            View audit log
          </button>
        </div>
        <ul className="divide-y divide-slate-100 text-sm text-slate-600">
          {[
            {
              team: "Growth Team",
              request: "Publish new holiday form template",
              status: "Awaiting superadmin approval",
            },
            {
              team: "Support Team",
              request: "Access collected leads export",
              status: "Granted",
            },
            {
              team: "Operations",
              request: "Modify delivery exception rules",
              status: "Pending review",
            },
          ].map((item) => (
            <li key={item.team} className="flex items-start gap-4 px-6 py-4">
              <span className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                <Users className="h-4 w-4" />
              </span>
              <div>
                <p className="font-semibold text-slate-800">{item.team}</p>
                <p>{item.request}</p>
                <p className="text-xs text-emerald-600">{item.status}</p>
              </div>
              <div className="ml-auto flex gap-2">
                <button className="rounded-full border border-emerald-200 px-3 py-1 text-xs font-semibold text-emerald-700 hover:bg-emerald-50">
                  Approve
                </button>
                <button className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 hover:border-emerald-200 hover:text-emerald-700">
                  Escalate
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="glass-card border border-emerald-100 bg-emerald-50/50 p-6">
        <div className="flex flex-wrap items-center gap-4">
          <div className="rounded-full bg-white/80 p-3 text-emerald-700 shadow-sm">
            <Activity className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-800">
              Real-time workspace health
            </p>
            <p className="text-xs text-slate-600">
              Monitor automation throughput and sync errors across all embedded
              dashboards.
            </p>
          </div>
          <span className="ml-auto rounded-full bg-white/80 px-4 py-1 text-xs font-semibold text-emerald-700">
            99.97% uptime
          </span>
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {[
            { label: "Current incidents", value: "0" },
            { label: "Change requests", value: "5 open" },
            { label: "Resolved in 7d", value: "38" },
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
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-lg border border-emerald-100 bg-white/70 px-4 py-3 text-sm text-slate-600">
          <div className="flex items-center gap-2 text-emerald-700">
            <CheckCircle2 className="h-4 w-4" />
            Audit trail synced to data lake
          </div>
          <span>Daily snapshots @ 1:00 AM UTC</span>
        </div>
      </section>
    </div>
  );
}

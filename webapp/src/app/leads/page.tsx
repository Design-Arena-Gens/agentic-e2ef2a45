import { Download, Filter, FolderDown, Inbox } from "lucide-react";

const leads = [
  {
    name: "Taylor Kim",
    email: "taylor@auroramart.com",
    product: "Aurora Essentials Kit",
    status: "Qualified",
    source: "Evergreen form",
    created: "2h ago",
  },
  {
    name: "Jules Ramos",
    email: "jules.ramos@example.com",
    product: "Self-care bundle",
    status: "Hot",
    source: "Holiday blitz",
    created: "Yesterday",
  },
  {
    name: "Maya Patel",
    email: "maya.patel@example.com",
    product: "Wholesale SKU 24",
    status: "Routing",
    source: "B2B request",
    created: "3 days ago",
  },
  {
    name: "Oliver Stein",
    email: "oliver.stein@example.com",
    product: "Aurora Plus subscription",
    status: "Nurture",
    source: "Meta ads",
    created: "4 days ago",
  },
];

export default function LeadsPage() {
  return (
    <div className="space-y-8">
      <header className="glass-card border border-emerald-100 bg-gradient-to-br from-white via-white to-emerald-50/50 p-6 md:p-8">
        <p className="section-heading">Collected Leads</p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-800">
          Unified inbox for every embedded form
        </h1>
        <p className="mt-3 max-w-3xl text-sm text-slate-600">
          Review submission details, assign owners, and export high-intent leads
          to your CRM in one step.
        </p>
      </header>

      <section className="glass-card border border-slate-200">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 px-6 py-4">
          <div className="flex items-center gap-3 text-sm text-slate-600">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
              <Inbox className="h-4 w-4" />
            </span>
            <div>
              <p className="font-semibold text-slate-800">Lead inbox</p>
              <p className="text-xs text-slate-500">4 new in the last 24h</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
            <button className="flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-slate-600 hover:border-emerald-200 hover:text-emerald-700">
              <Filter className="h-3.5 w-3.5" />
              Filters
            </button>
            <button className="flex items-center gap-2 rounded-full border border-emerald-200 px-3 py-1 text-emerald-700 hover:bg-emerald-50">
              <Download className="h-3.5 w-3.5" />
              Export CSV
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-100 text-sm text-slate-600">
            <thead className="bg-slate-50/70 text-xs font-semibold uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-6 py-3 text-left">Lead</th>
                <th className="px-6 py-3 text-left">Product</th>
                <th className="px-6 py-3 text-left">Status</th>
                <th className="px-6 py-3 text-left">Source</th>
                <th className="px-6 py-3 text-left">Created</th>
                <th className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white/70">
              {leads.map((lead) => (
                <tr key={lead.email} className="hover:bg-emerald-50/40">
                  <td className="px-6 py-4">
                    <div className="font-semibold text-slate-800">
                      {lead.name}
                    </div>
                    <div className="text-xs text-slate-500">{lead.email}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                      {lead.product}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-xs font-semibold text-slate-500">
                    {lead.source}
                  </td>
                  <td className="px-6 py-4 text-xs text-slate-500">
                    {lead.created}
                  </td>
                  <td className="px-6 py-4 text-right text-xs">
                    <button className="rounded-full border border-slate-200 px-3 py-1 font-semibold text-slate-600 hover:border-emerald-200 hover:text-emerald-700">
                      Assign
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="glass-card border border-emerald-100 bg-emerald-50/50 p-6 text-sm text-emerald-700">
        <div className="flex flex-wrap items-center gap-3">
          <div className="rounded-full bg-white/80 p-3 text-emerald-700 shadow-sm">
            <FolderDown className="h-5 w-5" />
          </div>
          <div>
            <p className="font-semibold text-emerald-800">
              Automatic CRM sync enabled
            </p>
            <p className="text-xs text-emerald-600">
              Every 30 minutes: push new leads to HubSpot with lifecycle stage{" "}
              <strong>Marketing Qualified</strong>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

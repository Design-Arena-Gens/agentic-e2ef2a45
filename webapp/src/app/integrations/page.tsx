import { Database, Plug, Server, Settings2, Shield, Zap } from "lucide-react";

const connectors = [
  {
    name: "Klaviyo",
    type: "Marketing Automation",
    status: "Active",
    sync: "Every 5 minutes",
  },
  {
    name: "HubSpot",
    type: "Sales CRM",
    status: "Active",
    sync: "Instant via webhooks",
  },
  {
    name: "Gorgias",
    type: "Support Desk",
    status: "Pending",
    sync: "Awaiting approval",
  },
  {
    name: "NetSuite",
    type: "ERP",
    status: "Connected",
    sync: "Nightly at 2:00 AM",
  },
];

const upgradeItems = [
  {
    title: "Headless Storefronts",
    description:
      "Deploy embedded widgets across custom storefronts using our delivery SDK.",
    icon: Server,
  },
  {
    title: "Data Warehouse Sync",
    description:
      "Mirror form submissions and lead events into your warehouse via managed pipelines.",
    icon: Database,
  },
  {
    title: "Compliance Engine",
    description:
      "Automate PII redaction, field encryption, and access policies for sensitive data.",
    icon: Shield,
  },
];

export default function IntegrationsPage() {
  return (
    <div className="space-y-8">
      <header className="glass-card border border-emerald-100 bg-gradient-to-br from-white via-white to-emerald-50/50 p-6 md:p-8">
        <p className="section-heading">Integrations</p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-800">
          Connect your Shopify workflows with the rest of your stack
        </h1>
        <p className="mt-3 max-w-3xl text-sm text-slate-600">
          Manage marketing, sales, support, and data platform integrations from
          a single, embedded control panel. Monitor sync health and automate
          recovery with zero code.
        </p>
      </header>

      <section className="glass-card border border-slate-200">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 px-6 py-4">
          <div>
            <p className="section-heading">Connected Apps</p>
            <h2 className="text-lg font-semibold text-slate-800">
              Live connectors
            </h2>
          </div>
          <button className="rounded-full border border-emerald-200 px-4 py-1.5 text-sm font-semibold text-emerald-700 hover:bg-emerald-50">
            Add connector
          </button>
        </div>
        <div className="divide-y divide-slate-100 text-sm text-slate-600">
          {connectors.map((connector) => (
            <div
              key={connector.name}
              className="flex flex-wrap items-center gap-3 px-6 py-4"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                <Plug className="h-4 w-4" />
              </span>
              <div className="flex-1 min-w-48">
                <p className="font-semibold text-slate-800">
                  {connector.name}
                </p>
                <p className="text-xs text-slate-500">{connector.type}</p>
              </div>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                {connector.status}
              </span>
              <span className="text-xs text-slate-500">
                Sync cadence: {connector.sync}
              </span>
              <button className="ml-auto rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 hover:border-emerald-200 hover:text-emerald-700">
                Manage
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="glass-card border border-emerald-100 bg-emerald-50/50 p-6">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-white/80 p-3 text-emerald-700 shadow-sm">
            <Settings2 className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-800">
              Integration orchestrator
            </p>
            <p className="text-xs text-slate-600">
              Customize data mappings, event payloads, and error recovery flows.
            </p>
          </div>
          <span className="ml-auto rounded-full bg-white/80 px-4 py-1 text-xs font-semibold text-emerald-700">
            Beta
          </span>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {upgradeItems.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-emerald-100 bg-white/80 p-5 text-sm text-slate-600"
            >
              <div className="flex items-center gap-3 text-slate-700">
                <item.icon className="h-5 w-5 text-emerald-600" />
                <span className="font-semibold text-slate-800">
                  {item.title}
                </span>
              </div>
              <p className="mt-3">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="glass-card border border-slate-200 p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="section-heading">Activity Log</p>
            <h2 className="text-lg font-semibold text-slate-800">
              Sync health timeline
            </h2>
          </div>
          <button className="rounded-full border border-emerald-200 px-4 py-1.5 text-sm font-semibold text-emerald-700 hover:bg-emerald-50">
            Download logs
          </button>
        </div>
        <ul className="mt-6 space-y-4 text-sm text-slate-600">
          {[
            {
              time: "10:32 AM",
              event: "HubSpot sync completed",
              detail: "215 leads pushed to pipeline",
            },
            {
              time: "09:18 AM",
              event: "Klaviyo refresh warning",
              detail: "List size exceeded threshold, auto-resolved",
            },
            {
              time: "Yesterday",
              event: "NetSuite nightly sync",
              detail: "Orders + customers mirrored to ERP",
            },
          ].map((log) => (
            <li
              key={log.event}
              className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50/70 p-4"
            >
              <span className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                <Zap className="h-4 w-4" />
              </span>
              <div>
                <p className="font-semibold text-slate-800">{log.event}</p>
                <p className="text-xs text-slate-500">{log.time}</p>
                <p className="mt-1">{log.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

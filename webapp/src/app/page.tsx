import {
  ArrowUpRight,
  BarChart3,
  CircleDollarSign,
  ClipboardCheck,
  Layers,
  MonitorSmartphone,
  Rocket,
  Users2,
} from "lucide-react";

const quickStats = [
  {
    title: "Active Campaigns",
    value: "12",
    change: "+3 this week",
    icon: Rocket,
  },
  {
    title: "Conversion Rate",
    value: "8.3%",
    change: "+1.2% vs last month",
    icon: BarChart3,
  },
  {
    title: "Leads Captured",
    value: "4,892",
    change: "+136 today",
    icon: Users2,
  },
  {
    title: "Revenue Influenced",
    value: "$128K",
    change: "+$24K this quarter",
    icon: CircleDollarSign,
  },
];

const operations = [
  {
    title: "Launch BFCM Funnel",
    status: "In Review",
    detail: "Awaiting approval from Superadmin",
  },
  {
    title: "Update Delivery Cutoffs",
    status: "Live",
    detail: "Applied to 4 shipping profiles",
  },
  {
    title: "Sync Klaviyo Audiences",
    status: "Queued",
    detail: "Marketing sync runs at 6:00 PM",
  },
];

const initiatives = [
  {
    title: "Retention Blueprint",
    description:
      "Automated win-back journeys using Smart Templates and personalized product bundles.",
    icon: ClipboardCheck,
  },
  {
    title: "Omnichannel Hand-off",
    description:
      "Routes high-intent form submissions to sales with SLA alerts inside the task manager.",
    icon: MonitorSmartphone,
  },
  {
    title: "Localization Engine",
    description:
      "Geo-fenced content and dynamic pricing across regions with embedded tax rules.",
    icon: Layers,
  },
];

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="glass-card border-emerald-100 bg-gradient-to-br from-emerald-50/80 via-white/80 to-emerald-100/40 p-6 md:p-8">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="section-heading">Store performance summary</p>
            <h1 className="mt-2 text-3xl font-semibold text-slate-800 md:text-4xl">
              Aurora Mart | Growth Pipeline
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-slate-600">
              Keep a pulse on embedded Shopify operations: monitor live form
              funnels, plan delivery automations, and coordinate marketing
              launches in one control tower.
            </p>
          </div>
          <button className="flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-300/50 transition hover:bg-emerald-700">
            New Playbook
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {quickStats.map((stat) => (
          <div
            key={stat.title}
            className="glass-card border border-transparent bg-white p-5 shadow-sm transition hover:border-emerald-200/70 hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                {stat.title}
              </p>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                <stat.icon className="h-4 w-4" />
              </span>
            </div>
            <div className="mt-4 text-2xl font-semibold text-slate-800">
              {stat.value}
            </div>
            <p className="mt-1 text-sm text-emerald-600">{stat.change}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-7">
        <div className="glass-card lg:col-span-4">
          <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
            <div>
              <p className="section-heading">Operations Overview</p>
              <h2 className="text-lg font-semibold text-slate-800">
                Live & upcoming automations
              </h2>
            </div>
            <button className="rounded-full border border-emerald-200 px-4 py-1.5 text-sm font-semibold text-emerald-700 hover:bg-emerald-50">
              View timeline
            </button>
          </div>
          <ul className="divide-y divide-slate-100">
            {operations.map((item) => (
              <li key={item.title} className="flex items-start gap-4 px-5 py-4">
                <span className="mt-1 inline-flex h-3 w-3 flex-shrink-0 rounded-full bg-emerald-500"></span>
                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    {item.title}
                  </p>
                  <p className="text-xs font-medium text-emerald-600">
                    {item.status}
                  </p>
                  <p className="mt-1 text-sm text-slate-500">{item.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="glass-card lg:col-span-3">
          <div className="border-b border-slate-100 px-5 py-4">
            <p className="section-heading">Strategic Initiatives</p>
            <h2 className="text-lg font-semibold text-slate-800">
              Customer experience roadmap
            </h2>
          </div>
          <ul className="space-y-4 px-5 py-4">
            {initiatives.map((initiative) => (
              <li
                key={initiative.title}
                className="flex gap-3 rounded-xl border border-transparent bg-slate-50/70 p-4 transition hover:border-emerald-200 hover:bg-white"
              >
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <initiative.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    {initiative.title}
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    {initiative.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

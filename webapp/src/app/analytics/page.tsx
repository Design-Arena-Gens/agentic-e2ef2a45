import { ArrowUpRight, BarChart3, Gauge, LineChart, PieChart } from "lucide-react";

const metrics = [
  { label: "Leads captured", value: "4,892", change: "+8.3%" },
  { label: "Conversion rate", value: "8.3%", change: "+1.2%" },
  { label: "Avg. response time", value: "11m", change: "-3m" },
  { label: "Marketing influence", value: "$128K", change: "+$24K" },
];

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      <header className="glass-card border border-emerald-100 bg-gradient-to-br from-white via-white to-emerald-50/50 p-6 md:p-8">
        <p className="section-heading">Analytics</p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-800">
          Observe funnel performance in real-time
        </h1>
        <p className="mt-3 max-w-3xl text-sm text-slate-600">
          Track lead capture, campaign effectiveness, and delivery SLAs across
          every embedded experience.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="glass-card border border-slate-200 bg-white p-5 text-sm text-slate-600"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              {metric.label}
            </p>
            <div className="mt-3 flex items-end justify-between">
              <span className="text-2xl font-semibold text-slate-800">
                {metric.value}
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700">
                <ArrowUpRight className="h-3.5 w-3.5" />
                {metric.change}
              </span>
            </div>
          </div>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <div className="glass-card border border-slate-200 p-6 lg:col-span-2">
          <div className="flex items-center justify-between">
            <div>
              <p className="section-heading">Lead Journey</p>
              <h2 className="text-lg font-semibold text-slate-800">
                Submission to conversion
              </h2>
            </div>
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
              <LineChart className="h-5 w-5" />
            </span>
          </div>
          <div className="mt-6 grid gap-4 text-sm text-slate-600 md:grid-cols-3">
            {[45, 32, 18].map((value, index) => (
              <div
                key={value}
                className="rounded-xl border border-slate-200 bg-slate-50/70 p-4"
              >
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  Stage {index + 1}
                </p>
                <p className="mt-2 text-lg font-semibold text-slate-800">
                  {value}%
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Conversion from step {index + 1} to {index + 2}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50/70 p-4 text-xs text-slate-500">
            Data refreshes every 15 minutes. Large swings detected for{" "}
            <strong className="font-semibold text-emerald-600">
              Holiday blitz funnel
            </strong>
            .
          </div>
        </div>

        <div className="glass-card border border-emerald-100 bg-emerald-50/50 p-6">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-white/80 p-3 text-emerald-700 shadow-sm">
              <PieChart className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-800">
                Traffic distribution
              </p>
              <p className="text-xs text-slate-600">
                Sources from the last 7 days
              </p>
            </div>
          </div>
          <ul className="mt-5 space-y-3 text-sm text-slate-600">
            {[
              { label: "Organic Shopify", value: "36%" },
              { label: "Paid social (Meta)", value: "28%" },
              { label: "Email & SMS", value: "22%" },
              { label: "Wholesale referrals", value: "14%" },
            ].map((source) => (
              <li
                key={source.label}
                className="flex items-center justify-between rounded-lg border border-emerald-100 bg-white/80 px-3 py-2"
              >
                <span>{source.label}</span>
                <span className="font-semibold text-emerald-700">
                  {source.value}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="glass-card border border-slate-200 p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="section-heading">Operations</p>
            <h2 className="text-lg font-semibold text-slate-800">
              Delivery & fulfillment health
            </h2>
          </div>
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
            <Gauge className="h-5 w-5" />
          </span>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-4 text-sm text-slate-600">
          {[
            { label: "On-time delivery", value: "96.4%" },
            { label: "Exception resolution", value: "3h 12m" },
            { label: "Positive feedback", value: "92%" },
            { label: "Task backlog", value: "5 open" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-slate-200 bg-slate-50/70 p-4"
            >
              <p className="text-xs uppercase tracking-wide text-slate-500">
                {item.label}
              </p>
              <p className="mt-2 text-lg font-semibold text-slate-800">
                {item.value}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50/70 p-4 text-xs text-slate-500">
          Delivery automation health is{" "}
          <strong className="font-semibold text-emerald-600">Green</strong>.
          Review the task manager for proactive escalations.
        </div>
      </section>

      <section className="glass-card border border-emerald-100 bg-emerald-50/50 p-6">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-white/80 p-3 text-emerald-700 shadow-sm">
            <BarChart3 className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-800">
              BI warehouse sync
            </p>
            <p className="text-xs text-slate-600">
              Analytics pipeline exports to Snowflake nightly at 1:00 AM UTC.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

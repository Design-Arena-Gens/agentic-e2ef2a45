import {
  BarChart3,
  Globe2,
  Link2,
  Megaphone,
  Target,
  UserCheck,
} from "lucide-react";

const automations = [
  {
    title: "Always-on Lead Nurture",
    description:
      "Trigger dynamic product recommendations and SMS reminders when a lead submits a form.",
    metric: "CTR 24%",
    icon: Megaphone,
  },
  {
    title: "High Intent Fast Track",
    description:
      "Route qualifying submissions to sales pipelines, sync to HubSpot, and notify reps.",
    metric: "Response SLA 12m",
    icon: Target,
  },
  {
    title: "Global Localization Layer",
    description:
      "Deliver region-specific content blocks and currency logic based on form metadata.",
    metric: "Regions 9",
    icon: Globe2,
  },
];

const channels = [
  {
    name: "Email + Klaviyo",
    detail: "Lifecycle sync with 5 segment rules",
    badge: "Connected",
  },
  {
    name: "Meta Ads",
    detail: "Custom audiences + lookalike triggers",
    badge: "Syncing",
  },
  {
    name: "Google Ads",
    detail: "Offline conversions refresh every 2h",
    badge: "Connected",
  },
  {
    name: "TikTok Ads",
    detail: "Pixel + lead API integration",
    badge: "Queued",
  },
];

export default function MarketingOptionsPage() {
  return (
    <div className="space-y-8">
      <header className="glass-card border border-emerald-100 bg-gradient-to-br from-white via-white to-emerald-50/50 p-6 md:p-8">
        <p className="section-heading">Marketing Automation</p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-800">
          Activate growth playbooks for form submissions
        </h1>
        <p className="mt-3 max-w-3xl text-sm text-slate-600">
          Choose intelligent follow-ups, omnichannel remarketing, and advanced
          personalization to stretch every Shopify lead further down the funnel.
        </p>
      </header>

      <section className="grid gap-6 lg:grid-cols-3">
        {automations.map((flow) => (
          <div
            key={flow.title}
            className="glass-card border border-slate-200 bg-white/90 p-6 transition hover:border-emerald-200 hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                <flow.icon className="h-5 w-5" />
              </span>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                {flow.metric}
              </span>
            </div>
            <h2 className="mt-5 text-lg font-semibold text-slate-800">
              {flow.title}
            </h2>
            <p className="mt-2 text-sm text-slate-600">{flow.description}</p>
            <button className="mt-6 rounded-full border border-emerald-200 px-4 py-2 text-sm font-semibold text-emerald-700 hover:bg-emerald-50">
              Customize Playbook
            </button>
          </div>
        ))}
      </section>

      <section className="glass-card border border-slate-200 p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="section-heading">Channel Sync</p>
            <h2 className="text-lg font-semibold text-slate-800">
              Connected marketing destinations
            </h2>
          </div>
          <button className="rounded-full border border-emerald-200 px-4 py-1.5 text-sm font-semibold text-emerald-700 hover:bg-emerald-50">
            Add integration
          </button>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {channels.map((channel) => (
            <div
              key={channel.name}
              className="flex items-center gap-4 rounded-xl border border-slate-200 bg-slate-50/70 p-4 text-sm text-slate-600"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                <Link2 className="h-5 w-5" />
              </span>
              <div className="flex-1">
                <p className="font-semibold text-slate-800">{channel.name}</p>
                <p className="text-xs text-slate-500">{channel.detail}</p>
              </div>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                {channel.badge}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="glass-card border border-emerald-100 bg-emerald-50/50 p-6">
        <div className="flex flex-wrap items-center gap-4">
          <div className="rounded-full bg-white/80 p-3 text-emerald-700 shadow-sm">
            <UserCheck className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-800">
              Retention intelligence
            </p>
            <p className="text-xs text-slate-600">
              Leverage predictive segments to target high-value cohorts across
              channels.
            </p>
          </div>
          <span className="ml-auto rounded-full border border-emerald-200 bg-white/80 px-4 py-1 text-xs font-semibold text-emerald-700">
            Alpha Preview
          </span>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {[
            { label: "Likely to reorder", value: "87%" },
            { label: "Cross-sell uplift", value: "+18%" },
            { label: "Churn risk flagged", value: "212 leads" },
            { label: "Campaign health", value: "Green" },
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
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-lg border border-emerald-100 bg-white/70 px-4 py-3 text-sm text-slate-600">
          <div className="flex items-center gap-2 text-emerald-700">
            <BarChart3 className="h-4 w-4" />
            Experiment Control Group
          </div>
          <span>Split traffic 70/30 across variants</span>
        </div>
      </section>
    </div>
  );
}

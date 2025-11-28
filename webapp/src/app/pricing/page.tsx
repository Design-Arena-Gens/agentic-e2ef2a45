import { Check, Crown, Gem, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$49",
    period: "/mo",
    description:
      "Launch embedded forms and manage essential delivery workflows.",
    bestFor: "Growing storefronts",
    features: [
      "Up to 3 live form funnels",
      "Basic segmentation rules",
      "Delivery playbooks library",
      "Email support",
    ],
    icon: Sparkles,
  },
  {
    name: "Pro",
    price: "$129",
    period: "/mo",
    description:
      "Scale marketing syncs, automate fulfillment, and unlock advanced analytics.",
    bestFor: "Scaling DTC brands",
    features: [
      "Unlimited lead journeys",
      "Multi-variant testing",
      "Marketing automation bridge",
      "Advanced delivery logic",
      "Priority support",
    ],
    icon: Gem,
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Talk to us",
    period: "",
    description:
      "White-glove onboarding, custom permissions, and enterprise-grade governance.",
    bestFor: "Retail networks & marketplaces",
    features: [
      "Superadmin hierarchy",
      "Dedicated integration pods",
      "Field-level compliance controls",
      "SLA-backed success plan",
    ],
    icon: Crown,
  },
];

export default function PricingPage() {
  return (
    <div className="space-y-8">
      <header className="glass-card border border-emerald-100 bg-gradient-to-br from-white via-white to-emerald-50/50 p-6 md:p-8">
        <p className="section-heading">Plans built for Shopify growth loops</p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-800">
          Choose a workspace that accelerates acquisition & retention
        </h1>
        <p className="mt-3 max-w-3xl text-sm text-slate-600">
          Every plan includes the embedded dashboard, drag-and-drop form
          builder, marketing syncs, and delivery orchestration. Upgrade as your
          team scales into multi-brand and multi-region operations.
        </p>
      </header>

      <section className="grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`glass-card border p-6 transition hover:-translate-y-1 hover:border-emerald-200/80 hover:shadow-lg ${
              plan.highlighted
                ? "border-emerald-200 bg-emerald-50/60"
                : "border-slate-200"
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {plan.bestFor}
                </p>
                <h2 className="mt-2 text-xl font-semibold text-slate-800">
                  {plan.name}
                </h2>
              </div>
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                <plan.icon className="h-5 w-5" />
              </span>
            </div>

            <div className="mt-6 flex items-baseline gap-2">
              <span className="text-3xl font-semibold text-slate-800">
                {plan.price}
              </span>
              <span className="text-sm text-slate-500">{plan.period}</span>
            </div>

            <p className="mt-4 text-sm text-slate-600">{plan.description}</p>

            <ul className="mt-6 space-y-3 text-sm text-slate-600">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <button
              className={`mt-8 w-full rounded-full px-5 py-2 text-sm font-semibold shadow-sm transition ${
                plan.highlighted
                  ? "bg-emerald-600 text-white hover:bg-emerald-700"
                  : "border border-emerald-200 text-emerald-700 hover:bg-emerald-50"
              }`}
            >
              {plan.highlighted ? "Start with Pro" : "Talk to sales"}
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}

import { CalendarCheck, MapPin, Package, Settings2, Truck } from "lucide-react";

const deliverySteps = [
  {
    title: "Profile Mapping",
    description:
      "Sync Shopify shipping profiles and tag regions, warehouses, and carriers for routing.",
    icon: MapPin,
    status: "Completed",
  },
  {
    title: "Cutoff Rules",
    description:
      "Define per-region order cutoffs, blackout dates, and express upcharges.",
    icon: CalendarCheck,
    status: "In Progress",
  },
  {
    title: "Carrier Automation",
    description:
      "Automate label purchasing and fulfillments through preferred carrier integrations.",
    icon: Truck,
    status: "Scheduled",
  },
  {
    title: "Exception Playbooks",
    description:
      "Trigger SMS + email workflows and task assignments for delivery exceptions.",
    icon: Settings2,
    status: "Not Started",
  },
];

const fulfillmentScorecard = [
  { label: "On-time delivery", value: "96.4%" },
  { label: "Avg. processing time", value: "6h 12m" },
  { label: "Exception rate", value: "1.8%" },
  { label: "Same-day promise", value: "4 regions" },
];

export default function DeliverySetupPage() {
  return (
    <div className="space-y-8">
      <section className="glass-card border border-emerald-100 bg-gradient-to-br from-white via-white to-emerald-50/50 p-6 md:p-8">
        <p className="section-heading">Fulfillment Operations</p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-800">
          Delivery setup wizard
        </h1>
        <p className="mt-3 max-w-3xl text-sm text-slate-600">
          Configure regional shipping promises, carrier preferences, and
          exception protocols. These rules apply instantly to embedded forms and
          Shopify checkout flows.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <div className="glass-card border-slate-200 lg:col-span-2">
          <div className="border-b border-slate-100 px-6 py-4">
            <p className="section-heading">Guided Steps</p>
            <h2 className="text-lg font-semibold text-slate-800">
              Delivery orchestration roadmap
            </h2>
          </div>
          <ul className="divide-y divide-slate-100">
            {deliverySteps.map((step) => (
              <li key={step.title} className="flex items-start gap-4 px-6 py-4">
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <step.icon className="h-5 w-5" />
                </span>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-semibold text-slate-800">
                        {step.title}
                      </p>
                      <p className="mt-1 text-sm text-slate-500">
                        {step.description}
                      </p>
                    </div>
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                      {step.status}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="glass-card flex flex-col gap-6 border border-emerald-100 bg-emerald-50/50 p-6">
          <div>
            <p className="section-heading">Fulfillment Scorecard</p>
            <h2 className="text-lg font-semibold text-slate-800">
              Live performance
            </h2>
          </div>
          <div className="grid gap-3">
            {fulfillmentScorecard.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between rounded-lg border border-emerald-100 bg-white/80 px-4 py-3 text-sm"
              >
                <span className="text-slate-500">{item.label}</span>
                <span className="font-semibold text-emerald-700">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
          <div className="rounded-xl border border-emerald-100 bg-white/70 p-4 text-sm text-slate-600">
            <p className="font-semibold text-emerald-700">Pickup Capacity</p>
            <p className="mt-1">
              Warehouse East is nearing capacity. Recommended to reroute
              high-priority express orders to Central hub after 3 PM.
            </p>
          </div>
        </div>
      </section>

      <section className="glass-card border border-slate-200 p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="section-heading">Automation Templates</p>
            <h2 className="text-lg font-semibold text-slate-800">
              Suggested delivery playbooks
            </h2>
          </div>
          <button className="rounded-full border border-emerald-200 px-4 py-1.5 text-sm font-semibold text-emerald-700 hover:bg-emerald-50">
            Browse library
          </button>
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {[
            "Last-mile rapid fulfillment",
            "Same-day metro coverage",
            "Gift order prioritization",
            "Temperature-sensitive alerts",
            "Split shipment automations",
            "Backorder concierge flow",
          ].map((item) => (
            <div
              key={item}
              className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 text-sm text-slate-600 transition hover:border-emerald-200 hover:bg-white"
            >
              <div className="flex items-center gap-3 text-slate-700">
                <Package className="h-4 w-4 text-emerald-600" />
                <span className="font-semibold">{item}</span>
              </div>
              <p className="mt-2 text-xs text-slate-500">
                Prebuilt logic ready to activate inside the delivery control
                center.
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

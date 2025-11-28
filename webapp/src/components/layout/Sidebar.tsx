"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BadgeDollarSign,
  FilePenLine,
  LayoutDashboard,
  LayoutTemplate,
  LineChart,
  ListTodo,
  Megaphone,
  PackageCheck,
  Plug,
  Settings,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import clsx from "clsx";

type NavItem = {
  name: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  badge?: string;
};

const primaryNav: NavItem[] = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Pricing", href: "/pricing", icon: BadgeDollarSign },
  { name: "Delivery Setup", href: "/delivery", icon: PackageCheck },
  { name: "Settings", href: "/settings", icon: Settings },
  { name: "Marketing Options", href: "/marketing", icon: Megaphone },
  { name: "Integrations", href: "/integrations", icon: Plug },
  { name: "Superadmin", href: "/superadmin", icon: ShieldCheck },
  { name: "Task Manager Guide", href: "/task-manager", icon: ListTodo },
];

const formNav: NavItem[] = [
  { name: "My Forms", href: "/lead-builder", icon: FilePenLine, badge: "Live" },
  { name: "Collected Leads", href: "/leads", icon: UsersRound },
  { name: "Analytics", href: "/analytics", icon: LineChart },
  { name: "Templates", href: "/templates", icon: LayoutTemplate },
];

export function Sidebar() {
  const pathname = usePathname();

  const renderLink = (item: NavItem) => {
    const isActive =
      pathname === item.href ||
      (item.href !== "/" && pathname.startsWith(item.href));
    const Icon = item.icon;

    return (
      <li key={item.name}>
        <Link
          href={item.href}
          className={clsx(
            "group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition",
            isActive
              ? "bg-emerald-50 text-emerald-700 shadow-sm"
              : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
          )}
        >
          <span
            className={clsx(
              "flex h-9 w-9 items-center justify-center rounded-lg border text-emerald-600 transition",
              isActive
                ? "border-emerald-200 bg-emerald-100"
                : "border-slate-200 bg-white group-hover:border-emerald-200 group-hover:bg-emerald-50"
            )}
          >
            <Icon className="h-4 w-4" />
          </span>
          <span className="flex-1">{item.name}</span>
          {item.badge ? (
            <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-600">
              {item.badge}
            </span>
          ) : null}
        </Link>
      </li>
    );
  };

  return (
    <>
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col border-r border-slate-200 bg-white/90 px-4 pb-6 pt-4 shadow-sm backdrop-blur lg:flex">
        <div className="flex items-center gap-2 rounded-lg border border-emerald-100 bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-700">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
            SA
          </span>
          <div className="leading-tight">
            <p>Shopify Agentic</p>
            <span className="text-xs font-medium text-emerald-600/70">
              Embedded Suite
            </span>
          </div>
        </div>

        <nav className="mt-6 flex-1 space-y-6 overflow-y-auto pb-8">
          <div>
            <p className="section-heading mb-2">Workspace</p>
            <ul className="space-y-2">{primaryNav.map(renderLink)}</ul>
          </div>
          <div>
            <p className="section-heading mb-2">Lead Form Suite</p>
            <ul className="space-y-2">{formNav.map(renderLink)}</ul>
          </div>
        </nav>

        <div className="glass-card mt-auto border-emerald-100 bg-emerald-50/80 p-4 text-emerald-800">
          <p className="text-sm font-semibold">Store Connected</p>
          <p className="mt-1 text-xs text-emerald-700/70">
            syncing with Shopify every 5 minutes
          </p>
        </div>
      </aside>

      <div className="sticky top-0 z-30 flex items-center justify-between border-b border-slate-200 bg-white/95 px-4 py-3 shadow-sm backdrop-blur lg:hidden">
        <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
            SA
          </span>
          Shopify Agentic
        </div>
        <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
          <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-emerald-700">
            Online
          </span>
          <Link
            href="/lead-builder"
            className="rounded-full border border-emerald-200 px-3 py-1 text-emerald-700"
          >
            Lead Suite
          </Link>
        </div>
      </div>
    </>
  );
}

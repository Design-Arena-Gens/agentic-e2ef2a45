"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, ChevronRight, HelpCircle, Search } from "lucide-react";
import clsx from "clsx";

const titleMap: Record<string, string> = {
  "/": "Dashboard",
  "/pricing": "Pricing Plans",
  "/delivery": "Delivery Setup",
  "/settings": "Settings",
  "/marketing": "Marketing Options",
  "/integrations": "Integrations",
  "/superadmin": "Superadmin Console",
  "/task-manager": "Task Manager Guide",
  "/lead-builder": "Lead Form Builder",
  "/leads": "Collected Leads",
  "/analytics": "Analytics Overview",
  "/templates": "Form Templates",
};

export function TopBar() {
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean);
  const activeTitle = titleMap[pathname] ?? "Workspace";

  return (
    <header className="hidden items-center justify-between border-b border-slate-200 bg-white/60 px-6 py-4 backdrop-blur md:flex">
      <div className="flex items-center gap-4">
        <div className="text-xs font-medium uppercase tracking-wide text-emerald-600">
          Shopify Embedded Suite
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="hover:text-slate-800">
            Home
          </Link>
          {segments.map((segment, index) => {
            const href = `/${segments.slice(0, index + 1).join("/")}`;
            const label = titleMap[href] ?? segment.replace(/-/g, " ");
            return (
              <span key={href} className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-slate-300" />
                <Link
                  href={href}
                  className={clsx(
                    "capitalize hover:text-slate-800",
                    index === segments.length - 1
                      ? "font-semibold text-slate-700"
                      : ""
                  )}
                >
                  {label}
                </Link>
              </span>
            );
          })}
        </div>
        <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
          {activeTitle}
        </span>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative hidden md:flex">
          <input
            className="h-10 w-64 rounded-full border border-slate-200 bg-white pl-10 pr-4 text-sm text-slate-600 shadow-sm placeholder:text-slate-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-100"
            placeholder="Search across store, forms, leads..."
            type="search"
          />
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        </div>
        <button className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm hover:text-emerald-600">
          <HelpCircle className="h-4 w-4" />
        </button>
        <button className="relative flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm hover:text-emerald-600">
          <Bell className="h-4 w-4" />
          <span className="absolute -top-1 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
        </button>
        <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 shadow-sm">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-sm font-semibold text-emerald-700">
            AM
          </span>
          <div className="text-xs">
            <div className="font-semibold text-slate-700">Aurora Mart</div>
            <div className="text-slate-400">Connected as Admin</div>
          </div>
        </div>
      </div>
    </header>
  );
}

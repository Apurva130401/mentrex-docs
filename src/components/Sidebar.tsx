
"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { NavContent } from "./NavContent";

export function Sidebar({ className }: { className?: string }) {
  return (
    <aside className={cn("hidden lg:block fixed top-0 left-0 z-40 w-72 h-screen border-r border-white/5 bg-black/40 backdrop-blur-xl", className)}>
      <div className="h-full px-6 py-8 overflow-y-auto">
        <div className="mb-10 flex items-center gap-3 px-2">
          <div className="flex items-center gap-2 group cursor-default">
            <img
              src="/mentrex-logo.png"
              alt="Mentrex Logo"
              className="w-10 h-10 rounded-lg shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/40 transition-all border border-amber-500/30 invert"
            />
            <div className="flex flex-col h-10 justify-center">
              <span className="font-heading font-bold text-lg tracking-tight text-white group-hover:text-amber-500 transition-colors leading-none">
                MENTREX
              </span>
              <span className="text-[11px] font-medium text-zinc-400 group-hover:text-zinc-300 transition-colors leading-none tracking-wide mt-1">
                by SyncFlo AI
              </span>
            </div>
          </div>
        </div>

        <NavContent />

        <div className="mt-10 px-4 py-4 rounded-xl bg-gradient-to-b from-zinc-900 to-black border border-zinc-800">
          <p className="text-xs text-zinc-400 mb-2">Need help?</p>
          <Link href="https://help.mentrex.shop" className="text-xs text-indigo-400 hover:text-indigo-300 font-medium">
            Contact Us &rarr;
          </Link>
        </div>
      </div>
    </aside>
  );
}

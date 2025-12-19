
"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { NavContent } from "./NavContent";

export function Sidebar({ className }: { className?: string }) {
  return (
    <aside className={cn("hidden lg:block fixed top-0 left-0 z-40 w-72 h-screen border-r border-white/5 bg-black/40 backdrop-blur-xl", className)}>
      <div className="h-full px-6 py-8 overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-800">
        <div className="mb-10 flex items-center gap-3 px-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                <span className="font-bold text-white text-sm">M</span>
            </div>
            <span className="font-bold text-xl tracking-tight text-white/90">Mentrex</span>
        </div>
        
        <NavContent />

        <div className="mt-10 px-4 py-4 rounded-xl bg-gradient-to-b from-zinc-900 to-black border border-zinc-800">
            <p className="text-xs text-zinc-400 mb-2">Need help?</p>
            <Link href="/docs/faq" className="text-xs text-indigo-400 hover:text-indigo-300 font-medium">
                Check our FAQ &rarr;
            </Link>
        </div>
      </div>
    </aside>
  );
}

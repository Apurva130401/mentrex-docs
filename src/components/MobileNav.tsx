
"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { NavContent } from "./NavContent";
import { usePathname } from "next/navigation";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black/80 backdrop-blur-xl border-b border-white/5">
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
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="p-2 text-zinc-400 hover:text-white transition-colors"
          aria-label="Open Menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </header>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm lg:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-black border-l border-white/10 p-6 shadow-2xl lg:hidden flex flex-col"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="font-bold text-lg text-zinc-200">Menu</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-zinc-400 hover:text-white transition-colors"
                  aria-label="Close Menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto">
                <NavContent onItemClick={() => setIsOpen(false)} />
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-xs text-zinc-500 text-center">
                  © 2025 Mentrex AI
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

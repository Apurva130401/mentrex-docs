
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Copy, Terminal, Zap, Book, HelpCircle, Layers, CreditCard } from "lucide-react";
import { motion } from "framer-motion";

type NavItem = {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
};

type NavGroup = {
  title: string;
  items: NavItem[];
};

const navigation: NavGroup[] = [
  {
    title: "Overview",
    items: [
      { title: "Introduction", href: "/docs/introduction", icon: Book },
      { title: "Getting Started", href: "/docs/getting-started", icon: Zap },
    ],
  },
  {
    title: "Core Concepts",
    items: [
        { title: "Using the AI", href: "/docs/using-the-ai", icon: Layers },
      { title: "Architecture", href: "/docs/architecture", icon: Copy },
       { title: "Account & Credits", href: "/docs/account-and-credits", icon: CreditCard },
    ],
  },
  {
    title: "Reference",
    items: [
      { title: "CLI Guide", href: "/docs/cli-guide", icon: Terminal },
       { title: "FAQ", href: "/docs/faq", icon: HelpCircle },
    ],
  },
];

export function NavContent({ onItemClick }: { onItemClick?: () => void }) {
  const pathname = usePathname();

  return (
    <nav className="space-y-8">
        {navigation.map((group) => (
            <div key={group.title}>
                <h3 className="px-2 text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2 font-mono">
                    {group.title}
                </h3>
                <ul className="space-y-1">
                    {group.items.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    onClick={onItemClick}
                                    className={cn(
                                        "flex items-center px-3 py-2 rounded-md group transition-all duration-200 relative",
                                        isActive
                                            ? "text-white"
                                            : "text-zinc-400 hover:text-zinc-200 hover:bg-white/5"
                                    )}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="sidebar-active"
                                            className="absolute inset-0 bg-white/10 rounded-md border border-white/5 shadow-sm backdrop-blur-sm"
                                            transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                        />
                                    )}
                                    <div className="relative z-10 flex items-center">
                                        {item.icon && <item.icon className={cn("w-4 h-4 mr-3 transition-colors", isActive ? "text-indigo-400" : "text-zinc-500 group-hover:text-zinc-300")} />}
                                        <span className="text-sm font-medium">{item.title}</span>
                                    </div>
                                </Link>
                            </li>
                            )
                    })}
                </ul>
            </div>
        ))}
    </nav>
  );
}

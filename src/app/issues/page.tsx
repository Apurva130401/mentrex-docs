
"use client";

import Link from "next/link";
import { ArrowRight, Github, Mail, MessageSquare, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function IssuesPage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" />

      <main className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20"
        >
          <div className="inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-sm font-medium text-indigo-300 mb-8 backdrop-blur-md">
            <Sparkles className="mr-2 h-4 w-4" />
            <span>Support & Community</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-400">
            How can we help?
          </h1>
          
          <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
            Encountered a bug or have a feature request? Reach out to us directly through GitHub or email.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
            >
                <div className="w-14 h-14 rounded-xl bg-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Github className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">GitHub Issues</h3>
                <p className="text-zinc-400 mb-8 leading-relaxed">
                    Found a bug or have a technical suggestion? Open an issue directly on our GitHub repository to track progress.
                </p>
                <Link 
                    href="https://github.com/mentrex/issues"
                    target="_blank"
                    className="inline-flex items-center gap-2 text-indigo-400 font-medium hover:text-indigo-300 transition-colors"
                >
                    Open GitHub <ArrowRight className="w-5 h-5" />
                </Link>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
            >
                <div className="w-14 h-14 rounded-xl bg-indigo-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Mail className="w-8 h-8 text-indigo-400" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Email Support</h3>
                <p className="text-zinc-400 mb-8 leading-relaxed">
                    Need help with your account or have general questions? Send our support team an email and we'll get back to you.
                </p>
                <Link 
                    href="mailto:support@mentrex.shop"
                    className="inline-flex items-center gap-2 text-indigo-400 font-medium hover:text-indigo-300 transition-colors"
                >
                    Contact Support <ArrowRight className="w-5 h-5" />
                </Link>
            </motion.div>
        </div>
      </main>
    </div>
  );
}

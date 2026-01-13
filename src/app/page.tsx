
"use client";

import Link from "next/link";
import { ArrowRight, Terminal, Zap, Shield, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
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
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-sm font-medium text-indigo-300 mb-8 backdrop-blur-md">
            <span>Mentrex Documentation 2.0</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-400">
            Master your AI Agent IDE
          </h1>

          <p className="text-xl text-zinc-400 mb-12 max-w-2xl leading-relaxed">
            Mentrex is the autonomous coding agent that lives in your terminal.
            Learn how to build, deploy, and automate your workflow with our comprehensive guides.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/docs/introduction"
              className="px-8 py-4 rounded-xl bg-white text-black font-bold hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
            >
              Start Reading <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/docs/cli-guide"
              className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              <Terminal className="w-5 h-5" /> CLI Reference
            </Link>
          </div>
        </motion.div>

        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Fast Integration", desc: "Set up in seconds with our single-binary CLI tool.", icon: Zap },
            { title: "Secure by Design", desc: "Your code never leaves your machine without permission.", icon: Shield },
            { title: "Model Agnostic", desc: "Switch between GPT-4, Claude, and Llama instantly.", icon: Sparkles }
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (i * 0.1) }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-indigo-500/20 flex items-center justify-center mb-6 text-indigo-400">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}

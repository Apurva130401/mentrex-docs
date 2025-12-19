
import { getDocBySlug, getAllDocs } from "@/lib/docs";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import Link from "next/link";

import { cn } from "@/lib/utils";
import React from "react";

// Add MDX components
const components = {
  h1: (props: any) => (
    <h1 {...props} className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-200 to-zinc-500" />
  ),
  h2: (props: any) => (
    <h2 {...props} className="group flex items-center gap-2 scroll-m-20 border-b border-white/10 pb-2 text-2xl font-semibold tracking-tight first:mt-0 mt-12 mb-6 text-zinc-100" />
  ),
  h3: (props: any) => (
    <h3 {...props} className="scroll-m-20 text-xl font-semibold tracking-tight mt-8 mb-4 text-zinc-200" />
  ),
  p: (props: any) => (
    <p {...props} className="leading-7 [&:not(:first-child)]:mt-6 text-zinc-400 text-lg/relaxed" />
  ),
  ul: (props: any) => (
    <ul {...props} className="my-6 ml-6 list-disc [&>li]:mt-2 marker:text-indigo-500" />
  ),
  li: (props: any) => ( // Explicitly styling list items
      <li {...props} className="text-zinc-400 pl-2" />
  ),
  blockquote: (props: any) => (
    <blockquote {...props} className="mt-6 border-l-2 border-indigo-500 pl-6 italic text-zinc-300 bg-white/5 py-4 rounded-r-lg" />
  ),
  code: (props: any) => (
    <code {...props} className="relative rounded bg-white/10 px-[0.4rem] py-[0.2rem] font-mono text-sm font-semibold text-indigo-200" />
  ),
  pre: (props: any) => (
    <div className="relative my-6 rounded-lg border border-white/10 bg-[#0a0a0b] shadow-2xl overflow-hidden group">
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-white/5">
        <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
        </div>
        <span className="text-xs text-zinc-500 font-mono">Terminal</span>
      </div>
      <div className="p-4 overflow-x-auto">
        <pre {...props} className="bg-transparent p-0 m-0" />
      </div>
    </div>
  ),
  a: (props: any) => (
    <Link {...props} className="font-medium text-indigo-400 decoration-indigo-400/30 underline-offset-4 hover:underline hover:text-indigo-300 transition-colors" />
  ),
   hr: (props: any) => (
      <hr {...props} className="my-10 border-white/10" />
   ),
   table: (props: any) => (
    <div className="my-6 w-full overflow-y-auto rounded-lg border border-white/10">
      <table className="w-full text-sm" {...props} />
    </div>
  ),
  tr: (props: any) => <tr className="m-0 border-t border-white/10 p-0 even:bg-white/5" {...props} />,
  th: (props: any) => (
    <th
      className="border border-white/10 px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right text-zinc-200"
      {...props}
    />
  ),
  td: (props: any) => (
    <td
      className="border border-white/10 px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right text-zinc-400"
      {...props}
    />
  ),

};

export async function generateStaticParams() {
    const docs = getAllDocs();
    return docs.map((slug) => ({
        slug,
    }));
}  

export default async function DocPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const doc = getDocBySlug(params.slug);

  if (!doc) {
    notFound();
  }

  return (
    <div className="pb-20">
        <div className="mb-10">
            <p className="text-indigo-500 font-mono text-sm mb-4">Documentation</p>
            {/* If you had metadata, you'd Render title here if not in markdown, but typically markdown h1 is used */}
        </div>
      <article className="prose prose-invert max-w-none prose-headings:scroll-mt-28 prose-blockquote:not-italic prose-pre:bg-transparent prose-pre:p-0">
        <MDXRemote source={doc.content} components={components} />
      </article>
      
      <div className="mt-20 pt-10 border-t border-white/10">

        <div className="flex justify-between">
            <Link href="/docs/introduction" className="text-sm text-zinc-500 hover:text-white transition-colors">
                &larr; Back to Home
            </Link>
        </div>
      </div>
    </div>
  );
}

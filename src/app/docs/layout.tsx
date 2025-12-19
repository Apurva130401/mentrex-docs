
import { Sidebar } from "@/components/Sidebar";
import { MobileNav } from "@/components/MobileNav";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-black text-zinc-100 selection:bg-indigo-500/30">
        <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-black to-black pointer-events-none" />
      
      <MobileNav />
      <Sidebar />
      
      <main className="relative z-10 flex-1 lg:ml-72 p-6 md:p-12 max-w-5xl mx-auto w-full pt-20 lg:pt-12">
        {children}
      </main>
    </div>
  );
}

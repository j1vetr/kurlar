import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: ReactNode;
  noTopPadding?: boolean;
}

export function Layout({ children, noTopPadding = false }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-background selection:bg-primary/10 selection:text-primary">
      <Navbar />
      <main className={cn("flex-grow", !noTopPadding && "pt-32 md:pt-36")}>
        {children}
      </main>
      <Footer />
    </div>
  );
}

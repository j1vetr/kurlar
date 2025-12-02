import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-background selection:bg-primary/10 selection:text-primary">
      <Navbar />
      <main className="flex-grow pt-0">
        {children}
      </main>
      <Footer />
    </div>
  );
}

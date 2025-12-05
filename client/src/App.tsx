import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Products from "@/pages/Products";
import ProductDetail from "@/pages/ProductDetail";
import Dealers from "@/pages/Dealers";
import Contact from "@/pages/Contact";
import About from "@/pages/About";
import RAndD from "@/pages/RAndD";
import Certificates from "@/pages/Certificates";
import Careers from "@/pages/Careers";
import { LanguageProvider } from "./lib/i18n";

import PrivacyPolicy from "@/pages/PrivacyPolicy";
import CookiePolicy from "@/pages/CookiePolicy";

function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/hakkimizda" component={About} />
        <Route path="/arge-merkezi" component={RAndD} />
        <Route path="/sertifikalarimiz" component={Certificates} />
        <Route path="/kariyer" component={Careers} />
        <Route path="/urunler" component={Products} />
        <Route path="/urunler/:id" component={ProductDetail} />
        <Route path="/bayi-servis" component={Dealers} />
        <Route path="/iletisim" component={Contact} />
        <Route path="/gizlilik-politikasi" component={PrivacyPolicy} />
        <Route path="/cerez-politikasi" component={CookiePolicy} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;

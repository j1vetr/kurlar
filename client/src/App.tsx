import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect, Suspense } from "react";
import { LanguageProvider } from "./lib/i18n";
import { Spinner } from "@/components/ui/spinner";
import { pages } from "@/lib/app-pages";

// Pages are code-split on the client and preloaded during SSR (see entry-server)
const {
  Home,
  Products,
  ProductDetail,
  Dealers,
  Contact,
  About,
  RAndD,
  Certificates,
  Careers,
  PrivacyPolicy,
  CookiePolicy,
  NotFound,
} = pages;

function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function PageLoader() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white">
      <Spinner className="w-12 h-12 text-primary opacity-50" />
    </div>
  );
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
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
      </Suspense>
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

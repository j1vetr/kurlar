import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
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

function Router() {
  return (
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
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

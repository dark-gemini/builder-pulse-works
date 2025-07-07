import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation";
import Index from "./pages/Index";
import Operations from "./pages/Operations";
import AIChat from "./pages/AIChat";
import Portfolio from "./pages/Portfolio";
import Analytics from "./pages/Analytics";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function AppContent() {
  const location = useLocation();
  const showNavigation = location.pathname !== "/";

  return (
    <>
      {showNavigation && <Navigation />}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/operations" element={<Operations />} />
        <Route path="/ai-chat" element={<AIChat />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route
          path="/incidents"
          element={
            <div className="pl-64 p-8">
              <h1 className="text-2xl font-bold">Incidents - Coming Soon</h1>
            </div>
          }
        />
        <Route
          path="/team"
          element={
            <div className="pl-64 p-8">
              <h1 className="text-2xl font-bold">Team - Coming Soon</h1>
            </div>
          }
        />
        <Route
          path="/settings"
          element={
            <div className="pl-64 p-8">
              <h1 className="text-2xl font-bold">Settings - Coming Soon</h1>
            </div>
          }
        />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);

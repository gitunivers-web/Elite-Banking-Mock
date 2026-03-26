import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppLayout } from "@/components/layout/AppLayout";

// Public pages
import Landing from "@/pages/landing";
import Login from "@/pages/login";

// App pages
import Dashboard from "@/pages/dashboard";
import Transactions from "@/pages/transactions";
import Transfer from "@/pages/transfer";
import Savings from "@/pages/savings";
import Cards from "@/pages/cards";
import Profile from "@/pages/profile";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5,
    },
  },
});

function Router() {
  return (
    <Switch>
      {/* Public routes — no sidebar layout */}
      <Route path="/" component={Landing} />
      <Route path="/login" component={Login} />

      {/* Authenticated app routes — with sidebar */}
      <Route path="/app">
        <AppLayout>
          <Dashboard />
        </AppLayout>
      </Route>
      <Route path="/app/transactions">
        <AppLayout>
          <Transactions />
        </AppLayout>
      </Route>
      <Route path="/app/transfer">
        <AppLayout>
          <Transfer />
        </AppLayout>
      </Route>
      <Route path="/app/savings">
        <AppLayout>
          <Savings />
        </AppLayout>
      </Route>
      <Route path="/app/cards">
        <AppLayout>
          <Cards />
        </AppLayout>
      </Route>
      <Route path="/app/profile">
        <AppLayout>
          <Profile />
        </AppLayout>
      </Route>

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

import React from "react";
import { Link, useLocation } from "wouter";
import { Home, CreditCard, ArrowLeftRight, PiggyBank, User, LogOut, Bell, Search, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: Home, path: '/app' },
  { id: 'transactions', label: 'Transactions', icon: ArrowLeftRight, path: '/app/transactions' },
  { id: 'transfer', label: 'Virement', icon: Send, path: '/app/transfer' },
  { id: 'savings', label: 'Épargne', icon: PiggyBank, path: '/app/savings' },
  { id: 'cards', label: 'Cartes', icon: CreditCard, path: '/app/cards' },
  { id: 'profile', label: 'Profil', icon: User, path: '/app/profile' },
];

export function AppLayout({ children }: { children: React.ReactNode }) {
  const [location, navigate] = useLocation();

  return (
    <div className="flex h-screen bg-background text-foreground overflow-hidden selection:bg-primary/30">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 border-r border-border bg-sidebar/50 backdrop-blur-xl">
        <div className="p-6 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="font-bold text-primary-foreground">N</span>
            </div>
            <span className="font-bold tracking-wide text-xl">NeoBank</span>
          </Link>
        </div>

        <div className="px-4 pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Rechercher..."
              className="w-full bg-black/20 border border-white/5 rounded-lg py-2 pl-9 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-primary transition-all placeholder:text-muted-foreground"
            />
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-1 overflow-y-auto py-4">
          {navItems.map((item) => {
            const isActive = location === item.path;
            return (
              <Link key={item.id} href={item.path} className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group relative",
                isActive ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground hover:bg-white/5"
              )}>
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-primary/10 rounded-xl border border-primary/20"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <item.icon className={cn("w-5 h-5 relative z-10", isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground")} />
                <span className="relative z-10">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-border mt-auto">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-all w-full"
          >
            <LogOut className="w-5 h-5" />
            <span>Déconnexion</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full relative z-0 overflow-hidden">
        {/* Top Header */}
        <header className="h-16 border-b border-border flex items-center justify-between px-4 md:px-8 bg-background/80 backdrop-blur-md z-20 sticky top-0">
          <div className="md:hidden flex items-center gap-2">
            <Link href="/">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="font-bold text-primary-foreground">N</span>
              </div>
            </Link>
          </div>
          <div className="flex-1" />
          <div className="flex items-center gap-4">
            <button className="relative p-2 rounded-full hover:bg-white/5 transition-colors">
              <Bell className="w-5 h-5 text-muted-foreground" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full ring-2 ring-background" />
            </button>
            <Link href="/app/profile">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-border cursor-pointer hover:ring-2 hover:ring-primary/50 transition-all">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces" alt="Avatar" className="w-full h-full object-cover" />
              </div>
            </Link>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto pb-20 md:pb-0">
          <div className="max-w-6xl mx-auto p-4 md:p-8">
            <motion.div
              key={location}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
            >
              {children}
            </motion.div>
          </div>
        </div>
      </main>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-background/90 backdrop-blur-xl border-t border-border flex items-center justify-around px-2 h-16 z-50">
        {[navItems[0], navItems[1], navItems[2], navItems[4], navItems[5]].map((item) => {
          const isActive = location === item.path;
          return (
            <Link key={item.id} href={item.path} className={cn(
              "flex flex-col items-center justify-center w-full h-full space-y-1 relative",
              isActive ? "text-primary" : "text-muted-foreground"
            )}>
              <item.icon className="w-5 h-5" />
              <span className="text-[10px] font-medium">{item.label}</span>
              {isActive && (
                <motion.div
                  layoutId="activeMobileNav"
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-primary rounded-b-full"
                />
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

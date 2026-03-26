import React from "react";
import { useUser } from "@/hooks/use-mock-api";
import { Shield, Bell, Lock, Globe, HelpCircle, FileText, LogOut, ChevronRight } from "lucide-react";

export default function Profile() {
  const { data: user, isLoading } = useUser();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full min-h-[400px]">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const settingSections = [
    {
      title: "Account Security",
      items: [
        { icon: Shield, label: "Two-Factor Authentication", value: "Enabled", color: "text-green-400" },
        { icon: Lock, label: "Change Password", value: "" },
        { icon: Bell, label: "Login Alerts", value: "Push & Email" },
      ]
    },
    {
      title: "Preferences",
      items: [
        { icon: Globe, label: "Language", value: "English (US)" },
        { icon: Bell, label: "Notifications", value: "Configured" },
      ]
    },
    {
      title: "Support & Legal",
      items: [
        { icon: HelpCircle, label: "Help Center", value: "" },
        { icon: FileText, label: "Terms of Service", value: "" },
      ]
    }
  ];

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <h1 className="text-3xl font-display font-semibold mb-6">Profile</h1>

      {/* User Info Card */}
      <div className="glass-panel p-8 rounded-3xl flex flex-col md:flex-row items-center md:items-start gap-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-background shadow-xl shrink-0 z-10">
          <img src={user?.avatar} alt={user?.name} className="w-full h-full object-cover" />
        </div>
        
        <div className="flex-1 text-center md:text-left z-10">
          <h2 className="text-2xl font-display font-bold">{user?.name}</h2>
          <p className="text-muted-foreground mb-4">{user?.email}</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div className="bg-black/30 p-4 rounded-2xl border border-white/5">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">IBAN</p>
              <p className="font-mono text-sm tracking-wide">{user?.iban}</p>
            </div>
            <div className="bg-black/30 p-4 rounded-2xl border border-white/5">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">BIC</p>
              <p className="font-mono text-sm tracking-wide">{user?.bic}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Settings Sections */}
      <div className="space-y-6">
        {settingSections.map((section, idx) => (
          <div key={idx} className="glass-panel rounded-3xl overflow-hidden">
            <h3 className="px-6 py-4 text-sm font-medium text-muted-foreground bg-black/20 border-b border-border">
              {section.title}
            </h3>
            <div className="divide-y divide-border/50">
              {section.items.map((item, itemIdx) => (
                <button key={itemIdx} className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors group">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-black/40 flex items-center justify-center border border-white/5 group-hover:border-white/10 transition-colors">
                      <item.icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                    </div>
                    <span className="font-medium text-foreground">{item.label}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    {item.value && (
                      <span className={`text-sm ${item.color || 'text-muted-foreground'}`}>{item.value}</span>
                    )}
                    <ChevronRight className="w-5 h-5 text-muted-foreground/50 group-hover:text-muted-foreground transition-colors" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="pt-4 pb-10">
        <button className="w-full glass-panel p-4 rounded-2xl flex items-center justify-center gap-2 text-destructive hover:bg-destructive/10 border-destructive/20 hover:border-destructive/30 transition-colors font-medium">
          <LogOut className="w-5 h-5" />
          Sign Out
        </button>
      </div>
    </div>
  );
}

import React from "react";
import { Link } from "wouter";
import { ArrowUpRight, ArrowDownLeft, Plus, Send, ScanLine, MoreHorizontal, TrendingUp } from "lucide-react";
import { useUser, useTransactions, useChartData } from "@/hooks/use-mock-api";
import { formatEUR, formatDate } from "@/lib/utils";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { cn } from "@/lib/utils";

// Helper for transaction icons
const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'food': return <span className="text-xl">🍔</span>;
    case 'transport': return <span className="text-xl">🚇</span>;
    case 'shopping': return <span className="text-xl">🛍️</span>;
    case 'entertainment': return <span className="text-xl">🎬</span>;
    case 'health': return <span className="text-xl">💊</span>;
    case 'income': return <span className="text-xl">💰</span>;
    default: return <span className="text-xl">💸</span>;
  }
};

export default function Dashboard() {
  const { data: user, isLoading: userLoading } = useUser();
  const { data: transactions, isLoading: txLoading } = useTransactions();
  const { data: chartData, isLoading: chartLoading } = useChartData();

  if (userLoading || txLoading || chartLoading) {
    return (
      <div className="flex items-center justify-center h-full min-h-[400px]">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const recentTransactions = transactions?.slice(0, 5) || [];

  return (
    <div className="space-y-8">
      {/* Header & Main Balance */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-display font-semibold mb-1">Total Balance</h1>
          <div className="text-5xl md:text-6xl font-display font-bold tracking-tight">
            {user ? formatEUR(user.balance) : '€0.00'}
          </div>
          <p className="text-muted-foreground mt-2 flex items-center gap-1">
            <TrendingUp className="w-4 h-4 text-green-400" />
            <span className="text-green-400 font-medium">+€1,240.50</span> this month
          </p>
        </div>

        {/* Quick Actions */}
        <div className="flex gap-3 overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
          <Link href="/transfer" className="flex flex-col items-center gap-2 flex-shrink-0 group">
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300 shadow-lg">
              <Send className="w-6 h-6" />
            </div>
            <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground">Send</span>
          </Link>
          <button className="flex flex-col items-center gap-2 flex-shrink-0 group">
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-all duration-300 shadow-lg">
              <ArrowDownLeft className="w-6 h-6" />
            </div>
            <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground">Receive</span>
          </button>
          <button className="flex flex-col items-center gap-2 flex-shrink-0 group">
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-all duration-300 shadow-lg">
              <Plus className="w-6 h-6" />
            </div>
            <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground">Top Up</span>
          </button>
          <button className="flex flex-col items-center gap-2 flex-shrink-0 group">
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-all duration-300 shadow-lg">
              <MoreHorizontal className="w-6 h-6" />
            </div>
            <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground">More</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Virtual Card & Chart */}
        <div className="lg:col-span-2 space-y-6">
          {/* Virtual Card */}
          <div className="relative rounded-3xl overflow-hidden aspect-[1.586/1] md:aspect-[2.5/1] shadow-2xl group cursor-pointer">
            <img 
              src={`${import.meta.env.BASE_URL}images/card-bg.png`} 
              alt="Premium Card Background" 
              className="absolute inset-0 w-full h-full object-cover z-0 scale-105 group-hover:scale-100 transition-transform duration-700" 
            />
            {/* Dark wash to ensure text readability */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/20 to-transparent z-10"></div>
            
            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between z-20">
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                  <span className="font-display font-bold text-white text-xl">N</span>
                </div>
                <ScanLine className="w-8 h-8 text-white/80" />
              </div>
              
              <div>
                <p className="text-white/70 text-sm md:text-base font-mono mb-1 tracking-widest">•••• •••• •••• 7890</p>
                <div className="flex justify-between items-end">
                  <p className="text-white font-display font-medium text-lg md:text-xl tracking-wide">{user?.name}</p>
                  <p className="text-white/80 font-mono">12/26</p>
                </div>
              </div>
            </div>
          </div>

          {/* Chart */}
          <div className="glass-panel rounded-3xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-display font-medium">Analytics</h2>
              <select className="bg-black/30 border border-white/10 rounded-lg px-3 py-1.5 text-sm outline-none focus:ring-1 focus:ring-primary">
                <option>This Month</option>
                <option>Last Month</option>
                <option>3 Months</option>
              </select>
            </div>
            <div className="h-[250px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorSpent" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: 'hsl(var(--muted-foreground))', fontSize: 12}} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: 'hsl(var(--muted-foreground))', fontSize: 12}} dx={-10} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '12px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.5)' }}
                    itemStyle={{ color: 'hsl(var(--foreground))' }}
                  />
                  <Area type="monotone" dataKey="spent" stroke="hsl(var(--primary))" strokeWidth={3} fillOpacity={1} fill="url(#colorSpent)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Right Column: Transactions */}
        <div className="glass-panel rounded-3xl p-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-display font-medium">Recent</h2>
            <Link href="/transactions" className="text-sm text-primary hover:text-primary/80 font-medium transition-colors">
              View All
            </Link>
          </div>

          <div className="flex-1 flex flex-col gap-4">
            {recentTransactions.map((tx) => (
              <div key={tx.id} className="flex items-center justify-between p-3 -mx-3 rounded-2xl hover:bg-white/5 transition-colors cursor-pointer group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getCategoryIcon(tx.category)}
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{tx.merchant}</p>
                    <p className="text-xs text-muted-foreground">{formatDate(tx.date)}</p>
                  </div>
                </div>
                <div className={cn(
                  "font-medium",
                  tx.type === 'income' ? 'text-green-400' : 'text-foreground'
                )}>
                  {tx.type === 'income' ? '+' : '-'}{formatEUR(tx.amount)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

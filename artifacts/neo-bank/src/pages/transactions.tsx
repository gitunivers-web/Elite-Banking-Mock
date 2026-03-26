import React, { useState } from "react";
import { Search, Filter, Download, ArrowDownLeft, ArrowUpRight } from "lucide-react";
import { useTransactions } from "@/hooks/use-mock-api";
import { formatEUR, formatDate, cn } from "@/lib/utils";

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'food': return "🍔";
    case 'transport': return "🚇";
    case 'shopping': return "🛍️";
    case 'entertainment': return "🎬";
    case 'health': return "💊";
    case 'income': return "💰";
    default: return "💸";
  }
};

export default function Transactions() {
  const { data: transactions, isLoading } = useTransactions();
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState<string>("all");

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full min-h-[400px]">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const filteredTransactions = transactions?.filter(tx => {
    const matchesSearch = tx.merchant.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          tx.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === "all" || tx.type === filter;
    return matchesSearch && matchesFilter;
  });

  // Group by date (simplified for mock)
  const groupedTransactions = filteredTransactions?.reduce((acc, tx) => {
    const dateStr = formatDate(tx.date);
    if (!acc[dateStr]) acc[dateStr] = [];
    acc[dateStr].push(tx);
    return acc;
  }, {} as Record<string, typeof transactions>);

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h1 className="text-3xl font-display font-semibold">Transactions</h1>
        <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-sm font-medium">
          <Download className="w-4 h-4" />
          Export Statement
        </button>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input 
            type="text" 
            placeholder="Search merchants or categories..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-card/50 backdrop-blur-md border border-border rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-muted-foreground"
          />
        </div>
        <div className="flex bg-card/50 backdrop-blur-md border border-border rounded-xl p-1 shrink-0">
          <button 
            onClick={() => setFilter('all')}
            className={cn("px-4 py-2 rounded-lg text-sm font-medium transition-all", filter === 'all' ? "bg-white/10 text-foreground" : "text-muted-foreground hover:text-foreground")}
          >
            All
          </button>
          <button 
            onClick={() => setFilter('income')}
            className={cn("px-4 py-2 rounded-lg text-sm font-medium transition-all", filter === 'income' ? "bg-white/10 text-foreground" : "text-muted-foreground hover:text-foreground")}
          >
            Income
          </button>
          <button 
            onClick={() => setFilter('expense')}
            className={cn("px-4 py-2 rounded-lg text-sm font-medium transition-all", filter === 'expense' ? "bg-white/10 text-foreground" : "text-muted-foreground hover:text-foreground")}
          >
            Expense
          </button>
        </div>
      </div>

      {/* Transaction List */}
      <div className="glass-panel rounded-3xl overflow-hidden">
        {groupedTransactions && Object.entries(groupedTransactions).length > 0 ? (
          Object.entries(groupedTransactions).map(([date, txs], index) => (
            <div key={date} className={cn("p-6", index !== 0 && "border-t border-border")}>
              <h3 className="text-sm font-medium text-muted-foreground mb-4 sticky top-16 bg-card/95 py-2 backdrop-blur-md z-10 -mx-6 px-6">{date}</h3>
              <div className="space-y-4">
                {txs.map((tx) => (
                  <div key={tx.id} className="flex items-center justify-between group cursor-pointer hover:bg-white/5 -mx-3 p-3 rounded-2xl transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="w-12 h-12 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                          {getCategoryIcon(tx.category)}
                        </div>
                        <div className={cn(
                          "absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#121215]", // approximation of background
                          tx.type === 'income' ? "bg-green-500" : "bg-muted"
                        )}>
                          {tx.type === 'income' ? <ArrowDownLeft className="w-3 h-3 text-black" /> : <ArrowUpRight className="w-3 h-3 text-black" />}
                        </div>
                      </div>
                      <div>
                        <p className="font-medium text-foreground text-base">{tx.merchant}</p>
                        <p className="text-sm text-muted-foreground capitalize">{tx.category}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={cn(
                        "font-medium text-base",
                        tx.type === 'income' ? 'text-green-400' : 'text-foreground'
                      )}>
                        {tx.type === 'income' ? '+' : '-'}{formatEUR(tx.amount)}
                      </div>
                      <p className="text-xs text-muted-foreground">{tx.status}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="p-12 text-center text-muted-foreground">
            <p>No transactions found for "{searchTerm}"</p>
          </div>
        )}
      </div>
    </div>
  );
}

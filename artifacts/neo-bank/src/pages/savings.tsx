import React, { useState } from "react";
import { Plus, Settings2, Target } from "lucide-react";
import { useSavingsPots, useCreateSavingsPot } from "@/hooks/use-mock-api";
import { formatEUR, cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

export default function Savings() {
  const { data: pots, isLoading } = useSavingsPots();
  const { mutate: createPot, isPending } = useCreateSavingsPot();
  const { toast } = useToast();
  const [showCreate, setShowCreate] = useState(false);
  const [newPotName, setNewPotName] = useState("");
  const [newPotTarget, setNewPotTarget] = useState("");

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPotName) return;

    createPot({
      name: newPotName,
      emoji: "🎯",
      target: newPotTarget ? parseFloat(newPotTarget) : null
    }, {
      onSuccess: () => {
        setShowCreate(false);
        setNewPotName("");
        setNewPotTarget("");
        toast({ title: "Savings pot created" });
      }
    });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full min-h-[400px]">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const totalSavings = pots?.reduce((sum, pot) => sum + pot.current, 0) || 0;

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-3xl font-display font-semibold mb-1">Savings</h1>
          <p className="text-muted-foreground">You have saved <span className="text-foreground font-medium">{formatEUR(totalSavings)}</span> in total</p>
        </div>
        <button 
          onClick={() => setShowCreate(true)}
          className="flex items-center gap-2 px-5 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all shadow-lg shadow-primary/25"
        >
          <Plus className="w-5 h-5" />
          New Space
        </button>
      </div>

      {showCreate && (
        <div className="glass-panel p-6 rounded-3xl animate-in fade-in slide-in-from-top-4 border-primary/30">
          <h3 className="text-xl font-display font-medium mb-4">Create New Space</h3>
          <form onSubmit={handleCreate} className="flex flex-col sm:flex-row gap-4">
            <input 
              type="text" 
              placeholder="e.g. New Car" 
              value={newPotName}
              onChange={(e) => setNewPotName(e.target.value)}
              className="flex-1 bg-black/20 border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:border-primary"
              required
            />
            <input 
              type="number" 
              placeholder="Target amount (optional)" 
              value={newPotTarget}
              onChange={(e) => setNewPotTarget(e.target.value)}
              className="flex-1 bg-black/20 border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:border-primary"
            />
            <div className="flex gap-2">
               <button 
                type="button"
                onClick={() => setShowCreate(false)}
                className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 font-medium"
              >
                Cancel
              </button>
              <button 
                type="submit"
                disabled={isPending || !newPotName}
                className="px-8 py-3 rounded-xl bg-primary text-primary-foreground font-medium disabled:opacity-50"
              >
                {isPending ? "Creating..." : "Create"}
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {pots?.map((pot) => {
          const progress = pot.target ? Math.min(100, Math.round((pot.current / pot.target) * 100)) : 0;
          
          return (
            <div key={pot.id} className="glass-panel rounded-3xl p-6 relative group overflow-hidden">
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center text-2xl border", pot.color)}>
                  {pot.emoji}
                </div>
                <button className="w-8 h-8 rounded-full bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/10">
                  <Settings2 className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>

              <div className="space-y-1 relative z-10">
                <h3 className="text-xl font-display font-medium">{pot.name}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-display font-bold">{formatEUR(pot.current)}</span>
                  {pot.target && (
                    <span className="text-sm text-muted-foreground font-medium">/ {formatEUR(pot.target)}</span>
                  )}
                </div>
              </div>

              {pot.target && (
                <div className="mt-8 space-y-2 relative z-10">
                  <div className="flex justify-between text-xs font-medium text-muted-foreground">
                    <span>Progress</span>
                    <span>{progress}%</span>
                  </div>
                  <div className="h-2 w-full bg-black/40 rounded-full overflow-hidden">
                    <div 
                      className={cn("h-full rounded-full transition-all duration-1000", progress === 100 ? "bg-green-500" : "bg-primary")}
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Decorative background glow based on pot color class */}
              <div className={cn(
                "absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[80px] opacity-20 transition-opacity group-hover:opacity-40",
                pot.color.split(' ')[0] // extract the bg-color class
              )} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

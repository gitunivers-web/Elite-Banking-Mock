import React, { useState } from "react";
import { Eye, EyeOff, Snowflake, Settings, CreditCard as CardIcon, Smartphone, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Cards() {
  const [showDetails, setShowDetails] = useState(false);
  const [isFrozen, setIsFrozen] = useState(false);

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-display font-semibold mb-1">Cards</h1>
          <p className="text-muted-foreground">Manage your physical and virtual cards</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Col: The Card */}
        <div className="lg:col-span-5 space-y-6">
          <div className={cn(
            "relative w-full aspect-[1.586/1] rounded-3xl overflow-hidden shadow-2xl transition-all duration-500",
            isFrozen && "grayscale opacity-80"
          )}>
            <img 
              src={`${import.meta.env.BASE_URL}images/card-bg.png`} 
              alt="Premium Card Background" 
              className="absolute inset-0 w-full h-full object-cover z-0" 
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/10 to-white/10 z-10"></div>
            
            {isFrozen && (
              <div className="absolute inset-0 bg-blue-900/30 backdrop-blur-[2px] z-15 flex items-center justify-center">
                <div className="bg-black/50 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 border border-white/10">
                  <Snowflake className="w-4 h-4 text-blue-300" />
                  <span className="text-blue-100 font-medium text-sm">Card Frozen</span>
                </div>
              </div>
            )}

            <div className="absolute inset-0 p-8 flex flex-col justify-between z-20 text-white">
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                  <span className="font-display font-bold text-xl">N</span>
                </div>
                <span className="font-medium tracking-widest text-sm opacity-80">VIRTUAL</span>
              </div>
              
              <div className="space-y-4">
                <div className="font-mono text-xl md:text-2xl tracking-[0.2em] flex items-center gap-4">
                  {showDetails ? (
                    <span className="animate-in fade-in">4532 8921 7890 1234</span>
                  ) : (
                    <span className="animate-in fade-in">•••• •••• •••• 1234</span>
                  )}
                </div>
                
                <div className="flex justify-between items-end font-mono">
                  <div>
                    <p className="text-[10px] opacity-60 uppercase tracking-widest mb-1">Cardholder</p>
                    <p className="font-medium tracking-wider">ALEXANDRE DUPONT</p>
                  </div>
                  <div className="flex gap-6">
                     <div>
                      <p className="text-[10px] opacity-60 uppercase tracking-widest mb-1">Expires</p>
                      <p className="font-medium">{showDetails ? "12/26" : "••/••"}</p>
                    </div>
                    <div>
                      <p className="text-[10px] opacity-60 uppercase tracking-widest mb-1">CVC</p>
                      <p className="font-medium">{showDetails ? "842" : "•••"}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <button 
              onClick={() => setShowDetails(!showDetails)}
              className="flex-1 glass-panel py-4 rounded-2xl flex flex-col items-center justify-center gap-2 hover:bg-white/10 transition-colors"
            >
              {showDetails ? <EyeOff className="w-6 h-6 text-muted-foreground" /> : <Eye className="w-6 h-6 text-muted-foreground" />}
              <span className="text-sm font-medium">{showDetails ? "Hide Details" : "Show Details"}</span>
            </button>
            <button 
              onClick={() => setIsFrozen(!isFrozen)}
              className={cn(
                "flex-1 py-4 rounded-2xl flex flex-col items-center justify-center gap-2 transition-colors border",
                isFrozen 
                  ? "bg-blue-500/20 border-blue-500/30 text-blue-400" 
                  : "glass-panel hover:bg-white/10 text-muted-foreground border-white/10"
              )}
            >
              <Snowflake className="w-6 h-6" />
              <span className="text-sm font-medium">{isFrozen ? "Unfreeze" : "Freeze Card"}</span>
            </button>
          </div>
        </div>

        {/* Right Col: Settings */}
        <div className="lg:col-span-7 space-y-6">
          <div className="glass-panel p-6 rounded-3xl space-y-6">
            <h3 className="text-lg font-display font-medium border-b border-white/5 pb-4">Card Settings</h3>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between p-4 hover:bg-white/5 rounded-2xl cursor-pointer transition-colors group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-black/40 flex items-center justify-center">
                    <Smartphone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Apple Pay / Google Pay</p>
                    <p className="text-sm text-muted-foreground">Add to wallet for contactless payments</p>
                  </div>
                </div>
                <button className="px-4 py-2 rounded-lg bg-white/10 text-sm font-medium hover:bg-white/20 transition-colors">
                  Add
                </button>
              </div>

              <div className="flex items-center justify-between p-4 hover:bg-white/5 rounded-2xl cursor-pointer transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-black/40 flex items-center justify-center">
                    <CardIcon className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">Online Payments</p>
                    <p className="text-sm text-muted-foreground">Allow transactions on internet</p>
                  </div>
                </div>
                <div className="w-12 h-6 rounded-full bg-primary relative cursor-pointer">
                  <div className="absolute right-1 top-1 w-4 h-4 rounded-full bg-white shadow-sm"></div>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 hover:bg-white/5 rounded-2xl cursor-pointer transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-black/40 flex items-center justify-center">
                    <Settings className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">Spending Limits</p>
                    <p className="text-sm text-muted-foreground">€2,000 / month remaining</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground" />
              </div>
            </div>
          </div>

          <div className="glass-panel p-6 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border-primary/20 cursor-pointer hover:border-primary/50 transition-colors">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-display font-medium text-primary mb-1">Order Physical Card</h3>
                <p className="text-sm text-muted-foreground max-w-[250px]">Get a premium metal card delivered to your home in 3-5 days.</p>
              </div>
              <div className="w-16 h-10 rounded shadow-md overflow-hidden relative border border-white/20 -rotate-12">
                 <img src={`${import.meta.env.BASE_URL}images/card-bg.png`} alt="Card miniature" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

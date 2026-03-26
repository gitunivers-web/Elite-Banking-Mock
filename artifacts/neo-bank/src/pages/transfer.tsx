import React, { useState } from "react";
import { useContacts, useCreateTransfer, useUser } from "@/hooks/use-mock-api";
import { formatEUR, cn } from "@/lib/utils";
import { ArrowRight, CheckCircle2, ChevronRight, Search } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Transfer() {
  const { data: contacts, isLoading: contactsLoading } = useContacts();
  const { data: user } = useUser();
  const { mutate: createTransfer, isPending } = useCreateTransfer();
  const { toast } = useToast();

  const [step, setStep] = useState(1);
  const [selectedContact, setSelectedContact] = useState<string | null>(null);
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");

  const contact = contacts?.find(c => c.id === selectedContact);
  const parsedAmount = parseFloat(amount.replace(',', '.'));
  const isValidAmount = !isNaN(parsedAmount) && parsedAmount > 0 && parsedAmount <= (user?.balance || 0);

  const handleNext = () => {
    if (step === 1 && selectedContact) setStep(2);
    else if (step === 2 && isValidAmount) setStep(3);
  };

  const handleConfirm = () => {
    if (!selectedContact || !isValidAmount) return;
    
    createTransfer({ contactId: selectedContact, amount: parsedAmount, note }, {
      onSuccess: () => {
        setStep(4);
      },
      onError: (error) => {
        toast({
          title: "Transfer Failed",
          description: error.message,
          variant: "destructive"
        });
      }
    });
  };

  if (contactsLoading) {
    return (
      <div className="flex items-center justify-center h-full min-h-[400px]">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto mt-4 md:mt-10">
      <div className="glass-panel rounded-[2rem] p-6 md:p-10 relative overflow-hidden">
        {/* Step Indicators */}
        {step < 4 && (
          <div className="flex gap-2 mb-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-1.5 flex-1 rounded-full bg-white/10 overflow-hidden">
                <div 
                  className={cn("h-full bg-primary transition-all duration-500", i <= step ? "w-full" : "w-0")}
                />
              </div>
            ))}
          </div>
        )}

        {/* Step 1: Select Beneficiary */}
        {step === 1 && (
          <div className="space-y-6 animate-in slide-in-from-right-4 fade-in duration-300">
            <div>
              <h2 className="text-2xl font-display font-semibold">Who are you sending to?</h2>
              <p className="text-muted-foreground mt-1">Select a saved contact or enter a new IBAN.</p>
            </div>

            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search name or IBAN..." 
                className="w-full bg-black/20 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-primary transition-all placeholder:text-muted-foreground"
              />
            </div>

            <div className="space-y-3">
              <p className="text-sm font-medium text-muted-foreground px-2">Recent Contacts</p>
              <div className="grid gap-3">
                {contacts?.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedContact(c.id)}
                    className={cn(
                      "flex items-center justify-between p-4 rounded-2xl transition-all border",
                      selectedContact === c.id 
                        ? "bg-primary/10 border-primary" 
                        : "bg-white/5 border-transparent hover:bg-white/10"
                    )}
                  >
                    <div className="flex items-center gap-4">
                      <div className={cn(
                        "w-12 h-12 rounded-full flex items-center justify-center font-medium",
                        selectedContact === c.id ? "bg-primary text-primary-foreground" : "bg-black/50 text-foreground"
                      )}>
                        {c.initials}
                      </div>
                      <span className="font-medium text-lg">{c.name}</span>
                    </div>
                    {selectedContact === c.id && <CheckCircle2 className="w-6 h-6 text-primary" />}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Amount */}
        {step === 2 && (
          <div className="space-y-8 animate-in slide-in-from-right-4 fade-in duration-300">
            <div>
              <h2 className="text-2xl font-display font-semibold">How much?</h2>
              <p className="text-muted-foreground mt-1">Sending to <span className="text-foreground font-medium">{contact?.name}</span></p>
            </div>

            <div className="py-10 text-center flex flex-col items-center justify-center">
              <div className="relative inline-flex items-center">
                <span className="text-4xl md:text-6xl font-display text-muted-foreground absolute -left-8 md:-left-12">€</span>
                <input
                  type="text"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value.replace(/[^0-9.,]/g, ''))}
                  placeholder="0.00"
                  className="bg-transparent text-5xl md:text-7xl font-display font-bold outline-none text-center w-full max-w-[300px] placeholder:text-white/20"
                  autoFocus
                />
              </div>
              <p className="text-muted-foreground mt-4">
                Available balance: <span className="text-foreground font-medium">{formatEUR(user?.balance || 0)}</span>
              </p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground ml-2">Note (optional)</label>
              <input 
                type="text" 
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="What's this for?" 
                className="w-full bg-black/20 border border-white/10 rounded-2xl py-4 px-5 focus:outline-none focus:border-primary transition-all"
              />
            </div>
          </div>
        )}

        {/* Step 3: Confirmation */}
        {step === 3 && (
          <div className="space-y-8 animate-in slide-in-from-right-4 fade-in duration-300">
            <div>
              <h2 className="text-2xl font-display font-semibold">Review Transfer</h2>
              <p className="text-muted-foreground mt-1">Please confirm the details below.</p>
            </div>

            <div className="bg-black/30 rounded-3xl p-6 space-y-6 border border-white/5">
              <div className="flex flex-col items-center justify-center py-4 border-b border-white/10">
                <span className="text-sm text-muted-foreground mb-1">Amount to send</span>
                <span className="text-5xl font-display font-bold">{formatEUR(parsedAmount)}</span>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">To</span>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs">
                      {contact?.initials}
                    </div>
                    <span className="font-medium">{contact?.name}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Fee</span>
                  <span className="font-medium text-green-400">Free</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Arrival</span>
                  <span className="font-medium">Instant</span>
                </div>
                {note && (
                  <div className="flex justify-between items-start pt-2 border-t border-white/10">
                    <span className="text-muted-foreground">Note</span>
                    <span className="font-medium text-right max-w-[60%] truncate">{note}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Success */}
        {step === 4 && (
          <div className="py-12 text-center space-y-6 animate-in zoom-in-95 duration-500">
            <div className="w-24 h-24 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto border-4 border-green-500/30">
              <CheckCircle2 className="w-12 h-12" />
            </div>
            <div>
              <h2 className="text-3xl font-display font-bold mb-2">Sent!</h2>
              <p className="text-muted-foreground text-lg">
                {formatEUR(parsedAmount)} has been sent to {contact?.name}
              </p>
            </div>
            <div className="pt-8">
              <Link href="/app" className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 transition-colors font-medium inline-block">
                Retour au Dashboard
              </Link>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        {step < 4 && (
          <div className="mt-10 flex gap-4">
            {step > 1 && (
              <button 
                onClick={() => setStep(step - 1)}
                className="px-6 py-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors font-medium"
              >
                Back
              </button>
            )}
            
            {step < 3 ? (
              <button 
                onClick={handleNext}
                disabled={step === 1 ? !selectedContact : !isValidAmount}
                className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed text-primary-foreground py-4 rounded-2xl font-medium transition-all shadow-lg shadow-primary/25"
              >
                Continue <ArrowRight className="w-5 h-5" />
              </button>
            ) : (
              <button 
                onClick={handleConfirm}
                disabled={isPending}
                className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed text-primary-foreground py-4 rounded-2xl font-medium transition-all shadow-lg shadow-primary/25 relative overflow-hidden"
              >
                {isPending ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>Confirm Transfer <ChevronRight className="w-5 h-5" /></>
                )}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

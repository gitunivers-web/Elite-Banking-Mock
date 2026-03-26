import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { user, transactions, chartData, savingsPots, contacts, type Transaction, type SavingsPot } from "@/lib/mock-data";

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export function useUser() {
  return useQuery({
    queryKey: ['user'],
    queryFn: () => user,
  });
}

export function useTransactions() {
  return useQuery({
    queryKey: ['transactions'],
    queryFn: () => transactions,
  });
}

export function useChartData() {
  return useQuery({
    queryKey: ['chartData'],
    queryFn: () => chartData,
  });
}

export function useSavingsPots() {
  return useQuery({
    queryKey: ['savings'],
    queryFn: () => savingsPots,
  });
}

export function useContacts() {
  return useQuery({
    queryKey: ['contacts'],
    queryFn: () => contacts,
  });
}

// Mutations
export function useCreateTransfer() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (data: { contactId: string, amount: number, note?: string }) => {
      await delay(1500); // Simulate processing
      if (data.amount > user.balance) throw new Error("Insufficient funds");
      return { success: true, transactionId: `t_new_${Date.now()}` };
    },
    onSuccess: () => {
      // In a real app, this would invalidate queries. Here we just pretend.
      queryClient.invalidateQueries({ queryKey: ['user'] });
      queryClient.invalidateQueries({ queryKey: ['transactions'] });
    }
  });
}

export function useCreateSavingsPot() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (data: Omit<SavingsPot, 'id' | 'current' | 'color'>) => {
      await delay(1000);
      return { ...data, id: `s_new_${Date.now()}`, current: 0, color: "bg-gray-500/20 text-gray-400 border-gray-500/30" };
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['savings'] });
    }
  });
}

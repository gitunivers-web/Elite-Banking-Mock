// Centralized mock data to simulate a backend

export const user = {
  id: "u_123",
  name: "Alexandre Dupont",
  email: "alexandre.dupont@example.com",
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces", // Unsplash portrait
  iban: "FR76 3000 6000 0112 3456 7890 189",
  bic: "BNPAFR2P",
  balance: 4847.32,
  memberSince: "2021-04-12",
};

export type TransactionCategory = 'food' | 'transport' | 'shopping' | 'entertainment' | 'health' | 'income' | 'transfer';

export interface Transaction {
  id: string;
  title: string;
  merchant: string;
  amount: number;
  date: string;
  category: TransactionCategory;
  type: 'income' | 'expense';
  status: 'completed' | 'pending';
}

export const transactions: Transaction[] = [
  { id: "t_1", title: "Uber Eats", merchant: "Uber", amount: 24.50, date: "2023-10-25T19:30:00Z", category: "food", type: "expense", status: "completed" },
  { id: "t_2", title: "Salary", merchant: "Tech Corp Inc.", amount: 3200.00, date: "2023-10-25T08:00:00Z", category: "income", type: "income", status: "completed" },
  { id: "t_3", title: "Netflix", merchant: "Netflix", amount: 13.99, date: "2023-10-24T10:15:00Z", category: "entertainment", type: "expense", status: "completed" },
  { id: "t_4", title: "Apple Store", merchant: "Apple", amount: 129.00, date: "2023-10-22T15:45:00Z", category: "shopping", type: "expense", status: "completed" },
  { id: "t_5", title: "Navigo Pass", merchant: "SNCF", amount: 84.10, date: "2023-10-20T07:20:00Z", category: "transport", type: "expense", status: "completed" },
  { id: "t_6", title: "Carrefour", merchant: "Carrefour", amount: 112.45, date: "2023-10-19T18:05:00Z", category: "food", type: "expense", status: "completed" },
  { id: "t_7", title: "Basic Fit", merchant: "Basic Fit", amount: 29.99, date: "2023-10-15T09:00:00Z", category: "health", type: "expense", status: "completed" },
  { id: "t_8", title: "Freelance Design", merchant: "Studio X", amount: 850.00, date: "2023-10-12T14:30:00Z", category: "income", type: "income", status: "completed" },
  { id: "t_9", title: "Zara", merchant: "Zara", amount: 65.90, date: "2023-10-10T16:20:00Z", category: "shopping", type: "expense", status: "completed" },
  { id: "t_10", title: "Spotify", merchant: "Spotify", amount: 10.99, date: "2023-10-05T10:00:00Z", category: "entertainment", type: "expense", status: "completed" },
  { id: "t_11", title: "Pharmacie", merchant: "Pharmacie Lafayette", amount: 18.50, date: "2023-10-02T11:45:00Z", category: "health", type: "expense", status: "completed" },
  { id: "t_12", title: "Transfer to Marie", merchant: "Marie L.", amount: 50.00, date: "2023-10-01T20:15:00Z", category: "transfer", type: "expense", status: "completed" },
  { id: "t_13", title: "Boulangerie", merchant: "Boulangerie du Coin", amount: 4.80, date: "2023-09-29T08:30:00Z", category: "food", type: "expense", status: "completed" },
  { id: "t_14", title: "Amazon", merchant: "Amazon", amount: 34.90, date: "2023-09-28T14:10:00Z", category: "shopping", type: "expense", status: "completed" },
  { id: "t_15", title: "Uber", merchant: "Uber", amount: 18.20, date: "2023-09-25T23:45:00Z", category: "transport", type: "expense", status: "completed" },
];

export const chartData = [
  { name: '1 Oct', spent: 120, income: 0 },
  { name: '5 Oct', spent: 300, income: 0 },
  { name: '10 Oct', spent: 450, income: 0 },
  { name: '12 Oct', spent: 450, income: 850 },
  { name: '15 Oct', spent: 580, income: 850 },
  { name: '20 Oct', spent: 750, income: 850 },
  { name: '25 Oct', spent: 820, income: 4050 },
  { name: '30 Oct', spent: 900, income: 4050 },
];

export interface SavingsPot {
  id: string;
  name: string;
  emoji: string;
  target: number | null;
  current: number;
  color: string;
}

export const savingsPots: SavingsPot[] = [
  { id: "s_1", name: "Emergency Fund", emoji: "🛡️", target: 10000, current: 4500, color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
  { id: "s_2", name: "Tokyo Trip", emoji: "🗼", target: 3000, current: 1200, color: "bg-pink-500/20 text-pink-400 border-pink-500/30" },
  { id: "s_3", name: "New MacBook", emoji: "💻", target: 2500, current: 2500, color: "bg-green-500/20 text-green-400 border-green-500/30" },
  { id: "s_4", name: "Tax Reserve", emoji: "🏛️", target: null, current: 1850, color: "bg-purple-500/20 text-purple-400 border-purple-500/30" },
];

export const contacts = [
  { id: "c_1", name: "Marie Laurent", initials: "ML" },
  { id: "c_2", name: "Thomas Dubois", initials: "TD" },
  { id: "c_3", name: "Sophie Martin", initials: "SM" },
  { id: "c_4", name: "Lucas Bernard", initials: "LB" },
];

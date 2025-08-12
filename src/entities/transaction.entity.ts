export class Transaction {
  id: string;
  user: string;
  amount: number;
  type: string; // e.g., 'credit' or 'debit'
  createdAt: Date;
  updatedAt: Date;
  tags: string[];
}

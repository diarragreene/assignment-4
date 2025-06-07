export interface Warehouse {
  addStock(bookId: string, shelf: string, quantity: number): Promise<void>;
  getStockLevels(bookId: string): Promise<number>;
  takeStock(bookId: string, shelf: string, quantity: number): Promise<void>;
  getShelves(bookId: string): Promise<{ shelf: string; quantity: number }[]>;
}

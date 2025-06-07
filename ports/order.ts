export interface Order {
  id: string;
  bookId: string;
  quantity: number;
  fulfilled: boolean;
  // Add other fields as needed
}

export interface Orders {
  placeOrder: (order: Array<{ bookId: string; quantity: number }>) => Promise<string>; // returns order ID
  getOldestUnfulfilledOrder: () => Promise<Order | null>;
  fulfillOrder: (orderId: string, fulfillmentDetails: FulfillmentDetails) => Promise<void>;
}

export interface FulfillmentDetails {
  fulfilledBy: string;
  fulfilledAt: Date;
  // Add other fields as needed
}

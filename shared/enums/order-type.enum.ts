export enum OrderType {
  Takeaway = 'TAKEAWAY',
  Delivery = 'DELIVERY',
}

export const ORDER_TYPE_LABEL: Record<OrderType, string> = {
  [OrderType.Takeaway]: 'טייקאווי',
  [OrderType.Delivery]: 'משלוח',
};

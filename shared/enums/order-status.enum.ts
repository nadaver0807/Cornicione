export enum OrderStatus {
  Pending = 'PENDING',
  Approved = 'APPROVED',
  Ready = 'READY',
  Completed = 'COMPLETED',
  Cancelled = 'CANCELLED',
}

export const ORDER_STATUS_LABEL: Record<OrderStatus, string> = {
  [OrderStatus.Pending]: 'ממתינה לאישור',
  [OrderStatus.Approved]: 'אושרה',
  [OrderStatus.Ready]: 'מוכנה',
  [OrderStatus.Completed]: 'הושלמה',
  [OrderStatus.Cancelled]: 'בוטלה',
};

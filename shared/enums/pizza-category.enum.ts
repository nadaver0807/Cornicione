export enum PizzaCategory {
  Pizza = 'PIZZA',
  Focaccia = 'FOCACCIA',
  Antipasti = 'ANTIPASTI',
  Dessert = 'DESSERT',
  Drink = 'DRINK',
}

export const PIZZA_CATEGORY_LABEL: Record<PizzaCategory, string> = {
  [PizzaCategory.Pizza]: 'פיצות',
  [PizzaCategory.Focaccia]: 'פוקאצ׳ות',
  [PizzaCategory.Antipasti]: 'אנטיפסטי',
  [PizzaCategory.Dessert]: 'קינוחים',
  [PizzaCategory.Drink]: 'שתייה',
};

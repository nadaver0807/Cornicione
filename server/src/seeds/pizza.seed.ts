import { PizzaCategory } from '@shared/enums/pizza-category.enum';
import { type CreatePizzaPayload } from '@shared/validations/pizza.validation';

/** תפריט פתיחה — ניתן לעריכה מלאה מממשק הניהול. */
export const PIZZA_SEED: CreatePizzaPayload[] = [
  {
    name: 'מרגריטה',
    description: 'רוטב עגבניות סן מרצאנו, פיור די לאטה, בזיליקום טרי, שמן זית',
    price: 58,
    imageUrl: '/images/menu/margherita.jpg',
    menuCategory: PizzaCategory.Pizza,
    toppings: [
      { name: 'בזיליקום נוסף', price: 0 },
      { name: 'בופלה', price: 12 },
    ],
    isVegetarian: true,
    isVegan: false,
    isSoldOut: false,
    displayOrder: 1,
  },
  {
    name: 'מריננה',
    description: 'רוטב עגבניות, שום, אורגנו, שמן זית — בלי גבינה, קלאסיקה נפוליטנית',
    price: 52,
    imageUrl: '/images/menu/marinara.jpg',
    menuCategory: PizzaCategory.Pizza,
    toppings: [{ name: 'אנשובי', price: 10 }],
    isVegetarian: true,
    isVegan: true,
    isSoldOut: false,
    displayOrder: 2,
  },
  {
    name: 'דיאבולה',
    description: 'רוטב עגבניות, מוצרלה, סלמי חריף, שמן צ׳ילי',
    price: 68,
    imageUrl: '/images/menu/diavola.jpg',
    menuCategory: PizzaCategory.Pizza,
    toppings: [{ name: 'דבש חריף', price: 6 }],
    isVegetarian: false,
    isVegan: false,
    isSoldOut: false,
    displayOrder: 3,
  },
  {
    name: 'פוקאצ׳ה רוזמרין',
    description: 'בצק בתסיסה ארוכה, רוזמרין, מלח גס ושמן זית',
    price: 32,
    imageUrl: '/images/menu/focaccia.jpg',
    menuCategory: PizzaCategory.Focaccia,
    toppings: [],
    isVegetarian: true,
    isVegan: true,
    isSoldOut: false,
    displayOrder: 1,
  },
];

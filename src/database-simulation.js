// sizes constants
const MINSIZE = 26,
  MIDDLESIZE = 30,
  BIGSIZE = 40;

const MIN_COEFF = 1,
  MIDDLE_COEFF = 1.2,
  BIG_COEFF = 1.5;

// border constants
const TRADITIONAL_DOUGH = "традиционное",
  THIN_DOUGH = "тонкое";

const THIN_DOUGH_ADDITION = 0,
  TRADITIONAL_DOUGH_ADDITION = 30;

const pizzaTable = [
  {
    id: 1,
    name: "Чизбургер-пицца",
    icon: "cheeseburger",
    keyWords: ["Острые", "Закрытые", "Сырные"],
    sizes: [
      {
        value: MINSIZE,
        inStock: true,
        coeff: MIN_COEFF,
      },
      {
        value: MIDDLESIZE,
        inStock: true,
        coeff: MIDDLE_COEFF,
      },
      {
        value: BIGSIZE,
        inStock: true,
        coeff: BIG_COEFF,
      },
    ],
    dough: [
      {
        value: THIN_DOUGH,
        inStock: true,
        addition: THIN_DOUGH_ADDITION,
      },
      {
        value: TRADITIONAL_DOUGH,
        inStock: true,
        addition: TRADITIONAL_DOUGH_ADDITION,
      },
    ],
    initialCost: 395,
    ordersCount: 1024,
  },
  {
    id: 2,
    name: "Сырная",
    icon: "cheese",
    keyWords: ["Закрытые", "Сырные"],
    sizes: [
      {
        value: MINSIZE,
        inStock: true,
        coeff: MIN_COEFF,
      },
      {
        value: MIDDLESIZE,
        inStock: false,
        coeff: MIDDLE_COEFF,
      },
      {
        value: BIGSIZE,
        inStock: true,
        coeff: BIG_COEFF,
      },
    ],
    dough: [
      {
        value: THIN_DOUGH,
        inStock: true,
        addition: THIN_DOUGH_ADDITION,
      },
      {
        value: TRADITIONAL_DOUGH,
        inStock: true,
        addition: TRADITIONAL_DOUGH_ADDITION,
      },
    ],
    initialCost: 450,
    ordersCount: 729,
  },
  {
    id: 3,
    name: "Креветки по-азиатски",
    icon: "shrimps",
    keyWords: ["Мясные", "Сырные"],
    sizes: [
      {
        value: MINSIZE,
        inStock: false,
        coeff: MIN_COEFF,
      },
      {
        value: MIDDLESIZE,
        inStock: true,
        coeff: MIDDLE_COEFF,
      },
      {
        value: BIGSIZE,
        inStock: false,
        coeff: BIG_COEFF,
      },
    ],
    dough: [
      {
        value: THIN_DOUGH,
        inStock: true,
        addition: THIN_DOUGH_ADDITION,
      },
      {
        value: TRADITIONAL_DOUGH,
        inStock: true,
        addition: TRADITIONAL_DOUGH_ADDITION,
      },
    ],
    initialCost: 230,
    ordersCount: 312,
  },
  {
    id: 4,
    name: "Сырный цыпленок",
    icon: "cheese-chicken",
    keyWords: ["Мясные", "Сырные", "Гриль"],
    sizes: [
      {
        value: MINSIZE,
        inStock: false,
        coeff: MIN_COEFF,
      },
      {
        value: MIDDLESIZE,
        inStock: true,
        coeff: MIDDLE_COEFF,
      },
      {
        value: BIGSIZE,
        inStock: true,
        coeff: BIG_COEFF,
      },
    ],
    dough: [
      {
        value: THIN_DOUGH,
        inStock: false,
        addition: THIN_DOUGH_ADDITION,
      },
      {
        value: TRADITIONAL_DOUGH,
        inStock: true,
        addition: TRADITIONAL_DOUGH_ADDITION,
      },
    ],
    initialCost: 275,
    ordersCount: 921,
  },
];

export { pizzaTable };

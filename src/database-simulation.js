// sizes constants
const MINSIZE = 26,
  MIDDLESIZE = 30,
  BIGSIZE = 40;

const MIN_COEFF = 1,
  MIDDLE_COEFF = 1.2,
  BIG_COEFF = 1.5;

// border constants
const TRADITIONAL_BORDER = "традиционная",
  THIN_BORDER = "тонкая";

const THIN_BORDER_ADDITION = 0,
  TRADITIONAL_BORDER_ADDITION = 30;

const pizzaTable = [
  {
    name: "Чизбургер-пицца",
    icon: "cheeseburger",
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
    borders: [
      {
        value: THIN_BORDER,
        inStock: true,
        addition: 0,
      },
      {
        value: TRADITIONAL_BORDER,
        inStock: true,
        addition: 30,
      },
    ],
    initialCost: 395,
  },
  {
    name: "Сырная",
    icon: "cheese",
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
    borders: [
      {
        value: THIN_BORDER,
        inStock: true,
        addition: THIN_BORDER_ADDITION,
      },
      {
        value: TRADITIONAL_BORDER,
        inStock: true,
        addition: TRADITIONAL_BORDER_ADDITION,
      },
    ],
    initialCost: 450,
  },
  {
    name: "Креветки по-азиатски",
    icon: "shrimps",
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
    borders: [
      {
        value: THIN_BORDER,
        inStock: true,
        addition: THIN_BORDER_ADDITION,
      },
      {
        value: TRADITIONAL_BORDER,
        inStock: true,
        addition: TRADITIONAL_BORDER_ADDITION,
      },
    ],
    initialCost: 230,
  },
  {
    name: "Сырный цыпленок",
    icon: "cheese-chicken",
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
    borders: [
      {
        value: THIN_BORDER,
        inStock: false,
        addition: THIN_BORDER_ADDITION,
      },
      {
        value: TRADITIONAL_BORDER,
        inStock: true,
        addition: TRADITIONAL_BORDER_ADDITION,
      },
    ],
    initialCost: 275,
  },
];

export { pizzaTable };

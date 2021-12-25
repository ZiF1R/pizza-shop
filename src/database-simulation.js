const MINSIZE = 26,
  MIDDLESIZE = 30,
  BIGSIZE = 40;

const MIN_COEFF = 1,
  MIDDLE_COEFF = 1.2,
  BIG_COEFF = 1.5;

const TRADITIONAL_BORDER = "традиционная",
  THIN_BORDER = "тонкая";

const pizzaTable = [
  {
    name: "Чизбургер-пицца",
    icon: "",
    sizes: [
      {
        value: MINSIZE,
        inStock: true,
      },
      {
        value: MIDDLESIZE,
        inStock: true,
      },
      {
        value: BIGSIZE,
        inStock: true,
      },
    ],
    borders: [
      {
        value: THIN_BORDER,
        inStock: true,
      },
      {
        value: TRADITIONAL_BORDER,
        inStock: false,
      },
    ],
    initialCost: 395,
  },
  {
    name: "Сырная",
    icon: "",
    sizes: [
      {
        value: MINSIZE,
        inStock: true,
      },
      {
        value: MIDDLESIZE,
        inStock: false,
      },
      {
        value: BIGSIZE,
        inStock: false,
      },
    ],
    borders: [
      {
        value: THIN_BORDER,
        inStock: true,
      },
      {
        value: TRADITIONAL_BORDER,
        inStock: true,
      },
    ],
    initialCost: 450,
  },
  {
    name: "Креветки по-азиатски",
    icon: "",
    sizes: [
      {
        value: MINSIZE,
        inStock: false,
      },
      {
        value: MIDDLESIZE,
        inStock: true,
      },
      {
        value: BIGSIZE,
        inStock: false,
      },
    ],
    borders: [
      {
        value: THIN_BORDER,
        inStock: true,
      },
      {
        value: TRADITIONAL_BORDER,
        inStock: true,
      },
    ],
    initialCost: 230,
  },
  {
    name: "Сырный цыпленок",
    icon: "",
    sizes: [
      {
        value: MINSIZE,
        inStock: false,
      },
      {
        value: MIDDLESIZE,
        inStock: true,
      },
      {
        value: BIGSIZE,
        inStock: true,
      },
    ],
    borders: [
      {
        value: THIN_BORDER,
        inStock: false,
      },
      {
        value: TRADITIONAL_BORDER,
        inStock: true,
      },
    ],
    initialCost: 275,
  },
];

// calculate prices for all pizza for all sizes
for (let p of pizzaTable)
  p["prices"] = [
    ~~(p.initialCost * MIN_COEFF),
    ~~(p.initialCost * MIDDLE_COEFF),
    ~~(p.initialCost * BIG_COEFF),
  ];

export { pizzaTable };

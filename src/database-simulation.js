const MINSIZE = 26,
  MIDDLESIZE = 30,
  BIGSIZE = 40;

const MIN_COEFF = 1,
  MIDDLE_COEFF = 1.2,
  BIG_COEFF = 1.5;

const pizzaTable = [
  {
    name: "Чизбургер-пицца",
    icon: "",
    sizes: [MINSIZE, MIDDLESIZE, BIGSIZE],
    initialCost: 395,
  },
  {
    name: "Сырная",
    icon: "",
    sizes: [MINSIZE],
    initialCost: 450,
  },
  {
    name: "Креветки по-азиатски",
    icon: "",
    sizes: [MIDDLESIZE],
    initialCost: 230,
  },
  {
    name: "Сырный цыпленок",
    icon: "",
    sizes: [MIDDLESIZE, BIGSIZE],
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

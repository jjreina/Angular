interface Product {
  description: string;
  price: number;
}

interface TaxCalcultionOptions {
  tax: number;
  products: Product[];
}

const phone: Product = {
  description: "Nokia A1",
  price: 150.0,
};

const tablet: Product = {
  description: "iPad Air",
  price: 250.0,
};

// function taxCalculation(options: TaxCalcultionOptions): [number, number] {
function taxCalculation(options: TaxCalcultionOptions): [number, number] {
  const { tax, products } = options;
  let total: number = 0;

  products.forEach(({ price }) => {
    total += price;
  });

  return [total, total * tax];
}

const shoppingCart: Product[] = [phone, tablet];
const tax: number = 0.15;

const [total, taxResult] = taxCalculation({ products: shoppingCart, tax });

console.log("Total: ", total);
console.log("Tax: ", taxResult);

export {};

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Milk extends Product {
  constructor(name, price, fatPercent) {
    super(name, price);
    this.fatPercent = fatPercent;
  }
}

const milk1 = new Milk("Süd1", 2, 3);
const milk2 = new Milk("Süd2", 3, 3);
const milk3 = new Milk("Süd3", 2, 6);

 averageFatPercent=(milk1.fatPercent+milk2.fatPercent+milk3.fatPercent)/3;
 
console.log(averageFatPercent);

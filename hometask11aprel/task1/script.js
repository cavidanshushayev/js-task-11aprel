class Car {
  constructor(brand, model, currentFuel, fuelFor1Km, millage) {
    this.brand = brand;
    this.model = model;
    this.currentFuel = currentFuel;
    this.fuelFor1Km = fuelFor1Km;
    this.millage = millage;
    
    this.drive = function(km) {
      const fuelNeeded = km * this.fuelFor1Km;
      if (fuelNeeded <= this.currentFuel) {
        this.millage += km;
        this.currentFuel -= fuelNeeded;
        console.log(`${km} km sürüldü.Çəndəki qaliq benzin: ${this.currentFuel}.`);
      } else {
        console.log(`Benzin yoxdur !!!!`);
      }
    };
  }
}


car2=new Car('mercedes','qalik',100,2,1000);
car2.drive(10);
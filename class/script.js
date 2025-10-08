class Drive {
  constructor(leaserName, date, kmDuringLease) {
    this.leaserName = leaserName;
    this.date = date;
    this.kmDuringLease = kmDuringLease;
  }
}

class Vehicle {
  constructor(companyName, modelName, startKm = 0) {
    this.companyName = companyName;
    this.modelName = modelName;
    this.isAvailable = true;  
    this.startKm = startKm;    
    this.currentKm = startKm;  
    this.trips = [];     
  }

  recalcTotalKm() {
    const tripsSum = this.trips.reduce((sum, trip) => sum + trip.kmDuringLease, 0);
    this.currentKm = this.startKm + tripsSum;
  }

  addTrip(trip) {
    this.trips.push(trip);
    this.currentKm += trip.kmDuringLease;
  }
}

class CompanyCars {
  constructor(companyName) {
    this.companyName = companyName;
    this.vehicles = [];        
  }

  addVehicle(vehicle) {
    this.vehicles.push(vehicle);
  }

  getMaxKmVehicle() {
    if (this.vehicles.length === 0) return null;
    let maxCar = this.vehicles[0];
    for (const car of this.vehicles) {
      if (car.currentKm > maxCar.currentKm) maxCar = car;
    }
    return maxCar;
  }

  
  printAvailableVehicles() {
    for (const car of this.vehicles) {
      if (car.isAvailable) {
        console.log(`${car.companyName} ${car.modelName} - פנוי`);
      }
    }
  }

  
  addTripToVehicle(modelName, trip) {
    const car = this.vehicles.find(c => c.modelName === modelName);
    if (car) {
      car.addTrip(trip);
    }
  }
}


const car = new Vehicle("Toyota", "Corolla", 12000);
console.log(car.isAvailable); 
console.log(car.currentKm); 

car.addTrip(new Drive("Sivan", "2025-10-06", 150));
car.addTrip(new Drive("Dor",   "2025-10-07",  50));

console.log(car.trips.length);
console.log(car.currentKm); 

car.recalcTotalKm();
console.log(car.currentKm);   

class Car {
  // Private fields
  #fuel;
  #engineOn;

  constructor(initialFuel = 0) {
    this.#fuel = initialFuel;
    this.#engineOn = false;
  }

  // Start the engine
  start() {
    if (this.#fuel <= 0) {
      console.log("Cannot start: No fuel.");
      return;
    }
    if (!this.#engineOn) {
      this.#engineOn = true;
      console.log("Engine started.");
    } else {
      console.log("Engine is already running.");
    }
  }

  // Stop the engine
  stop() {
    if (this.#engineOn) {
      this.#engineOn = false;
      console.log("Engine stopped.");
    } else {
      console.log("Engine is already off.");
    }
  }

  // Drive the car
  drive(distance) {
    if (!this.#engineOn) {
      console.log("Cannot drive: Engine is off.");
      return;
    }

    if (this.#fuel <= 0) {
      console.log("Cannot drive: No fuel.");
      this.#engineOn = false;
      return;
    }

    const fuelNeeded = distance * 0.1; // Example: 0.1 unit fuel per km
    if (fuelNeeded > this.#fuel) {
      console.log(`Cannot drive full distance, only driving ${this.#fuel / 0.1} km.`);
      this.#fuel = 0;
      this.#engineOn = false;
    } else {
      this.#fuel -= fuelNeeded;
      console.log(`Drove ${distance} km. Remaining fuel: ${this.#fuel.toFixed(2)}`);
    }
  }

  // Optional: add fuel
  refuel(amount) {
    if (amount > 0) {
      this.#fuel += amount;
      console.log(`Added ${amount} units of fuel. Total fuel: ${this.#fuel.toFixed(2)}`);
    } else {
      console.log("Refuel amount must be positive.");
    }
  }
}

// Example usage
const myCar = new Car(5);
myCar.start();
myCar.drive(20);
myCar.drive(10);
myCar.stop();
myCar.refuel(10);
myCar.start();
myCar.drive(50);

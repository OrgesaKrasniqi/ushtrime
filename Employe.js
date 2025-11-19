// Base class
class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  info() {
    return `Employee: ${this.name}, Salary: $${this.salary}`;
  }
}

// Subclass
class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary); // call parent constructor
    this.department = department;
  }

  info() {
    // reuse parent info() and add department
    return `${super.info()}, Department: ${this.department}`;
  }
}

// Example usage
const emp = new Employee("Alice", 50000);
console.log(emp.info()); 
// Employee: Alice, Salary: $50000

const mgr = new Manager("Bob", 80000, "Marketing");
console.log(mgr.info()); 
// Employee: Bob, Salary: $80000, Department: Marketing

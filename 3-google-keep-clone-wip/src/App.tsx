function App() {
  // 1.
  class Animal {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    walk() {
      return `${this.name} is walking`;
    }
  }
  class Human extends Animal {
    genre: string;
    constructor(name: string, age: number, genre: string) {
      super(name, age);
      this.genre = genre;
    }
    bio() {
      return `My name is ${this.name} and I am ${this.age} old ${this.genre}`;
    }
    talk() {
      return `${this.age} old ${this.name} is talking: `;
    }
  }

  let Beata = new Human("Beata", 62, "woman");
  
  console.log(Beata, Beata.talk(), Beata.bio());


  // 2. 
  // Programowanie funkcyjne
  //let baseSalary = 3000;
  //let overtime =  10;
  //let rate = 20;

  //function getWage(baseSalary: number, overtime: number, rate: number) {
  //  return baseSalary + (overtime * rate);
  //}

  // vs OOP
  let employee = {
    baseSalary: 3000,
    overtime:  10,
    rate: 20,
    getWage: function() {
      return this.baseSalary + (this.overtime * this.rate)
    }
  };

  console.log(employee.getWage());

  return <div className="App">
    <p>{employee.getWage()}</p>
  </div>;
}

export default App;

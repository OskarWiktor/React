function App() {
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

  return <div className="App"></div>;
}

export default App;

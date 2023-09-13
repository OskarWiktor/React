import {ReactEventHandler, useState} from "react";

class Food {
  name: string;
  calories: number;
  weight: number;
  constructor(name: string, calories: number, weight: number) {
    this.name = name;
    this.calories = calories;
    this.weight = weight;
  }
  info() {
    return `${this.name} weighs ${this.weight} grams and has ${this.calories} calories.`;
  }
}

function App() {
  const [foodList, setFoodList] = useState<Food[]>([]);
  const [inputName, setInputName] = useState<string>(" ");
  const [inputCalories, setInputCalories] = useState<number>(Number);
  const [inputWeight, setInputWeight] = useState<number>(Number);
  const [selectedFood, setSelectedFood] = useState<Food | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    inputType: string | number
  ) => {
    const valueString: string = e.target.value;
    const valueNumber: number = parseFloat(e.target.value);
    if (inputType === "name") {
      setInputName(valueString);
    } else if (inputType === "calories") {
      setInputCalories(valueNumber);
    } else if (inputType === "weight") {
      setInputWeight(valueNumber);
    }
  };

  const handleSubmit = () => {
    const newFoodItem = new Food(inputName, inputCalories, inputWeight);
    setFoodList([newFoodItem, ...foodList]);
    setInputName("");
    setInputCalories(Number);
    setInputWeight(Number);
  };

  const openModal = (food: Food) => {
    setSelectedFood(food)
  }
  const closeModal = () => {
    setSelectedFood(null)
  }


  return (
    <div className="App">
      <input
        type="text"
        placeholder="name"
        value={inputName}
        onChange={(e) => handleInputChange(e, "name")}
      />
      <input
        type="number"
        placeholder="calories"
        value={inputCalories}
        onChange={(e) => handleInputChange(e, "calories")}
      />
      <input
        type="number"
        placeholder="weight"
        value={inputWeight}
        onChange={(e) => handleInputChange(e, "weight")}
      />
      <button onClick={handleSubmit}>Submit</button>

      <ul>
        {foodList.map((food, index) => (
          <li key={index} onClick={() => openModal(food)}>{food.name}</li>
        ))}
      </ul>
      {selectedFood && (
        <div>
          <span onClick={closeModal}>&times;</span>
          <p>{selectedFood.info()}</p>
        </div>
      )}
    </div>
  );
}

export default App;

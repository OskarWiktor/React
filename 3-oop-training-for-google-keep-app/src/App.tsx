import { useState } from "react";

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
  const [inputName, setInputName] = useState(" ");
  const [inputCalories, setInputCalories] = useState(" ");
  const [inputWeight, setInputWeight] = useState(" ");
  const [selectedFood, setSelectedFood] = useState<Food | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    inputType: string | number
  ) => {
    const value: string = e.target.value;;
    if (inputType === "name") {
      setInputName(value);
    } else if (inputType === "calories") {
      setInputCalories(value);
    } else if (inputType === "weight") {
      setInputWeight(value);
    }
  };

  const handleSubmit = () => {
    const newFoodItem = new Food(inputName, parseFloat(inputCalories), parseFloat(inputWeight));
    setFoodList([newFoodItem, ...foodList]);
    setInputName("");
    setInputCalories("");
    setInputWeight("");
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

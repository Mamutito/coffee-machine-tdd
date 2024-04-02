import { useState } from "react";
import ShowDrink from "./ShowDrink";

const CoffeeMachine = () => {
  /* Command Examples:
  "T:1:0" (1 tea with 1 sugar and a stick)
  "H::" (1 chocolate with no sugar - and therefore no stick)
  "C:2:0" (1 coffee with 2 sugars and a stick)
  */
  const DRINKS = {
    Coffee: "C",
    Chocolate: "H",
    Tea: "T",
  };

  const [command, setCommand] = useState("");
  const [sugarCount, setSugarCount] = useState(0);
  const [drinkType, setDrinkType] = useState({ value: "", code: "" });

  const handleSelectDrink = (drink) => {
    setDrinkType(() => ({ value: drink, code: DRINKS[drink] }));
  };

  const handleStart = () => {
    const numSugar = sugarCount ? sugarCount.toString() : "";
    const hasStick = sugarCount ? "0" : "";
    setCommand(`${drinkType.code}:${numSugar}:${hasStick}`);
  };

  return (
    <div>
      <main className="drinks-block">
        <p>This where the user select the type of order</p>
        {Object.keys(DRINKS).map((drink) => {
          return (
            <button
              key={DRINKS[drink]}
              onClick={() => {
                handleSelectDrink(drink);
              }}
            >
              {drink}
            </button>
          );
        })}
      </main>
      <aside className="right-panel">
        <p>This is the right panel</p>
        <button
          onClick={() => {
            setSugarCount((count) => count + 1);
          }}
        >
          +
        </button>
        <button onClick={handleStart}>Start</button>
      </aside>
      <footer className="output-message">
        <ShowDrink command={command} />
        <p>This is where the message of the output is shown</p>
      </footer>
    </div>
  );
};

export default CoffeeMachine;

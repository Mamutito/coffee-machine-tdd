import { useState } from "react";
import ShowDrink from "./ShowDrink";

const CoffeeMachine = () => {
  /* Command Examples:
  "T:1:0" (1 tea with 1 sugar and a stick)
  "H::" (1 chocolate with no sugar - and therefore no stick)
  "C:2:0" (1 coffee with 2 sugars and a stick)
  */

  const [command, setCommand] = useState("");
  const [sugarCount, setSugarCount] = useState(0);
  const [drinkType, setDrinkType] = useState("");

  return (
    <div>
      <main className="drinks-block">
        <p>This where the user select the type of order</p>
        <button
          onClick={() => {
            setDrinkType("C");
          }}
        >
          Coffee
        </button>
        <button
          onClick={() => {
            setDrinkType("H");
          }}
        >
          Chocolate
        </button>
        <button
          onClick={() => {
            setDrinkType("T");
          }}
        >
          Tea
        </button>
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
        <button
          onClick={() => {
            const numSugar = sugarCount ? sugarCount.toString() : "";
            const hasStick = sugarCount ? "0" : "";
            setCommand(`${drinkType}:${numSugar}:${hasStick}`);
          }}
        >
          Start
        </button>
      </aside>
      <footer className="output-message">
        <ShowDrink command={command} />
        <p>This is where the message of the output is shown</p>
      </footer>
    </div>
  );
};

export default CoffeeMachine;

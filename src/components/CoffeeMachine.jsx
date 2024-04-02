import { useState } from "react";
import ShowDrink from "./ShowDrink";

const CoffeeMachine = () => {
  /* Command Examples:
  "T:1:0" (1 tea with 1 sugar and a stick)
  "H::" (1 chocolate with no sugar - and therefore no stick)
  "C:2:0" (1 coffee with 2 sugars and a stick)
  */
  const [command, setCommand] = useState("");
  const [sugar, setSugar] = useState(false);

  return (
    <div>
      <main className="drinks-block">
        <p>This where the user select the type of order</p>
        <button>Coffee</button>
      </main>
      <aside className="right-panel">
        <p>This is the right panel</p>
        <button
          onClick={() => {
            setSugar(true);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            const hasSugar = sugar ? "1" : "";
            const hasStick = sugar ? "0" : "";
            setCommand(`C:${hasSugar}:${hasStick}`);
          }}
        >
          Start
        </button>
      </aside>
      <footer className="output-message">
        elcommand{command}
        <ShowDrink command={command} />
        <p>This is where the message of the output is shown</p>
      </footer>
    </div>
  );
};

export default CoffeeMachine;

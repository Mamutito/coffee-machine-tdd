import React from "react";
import { drinkLogic, isValidCommand } from "../utils/drinkLogic";

function ShowDrink({ command }) {
  if (!isValidCommand(command)) {
    return null;
  }

  // Ejecuta el comando
  drinkLogic(command);
  return <div>{command}</div>;
}

export default ShowDrink;

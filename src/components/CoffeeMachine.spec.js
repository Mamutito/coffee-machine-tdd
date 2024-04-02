import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CoffeeMachine from "./CoffeeMachine";
import * as utils from "../utils/drinkLogic";

describe("Drink Orders", () => {
  it("Should able to order a coffee", async () => {
    /* 
    1-User select Coffee
    2-User press Start
    3-User recive a Coffee
    */
    const spy = jest.spyOn(utils, "drinkLogic");
    render(<CoffeeMachine />);

    const coffeeButton = screen.getByText("Coffee");
    const startButton = screen.getByText("Start");

    userEvent.click(coffeeButton);
    userEvent.click(startButton);
    await waitFor(() => {
      expect(spy).toHaveBeenCalledWith("C::");
    });
  });
});

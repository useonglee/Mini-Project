import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Habit from "../../habit/habit";

describe("render navbar", () => {
  let handleIncrement;
  let button;
  let habit;
  let count;

  beforeAll(() => {
    habit = {
      count: 0,
      id: 1,
      name: "Reading",
    };

    handleIncrement = jest.fn();

    render(
      <Habit
        habit={habit}
        onIncrement={handleIncrement}
        onDecrement={jest.fn()}
        onDelete={jest.fn()}
      />
    );

    button = screen.getByTestId("increment-button");
    count = screen.getByTestId("count");
  });

  it("calld handleIncrement when button is clicked", () => {
    userEvent.click(button);

    expect(handleIncrement).toHaveBeenCalledTimes(1);
  });
});

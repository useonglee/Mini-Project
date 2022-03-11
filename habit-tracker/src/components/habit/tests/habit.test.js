import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";

import Habit from "../../habit/habit";

describe("habit component", () => {
  const habit = { name: "Habit", count: 4 };
  let HabitComponent;
  let handleIncrement;
  let handleDecrement;
  let handleDelete;

  beforeAll(() => {
    handleIncrement = jest.fn();
    handleDecrement = jest.fn();
    handleDelete = jest.fn();

    HabitComponent = (
      <Habit
        habit={habit}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onDelete={handleDelete}
      />
    );
  });

  it("render habit component", () => {
    // snapshot testing
    const component = renderer.create(HabitComponent);
    expect(component.toJSON()).toMatchSnapshot();
  });

  describe("Button Click", () => {
    it("calld handleIncrement when button is clicked", () => {
      render(HabitComponent);

      const button = screen.getByTitle("increase");
      userEvent.click(button);

      expect(handleIncrement).toHaveBeenCalledTimes(1);
      expect(handleIncrement).toHaveBeenCalledWith(habit);
    });
  });
});

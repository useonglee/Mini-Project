import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";
import Habits from "../habits";

describe("habits", () => {
  const habits = [
    { id: 1, name: "Reading", count: 0 },
    { id: 2, name: "Running", count: 0 },
    { id: 3, name: "Coding", count: 0 },
  ];

  let HabitsComponent;
  let handleIncrement;
  let handleDecrement;
  let handleDelete;
  let handleReset;
  let onAdd;

  beforeAll(() => {
    handleIncrement = jest.fn();
    handleDecrement = jest.fn();
    handleDelete = jest.fn();
    handleReset = jest.fn();
    onAdd = jest.fn();

    HabitsComponent = (
      <Habits
        habits={habits}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onDelete={handleDelete}
        onReset={handleReset}
        onAdd={onAdd}
      />
    );
  });

  it("render habits component", () => {
    const component = renderer.create(HabitsComponent);
    expect(component.toJSON()).toMatchSnapshot();
  });

  describe("Button Click", () => {
    it("calls onAdd when clicking the 'Add' button", () => {
      render(HabitsComponent);

      const input = screen.getByPlaceholderText("Habit");
      const button = screen.getByText("Add");

      userEvent.type(input, "New Habit");
      userEvent.click(button);

      expect(onAdd).toHaveBeenCalledWith("New Habit");
    });

    it("calls handleIncrement when clicking the 'increas' button", () => {
      render(HabitsComponent);
      const button = screen.getAllByTitle("increase")[0];

      userEvent.click(button);

      expect(handleIncrement).toHaveBeenCalledWith(habits[0]);
    });

    it("calls handleReset when clicking the 'Reset All' button", () => {
      render(HabitsComponent);
      const button = screen.getByText("Reset All");

      userEvent.click(button);

      expect(handleReset).toHaveBeenCalledTimes(1);
    });
  });
});

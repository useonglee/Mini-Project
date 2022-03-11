import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HabitAddForm from "../habitAddForm";
import renderer from "react-test-renderer";

describe("habit add form", () => {
  it("renders", () => {
    // snapshot testing
    const component = renderer.create(<HabitAddForm onAdd={jest.fn()} />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  describe("habit submit", () => {
    it("calls onAdd when button is clicked", () => {
      const onAdd = jest.fn();
      render(<HabitAddForm onAdd={onAdd} />);
      const input = screen.getByPlaceholderText("Habit");
      const button = screen.getByText("Add");

      userEvent.type(input, "New Habit");
      userEvent.click(button);

      expect(onAdd).toHaveBeenCalledWith("New Habit");
    });

    it("does not call onAdd when the habit is empty", () => {
      const onAdd = jest.fn();
      render(<HabitAddForm onAdd={onAdd} />);
      const input = screen.getByPlaceholderText("Habit");
      const button = screen.getByText("Add");

      userEvent.type(input, "");
      userEvent.click(button);

      expect(onAdd).toHaveBeenCalledTimes(0);
    });
  });
});

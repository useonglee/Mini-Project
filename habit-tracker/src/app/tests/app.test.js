import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";
import HabitPresenter from "../habit_presenter";
import App from "../app";

describe("App CI test", () => {
  let habitPresenter;

  beforeAll(() => {
    habitPresenter = new HabitPresenter([
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ]);
  });

  it("render App component", () => {
    const component = renderer.create(<App presenter={habitPresenter} />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it("counts test", () => {
    render(<App presenter={habitPresenter} />);
    const button = screen.getAllByTitle("increase")[0];
    const count = screen.getByTestId("total-count");

    userEvent.click(button);

    expect(count.innerHTML).toBe("1");
  });

  it("Add new habit", () => {
    render(<App presenter={habitPresenter} />);

    const input = screen.getByPlaceholderText("Habit");
    const button = screen.getByText("Add");
    userEvent.type(input, "New Habit");
    userEvent.click(button);

    const addName = screen.getAllByTestId("habit-name")[3];
    expect(addName.innerHTML).toBe("New Habit");

    const addedCount = screen.getAllByTestId("habit-count")[3];
    expect(addedCount.innerHTML).toBe("0");
  });

  it("resets all counters", () => {
    render(<App presenter={habitPresenter} />);
    const button = screen.getByText("Reset All");

    userEvent.click(button);

    screen.getAllByTestId("habit-count").forEach((count) => {
      expect(count.innerHTML).toBe("0");
    });
  });
});

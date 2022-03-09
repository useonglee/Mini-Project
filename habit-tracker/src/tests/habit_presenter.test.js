import HabitPresenter from "../habit_presenter";

describe("Habit presenter", () => {
  const habits = [
    { id: 1, name: "Reading", count: 0 },
    { id: 2, name: "Running", count: 0 },
    { id: 3, name: "Coding", count: 0 },
  ];
  let presenter;
  let update;

  beforeEach(() => {
    presenter = new HabitPresenter(habits, 4);
    update = jest.fn();
  });

  it("inits with habits", () => {
    expect(presenter.getHabits()).toEqual(habits);
  });

  it("increments habit count", () => {
    presenter.increment(habits[0], update);
    expect(presenter.getHabits()[0].count).toBe(1);

    checkUpdateIsCalled();
  });

  it("decrements habit count", () => {
    presenter.decrement(habits[0], update);
    expect(presenter.getHabits()[0].count).toBe(0);

    checkUpdateIsCalled();
  });

  it("delete habit from list item", () => {
    presenter.delete(habits[0], update);
    expect(presenter.getHabits()).toHaveLength(2);
    expect(presenter.getHabits()[0].name).toBe("Running");

    checkUpdateIsCalled();
  });

  it("add habit from list item", () => {
    presenter.add("Health", update);
    expect(presenter.getHabits()).toHaveLength(4);
    expect(presenter.getHabits()[3].name).toBe("Health");

    checkUpdateIsCalled();
  });

  it("throws an error when the max habits limit is exceeded", () => {
    presenter.add("Health", update);

    expect(() => {
      presenter.add("Health", update);
    }).toThrow("4개 이상의 습관을 추가할 수 없습니다");
  });

  it("reset habit count", () => {
    presenter.reset(update);
    expect(presenter.getHabits()[0].count).toBe(0);
    expect(presenter.getHabits()[1].count).toBe(0);

    checkUpdateIsCalled();
  });

  function checkUpdateIsCalled() {
    expect(update).toHaveBeenCalledTimes(1);
    expect(update).toHaveBeenCalledWith(presenter.getHabits());
  }
});

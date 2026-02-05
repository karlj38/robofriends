import { filterRobots } from "./App";

describe("filterRobots", () => {
  const robots = [
    { name: "Alice", email: "alice@mail.com", id: 123 },
    { name: "Bob", email: "bob@mail.com", id: 456 },
    { name: "Charlie", email: "charlie@mail.com", id: 789 },
  ];

  it("filters robots by case-insensitive name", () => {
    expect(filterRobots(robots, "alice")).toEqual([robots[0]]);
    expect(filterRobots(robots, "bob")).toEqual([robots[1]]);
    expect(filterRobots(robots, "charlie")).toEqual([robots[2]]);
  });

  it("returns empty array if no match", () => {
    expect(filterRobots(robots, "dave")).toEqual([]);
  });

  it("returns partial matches", () => {
    expect(filterRobots(robots, "a")).toEqual([robots[0], robots[2]]);
  });
});

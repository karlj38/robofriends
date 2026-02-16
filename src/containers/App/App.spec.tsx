import { describe, expect, it } from "vitest";
import { http, HttpResponse } from "msw";
import { afterAll, afterEach, beforeAll } from "vitest";
import { page, userEvent } from "vitest/browser";
import { httpWorker } from "../../setupTests";
import App, { filterRobots } from "./App";
import type { Robot } from "../../types";

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

//=================================================================================================

describe("App", () => {
  beforeAll(async () => await httpWorker.start({ quiet: true }));
  afterEach(() => httpWorker.resetHandlers());
  afterAll(() => httpWorker.stop());

  it("renders initial loading state", async () => {
    const { store, ...screen } = await page.renderWithProviders(<App />);

    expect(screen.container).toMatchSnapshot();
  });

  // ----------------------------------------------------------------------------------------------

  it("renders on API error", async () => {
    httpWorker.use(
      http.get("https://jsonplaceholder.typicode.com/users", () =>
        HttpResponse.json(null, {
          status: 500,
        }),
      ),
    );

    const { store, ...screen } = await page.renderWithProviders(<App />);

    const loadingText = screen.getByText("Loading...");
    await expect.element(loadingText).toBeInTheDocument();
    await expect.element(loadingText).not.toBeInTheDocument();

    const errorText = screen.getByText("Something went wrong");
    await expect.element(errorText).toBeInTheDocument();

    expect(screen.container).toMatchSnapshot();
  });

  // ----------------------------------------------------------------------------------------------

  it("fetches and renders robots", async () => {
    const { store, ...screen } = await page.renderWithProviders(<App />);

    const loadingText = screen.getByText("Loading...");
    await expect.element(loadingText).toBeInTheDocument();
    await expect.element(loadingText).not.toBeInTheDocument();

    const robots = store.getState().robotsAPI.queries["getRobots(undefined)"]
      ?.data as Array<Robot>;
    expect(robots.length).toBe(3);

    const robotName = screen.getByText("Leanne Graham");
    await expect.element(robotName).toBeInTheDocument();

    expect(screen.container).toMatchSnapshot();
  });

  it("filters robots by searchTerm", async () => {
    const { store, ...screen } = await page.renderWithProviders(<App />);

    const robotName = screen.getByText("Leanne Graham");
    await expect.element(robotName).toBeInTheDocument();

    const searchInput = screen.getByPlaceholder("search robots");
    await expect.element(searchInput).toBeInTheDocument();

    await userEvent.type(searchInput, "clem");

    await expect.element(robotName).not.toBeInTheDocument();

    const filteredRobotName = screen.getByText("Clementine Bauch");
    await expect.element(filteredRobotName).toBeInTheDocument();

    expect(screen.container).toMatchSnapshot();
  });
});

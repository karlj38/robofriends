// import React from "react";
// import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
// import store from "#/redux/store";
import { filterRobots } from "#/utils/app-utils";
import { CardList, ErrorBoundary, Header, Scroll } from "#/components";
import { Robot } from "#/types";

const robots: Array<Robot> = [
  { name: "Alice", email: "alice@mail.com", id: 123 },
  { name: "Bob", email: "bob@mail.com", id: 456 },
  { name: "Charlie", email: "charlie@mail.com", id: 789 },
];

export default function Home() {
  // const { data: robots, error, isLoading } = useGetRobotsQuery();
  // const searchTerm = useAppSelector(getSearchTerm);
  const isLoading = false;
  const error = false;
  const searchTerm = "";

  if (isLoading) return <h1 className="f1">Loading...</h1>;
  if (error) return <h1 className="f1">Something went wrong</h1>;

  const filteredRobots = filterRobots(robots, searchTerm);

  return (
    <>
      <Header />
      <main>
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </main>
    </>
  );
}

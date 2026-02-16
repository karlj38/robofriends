import "./App.css";
import { CardList, ErrorBoundary, Header, Scroll } from "../../components";
import { useGetRobotsQuery } from "../../redux/services/robotsService";
import type { Robot } from "../../types";
import { useAppSelector } from "../../redux/hooks";
import { getSearchTerm } from "../../redux/slices/searchSlice";

export function filterRobots(
  robots: Array<Robot> | undefined,
  searchTerm: string,
): Array<Robot> {
  if (!robots) return [];

  return robots.filter((robot) =>
    robot.name.toLowerCase().includes(searchTerm),
  );
}

export default function App() {
  const { data: robots, error, isLoading } = useGetRobotsQuery();
  const searchTerm = useAppSelector(getSearchTerm);

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

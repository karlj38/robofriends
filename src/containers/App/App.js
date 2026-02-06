import { useSelector } from "react-redux";
import "./App.css";
import { CardList, ErrorBoundary, Header, Scroll } from "../../components";
import { useGetRobotsQuery } from "../../services/robotsService";

export function filterRobots(robots, searchTerm) {
  return robots.filter((robot) =>
    robot.name.toLowerCase().includes(searchTerm),
  );
}

export default function App() {
  const { data: robots, error, isLoading } = useGetRobotsQuery();
  const { searchTerm } = useSelector((state) => state.searchSlice);

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

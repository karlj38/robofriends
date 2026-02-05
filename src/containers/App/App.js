import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { CardList, ErrorBoundary, Header, Scroll } from "../../components";
import { fetchRobots } from "../../slices/robotsSlice";

export function filterRobots(robots, searchTerm) {
  return robots.filter((robot) =>
    robot.name.toLowerCase().includes(searchTerm),
  );
}

export default function App() {
  const dispatch = useDispatch();
  const { isPending, error, robots } = useSelector(
    (state) => state.robotsSlice,
  );
  const { searchTerm } = useSelector((state) => state.searchSlice);
  const filteredRobots = filterRobots(robots, searchTerm);

  useEffect(() => {
    dispatch(fetchRobots());
  }, [dispatch]);

  if (isPending) return <h1 className="f1">Loading...</h1>;
  if (error) return <h1 className="f1">Something went wrong</h1>;

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

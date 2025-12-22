import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { CardList, ErrorBoundary, Search, Scroll } from "../../components";
import { fetchRobots } from "../../slices/robotsSlice";
import { setSearch } from "../../slices/searchSlice";

export default function App() {
  const dispatch = useDispatch();
  const { isPending, error, robots } = useSelector(
    (state) => state.robotsSlice
  );
  const { searchTerm } = useSelector((state) => state.searchSlice);

  const onSearchChange = (event) => dispatch(setSearch(event.target.value));

  const filteredRobots = robots.filter((robot) =>
    robot.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    dispatch(fetchRobots());
  }, [dispatch]);

  if (isPending) return <h1 className="f1">Loading...</h1>;
  if (error) return <h1 className="f1">Something went wrong</h1>;

  return (
    <>
      <header>
        <h1 className="f1">RoboFriends</h1>
        <Search searchChange={onSearchChange} />
      </header>
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

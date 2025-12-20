import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { CardList, ErrorBoundary, Search, Scroll } from "../../components";
import { searchAction } from "../../actions";

export default function App() {
  const dispatch = useDispatch();
  const [robots, setRobots] = useState([]);
  const searchTerm = useSelector((state) => state.searchTerm);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setRobots(users));
  }, []);

  const onSearchChange = (event) => dispatch(searchAction(event.target.value));

  const filteredRobots = robots.filter((robot) =>
    robot.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return !robots.length ? (
    <h1 className="f1">Loading...</h1>
  ) : (
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

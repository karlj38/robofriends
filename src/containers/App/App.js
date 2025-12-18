import { useEffect, useState } from "react";
import "./App.css";
import { CardList, ErrorBoundary, Search, Scroll } from "../../components";

export default function App() {
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setRobots(users));
  }, []);

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const filteredRobots = robots.filter((robot) =>
    robot.name.toLowerCase().includes(searchField.toLowerCase())
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

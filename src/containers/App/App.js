import { Component } from "react";
import "./App.css";
import { CardList, ErrorBoundary, Search, Scroll } from "../../components";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { searchField, robots } = this.state;

    const filteredRobots = robots.filter((robot) =>
      robot.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return !robots.length ? (
      <h1 className="f1">Loading...</h1>
    ) : (
      <>
        <header>
          <h1 className="f1">RoboFriends</h1>
          <Search searchChange={this.onSearchChange} />
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
}

import { Component } from "react";
import "./App.css";
import CardList from "../CardList/CardList";
import Search from "../Search/Search";
import Scroll from "../Scroll/Scroll";

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
    if (!this.state.robots.length) {
      return <h1 className="f1">Loading...</h1>;
    }

    const filteredRobots = this.state.robots.filter((robot) =>
      robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    );

    return (
      <>
        <header>
          <h1 className="f1">RoboFriends</h1>
          <Search searchChange={this.onSearchChange} />
        </header>
        <main>
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </main>
      </>
    );
  }
}

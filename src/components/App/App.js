import { Component } from "react";
import "./App.css";
import { robots } from "../../robots";
import CardList from "../CardList/CardList";
import Search from "../Search/Search";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      robots,
      searchField: "",
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robot) =>
      robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    );

    return (
      <>
        <header className="tc">
          <h1 className="f1">RoboFriends</h1>
          <Search searchChange={this.onSearchChange} />
        </header>
        <main className="tc">
          <CardList robots={filteredRobots} />
        </main>
      </>
    );
  }
}

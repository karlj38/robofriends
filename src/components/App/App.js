import { Component } from "react";
import { robots } from "../../robots";
import CardList from "../CardList/CardList";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      robots,
    };
  }

  render() {
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <CardList robots={this.state.robots} />
      </div>
    );
  }
}

import { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateOfBirth: "01/01/2000",
      name: "Karthi Gollakota",
      height: "5.10",
      weight: 78,
      data: {
        id: "1",
        tasks: [
          "wake up in the morning",
          "exercise",
          "work hard",
          { performance: 100 },
        ],
      },
      childCallsCount: 0,
    };
  }

  syncWithChildState = (value) => {
    this.setState({ childCallsCount: value });
  };

  render() {
    return (
      <div className="parent">
        <Child
          updateParentCountState={this.syncWithChildState}
          userDetails={this.state}
          length={this.state.length}
          newName={this.state.name}
          {...this.state}
        />
      </div>
    );
  }
}
export default Parent;

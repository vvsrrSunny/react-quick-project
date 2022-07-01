import { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      length: 10,
      name: "Raj",
      data: { id: "234", listValues: [11, 22, 33, 44] },
      childCallsCount: 0,
    };
  }

  updateChildState(value = 0) {
    let currentCount = this.state.childCallsCount;
    currentCount++;
    this.setState({ childCallsCount: currentCount });
  }

  render() {
    return (
      <div className="parent">
        <Child
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

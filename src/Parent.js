import { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
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
              { performancePercentage: 100 },
            ],
          },
        },
      ],
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
          {...this.state}
        />
      </div>
    );
  }
}
export default Parent;

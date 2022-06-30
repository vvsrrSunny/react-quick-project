import { Component } from "react";
import Child from "./child";
class Parent extends Component {
  render() {
    return (
      <div className="parent">
        <Child />
      </div>
    );
  }
}
export default Parent;

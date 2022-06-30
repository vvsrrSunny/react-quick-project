import { Component } from "react";
import Child from "./child";
class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      length: 10,
      name: "Raj",
      data: { id: "234", listValues: [11, 22, 33, 44] },
    };
  }
  render() {
    return (
      <div className="parent">
        <Child userDetails = {this.state} length = {this.state.length} name = {this.state.name}/>
      </div>
    );
  }
}
export default Parent;

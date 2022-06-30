import { Component } from "react";

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {...this.props};
  }
  render() {
    return (
      <div className="app">
        <h1>{this.state.userDetails.name} this is testing </h1>
        <h1>{this.state.newName} this is testing </h1>
      </div>
    );
  }
}
export default Child;

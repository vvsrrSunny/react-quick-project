import { Component } from "react";

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {...this.props};
    this.props.updateParentCountState('12');
  }
  render() {
    return (
      <div className="app">
        <h1>{this.state.userDetails.name} this is testing </h1>
        <h1>{this.state.newName} this is testing </h1>
        <button>{this.state.newName} this is testing </button>
      </div>
    );
  }
}
export default Child;

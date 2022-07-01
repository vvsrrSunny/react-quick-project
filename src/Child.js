import { Component } from "react";

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {...this.props};    
  }

  onclickOfButton = () => {
    this.props.updateParentCountState('12');
  }
  render() {
    return (
      <div className="app">
        <h1>{this.state.userDetails.name} this is testing </h1>
        <h1>{this.state.newName} this is testing </h1>
        <button onClick={this.onclickOfButton}>Click me and check the parent count {this.state.userDetails.childCallsCount}</button>
      </div>
    );
  }
}
export default Child;

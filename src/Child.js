import { Component } from "react";

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props, numberOfClicks: 0 };
  }

  onclickOfButton = () => {
    this.updateTheClicksState();

    this.props.updateParentCountState(this.state.numberOfClicks);
  };

  updateTheClicksState = () => {
    this.setState({ numberOfClicks: this.state.numberOfClicks + 1 });
  };

  render() {
    return (
      <div className="app">
        <h1>{this.state.userDetails.name} this is testing </h1>
        <h1>{this.state.newName} this is testing </h1>
        <button onClick={this.onclickOfButton}>
          Click me and check the parent count
          {this.state.numberOfClicks}
        </button>
        <span>this count at the parent props {this.props.childCallsCount}</span>
      </div>
    );
  }
}
export default Child;

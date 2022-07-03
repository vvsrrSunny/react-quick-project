import { Component } from "react";
import Text from "./Text";

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
        <div class="flex flex-col text-center">
          <Text name="Persons name" value={this.props.data[0].name}>
          </Text>
          <span>data of birth {this.props.data[0].dateOfBirth} </span>
          <span>{this.props.data[0].weight} this is testing </span>
          <span>{this.state.newName} this is testing </span>
        </div>
        <button onClick={this.onclickOfButton}>
          Click me and check the parent count {this.state.numberOfClicks}
        </button>
        <span>this count at the parent props {this.props.childCallsCount}</span>
      </div>
    );
  }
}
export default Child;

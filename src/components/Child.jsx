import { Component } from "react";
import Text from "./Text";

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props, numberOfClicks: 0 };
  }

  onclickOfButton = () => {
    this.updateTheClicksState();
  };

  updateTheClicksState = () => {
    this.setState({ numberOfClicks: this.state.numberOfClicks + 1 }, () => {
      this.props.updateParentCountState(this.state.numberOfClicks);
    });
  };

  render() {
    return (
      <div className="child">
        <div className="flex flex-col text-center bg-slate-200 p-4">
          <Text
            className="text-red-600"
            name="Persons name"
            value={this.props.data[0].name}
          ></Text>
          <Text
            name="data of birth"
            value={this.props.data[0].dateOfBirth}
          ></Text>
          <Text name="Weight" value={this.props.data[0].weight}></Text>
          <Text name="Height" value={this.props.data[0].height}></Text>
        </div>
        <div className="p-4">
          <button onClick={this.onclickOfButton}>
            Click me and check the parent count {this.state.numberOfClicks}
          </button>
          <span>
            this count at the parent props {this.props.childCallsCount}
          </span>
        </div>
      </div>
    );
  }
}
export default Child;

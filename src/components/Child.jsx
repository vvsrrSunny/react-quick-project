import { Component } from "react";
import Button from "./Button";
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
      <div className="child bg-slate-200 p-4">
        <div className="flex flex-col text-center pb-5">
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
        <div className=" flex flex-col pt-4 space-y-3 items-center">
          <span> Number of times the button was clicked (data at child from button ) : <span className="bg-green-300 p-1  rounded-full">{this.state.numberOfClicks}</span></span>
          <span> Number of times the button was clicked at (data at parent from child ) : <span className="bg-green-300 p-1 rounded-full">{this.state.numberOfClicks}</span></span>
          <Button onClick={this.onclickOfButton}></Button>
          <button onClick={this.onclickOfButton}>
            Click me and check the parent count (recorder by child ){this.state.numberOfClicks}
          </button>
        </div>
      </div>
    );
  }
}
export default Child;

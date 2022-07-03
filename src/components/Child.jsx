import { Component } from "react";
import Button from "./Button";
import PersonDetails from "./PersonDetails";

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props,
      numberOfClicks: 0,
      isFourMultiple: true,
      isFiveMultiple: true,
    };
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
        <PersonDetails {...this.state} />
        <div className=" flex flex-col pt-4 space-y-3 items-center">
          <span>
            {" "}
            Number of times the button was clicked (data at child from button )
            :{" "}
            <span className="bg-green-300 py-1 px-2  rounded-full">
              {this.state.numberOfClicks}
            </span>
          </span>
          <span>
            {" "}
            Number of times the button was clicked at (data at parent from child
            ) :{" "}
            <span className="bg-green-300 py-1 px-2 rounded-full">
              {this.state.numberOfClicks}
            </span>
          </span>
          <Button onClick={this.onclickOfButton}></Button>
          <button onClick={this.onclickOfButton}>
            Click me and check the parent count (recorder by child )
            {this.state.numberOfClicks}
          </button>
          <span className={`p-2 bg-teal-500 rounded-md font-semibold`}>
            {" "}
            This is 4 multiple!
          </span>
          <span className={`p-2 bg-teal-500 rounded-md font-semibold`}>
            {" "}
            This is 5 multiple!
          </span>
        </div>
      </div>
    );
  }
}
export default Child;

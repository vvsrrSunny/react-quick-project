import { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        Button
      </button>
    );
  }
}

export default Button;

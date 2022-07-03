import { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="h-16 bg-blue-400 px-20 flex items-center">
        <div className="px-20 ">
          <span className="p-2 bg-slate-500 rounded-md text-center">Home</span>
        </div>
      </div>
    );
  }
}

export default Header

import { Component } from "react";
import "./App.css";
import Header from "./components/Header";
class Child extends Component {
    constructor(props) {
        super(props);
        this.state = this.props;
    }
  render() {
    return (
      <div className="app">
        <Header />
        <h1>{this.state.name} this is testing </h1>
      </div>
    );
  }
}
export default Child;

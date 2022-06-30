import { Component } from "react";
import "./App.css";
import Header from "./components/Header";
class Child extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <h1>{this.sayHello("sunny")}</h1>
      </div>
    );
  }
}
export default Child;

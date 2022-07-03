import { Component } from "react";
import "./App.css";
import Parent from "./Parent";
class App extends Component {
  sayHello(name) {
    return `hello ${name}`;
  }
  render() {
    return (
      <div className="app">
        <Parent />
        <h1>{this.sayHello("sunny")}</h1>
      </div>
    );
  }
}
export default App;

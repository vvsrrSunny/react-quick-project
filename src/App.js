import { Component } from "react";
import "./App.css";
import Child from "./child";
import Header from "./components/Header";
class App extends Component {
  sayHello(name) {
    return `hello ${name}`;
  }
  render() {
    return (
      <div className="app">
        <Header />
        <Child />
        <h1>{this.sayHello("sunny")}</h1>
      </div>
    );
  }
}
export default App;

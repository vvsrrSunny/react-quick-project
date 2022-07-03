import { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Parent from "./components/Parent";
class App extends Component {
  sayHello(name) {
    return `hello ${name}`;
  }
  render() {
    return (
      <div className="app">
        <Header />
        <Parent />
      </div>
    );
  }
}
export default App;

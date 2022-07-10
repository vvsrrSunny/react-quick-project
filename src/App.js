import { Component } from "react";
import "./App.css";
import UsersPage from "./components/UsersPage";
class App extends Component {
  sayHello(name) {
    return `hello ${name}`;
  }
  render() {
    return (
      <div className="app">
        <UsersPage />
      </div>
    );
  }
}
export default App;

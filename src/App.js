import { Component } from "react";
import "./App.css";
import AppLayout from "./components/AppLayout";
class App extends Component {
  sayHello(name) {
    return `hello ${name}`;
  }
  render() {
    return (
      <div className="app">
        <AppLayout> 
          
        </AppLayout>
      </div>
    );
  }
}
export default App;

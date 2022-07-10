import { Component } from "react";
import "./App.css";
import AppLayout from "./components/AppLayout";
import UsersTable from "./components/UsersTable";
class App extends Component {
  sayHello(name) {
    return `hello ${name}`;
  }
  render() {
    return (
      <div className="app">
        <AppLayout>
            <UsersTable></UsersTable>
        </AppLayout>
      </div>
    );
  }
}
export default App;

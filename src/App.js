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
        <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
              {/* Replace with your content */}
              <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
                <div className="border-4 border-white rounded-lg h-96" />

              </div>
              {/* /End replace */}
            </div>
        </AppLayout>
      </div>
    );
  }
}
export default App;

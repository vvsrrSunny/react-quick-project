import { Component } from "react";
import "./App.css";
import AppLayout from "./components/AppLayout";
import UsersTable from "./components/UsersTable";
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      people: [
        {
          name: 'Matt',
          title: 'Team Lead',
          email: 'Matt@example.com',
          role: 'Member',
        },
        {
          name: 'Joush',
          title: 'Senior Front-end Developer',
          email: 'Joush@example.com',
          role: 'Member',
        },
        {
          name: 'Sunny Varanasi',
          title: 'Software Developer',
          email: 'sunny.varanasi@example.com',
          role: 'Member',
        },
        {
          name: 'sam',
          title: 'Software Developer',
          email: 'Sam@example.com',
          role: 'Member',
        },
        {
          name: 'Alex',
          title: 'Software Developer',
          email: 'Alex@example.com',
          role: 'Member',
        },
        {
          name: 'Ben',
          title: 'Senior Software Developer',
          email: 'Ben@example.com',
          role: 'Member',
        },
      ],
    };
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

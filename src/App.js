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
          id: 1,
          name: 'Matt',
          title: 'Team Lead',
          email: 'Matt@example.com',
          role: 'Member',
        },
        {
          id: 2,
          name: 'Josh',
          title: 'Senior Front-end Developer',
          email: 'Joush@example.com',
          role: 'Member',
        },
        {
          id: 3,
          name: 'Sunny',
          title: 'Software Developer',
          email: 'sunny@example.com',
          role: 'Member',
        },
        {
          id: 4,
          name: 'Sam',
          title: 'Software Developer',
          email: 'Sam@example.com',
          role: 'Member',
        },
        {
          id: 5,
          name: 'Alex',
          title: 'Software Developer',
          email: 'Alex@example.com',
          role: 'Member',
        },
        {
          id: 6,
          name: 'Ben',
          title: 'Senior Software Developer',
          email: 'Ben@example.com',
          role: 'Member',
        },
      ],
    };
  }
  updatePeople = (updatedPerson) => {
    const newPeopleState = this.state.people.map(person => {
      // 👇️ update the person if the id matches 
      if (person.id == updatedPerson.id) {
        return { ...updatedPerson };
      }
      console.log(person.id, updatedPerson.id);
      return person;
    });
    this.setState({people:newPeopleState});
  }

  render() {
    return (
      <div className="app">
        <AppLayout>
          <UsersTable updatePeople={this.updatePeople} people={this.state.people}></UsersTable>
        </AppLayout>
      </div>
    );
  }
}
export default App;

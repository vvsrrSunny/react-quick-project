import { Component } from "react";
import React from "react";
import "./App.css";
import AppLayout from "./components/AppLayout";
import UsersTable from "./components/UsersTable";
class App extends Component {

  constructor(props) {
    super(props);
    this.usersTable = React.createRef();

    this.state = {
      peopleCount: 6,
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

  addOrUpdatePeople = (newOrUpdatedPerson) => {
    if (newOrUpdatedPerson.id == null) {
      this.createPerson(newOrUpdatedPerson);
      return;
    }

    this.updatePerson(newOrUpdatedPerson);
  };

  updatePerson = (updatedPerson) => {
    const newPeopleState = this.state.people.map(person => {
      // 👇️ update the person if the id matches 
      if (person.id == updatedPerson.id) {
        return { ...updatedPerson };
      }
      return person;
    });

    this.setState({ people: newPeopleState });

    // close the slider
    this.usersTable.current.closeSlider();
  };

  createPerson = (newPerson) => {
    console.log(newPerson);
    this.setState({ peopleCount: ++this.state.peopleCount });
    newPerson.id = this.state.peopleCount;

    this.setState({ people: [...this.state.people, newPerson] });
    // close the slider
    this.usersTable.current.closeSlider();
  };

  addUser = () => {
    // close the slider
    this.usersTable.current.openSliderForNewUser();
  }
  render() {
    return (
      <div className="app">
        <AppLayout addUser={this.addUser}>
          <UsersTable ref={this.usersTable} addOrUpdatePeople={this.addOrUpdatePeople} people={this.state.people} updatedPeople={(newPeopleList)=> this.setState({people:newPeopleList})}></UsersTable>
        </AppLayout>
      </div>
    );
  }
}
export default App;

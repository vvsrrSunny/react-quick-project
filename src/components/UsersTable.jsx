import { Component } from "react"
import React from "react"
import TableCell from "./TableCell";
import TableHeaderCell from "./TableHeaderCell";
import TableLayout from "./TableLayout";
import SliderLayout from "./SliderLayout";
import TableCellEdit from "./TableCellEdit";

export default class UserTable extends Component {
  constructor(props) {
    super(props);
    this.sliderRef = React.createRef();
  }
  openSlider = () => {
    // this works
    // this.sliderRef.current.setState({open:true});
    this.sliderRef.current.open();
  };
  render() {


    return (
      <div>
        <TableLayout>
          <TableLayout.Header>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Title</TableHeaderCell>
            <TableHeaderCell>Email</TableHeaderCell>
            <TableHeaderCell>Role</TableHeaderCell>
            <th scope="col" className="relative py-3 pl-3 pr-4 sm:pr-6">
              <span className="sr-only">Edit</span>
            </th>
          </TableLayout.Header>
          <TableLayout.Body>
            {this.props.people.map((person) => (
              <tr key={person.email}>
                <TableCell fontSize="font-medium" paddingXAxis="pl-4 pr-3 sm:pl-6" textColor="text-gray-900">{person.name}</TableCell>
                <TableCell>{person.title}</TableCell>
                <TableCell>{person.email}</TableCell>
                <TableCell>{person.role}</TableCell>
                <TableCellEdit person={person}></TableCellEdit>
              </tr>
            ))}
          </TableLayout.Body>
        </TableLayout>
        <SliderLayout ref={this.sliderRef} />
      </div>
    );
  }
}

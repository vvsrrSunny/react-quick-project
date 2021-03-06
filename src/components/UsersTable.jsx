import { Component } from "react"
import React from "react"
import TableCell from "./TableCell";
import TableHeaderCell from "./TableHeaderCell";
import TableLayout from "./TableLayout";
import TableCellEdit from "./TableCellEdit";
import TableSlider from "./TableSlider";

export default class UserTable extends Component {
  constructor(props) {
    super(props);
    this.sliderLayoutRef = React.createRef();
    this.buttonRef = React.createRef();
  }

  // edit table on click callback
  onCellClick = () => {
    // this.sliderLayoutRef.current.open();
    console.log(this.sliderLayoutRef.current.open());
  }

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
                <TableCellEdit person={person} onCellClick={this.onCellClick}></TableCellEdit>
              </tr>
            ))}
          </TableLayout.Body>
        </TableLayout>
        <TableSlider ref={ this.sliderLayoutRef} ></TableSlider>
      </div>
    );
  }
}

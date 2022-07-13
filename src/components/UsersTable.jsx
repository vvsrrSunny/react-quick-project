import { Component } from "react"
import TableCell from "./TableCell";
import TableHeaderCell from "./TableHeaderCell";
import TableLayout from "./TableLayout";

export default class UserTable extends Component {
  render() {
    return (
      <div>
        <TableLayout>
          <thead className="bg-gray-50">
            <tr>
              <TableHeaderCell>Name</TableHeaderCell>
              <TableHeaderCell>Title</TableHeaderCell>
              <TableHeaderCell>Email</TableHeaderCell>
              <TableHeaderCell>Role</TableHeaderCell>
              <th scope="col" className="relative py-3 pl-3 pr-4 sm:pr-6">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {this.props.people.map((person) => (
              <tr key={person.email}>
                <TableCell fontSize="font-medium" paddingXAxis="pl-4 pr-3 sm:pl-6" textColor="text-gray-900">{person.name}</TableCell>
                <TableCell>{person.title}</TableCell>
                <TableCell>{person.email}</TableCell>
                <TableCell>{person.role}</TableCell>
                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                  <a href="#" className="text-indigo-600 hover:text-indigo-900">
                    Edit<span className="sr-only">, {person.name}</span>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </TableLayout>
      </div>
    );
  }
}

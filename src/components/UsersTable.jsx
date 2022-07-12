import { Component } from "react"
import TableLayout from "./TableLayout";

export default class UserTable extends Component {
  render() {
    return (
      <div>
        <TableLayout>
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-6"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
              >
                Title
              </th>
              <th
                scope="col"
                className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
              >
                Email
              </th>
              <th
                scope="col"
                className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
              >
                Role
              </th>
              <th scope="col" className="relative py-3 pl-3 pr-4 sm:pr-6">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {this.props.people.map((person) => (
              <tr key={person.email}>
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                  {person.name}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.title}</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.email}</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.role}</td>
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

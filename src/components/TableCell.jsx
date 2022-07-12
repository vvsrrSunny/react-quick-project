import { Component } from "react";

export default class TableCell extends Component {
    render() {
        return (
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                {this.props.children}
            </td>
        );
    }
}
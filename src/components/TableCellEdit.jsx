import { Component } from "react";

export default class TableCellEdit extends Component {
    cellClicked = () => {
        this.props.onCellClick();
    }
    render() {
        return (
            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                <a href="#" onClick={this.cellClicked} className="text-indigo-600 hover:text-indigo-900">
                    Edit<span className="sr-only">, {this.props.person.name}</span>
                </a>
            </td>
        )
    }
}
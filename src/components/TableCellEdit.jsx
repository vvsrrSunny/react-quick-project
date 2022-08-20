import { Component } from "react";

export default class TableCellEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonColor: this.props.buttonColor ?? 'indigo',
            buttonName: this.props.buttonName ?? 'Edit'
        };
    }
    cellClicked = () => {
        this.props.onCellClick(this.props.person);
    }
    render() {
        return (
            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                <a href="#" onClick={this.cellClicked} className={`text-${this.state.buttonColor}-600 hover:text-${this.state.buttonColor}-900`}>
                    {this.state.buttonName}<span className="sr-only">, {this.props.person.name}</span>
                </a>
            </td>
        )
    }
}
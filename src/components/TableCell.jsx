import { Component } from "react";

export default class TableCell extends Component {
    render() {
        return (
            <td className={`whitespace-nowrap px-3 py-4 ${this.props.fontSize} text-sm text-gray-500 `}>
                {this.props.children}
            </td>
        );
    }
}

TableCell.defaultProps = {
    fontSize: null
  };
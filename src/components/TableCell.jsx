import { Component } from "react";

export default class TableCell extends Component {
    render() {
        return (
            <td className={`whitespace-nowrap ${this.props.paddingXAxis} py-4 ${this.props.fontSize} text-sm ${this.props.textColor} ${this.props.className}`}>
                {this.props.children}
            </td>
        );
    }
}

TableCell.defaultProps = {
    fontSize: null,
    paddingXAxis: 'px-3', 
    textColor: 'text-gray-500',
    ClassName: null,

  };
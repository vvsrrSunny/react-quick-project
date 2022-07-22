import { Component } from "react";
import TableLayout from "./TableLayout";

export default class TableSlider extends Component {
    render() {
        return (
            <TableLayout ref={this.props.ref}></TableLayout>
        )
    }
}
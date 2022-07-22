import { Component } from "react";
import React from "react"
import SliderLayout from "./SliderLayout";
class TableSlider extends Component {
    render() {
        return (
            <SliderLayout ref={this.props.innerRef}></SliderLayout>
        )
    }
}

export default React.forwardRef((props, ref) => <TableSlider
    innerRef={ref} {...props}
/>);
import { Component } from "react";
import React from "react"
import SliderLayout from "./SliderLayout";
class TableSlider extends Component {
    render() {
        return (
            <SliderLayout ref={this.props.sliderLayoutRef}>
                
            </SliderLayout>
        )
    }
}

export default React.forwardRef((props, sliderLayoutRef) => <TableSlider
sliderLayoutRef={sliderLayoutRef} {...props}
/>);

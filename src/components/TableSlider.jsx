import { Component } from "react";
import React from "react"
import SliderLayout from "./SliderLayout";
const TableSlider = (props) => {
        return (
            <SliderLayout ref={props.sliderLayoutRef}>
                
            </SliderLayout>
        )
}

export default React.forwardRef((props, sliderLayoutRef) => <TableSlider
sliderLayoutRef={sliderLayoutRef} {...props}
/>);

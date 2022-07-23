import { Component } from "react";
import React from "react"
import SliderLayout from "./SliderLayout";
function TableSlider(props) {
        return (
            <SliderLayout ref={props.sliderLayoutRef}>
                
            </SliderLayout>
        )
}

export default TableSlider = React.forwardRef((props, sliderLayoutRef) => { return (
    <SliderLayout ref={sliderLayoutRef}>
        
    </SliderLayout>
)});

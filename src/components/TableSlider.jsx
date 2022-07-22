import { Component } from "react";
import React from "react"
import SliderLayout from "./SliderLayout";
class TableSlider extends Component {
    render() {
        return (
            <>
                <SliderLayout ref={this.props.sliderLayoutRef}>

                </SliderLayout>
                <button ref={this.props.buttonRef} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Button 2
                </button>
            </>
        )
    }
}

export default React.forwardRef((props, refs) => {
    const { sliderLayoutRef, buttonRef } = refs;
return(<TableSlider
    sliderLayoutRef={sliderLayoutRef} buttonRef={buttonRef} {...props}
/>)});
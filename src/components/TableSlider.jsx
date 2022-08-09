import React from "react"
import SliderLayout from "./SliderLayout";
import UserEdit from "./UserEdit";
const TableSlider = React.forwardRef((props, sliderLayoutRef) => {
    return (
        <SliderLayout ref={sliderLayoutRef}>
            <UserEdit />
        </SliderLayout>
    )
});

export default TableSlider;
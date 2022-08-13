import React, { useState } from 'react';
import SliderLayout from "./SliderLayout";
import UserEdit from "./UserEdit";
const TableSlider = React.forwardRef((props, sliderLayoutRef) => {

    const [editPerson, setEditPerson] = useState({...props.person});
    const updatedPerson = (person) => {
        setEditPerson(person);
      }
    return (
        <SliderLayout ref={sliderLayoutRef}>
            <UserEdit setEditPerson = {updatedPerson} person = {props.person}/>
        </SliderLayout>
    )
});

export default TableSlider;
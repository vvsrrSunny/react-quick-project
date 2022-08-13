import React, { useState } from 'react';
import SliderLayout from "./SliderLayout";
import UserEdit from "./UserEdit";
const TableSlider = React.forwardRef((props, sliderLayoutRef) => {

    const [editPerson, setEditPerson] = useState(props.person);
    // const updatedPerson = (person) => {
    //     setEditPerson(person);
    // }

    return (
        <SliderLayout ref={sliderLayoutRef} save={() => props.updatePeople(editPerson)}>
            <UserEdit setEditPerson={(person) => setEditPerson(person)} person={props.person} />
        </SliderLayout>
    )
});

export default TableSlider;
import React, { useState } from 'react';
import SliderLayout from "./SliderLayout";
import UserEdit from "./UserEdit";
const TableSlider = React.forwardRef((props, sliderLayoutRef) => {

    const [editPerson, setEditPerson] = useState(props.person);
    const updatedPerson = (person) => {
        setEditPerson(person);
    }

    const savePerson = () => {
        props.updatePeople(editPerson);
    }
    return (
        <SliderLayout ref={sliderLayoutRef} save={savePerson}>
            <UserEdit setEditPerson={updatedPerson} person={props.person} />
        </SliderLayout>
    )
});

export default TableSlider;
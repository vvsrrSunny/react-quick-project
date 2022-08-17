import React, { useState } from 'react';
import SliderLayout from "./SliderLayout";
import UserAddAndEdit from "./UserAddAndEdit";
const TableSlider = React.forwardRef((props, sliderLayoutRef) => {

    const [editPerson, setEditPerson] = useState(props.person);

    return (
        <SliderLayout ref={sliderLayoutRef} save={() => props.updatePeople(editPerson)}>
            <UserAddAndEdit setEditPerson={(person) => setEditPerson(person)} person={props.person} />
        </SliderLayout>
    )
});

export default TableSlider;
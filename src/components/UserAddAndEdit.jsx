import React, { useState } from 'react';
import LabelAndInput from "./LabelAndInput";
const UserAddAndEdit = (props) => {
    const [editPerson, setEditPerson] = useState({ ...props.person });

    const updatedPerson = (person) => {
        setEditPerson(person);

        props.setEditPerson(person);
    }
    return (
        <div className="flex flex-col space-y-4 divide-y-2">
            <LabelAndInput editCallback={updatedPerson} personValueKey='name' value={props.person.name} person={editPerson} />
            <LabelAndInput editCallback={updatedPerson} personValueKey='title' value={props.person.title} person={editPerson} />
            <LabelAndInput editCallback={updatedPerson} personValueKey='email' value={props.person.email} person={editPerson} />
            <LabelAndInput editCallback={updatedPerson} personValueKey='role' value={props.person.role} person={editPerson} />
        </div>
    )
};

export default UserAddAndEdit;
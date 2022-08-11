import React, { useState } from 'react';
import LabelAndInput from "./LabelAndInput";
const UserEdit = (props) => {
    const [editedPerson, setEditedPerson] = useState({...props.person});

    const updatedPerson = (person) => {
        setEditedPerson(person);
      }
    return (
        <div className="flex flex-col space-y-4 divide-y-2">
            <LabelAndInput editCallback={updatedPerson} personValueKey='name' value={props.person.name} person={props.person}/>
            <LabelAndInput editCallback={updatedPerson} personValueKey='title' value={props.person.title} person={props.person}/>
            <LabelAndInput editCallback={updatedPerson} personValueKey='email' value={props.person.email} person={props.person}/>
            <LabelAndInput editCallback={updatedPerson} personValueKey='role' value={props.person.role} person={props.person}/>
        </div>
    )
};

export default UserEdit;
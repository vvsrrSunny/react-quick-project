import React from "react"
import LabelAndInput from "./LabelAndInput";
const UserEdit = (props) => {
    const setTxtLetter = (event) => {
        console.log(event.target.value);
    }
    return (
        <div className="flex flex-col space-y-4 divide-y-2">
            <LabelAndInput personValueKey='name' value={props.person.name} person={props.person}/>
            <LabelAndInput personValueKey='title' value={props.person.title} person={props.person}/>
            <LabelAndInput personValueKey='email' value={props.person.email} person={props.person}/>
            <LabelAndInput personValueKey='role' value={props.person.role} person={props.person}/>
        </div>
    )
};

export default UserEdit;
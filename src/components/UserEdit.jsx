import React from "react"
import LabelAndInput from "./LabelAndInput";
const UserEdit = (props) => {
    const setTxtLetter = (event) => {
        console.log(event.target.value);
    }
    return (

        <div className="flex flex-col space-y-4 divide-y-2">
            <LabelAndInput labelName='Name' value={props.person.name}/>
            <LabelAndInput labelName='Title' value={props.person.title}/>
            <LabelAndInput labelName='Email' value={props.person.email}/>
            <LabelAndInput labelName='Role' value={props.person.role}/>
        </div>
    )
};

export default UserEdit;
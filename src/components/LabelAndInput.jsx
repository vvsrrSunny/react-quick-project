import React, { useState } from 'react';
const LabelAndInput = (props) => {
    const [editedPerson, setEditedPerson] = useState(props.person);

    const setTxtLetter = (event) => {
        let tempPerson = editedPerson;
        tempPerson[props.personValueKey] = event.target.value;
        setEditedPerson(tempPerson);
        // make a call to the parent and let it know
        props.editCallback(editedPerson);
    }

    const capitalizeString = (data) => {
        return `${data[0].toUpperCase()}${data.slice(1)}`;
    }
    return (<div>
        <div className="flex justify-between mt-2">
            <label htmlFor="email" className="capitalize block text-sm font-medium text-gray-700">
                {props.personValueKey}
            </label>
        </div>
        <div className="mt-1">
            <input
                type="text"
                name={props.personValueKey}
                id={props.personValueKey}
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder={capitalizeString(props.personValueKey)}
                defaultValue={props.value}
                onChange={setTxtLetter}
                aria-describedby="email-optional"
            />
        </div>
    </div>)
};

export default LabelAndInput;
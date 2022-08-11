import React, { useState, useEffect } from 'react';
const LabelAndInput = (props) => {
    const [editedPerson, setEditedPerson] = useState({...props.person});

    const setTxtLetter = (event) => {
        let tempPerson = editedPerson;
        tempPerson[props.personValueKey] = event.target.value;
        setEditedPerson(...tempPerson);
        // make a call to the parent and let it know 
    }
    
    return (<div>
        <div className="flex justify-between mt-2">
            <label htmlFor="email" className="capitalize block text-sm font-medium text-gray-700">
                {props.personValueKey}
            </label>
        </div>
        <div className="mt-1">
            <input
                type="email"
                name="email"
                id="email"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="Name"
                defaultValue={props.person[props.personValueKey]}
                onChange={setTxtLetter}
                aria-describedby="email-optional"
            />
        </div>
    </div>)
};

export default LabelAndInput;
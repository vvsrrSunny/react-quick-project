import React, { useState, useEffect } from 'react';
const LabelAndInput = (props) => {
    const setTxtLetter = (event) => {
        console.log(props.person[props.key]);
    }
    // const [myKey, setMyKey] = useState("");
    // useEffect(() => {
    //     setMyKey = props.key;
        
    //   });

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
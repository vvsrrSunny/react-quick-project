import React from "react"
import TheInput from "./TheInput";
const UserEdit = (props) => {
    const setTxtLetter = (event) => {
        console.log(event.target.value);
    }
    return (

        <div className="flex flex-col  space-y-4 divide-y-2">
            <TheInput />
            <div>
                <div className="flex justify-between mt-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Title
                    </label>
                </div>
                <div className="mt-1">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder="you@example.com"
                        defaultValue={props.person.email}
                        onChange={setTxtLetter}
                        aria-describedby="email-optional"
                    />
                </div>
            </div>
        </div>
    )
};

export default UserEdit;
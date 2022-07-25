import React from "react"
import SliderLayout from "./SliderLayout";
const TableSlider = React.forwardRef((props, sliderLayoutRef) => {
    return (
        <SliderLayout ref={sliderLayoutRef}>
            <div className="flex justify-between">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                </label>
                <span className="text-sm text-gray-500" id="email-optional">
                    Optional
                </span>
            </div>
            <div className="mt-1">
                <input
                    type="email"
                    name="email"
                    id="email"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="you@example.com"
                    aria-describedby="email-optional"
                />
            </div>
        </SliderLayout>
    )
});

export default TableSlider;
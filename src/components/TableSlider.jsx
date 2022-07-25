import React from "react"
import SliderLayout from "./SliderLayout";
const TableSlider = React.forwardRef((props, sliderLayoutRef) => {
    return (
        <SliderLayout ref={sliderLayoutRef}>
            <div class="flex flex-col  space-y-4 divide-y-2">
            <div>
                <div className="flex justify-between mt-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Name
                    </label>
                </div>
                <div className="mt-1">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder="Name"
                        aria-describedby="email-optional"
                    />
                </div>
            </div>
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
                        aria-describedby="email-optional"
                    />
                </div>
            </div>
            </div>
        </SliderLayout>
    )
});

export default TableSlider;
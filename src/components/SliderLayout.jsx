/* This example requires Tailwind CSS v2.0+ */
import { Component, Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'

export default class SliderLayout extends Component {
    // const[open, setOpen] = useState(true)
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }
    }
    open = () => {
        this.setState({ open: true });
    }

    close = () => {
        this.setState({ open: false });
    }
    render() {
        return (
            <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Button 1
            </button>
        )
    }
}

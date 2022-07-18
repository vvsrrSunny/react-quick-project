import { Component } from "react";


function Header() {
    return null
}

function Body() {
    return null
}
export default class TableLayout extends Component {
    static Header = Header;
    static Body = Body;

    render() {
        const { children } = this.props;
        const header = children.find(el => el.type === Header);

        return (<div className="flex flex-col">
            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-300">
                                {header ? header.props.children : null}
                        </table>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
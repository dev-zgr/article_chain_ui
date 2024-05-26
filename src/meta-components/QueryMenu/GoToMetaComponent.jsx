import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const GoToMetaComponent = () => {
    const [blockID, setBlockID] = useState(1);
    const navigate = useNavigate();

    const onChangeHandler = (event) => {
        const inputValue = event.target.value;

        // Check if the input is not empty
        if (inputValue !== "") {
            // Check if the input is a valid positive integer or 0
            const intValue = parseInt(inputValue);
            // Check if the parsed value is a number and if it's a non-negative integer
            if (!isNaN(intValue) && Number.isInteger(intValue) && intValue >= 0) {
                // If it's a positive integer or 0, set the BlockID state
                setBlockID(intValue);
            } else {
                // If it's not a valid positive integer or 0, you can handle the error or take appropriate action
                console.log("Please enter a valid non-negative integer.");
                // You can also clear the BlockID state or keep it unchanged based on your requirement
            }
        } else {
            // If the input is empty, you can handle it accordingly
            setBlockID(inputValue);
        }
    }

    const onClick = () => {
        navigate(`/explore/${blockID}`);
    }

    return (
        <li className="flex-grow my-3">
            <div className="flex items-center">
                <input
                    onChange={onChangeHandler}
                    value={blockID}
                    className="block appearance-none w-full bg-white border border-slate-400 hover:border-sky-600 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-left"
                />
                <button
                    onClick={onClick}
                    className="ml-2 px-4 py-2 bg-sky-900 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                    Go
                </button>
            </div>
        </li>
    );
}

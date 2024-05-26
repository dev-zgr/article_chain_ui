export const QueryManagerAcceptButtonMetaComponent = ({label,setModal}) => {
    return (
        <li className="flex-grow my-3">
            <button onClick={setModal}
                    className={"w-full flex items-center justify-center rounded-md px-3 py-2  bg-green-800 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"}>
                {label}
            </button>

        </li>


    )
}
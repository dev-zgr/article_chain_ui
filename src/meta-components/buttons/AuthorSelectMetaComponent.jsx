export const AuthorSelectMetaComponent = ({options, setOptions}) => {

    const onChangeHandler = (e) => {
        setOptions(e.target.value);
    }

    return (

        <li className="flex-grow my-3">
            <select onChange={onChangeHandler}  className="block appearance-none w-full bg-white border border-slate-400 hover:border-sky-600 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-center">
                {
                    options.map((option) => {
                        return <option className="text-center text-slate-700 font-medium" value={option.value}>{option.name}</option>
                    })
                }
            </select>
        </li>
    )
}
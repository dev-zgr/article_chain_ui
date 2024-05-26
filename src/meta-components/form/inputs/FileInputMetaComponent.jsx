import {useState} from "react";
import {gridColInferior} from "../../../utilityfunctions/tailwind";

export const FileInputMetaComponent = ({name, label, placeholder, size, value ,...rest}) => {
    const [inputValue, setInputValue] = useState(false);

    const onChangeHandler = (event) => {
        console.log(event.target.files[0]);
            setInputValue(event.target.files[0]);

    }
    let className = gridColInferior(size);
    return (
        <div className={className}>
            <label htmlFor="username" className=" text-sm font-medium leading-6 text-slate-700">{label}</label>
            <div className="mt-2">
                <div
                    className="flex rounded-md shadow-sm ring-1 ring-inset text-slate-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-sky-800">
                    <input type="file" name={name} id={name} autoComplete="username" placeholder={placeholder}
                           onChange={onChangeHandler} {...rest}
                            className="block w-full border-0 bg-transparent py-1.5 pl-1 text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm sm:leading-6 font-medium "/>
                </div>
            </div>
        </div>

    )
}
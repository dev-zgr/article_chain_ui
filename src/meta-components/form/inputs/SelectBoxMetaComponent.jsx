import {gridColInferior} from "../../../utilityfunctions/tailwind";

export const SelectBoxMetaComponent = ({option ,name, label, placeholder, size, ...rest}) => {
    let className = gridColInferior(size);
    return (
        <div className={className}>
            <label htmlFor="username" className=" text-sm font-medium leading-6 text-slate-700">{label}</label>
            <div className="mt-2">
                <div
                    className="flex rounded-md shadow-sm ring-1 ring-inset text-slate-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-sky-800">
                    <select  name={name} placeholder={placeholder}
                        className="block w-full border-0 bg-transparent py-1.5 pl-1 text-slate-900 placeholder:text-slate-700 font-medium focus:ring-0 sm:text-sm sm:leading-6 justify-center" {...rest}>
                        {
                            option.map((option, index) => {
                                return <option value={option.value} key={index}>{option.name}</option>
                            })
                        }
                    </select>
                </div>

            </div>
        </div>
    )
}
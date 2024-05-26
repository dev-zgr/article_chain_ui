import {ItemCardRedirectMetaComponent} from "../buttons/ItemCardRedirectMetaComponent";

export const ItemCardMetaComponent = ({watermark, main, description, optional,author ,id,label ,...rest}) => {

    return (<li className={"group/item list-none hover:bg-slate-100 bg-white"}

                {...rest}>
        <article className="flex items-center space-x-6 p-6">
            <div className="flex-none rounded-2xl  text-2xl font-semibold p-4 self-center group-hover/item:bg-slate-300 bg-slate-100 text-stone-500">{watermark}</div>
            <div className="min-w-0 relative flex-auto">
                <h2 className="font-semibold text-slate-900 truncate pr-20">{main}</h2>
                <dl className="flex flex-wrap text-sm leading-6 font-medium">
                    {
                        optional &&
                        <div>
                            {optional}
                        </div>
                    }
                    {
                        author &&
                        <div className={"flex-none w-full font-normal max-w-2xl"}>
                            {author}
                        </div>
                    }
                    <div className="flex-none w-full font-normal max-w-2xl">
                        <dd className="text-slate-400 overflow-auto">{description}</dd>
                    </div>
                </dl>
            </div>
            <ItemCardRedirectMetaComponent label={label} link={id}/>
        </article>
    </li>)
}
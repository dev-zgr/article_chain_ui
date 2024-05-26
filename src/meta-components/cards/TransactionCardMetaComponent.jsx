import {useState} from "react";
import {DynamicTransactionDetailsMetaComponent} from "./DynamicTransactionDetailsMetaComponent";

export const TransactionCardMetaComponent = ({transaction, blockID}) => {
    const [showDetails, setShowDetails] = useState(false)
    const onChangeHandler = (e) => {
        e.preventDefault();
        setShowDetails(!showDetails)
    }
    return (
        <>
            <li className={"group/item list-none hover:bg-slate-100 bg-white"}>
                <article className="flex items-center space-x-6 p-6">
                    <div className="flex-none rounded-2xl  text-2xl font-semibold p-4 self-center group-hover/item:bg-slate-300 bg-slate-100 text-stone-500">{<span>Tx<sub>{transaction.tx_id}</sub></span>}</div>
                    <div className="min-w-0 relative flex-auto">
                        <h2 className="font-semibold text-slate-900 truncate pr-20">{`Transaction ${transaction.tx_id}`}</h2>
                        <dl className="flex flex-wrap text-sm leading-6 font-medium">
                            <div>
                                {`Transaction type: ${transaction['@type']}`}
                            </div>
                            <div className={"flex-none w-full font-normal max-w-2xl"}>
                                {`| timestamp: ${transaction.timestamp}`}
                            </div>
                            <div className="flex-none w-full font-normal max-w-2xl">
                                <dd className="text-slate-400 overflow-auto">{`Sender UUID: ${transaction.sender_uuid}`}</dd>
                            </div>
                        </dl>
                    </div>
                    <button onClick={onChangeHandler} className={"flex group-hover/item:visible items-center"}>
                        <div className="flex invisible hover:bg-slate-200 rounded-3xl  p-8 pt-2 pb-2 group-hover/item:visible items-center ">
                            <span className="group-hover/edit: text-gray-700">{`Details`}</span>
                            <svg className="inline-block  mt-px h-5 w-5 text-slate-400 transition group-hover/edit:translate-x-0.5 group-hover/edit:text-slate-500" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"></path>
                            </svg>
                        </div>
                    </button>
                </article>
            </li>
            {
                showDetails &&
                <DynamicTransactionDetailsMetaComponent transaction={transaction} blockID={blockID}/>
            }
        </>

    )
}
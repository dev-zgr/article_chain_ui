import {SubmissionCardMetaComponent} from "./SubmissionCardMetaComponent";
import {ReviewRequestMetaComponent} from "./ReviewRequestMetaComponent";
import {DecisionMetaComponent} from "./DecisionMetaComponent";

export const DynamicTransactionDetailsMetaComponent = ({transaction, blockID}) => {
    return (
        <article className={"p-6"}>
            <h3 className={"font-semibold text-slate-900 text-xl my-2"}>{`Transaction ${transaction.tx_id} Details`}</h3>
            <div className={"grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-4"}>
                <label>
                    <span className={"font-semibold text-slate-900"}>{`Tx ID: `}</span>
                </label>
                <span className={"text-slate-400"}>{transaction.tx_id}</span>
                <label>
                    <span className={"font-semibold text-slate-900"}>{`Block ID: `}</span>
                </label>
                <span className={"text-slate-400"}>{blockID}</span>
                <label>
                    <span className={"font-semibold text-slate-900"}>{`Transaction type: `}</span>
                </label>
                <span className={"text-slate-400"}>{transaction['@type']}</span>

                <label>
                    <span className={"font-semibold text-slate-900"}>{`Timestamp: `}</span>
                </label>
                <span className={"text-slate-400"}>{transaction.timestamp}</span>
                <div className={"grid grid-cols-3 col-span-3"}>
                    <label>
                        <span className={"font-semibold text-slate-900"}>{`Sender UUID: `}</span>
                    </label>
                    <span className={"text-slate-400 col-span-2 overflow-scroll"}>{transaction.sender_uuid}</span>
                </div>
            </div>
            {
                transaction['@type'] === "submitEntity" &&
                <>
                    <h3 className={"font-semibold text-slate-900 text-xl my-2"}>{`Submission Details`}</h3>
                    <SubmissionCardMetaComponent transaction={transaction}/>
                </>
            }
            {
                transaction['@type'] === "ReviewRequestEntity" &&
                <>
                    <h3 className={"font-semibold text-slate-900 text-xl my-2"}>{`Review Request Details`}</h3>
                    <ReviewRequestMetaComponent transaction={transaction}/>
                </>
            }
            {
                transaction['@type'] === "FinalDecisionEntity" &&
                <>
                    <h3 className={"font-semibold text-slate-900 text-xl my-2"}>{`Decision Details`}</h3>
                    <DecisionMetaComponent transaction={transaction}/>
                </>
            }
        </article>
    )
}
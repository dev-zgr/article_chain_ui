import {ReviewRequestMetaComponent} from "./ReviewRequestMetaComponent";
import {InfoCardMetaComponent} from "./InfoCardMetaComponent";

export const DecisionMetaComponent = ({transaction}) => {
    return (
        <>
            <ReviewRequestMetaComponent transaction={transaction}/>
            <h3 className={"font-semibold text-slate-900 text-xl my-2"}>{`Reviewer Results`}</h3>
            <div className={"grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-4"}>
                <InfoCardMetaComponent label={"Review Point"} value={`${transaction.decisionPoint}`}/>
                <InfoCardMetaComponent label={"Review Type"} value={`${transaction.review_type}`}/>
                <div className={"grid grid-cols-4 col-span-4"}>
                    <label>
                        <span className={"font-semibold text-slate-900"}>{`File Identifier`}</span>
                    </label>
                    <span
                        className={"text-slate-400 col-span-3 overflow-scroll"}>{transaction.fileIdentifier}</span>
                </div>
            </div>
        </>
    )
}
import {InfoCardMetaComponent} from "./InfoCardMetaComponent";

export const ReviewRequestMetaComponent = ({transaction}) => {
    return (
        <>
            <h3 className={"font-semibold text-slate-900 text-xl my-2"}>{`Reviewer Details`}</h3>
            <div className={"grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-4"}>
                <InfoCardMetaComponent label={"Name"} value={`${transaction.reviewer_name}`}/>
                <InfoCardMetaComponent label={"Email"} value={`${transaction.reviewer_email}`}/>
                <InfoCardMetaComponent label={"Research Field"} value={`${transaction.reviewerResearchField}`}/>
                <InfoCardMetaComponent label={"Decision"} value={`${transaction.acceptanceEnumDTO}`}/>
                <InfoCardMetaComponent label={"Manuscript ID"} value={`${transaction.manuscriptId}`}/>
            </div>
        </>
    )
}
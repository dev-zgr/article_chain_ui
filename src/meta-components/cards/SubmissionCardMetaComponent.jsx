import {InfoCardMetaComponent} from "./InfoCardMetaComponent";

export const SubmissionCardMetaComponent = ({transaction}) => {
    return (
        <>
            <div className={"grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-4"}>
                <InfoCardMetaComponent label={"Paper Title"} value={transaction.article.article_title}/>
                <InfoCardMetaComponent label={"Paper Type"} value={transaction.article.article_type}/>
                <InfoCardMetaComponent label={"Research Field"} value={transaction.article.article_resField}/>
                <InfoCardMetaComponent label={"Upload Date"} value={transaction.article.article_date}/>
                <InfoCardMetaComponent label={"Upload Date"} value={transaction.article.article_date}/>
                <InfoCardMetaComponent label={"Keywords"} value={transaction.article.article_keywords}/>
                <div className={"grid grid-cols-4 col-span-4"}>
                    <label>
                        <span className={"font-semibold text-slate-900"}>{`File Identifier`}</span>
                    </label>
                    <span
                        className={"text-slate-400 col-span-3 overflow-scroll"}>{transaction.article.fileIdentifier}</span>
                </div>
                <div className={"grid grid-cols-4 col-span-4"}>
                    <label>
                        <span className={"font-semibold text-slate-900"}>{`Abstract`}</span>
                    </label>
                    <span
                        className={"text-slate-400 col-span-3 overflow-scroll"}>{transaction.article.paperAbstract}</span>
                </div>


            </div>

                {
                    transaction.article.authors.map((author, index) => {
                        return (
                            <>
                                <h3 className={"font-semibold text-slate-900 text-xl my-2"}>{`Author ${index + 1}`}</h3>
                                <div className={"grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-4"}>
                                    <InfoCardMetaComponent label={"Name"} value={`${author.title} ${author.author_name}`}/>
                                    <InfoCardMetaComponent label={"Email"} value={`${author.title} ${author.email}`}/>
                                    <InfoCardMetaComponent label={"Department"} value={`${author.department} , ${author.institution}`}/>
                                    <InfoCardMetaComponent label={"Address"} value={`${author.address.state}, ${author.address.country}, ${author.address.zipCode}`}/>
                                </div>
                            </>
                        )})
                }


        </>
    )
}
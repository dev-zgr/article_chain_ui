import {ModalComponent} from "../../components/ModalComponent";
import {Form} from "react-router-dom";

export const ReviewTransactionInfoModal = ({toggleModal, header, message, transactionDetails}) => {
    return (
        <ModalComponent>
            <Form method={"POST"}>
                <input value={transactionDetails.reviewerName} name={"reviewerName"} className={"hidden"} onChange={()=>{}}/>
                <input value={transactionDetails.reviewerResearchField} name={"reviewerResearchField"} className={"hidden"} onChange={()=>{}}/>
                <input value={transactionDetails.reviewerEmail} name={"reviewerEmail"} className={"hidden"} onChange={()=>{}}/>
                <input value={transactionDetails.referringTxId} name={"referringTxId"} className={"hidden"} onChange={()=>{}}/>
                <input value={transactionDetails.acceptanceStatus} name={"acceptanceStatus"} className={"hidden"} onChange={()=>{}}/>

                <h1 className={"font-semibold leading-7 text-slate-900 text-xl"}>{header}</h1>
                <label htmlFor="username" className=" text-sm font-medium leading-6 text-slate-700">{message} </label>
                <div className="mt-6 flex items-center gap-x-6 self-end justify-self-end">
                    <button type="button" onClick={toggleModal}
                            className="text-sm font-semibold leading-6 text-slate-900 hover:underline underline-offset-2">Cancel
                    </button>
                    <button
                        className="rounded-md bg-sky-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Send Transaction
                    </button>
                </div>
            </Form>
        </ModalComponent>
    )
}
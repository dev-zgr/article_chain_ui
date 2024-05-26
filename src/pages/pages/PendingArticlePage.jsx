import {ListWrapperComponent} from "../../components/Wrappers/ListWrapperComponent";
import {ItemCardMetaComponent} from "../../meta-components/cards/ItemCardMetaComponent";
import {useLoaderData} from "react-router-dom";
import {genericLoader, prepareBody} from "../../utilityfunctions/APIHandling";
import {ConfirmationModalComponent} from "../../components/ConfirmationModalComponent";
import {useDispatch, useSelector} from "react-redux";
import {UIActions} from "../../store/store/UISlice";

export const PendingArticlePage = () => {
    const fetchedData = useLoaderData();
    const dispatch = useDispatch();
    const UIState = useSelector(state => state.UISlice);
    const trasactionState = useSelector(state => state.UISlice);
    const UserDetailSlice = useSelector(state => state.loginSlice);
    const extractedAuthors = (authors) => {
        let authorString = "";
        let start = true;
        for (let author of authors) {
            authorString += `${author.author_name}`
            if (!start) {
                authorString += "| ";
            }
        }
        return authorString;
    }

    const closeModal = () => {
        dispatch(UIActions.hideModal());
    }

    const formSubmissionHandler = (event,acceptanceStatus) =>{
        event.preventDefault();
            const requestBody = {
                "reviewerName": UserDetailSlice.accountDetails.name,
                "reviewerResearchField": UserDetailSlice.accountDetails.researchField,
                "reviewerEmail": UserDetailSlice.accountDetails.email,
                "referringTxId": UIState.tx_id,
                "acceptanceStatus": acceptanceStatus
            }

    }

    return (
        <>
            {
                UIState.showModal && UIState.opcode === 1 &&
                <ConfirmationModalComponent
                    header={"Accept Review"}
                    message={"Are you sure you want to reject this review offer ? This can't be undone!"}
                    toggleModal={closeModal}
                    onConfirm={(event) => {formSubmissionHandler(event,"ACCEPTED")}}
                />
            }
            {
                UIState.showModal && UIState.opcode === 2 &&
                <ConfirmationModalComponent
                    header={"Reject Review"}
                    message={"Are you sure you want to reject this review offer ? This can't be undone!"}
                    toggleModal={closeModal}
                    onConfirm={(event) => {formSubmissionHandler(event,"REJECTED")}}
                />
            }
            <div className={"max-w-8xl mx-auto px-4 sm:px-6 md:px-8 my-10"}>
                <ListWrapperComponent>
                    {
                        fetchedData.map((article, index) => {
                            return <ItemCardMetaComponent
                                watermark={<span>Tx<sub>{article.tx_id}</sub></span>}
                                main={article.article.article_title}
                                optional={`${article.article.article_type} - ${article.article.article_resField}/${article.article.article_keywords}`}
                                author={`${article.article.article_date} by: ${extractedAuthors(article.article.authors)}`}
                                description={`${article.article.paperAbstract} keywords: ${article.article.keywords}`}
                                id={article.tx_id}
                                key={index}
                                index={index}
                                label={"Details"}
                            />
                        })
                    }
                </ListWrapperComponent>
            </div>

        </>

    )
}


export async function loader({request, params}) {
    return genericLoader("/pending-submission", {});
}

export async function action({request, params}) {
    const fomrData= await request.formData();
    console.log(fomrData)
    console.log("Action called")
    console.log("Request: ", request)
    console.log("Params: ", params)
}
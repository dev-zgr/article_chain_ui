import {MainWrapperComponent} from "../../components/Wrappers/MainWrapperComponent";
import {QueryManagerButton} from "../../meta-components/buttons/QueryManagerButton";
import {
    QueryManagerDeleteButtonMetaComponent
} from "../../meta-components/buttons/QueryManagerDeleteButtonMetaComponent";
import {QueryManager} from "../../components/QueryManager";
import {
    QueryManagerAcceptButtonMetaComponent
} from "../../meta-components/buttons/QueryManagerAcceptButtonMetaComponent";
import {useActionData, useLoaderData, useNavigate} from "react-router-dom";
import {apiLoader, prepareURL} from "../../utilityfunctions/APIHandling";
import {API_CONFIG, MODAL_CODES} from "../../config/config";
import {MainCardWrapper} from "../../components/Wrappers/MainCardWrapper";
import {SectionHeaderMetaComponent} from "../../meta-components/form/sections/SectionHeaderMetaComponent";
import {InputSectionMetaComponent} from "../../meta-components/form/sections/InputSectionMetaComponent";
import {TextInputMetaComponent} from "../../meta-components/form/inputs/TextInputMetaComponent";
import {BlobInputMetaComponent} from "../../meta-components/form/inputs/BlobInputMetaComponent";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {UIActions} from "../../store/store/UISlice";
import {ReviewTransactionInfoModal} from "../../meta-components/modal/ReviewTransactionInfoModal";
import {InfoModalComponent} from "../../meta-components/modal/InfoModalComponent";

export const PendingArticleDetailPage = () => {
    const fetchedData = useLoaderData();
    const actionData = useActionData();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const UISlice = useSelector(state => state.UISlice);
    const accountSlice = useSelector(state => state.loginSlice);

    const reviewerDetails = {
        reviewerName: accountSlice.accountDetails.userName,
        reviewerResearchField: accountSlice.accountDetails.researchField,
        reviewerEmail: accountSlice.accountDetails.email,
        referringTxId: fetchedData.tx_id,
    }

    const closeModal = () => {
        dispatch(UIActions.hideModal());
    }

    const openModal = (opcode) => {
        dispatch(UIActions.showModal(opcode));
    }

    const toggleModal = () => {
        dispatch(UIActions.hideModal());
        navigate("..")
    }

    useEffect(() => {
        if (actionData === 201) {
            dispatch(UIActions.showModal(MODAL_CODES.REVIEW_REQUEST_201));
            setTimeout(() => {
                dispatch(UIActions.hideModal());
                navigate("..");
            }, 2000);
        } else if (actionData === 400) {
            dispatch(UIActions.showModal(MODAL_CODES.REVIEW_REQUEST_400));
        } else if (actionData === 500) {
            dispatch(UIActions.showModal(MODAL_CODES.REVIEW_REQUEST_500));
        }
    }, [actionData, dispatch, navigate]);

    return (
        <>
            {
                UISlice.showModal && UISlice.opcode === MODAL_CODES.REVIEW_REQUEST_ACCEPT_CONFIRMATION &&
                <ReviewTransactionInfoModal
                    header={"Are you sure to accept  transaction ? "}
                    message={`Please note that this action cannot be undone because the transaction will be send to ArticleChain Blockchain Network immediately.`}
                    toggleModal={closeModal}
                    transactionDetails ={{...reviewerDetails, acceptanceStatus: "ACCEPTED"}}
                />

            }
            {
                UISlice.showModal && UISlice.opcode === MODAL_CODES.REVIEW_REQUEST_REJECT_CONFIRMATION &&
                <ReviewTransactionInfoModal
                    header={"Are you sure to reject  transaction ? "}
                    message={`Please note that this action cannot be undone because the transaction will be send to ArticleChain Blockchain Network immediately.`}
                    toggleModal={closeModal}
                    transactionDetails ={{...reviewerDetails, acceptanceStatus: "REJECTED"}}

                />

            }
            {
                UISlice.showModal && UISlice.opcode === MODAL_CODES.REVIEW_REQUEST_201 &&
                <InfoModalComponent
                    header={"Transaction Sent Successfully"}
                    message={"We're redirecting you to pending reviews page!"}
                    toggleModal={toggleModal}
                />

            }
            {
                UISlice.showModal && UISlice.opcode === MODAL_CODES.REVIEW_REQUEST_400 &&
                <InfoModalComponent
                    header={"Bad Data"}
                    message={"Please check all the fields again!"}
                    toggleModal={toggleModal}
                />
            }
            {
                UISlice.showModal && UISlice.opcode === MODAL_CODES.REVIEW_REQUEST_500 &&
                <InfoModalComponent
                    header={"Internal Server Error"}
                    message={"Transaction couldn't sent, please try again later!"}
                    toggleModal={toggleModal}
                />
            }
            <MainWrapperComponent>
                <QueryManager>
                    <QueryManagerAcceptButtonMetaComponent label={"Accept Review"} setModal={() => openModal(MODAL_CODES.REVIEW_REQUEST_ACCEPT_CONFIRMATION)}/>
                    <QueryManagerDeleteButtonMetaComponent label={"Reject Review"} setModal={() => openModal(MODAL_CODES.REVIEW_REQUEST_REJECT_CONFIRMATION)}/>
                    <QueryManagerButton label={"Back"} to={".."}/>
                </QueryManager>
                {
                    fetchedData &&
                    <MainCardWrapper>
                        <SectionHeaderMetaComponent header={"Transaction"}/>
                        <InputSectionMetaComponent>
                            <TextInputMetaComponent
                                name={"Transaction ID"}
                                label={"Transaction ID"}
                                value={fetchedData.tx_id}
                                disabled={true}
                            />
                            <TextInputMetaComponent
                                name={"Timestamp"}
                                label={"Timestamp"}
                                value={fetchedData.timestamp}
                                disabled={true}
                            />
                            <TextInputMetaComponent
                                name={"File Identifier"}
                                label={"File Identifier"}
                                value={fetchedData.article.fileIdentifier}
                                disabled={true}
                            />
                        </InputSectionMetaComponent>
                        {
                            fetchedData.article.authors.map((author, index) => {
                                return (
                                    <li className={"list-none"} key={index}>
                                        <SectionHeaderMetaComponent header={`Author ${index + 1}`}/>
                                        <InputSectionMetaComponent>
                                            <TextInputMetaComponent
                                                name={`Author ${index + 1}s Title`}
                                                label={"Author Title"}
                                                value={author.title}
                                                disabled={true}
                                            />
                                            <TextInputMetaComponent
                                                name={`Author ${index + 1}s Name`}
                                                label={"Author Name"}
                                                value={author.author_name}
                                                disabled={true}
                                            />
                                            <TextInputMetaComponent
                                                name={`Author ${index + 1}s Department`}
                                                label={"Author Name"}
                                                value={author.department}
                                                disabled={true}
                                            />
                                            <TextInputMetaComponent
                                                name={`Author ${index + 1}s Institution`}
                                                label={"Author Name"}
                                                value={author.institution}
                                                disabled={true}
                                            />
                                        </InputSectionMetaComponent>
                                    </li>

                                )
                            })
                        }
                        <SectionHeaderMetaComponent header={"Research"}/>
                        <InputSectionMetaComponent>
                            <TextInputMetaComponent
                                name={"Research Field"}
                                label={"Research Field"}
                                value={fetchedData.article.article_resField}
                                disabled={true}
                            />
                            <TextInputMetaComponent
                                name={"Keywords"}
                                label={"Keywords"}
                                value={fetchedData.article.article_keywords}
                                disabled={true}
                            />
                            <TextInputMetaComponent
                                name={"Research Title"}
                                label={"Research Title"}
                                value={fetchedData.article.article_title}
                                disabled={true}
                            />
                            <TextInputMetaComponent
                                name={"Research Title"}
                                label={"Research Title"}
                                value={fetchedData.article.article_type}
                                disabled={true}
                            />
                            <BlobInputMetaComponent
                                name={"paperAbstract"}
                                label={"Research Abstract"}
                                value={fetchedData.article.paperAbstract}
                                disabled={true}
                            />
                        </InputSectionMetaComponent>
                    </MainCardWrapper>
                }
            </MainWrapperComponent>
        </>
    )
}


export const loader = async ({params}) => {
    const {referringTxId} = params;
    const relativeUrl = prepareURL(API_CONFIG.ENDPOINTS.TRANSACTION);
    const urlWithPathVariable = relativeUrl + "/" + referringTxId;
    return await apiLoader(urlWithPathVariable, "Transaction Details");
}

export const action = async ({request, params}) => {
    const formData = await request.formData();
    const body = {
        referringTxId: params.referringTxId,
        reviewerName: formData.get("reviewerName"),
        reviewerResearchField: formData.get("reviewerResearchField"),
        reviewerEmail: formData.get("reviewerEmail"),
        acceptanceStatus: formData.get("acceptanceStatus")
    }

    const response = await fetch(prepareURL(API_CONFIG.ENDPOINTS.REVIEW_REQUEST), {
        method: request.method,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
    });
    const returnedResponse = await response;
    return returnedResponse.status;

}
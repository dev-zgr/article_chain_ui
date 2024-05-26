import {useActionData, useLoaderData, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {UIActions} from "../../store/store/UISlice";
import React, {useEffect} from "react";
import {API_CONFIG, ARTICLE_KEYWORDS, ARTICLE_POINTS, MODAL_CODES} from "../../config/config";
import {MainWrapperComponent} from "../../components/Wrappers/MainWrapperComponent";
import {QueryManagerButton} from "../../meta-components/buttons/QueryManagerButton";
import {QueryManager} from "../../components/QueryManager";
import {DownloadButtonMetaComponent} from "../../meta-components/buttons/DownloadButtonMetaComponent";
import {apiLoader, prepareURL} from "../../utilityfunctions/APIHandling";
import {GenericFormManager} from "../../components/GenericFormManager";
import {FileInputMetaComponent} from "../../meta-components/form/inputs/FileInputMetaComponent";
import {SelectBoxMetaComponent} from "../../meta-components/form/inputs/SelectBoxMetaComponent";
import {InputSectionMetaComponent} from "../../meta-components/form/sections/InputSectionMetaComponent";
import {SectionHeaderMetaComponent} from "../../meta-components/form/sections/SectionHeaderMetaComponent";
import {SectionDescriptionMetaComponent} from "../../meta-components/form/sections/SectionDescriptionMetaComponent";
import {loginActions} from "../../store/store/AccountDetailsSlice";
import {InfoModalComponent} from "../../components/modals/InfoModalComponent";

export const PendingReviewDetailPage = () => {
    const actionData = useActionData();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const UISlice = useSelector(state => state.UISlice);
    const accountSlice = useSelector(state => state.loginSlice);


    const loaderData = useLoaderData();
    useEffect(() => {
        if (actionData === 200) {
            dispatch(UIActions.showModal(MODAL_CODES.FINAL_DECISION_200));
            setTimeout(() => {
                dispatch(UIActions.hideModal());
                navigate("/");
            }, 2000);
        } else if (actionData === 400) {
            dispatch(UIActions.showModal(MODAL_CODES.FINAL_DECISION_400));
        } else if (actionData === 500) {
            dispatch(UIActions.showModal(MODAL_CODES.FINAL_DECISION_500));
        }
    }, [actionData, dispatch, navigate]);

    const toggleModal = () => {
        dispatch(UIActions.hideModal());
    }

    useEffect(() => {
        if (actionData === 201) {
            dispatch(UIActions.showModal(MODAL_CODES.FINAL_DECISION_200));
            setTimeout(() => {
                dispatch(UIActions.hideModal());
                navigate("..");
            }, 2000);
        } else if (actionData === 400) {
            dispatch(UIActions.showModal(MODAL_CODES.FINAL_DECISION_400));
        } else if (actionData === 500) {
            dispatch(UIActions.showModal(MODAL_CODES.FINAL_DECISION_500));
        }
    }, [actionData, dispatch, navigate]);
    return (
        <>
            {
                UISlice.showModal && UISlice.opcode === MODAL_CODES.FINAL_DECISION_500 &&
                <InfoModalComponent
                    header={"Internal Server Error"}
                    message={"Login failed, please try again later!"}
                    toggleModal={toggleModal}
                />
            }
            {
                UISlice.showModal && UISlice.opcode === MODAL_CODES.FINAL_DECISION_400 &&
                <InfoModalComponent
                    header={"Bad Data"}
                    message={"Please make sure all the fields are filled correctly!"}
                    toggleModal={toggleModal}
                />
            }
            {
                UISlice.showModal && UISlice.opcode === MODAL_CODES.FINAL_DECISION_200 &&
                <InfoModalComponent
                    header={"We've received your final decision transaction successfully"}
                    message={"We're redirect you to home page, Welcome!"}
                    toggleModal={toggleModal}
                />

            }
        <MainWrapperComponent>
            <QueryManager>
                <DownloadButtonMetaComponent label={"Download Research"} fileUUID={loaderData.articleEmbeddable.fileIdentifier}/>
                <QueryManagerButton label={"Back"} to={".."}/>
            </QueryManager>
            <GenericFormManager method={"POST"} action={"review-request"}>
                <input name={"referringTxId"} value={loaderData.referringReviewTXID} className={"hidden"}/>
                <input name={"reviewerName"} value={accountSlice.accountDetails.userName} className={"hidden"}/>
                <input name={"reviewerResearchField"} value={accountSlice.accountDetails.researchField} className={"hidden"}/>
                <input name={"reviewerEmail"} value={accountSlice.accountDetails.email} className={"hidden"}/>
                <input name={"review_type"} value={"FirstReview"} className={"hidden"}/>
                <SectionHeaderMetaComponent header={`Enter your decisions`}/>
                <SectionDescriptionMetaComponent
                    description={`This information will be used for storing author: } information`}/>
                <InputSectionMetaComponent>

                    <SelectBoxMetaComponent label={"Decision Point"} option={ARTICLE_POINTS} name={"decisionPoint"}
                                            size={3}/>
                    <FileInputMetaComponent name={"file"} label={"Upload File"} size={3}/>
                </InputSectionMetaComponent>
            </GenericFormManager>
        </MainWrapperComponent>
        </>
    )
}

export const loader = async ({params, request}) => {
    const {referringTxId} = params;
    const urlParams = new URLSearchParams(new URL(request.url).search);
    const emailParam  =  urlParams.get('email');
    const relativeUrl = prepareURL(`/api/v2/get-accepted-review-by-email-submission-and-txid?tx-id=${referringTxId}&email=${emailParam}`);
    return await apiLoader(relativeUrl, "Transaction Details");
}


export async function action({ request }) {
    const data = await request.formData();

    const bodyTemplate = {
        "decision_file_hash": "000000",
        "decisionPoint": data.get("decisionPoint"),
        "review_type": "FirstReview",
    };

    const file = data.get("file");
    const formData = new FormData();

    if (file && file.name) {
        formData.append('file', file, file.name);
    } else {
        return 400;
    }

    formData.append('file', file, file.name)
    formData.append('jsonBody', new Blob([JSON.stringify(bodyTemplate)], { type: 'application/json' }));

    console.log(formData);

    const response = await fetch(`http://localhost:8080/final-decision?tx_id=${data.get("referringTxId")}`, {
        method: "POST",
        body: formData,
    });

    if (response.status === 200) {
        return 200;
    } else if (response.status === 400) {
        return 400;
    } else {
        return 500;
    }
}


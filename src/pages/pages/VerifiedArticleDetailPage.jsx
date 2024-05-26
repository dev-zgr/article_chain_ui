import {useActionData, useLoaderData, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {UIActions} from "../../store/store/UISlice";
import React, {useEffect} from "react";
import {API_CONFIG, MODAL_CODES} from "../../config/config";
import {MainWrapperComponent} from "../../components/Wrappers/MainWrapperComponent";
import {QueryManager} from "../../components/QueryManager";
import {DownloadButtonMetaComponent} from "../../meta-components/buttons/DownloadButtonMetaComponent";
import {QueryManagerButton} from "../../meta-components/buttons/QueryManagerButton";
import {MainCardWrapper} from "../../components/Wrappers/MainCardWrapper";
import {SectionHeaderMetaComponent} from "../../meta-components/form/sections/SectionHeaderMetaComponent";
import {InputSectionMetaComponent} from "../../meta-components/form/sections/InputSectionMetaComponent";
import {TextInputMetaComponent} from "../../meta-components/form/inputs/TextInputMetaComponent";
import {BlobInputMetaComponent} from "../../meta-components/form/inputs/BlobInputMetaComponent";
import {apiLoader, prepareURL} from "../../utilityfunctions/APIHandling";

export const VerifiedArticleDetailPage = () => {
    const fetchedData = useLoaderData();
    const actionData = useActionData();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const UISlice = useSelector(state => state.UISlice);


    return (
        <>
            <MainWrapperComponent>
                <QueryManager>
                    <DownloadButtonMetaComponent label={"download"} fileUUID={fetchedData.article.fileIdentifier}/>
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
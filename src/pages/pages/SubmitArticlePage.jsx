import {MainWrapperComponent} from "../../components/Wrappers/MainWrapperComponent";
import {QueryManager} from "../../components/QueryManager";
import {GenericFormManager} from "../../components/GenericFormManager";
import React, {useEffect, useState} from "react";
import {SectionHeaderMetaComponent} from "../../meta-components/form/sections/SectionHeaderMetaComponent";
import {SectionDescriptionMetaComponent} from "../../meta-components/form/sections/SectionDescriptionMetaComponent";
import {SelectMetaComponent} from "../../meta-components/buttons/SelectMetaComponent";
import {
    ARTICLE_KEYWORDS,
    ARTICLE_TYPES,
    AUTHOR_NUMBER,
    AUTHOR_TITLES, MODAL_CODES,
    RESEARCH_FIELDS,
    URLs
} from "../../config/config";
import {InputSectionMetaComponent} from "../../meta-components/form/sections/InputSectionMetaComponent";
import {TextInputMetaComponent} from "../../meta-components/form/inputs/TextInputMetaComponent";
import {SelectBoxMetaComponent} from "../../meta-components/form/inputs/SelectBoxMetaComponent";
import {BlobInputMetaComponent} from "../../meta-components/form/inputs/BlobInputMetaComponent";
import {extractAuthors, prepareSubmissionBody} from "../../utilityfunctions/dataExracting";
import {FileInputMetaComponent} from "../../meta-components/form/inputs/FileInputMetaComponent";
import {AuthorSelectMetaComponent} from "../../meta-components/buttons/AuthorSelectMetaComponent";
import {useActionData, useLoaderData, useNavigate} from "react-router-dom";
import {UIActions} from "../../store/store/UISlice";
import {useDispatch, useSelector} from "react-redux";
import {InfoModalComponent} from "../../components/modals/InfoModalComponent";


export const SubmitArticlePage = () => {
    const [numberOfAuthors, setNumberOfAuthors] = useState(1);
    const actionData = useActionData();
    const dispatch = useDispatch();
    const UISlice = useSelector(state => state.UISlice);
    const navigate = useNavigate();

    useEffect(() => {
        if (actionData === 201) {
            dispatch(UIActions.showModal(MODAL_CODES.SUBMIT_201));
            setTimeout(() => {
                dispatch(UIActions.hideModal());
                navigate("/");
            }, 2000);
        } else if (actionData === 400) {
            dispatch(UIActions.showModal(MODAL_CODES.SUBMIT_400));
        } else if (actionData === 500) {
            dispatch(UIActions.showModal(MODAL_CODES.SUBMIT_500));
        }
    }, [actionData, dispatch, navigate]);


    const toggleModal = () => {
        dispatch(UIActions.hideModal());
    }
    return (
        <>
            {
                UISlice.showModal && UISlice.opcode === MODAL_CODES.SUBMIT_500 &&
                <InfoModalComponent
                    header={"Internal Server Error"}
                    message={"Operation failed, please try again later!"}
                    toggleModal={toggleModal}
                />
            }
            {
                UISlice.showModal && UISlice.opcode === MODAL_CODES.SUBMIT_400 &&
                <InfoModalComponent
                    header={"Bad Data"}
                    message={"Please make sure all the fields are filled correctly!"}
                    toggleModal={toggleModal}
                />
            }
            {
                UISlice.showModal && UISlice.opcode === MODAL_CODES.SUBMIT_201 &&
                <InfoModalComponent
                    header={"We've received your submission transaction successfully"}
                    message={"We're redirect you to home page, Welcome!"}
                    toggleModal={toggleModal}
                />

            }
            <MainWrapperComponent>
                <QueryManager>
                    <AuthorSelectMetaComponent options={AUTHOR_NUMBER} setOptions={setNumberOfAuthors}/>
                </QueryManager>
                <GenericFormManager method={"POST"}>
                    <input name={"numberOfAuthors"} className={"hidden"} value={numberOfAuthors}/>
                    {
                        Array
                            .from({length: numberOfAuthors}, (_, index) => index + 1)
                            .map((author, index) => {
                                return (
                                    <li className={"list-none"} key={index}>
                                        <SectionHeaderMetaComponent header={`Author ${index + 1}`}/>
                                        <SectionDescriptionMetaComponent
                                            description={`This information will be used for storing author: ${index + 1} information`}/>
                                        <InputSectionMetaComponent>
                                            <SelectBoxMetaComponent option={AUTHOR_TITLES}
                                                                    name={`author_title${index + 1}`}
                                                                    label={"Author Title"}
                                            />
                                            <TextInputMetaComponent name={`author_name${index + 1}`}
                                                                    label={"Author Name"}
                                                                    placeholder={"eg. Özgür"} size={3}
                                                                    validator={() => true}/>
                                            <TextInputMetaComponent name={`author_email${index + 1}`}
                                                                    label={"Author Email"}
                                                                    placeholder={"eg. Özgür"} size={3}
                                                                    validator={() => true}/>
                                            <TextInputMetaComponent name={`institution${index + 1}`}
                                                                    label={"Institution"}
                                                                    placeholder={"eg. Özgür"} size={3}
                                                                    validator={() => true}/>
                                            <TextInputMetaComponent name={`department${index + 1}`} label={"Department"}
                                                                    placeholder={"eg. Özgür"} size={3}
                                                                    validator={() => true}/>
                                            <SectionHeaderMetaComponent header={`Author ${index + 1} Address`}/>

                                            <TextInputMetaComponent name={`country${index + 1}`} label={"Country"}
                                                                    placeholder={"eg. Özgür"} size={3}
                                                                    validator={() => true}/>
                                            <TextInputMetaComponent name={`state${index + 1}`}
                                                                    label={"State, Province, Region"}
                                                                    placeholder={"eg. Özgür"} size={3}
                                                                    validator={() => true}/>
                                            <TextInputMetaComponent name={`zipCode${index + 1}`} label={"Zip Code"}
                                                                    placeholder={"eg. Özgür"} size={3}
                                                                    validator={() => true}/>
                                        </InputSectionMetaComponent>
                                        <div className="border-t border-gray-300 my-4"></div>
                                    </li>
                                )
                            })

                    }
                    <SectionHeaderMetaComponent header={"Article Information"}/>
                    <SectionDescriptionMetaComponent
                        description={"This information will be used for storing article information"}/>
                    <InputSectionMetaComponent>
                        <TextInputMetaComponent name={"article_title"} label={"Title"} size={3} validator={() => true}/>
                        <SelectBoxMetaComponent label={"Article Type"} option={ARTICLE_TYPES} name={"article_type"}
                                                size={3}/>
                        <SelectBoxMetaComponent label={"Research Fields"} option={RESEARCH_FIELDS}
                                                name={"article_resField"} size={3}/>
                        <SelectBoxMetaComponent label={"Keywords"} option={ARTICLE_KEYWORDS} name={"article_keywords"}
                                                size={3}/>
                        <FileInputMetaComponent name={"article_file"} label={"Upload File"} size={3}/>

                        <BlobInputMetaComponent name={"paperAbstract"} label={"Article Abstract"} size={3}
                                                validator={() => true}/>
                    </InputSectionMetaComponent>


                </GenericFormManager>
            </MainWrapperComponent>
        </>
    )
}

export async function action({request}) {
    const data = await request.formData();
    let authors = extractAuthors(data, data.get("numberOfAuthors"));
    console.log("Authors worked");
    console.log(authors);
    const requestBody = prepareSubmissionBody(data, authors);
    console.log("Authors request body worked");
    console.log(requestBody);

    const response = await fetch(URLs.POST_SUBMISSION, {
        method: "POST",
        body: requestBody,
        headers: {}
    });

    if (response.status === 201) {
        return 201;
    } else if (response.status === 400) {
        return 400;
    } else {
        return 500;
    }
}



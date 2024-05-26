import {useState} from "react";
import {API_CONFIG, DATA_LIST_URL_PARAMETERS} from "../../config/config";
import {MainWrapperComponent} from "../../components/Wrappers/MainWrapperComponent";
import {QueryManager} from "../../components/QueryManager";
import {SelectMetaComponent} from "../../meta-components/buttons/SelectMetaComponent";
import {ListWrapperComponent} from "../../components/Wrappers/ListWrapperComponent";
import {ItemCardMetaComponent} from "../../meta-components/cards/ItemCardMetaComponent";
import {PaginationManagerComponent} from "../../components/PaginationManagerComponent";
import {addParametersToURL, extractParameters, genericLoader, prepareURL} from "../../utilityfunctions/APIHandling";
import {useLoaderData} from "react-router-dom";

export const VerifiedArticlesPage = () => {
    const [urlParameters, setUrlParameters] = useState(DATA_LIST_URL_PARAMETERS);
    const fetchedData = useLoaderData();

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

    return (
        <>
            <MainWrapperComponent>
                <QueryManager>
                    <SelectMetaComponent urlParameters={urlParameters} setUrlParameters={setUrlParameters}/>
                </QueryManager>
                {
                    fetchedData.data?.length > 0 ?
                        <ListWrapperComponent>
                            {
                                fetchedData.data.map((article, index) => {
                                    return <ItemCardMetaComponent
                                        watermark={<span>📑<sub>{article.tx_id}</sub></span>}
                                        main={article.article.article_title}
                                        optional={`${article.article.article_type} - ${article.article.article_resField}/${article.article.article_keywords}`}
                                        author={`${article.article.article_date} by: ${extractedAuthors(article.article.authors)}`}
                                        description={`${article.article.paperAbstract} keywords: ${article.article.keywords}`}
                                        id={article.tx_id}
                                        key={article.tx_id}
                                        index={index}
                                        label={"Details"}
                                    />
                                })
                            }
                            <PaginationManagerComponent pageCount={fetchedData.pageNumber -1}
                                                        urlParameters={urlParameters}
                                                        setUrlParameters={setUrlParameters}/>
                        </ListWrapperComponent>
                        :

                        <h2 className={"col-start-5 col-end-8 font-semibold mt-8 mb-2 text-slate-900 text-2xl"}>No
                            Article
                            Found!</h2>
                }
            </MainWrapperComponent>
        </>
    )
}


export async function loader({request}) {
    const extractedParameters = extractParameters(request.url);
    const firstUrl = prepareURL(API_CONFIG.ENDPOINTS.V2.VERIFIED_ARTICLES);
    const newUrl = addParametersToURL(firstUrl, extractedParameters);
    const response = await fetch(newUrl);
    if (response.status === 200) {
        return await response.json();
    }else if(response.status === 204){
        return await response.json();
    }else if(response.status === 500){
        throw new Error("Something went wrong")
    }
    else {
        throw new Error("Something went wrong")
    }
}
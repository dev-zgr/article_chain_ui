import {useState} from "react";
import {MainWrapperComponent} from "../../components/Wrappers/MainWrapperComponent";
import {QueryManager} from "../../components/QueryManager";
import {SelectMetaComponent} from "../../meta-components/buttons/SelectMetaComponent";
import {API_CONFIG, DATA_LIST_URL_PARAMETERS} from "../../config/config";
import {useLoaderData} from "react-router-dom";
import {ListWrapperComponent} from "../../components/Wrappers/ListWrapperComponent";
import {extractParameters, genericLoader} from "../../utilityfunctions/APIHandling";
import {ItemCardMetaComponent} from "../../meta-components/cards/ItemCardMetaComponent";
import {PaginationManagerComponent} from "../../components/PaginationManagerComponent";
import {GoToMetaComponent} from "../../meta-components/QueryMenu/GoToMetaComponent";

export const BlockChainExplorePage = () => {
    const [urlParameters, setUrlParameters] = useState(DATA_LIST_URL_PARAMETERS);
    const fetchedData = useLoaderData();
    return (
        <>
            <MainWrapperComponent>
                <QueryManager>

                    <SelectMetaComponent urlParameters={urlParameters} setUrlParameters={setUrlParameters}/>
                    <GoToMetaComponent />
                </QueryManager>
                {
                    fetchedData.data.length > 0 ?
                        <ListWrapperComponent>
                            {
                                fetchedData.data.map((block, index) => {
                                    return <ItemCardMetaComponent
                                        watermark={<span>🧊<sub>{block.indexNo}</sub></span>}
                                        main={`Block ${block.indexNo}`}
                                        author={`nonce: ${block.nonce}`}
                                        optional={`timestamp: ${block.timestamp}`}
                                        description={`hash: ${block.currentBlockHash}`}
                                        id={block.indexNo}
                                        key={index}
                                        index={index}
                                        label={"Details"}
                                    />
                                })
                            }
                            <PaginationManagerComponent pageCount={fetchedData.pageNumber}
                                                        urlParameters={urlParameters}
                                                        setUrlParameters={setUrlParameters}/>
                        </ListWrapperComponent>
                        :

                        <h2 className={"col-start-5 col-end-8 font-semibold mt-8 mb-2 text-slate-900 text-2xl"}>No
                            Block
                            Found!</h2>
                }

            </MainWrapperComponent>
        </>
    )
}

export async function loader({request}) {
    const extractedParameters = extractParameters(request.url);
    return genericLoader(API_CONFIG.ENDPOINTS.BLOCK, extractedParameters);
}

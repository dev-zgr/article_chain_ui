import {API_CONFIG} from "../../config/config";
import {addPathVariablesToURL, apiLoader, prepareURL} from "../../utilityfunctions/APIHandling";
import {useLoaderData} from "react-router-dom";
import {MainWrapperComponent} from "../../components/Wrappers/MainWrapperComponent";
import {QueryManager} from "../../components/QueryManager";
import {QueryManagerButton} from "../../meta-components/buttons/QueryManagerButton";
import {MainCardWrapper} from "../../components/Wrappers/MainCardWrapper";
import {SectionHeaderMetaComponent} from "../../meta-components/form/sections/SectionHeaderMetaComponent";
import {InputSectionMetaComponent} from "../../meta-components/form/sections/InputSectionMetaComponent";
import {TextInputMetaComponent} from "../../meta-components/form/inputs/TextInputMetaComponent";
import {ListWrapperComponent} from "../../components/Wrappers/ListWrapperComponent";
import {TransactionCardMetaComponent} from "../../meta-components/cards/TransactionCardMetaComponent";
import {BlobInputMetaComponent} from "../../meta-components/form/inputs/BlobInputMetaComponent";
import sizeof from "object-sizeof";

export const BlockDetailPage = () => {
    const fetchedBlock = useLoaderData();
    return (
        <MainWrapperComponent>
            <QueryManager>
                <QueryManagerButton label={"Back"} to={".."}/>
            </QueryManager>
            <MainCardWrapper>
                <SectionHeaderMetaComponent header={`Block: ${fetchedBlock.indexNo}`}/>
                <InputSectionMetaComponent>
                    <TextInputMetaComponent name={"indexNo"}
                                            label={"Block Index"}
                                            value={fetchedBlock.indexNo}
                                            size={3}
                                            disabled={true}
                    />
                    <TextInputMetaComponent name={"Timestamp"}
                                            label={"Timestamp"}
                                            value={fetchedBlock.timestamp}
                                            size={3}
                                            disabled={true}
                    />
                    <TextInputMetaComponent name={"Number of Transactions"}
                                            label={"Number of Transactions"}
                                            value={fetchedBlock.transactionList.length}
                                            size={3}
                                            disabled={true}
                    />
                    <TextInputMetaComponent name={"Size in Bytes"}
                                            label={"Size in Bytes"}
                                            value={`${sizeof(fetchedBlock)}B`}
                                            size={3}
                                            disabled={true}
                    />
                    <TextInputMetaComponent name={"Miner ID"}
                                            label={"Miner ID"}
                                            value={fetchedBlock.sender_uuid}
                                            size={3}
                                            disabled={true}
                    />

                    <TextInputMetaComponent name={"Current Block Hash"}
                                            label={"Current Block Hash"}
                                            value={fetchedBlock.currentBlockHash}
                                            size={6}
                                            disabled={true}
                    />
                    <TextInputMetaComponent name={"Previous Block Hash"}
                                            label={"Previous Block Hash"}
                                            value={fetchedBlock.previousBlockHash}
                                            size={6}
                                            disabled={true}
                    />
                    <TextInputMetaComponent name={"Merkle Root"}
                                            label={"Merkle Root"}
                                            value={fetchedBlock.merkleRoot}
                                            size={6}
                                            disabled={true}
                    />
                    <BlobInputMetaComponent name={"Digital Signature"}
                                            label={"Digital Signature"}
                                            value={fetchedBlock.digital_signature}
                                            size={6}
                                            disabled={true}
                    />
                </InputSectionMetaComponent>
            </MainCardWrapper>
            {
                fetchedBlock.transactionList.length === 0 ?
                    <h2 className={"col-start-5 col-end-8 font-semibold mt-8 mb-2 text-slate-900 text-2xl"}>No
                        Transactions
                        Found!</h2>
                    :
                    <ListWrapperComponent>
                        {
                                fetchedBlock.transactionList.map((transaction) => {
                                    return(
                                        <TransactionCardMetaComponent transaction={transaction} blockID={fetchedBlock.indexNo}/>
                                    )
                                })
                        }
                    </ListWrapperComponent>

            }
        </MainWrapperComponent>
    )
}

export const loader = async ({params}) => {
    const {indexNo} = params;
    const relativeUrl = prepareURL(API_CONFIG.ENDPOINTS.BLOCK);
    const urlWithPathVariable = addPathVariablesToURL(relativeUrl, indexNo);
    return await apiLoader(urlWithPathVariable, "Block");
}
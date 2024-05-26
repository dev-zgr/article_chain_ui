import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ListWrapperComponent } from "../../components/Wrappers/ListWrapperComponent";
import { ItemCardMetaComponent } from "../../meta-components/cards/ItemCardMetaComponent";
import { MainWrapperComponent } from "../../components/Wrappers/MainWrapperComponent";
import { QueryManager } from "../../components/QueryManager";
import { SelectMetaComponent } from "../../meta-components/buttons/SelectMetaComponent";
import { DATA_LIST_URL_PARAMETERS } from "../../config/config";
import { PaginationManagerComponent } from "../../components/PaginationManagerComponent";
import { genericLoader } from "../../utilityfunctions/APIHandling";

export const PendingReviewsPage = () => {
    const [urlParameters, setUrlParameters] = useState(DATA_LIST_URL_PARAMETERS);
    const [fetchedData, setFetchedData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useDispatch();
    const navigate = useNavigate();
    const { email } = useSelector(state => state.loginSlice.accountDetails);

    const fetchData = useCallback(async () => {
        try {
            setLoading(true);
            const data = await genericLoader("/api/v2/get-accepted-review-by-email-submission", {
                email,
                [urlParameters.page.name]: urlParameters.page.value,
                [urlParameters.sort.name]: urlParameters.sort.value,
            });
            setFetchedData(data);
        } catch (err) {
            setError(err);
            if (err instanceof Response && err.status === 401) {
                navigate("/login"); // Navigate to login page if unauthorized
            }
        } finally {
            setLoading(false);
        }
    }, [email, urlParameters, navigate]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const extractedAuthors = (authors) => {
        return authors.map(author => author.author_name).join(" | ");
    };
    return (
        <MainWrapperComponent>
            <QueryManager>
                <SelectMetaComponent urlParameters={urlParameters} setUrlParameters={setUrlParameters} />
            </QueryManager>
            {loading ? (
                <h2>Loading...</h2>
            ) : error ? (
                <h2>Error: {error.message}</h2>
            ) : fetchedData && fetchedData.data.length > 0 ? (
                <ListWrapperComponent>
                    {fetchedData.data.map((article, index) => (
                        <ItemCardMetaComponent
                            watermark={<span>Tx<sub>{article.referringReviewTXID}</sub></span>}
                            main={article.articleEmbeddable.article_title}
                            optional={`${article.articleEmbeddable.article_type} - ${article.articleEmbeddable.article_resField}/${article.articleEmbeddable.article_keywords}`}
                            author={`${article.articleEmbeddable.article_date} by: ${extractedAuthors(article.articleEmbeddable.authors)}`}
                            description={`${article.articleEmbeddable.paperAbstract} keywords: ${article.articleEmbeddable.article_keywords}`}
                            id={`${article.referringReviewTXID}?email=${email}`}
                            key={index}
                            index={index}
                            label={"Details"}
                        />
                    ))}
                    <PaginationManagerComponent
                        pageCount={fetchedData.pageNumber}
                        urlParameters={urlParameters}
                        setUrlParameters={setUrlParameters}
                    />
                </ListWrapperComponent>
            ) : (
                <h2 className="col-start-5 col-end-8 font-semibold mt-8 mb-2 text-slate-900 text-2xl">No Pending Reviews</h2>
            )}
        </MainWrapperComponent>
    );
};

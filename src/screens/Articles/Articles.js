import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "../../store/articles/actions";
import { selectArticles, selectArticlesError, selectArticlesStatus } from "../../store/articles/selectors";
import { FETCH_STATUSES } from "../../utils/constants";
import './Articles.style.css';

export const Articles = () => {
    const dispatch = useDispatch();
    const articles = useSelector(selectArticles);
    const error = useSelector(selectArticlesError);
    const status = useSelector(selectArticlesStatus);
    const sendRequest = () => {
        dispatch(getArticles());
    }  

    useEffect(() => {
        sendRequest();
    }, []);

    return (
        <>
            <h3>Articles</h3>
            <button onClick={sendRequest}>GET</button>
            {status === FETCH_STATUSES.REQUEST && <div className="pull"></div>}
            {error && <h4>{error}</h4>}
            <ul>
                {articles.map((article) => (
                    <li key={article.id}>{article.title}</li>
                ))}
            </ul>
        </>
    );
};
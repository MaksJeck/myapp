import { CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "../../store/articles/actions";
import { selectArticles, selectArticlesError, selectArticlesStatus } from "../../store/articles/selectors";
import { FETCH_STATUSES } from "../../utils/constants";
import './Articles.style.css';

export const Articles = () => {
    const dispatch = useDispatch();
    // const [articles, setArticles] = useState([]);
    // const [error, setError] = useState(null);
    // const [loading, setLoading] = useState(false);
    const articles = useSelector(selectArticles);
    const error = useSelector(selectArticlesError);
    const status = useSelector(selectArticlesStatus);
    const sendRequest = () => {
        dispatch(getArticles());
    }
    // const sendRequest = async () => {
    // try {
    //     setLoading(true);
    //     const response = await fetch(apiUrl);
    //     if (!response.ok) {
    //         throw new Error(`Response failed with status ${response.status}`);
    //     }
    //     console.log('response', response);

    //     const result = await response.json();
    //     console.log('result', result);
    //     setArticles(result);
    // } catch (e) {
    //     console.log(e);
    //     setError(e.message);
    // } finally {
    //     setLoading(false);
    // }
    // };

    useEffect(() => {
        sendRequest();
    }, []);

    return (
        <>
            <h3>Articles</h3>
            <button onClick={sendRequest}>GET</button>
            {/* {loading && <CircularProgress/>} */}
            {/* <img src="https://a-mne.ru/image/catalog/themevolty/pageloader/ttv_loading.gif" alt="loader"/>             */}
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

{/* <CircularProgress /> */}
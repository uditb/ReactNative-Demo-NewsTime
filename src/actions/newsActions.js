import {
    NEWS_API_FETCH_SUCCESS,
    NEWS_API_FETCH_FAIL,
    NEWS_API_FETCH
} from './types';
import axios from 'axios';


export const newsApiFetch = ({ pageNo, count }) => {
    console.log('newsApiFetch pageNo' + pageNo);
    return (dispatch) => {
        dispatch({ type: NEWS_API_FETCH });

        axios.get('https://newsapi.org/v2/everything?apiKey=cf3bf6bf881d4fe0bc5d8865515fb14f&sources=new-scientist&pageSize=' + count + '&page=' + pageNo)
            .then(response => {
                //console.log(response.data.articles);
                newsApiFetchSuccess(dispatch, response.data.articles);
            })
            .catch((error) => {
                console.log('error: ' + error);
               newApiFetchFail(dispatch);
            });
    };
};

const newApiFetchFail = (dispatch) => {
    dispatch({
        type: NEWS_API_FETCH_FAIL
    });
};

const newsApiFetchSuccess = (dispatch, articles) => {
    console.log('newsApiFetchSuccess: ');

    dispatch({
        type: NEWS_API_FETCH_SUCCESS,
        payload: articles
    });
};
//newsReducer.js

import { 
    NEWS_API_FETCH_SUCCESS,
    NEWS_API_FETCH_FAIL,
    NEWS_API_FETCH
} from '../actions/types';

const INITIAL_STATE = { 
    articles: [],
    loading: false,
    error: '',
    pageNo: 1
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case NEWS_API_FETCH:
            return { ...state,loading: true };
        case NEWS_API_FETCH_SUCCESS:
            return { ...state, loading: false, articles: action.payload, pageNo: state.pageNo+1 };   
        case NEWS_API_FETCH_FAIL:
            return { ...state, loading: false, error: '' };     
        default:
            return state;
    }
};
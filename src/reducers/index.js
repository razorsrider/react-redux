import {combineReducers} from "redux";

const local_selectors = (store = null, action) => {

    const result = {};

    if (action.type === 'NEW_DATA') {
        result.selected_parameter = 0;
        result.showed_pairs = 0;
        result.market_filter_selected = 0;

        return result;
    }

    if (action.type === 'SELECTED_MARKET') {
        result.selected_parameter = store.selected_parameter;
        result.showed_pairs = store.showed_pairs;
        result.market_filter_selected = action.payload;

        return result;
    }

    if (action.type === 'SELECTED_PARAMETER') {
        result.selected_parameter = action.payload;
        result.showed_pairs = store.showed_pairs;
        result.market_filter_selected = store.market_filter_selected;

        return result;
    }

    return store;
};


const fetched_data = (data_by_pairs = null, action) => {

    const result = {};

    if (action.type === 'NEW_DATA') {
        result.pairs = action.payload.data;
        result.market_filter_list = action.payload.market_filter_list;
        return result;
    }

    return data_by_pairs;
};


export default combineReducers({
    local_selectors: local_selectors,
    selectedSong: fetched_data
});
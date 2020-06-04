// Action creator
import axios from "axios";

// export const FetchData = () => async dispatch => {
export const FetchData = () => {
    return async dispatch => {

        const response = await axios.get('https://poloniex.com/public?command=returnTicker');
        const keys = Object.keys(response.data);
        const bank = [];
        for (let i = 0; i < keys.length; i++) {
            const index_end_key = keys[i].indexOf('_');
            if (bank.indexOf(keys[i].substring(0, index_end_key)) === -1) {
                bank.push(keys[i].substring(0, index_end_key));
            }
        }

        response['market_filter_list'] = bank;
        response['time_of_fetch'] = String(new Date());


        dispatch({type: 'NEW_DATA', payload: response});
    }
};


export const MarketFilterClick = (props) => {
    return dispatch => {
        dispatch({type: 'SELECTED_MARKET', payload: props});
    };
}

export const ParameterClick = (props) => {
    return dispatch => {
        dispatch({type: 'SELECTED_PARAMETER', payload: props});
    };
}


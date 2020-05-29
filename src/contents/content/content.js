import React from 'react';
import List from "./pair_list";
import MarketFilter from "./marketFilter";

import {connect} from 'react-redux';
import {FetchData} from "../../actions";
import {MarketFilterClick} from "../../actions";
import Parameters from './parameters';

const Showed_values = (props) => {
    if (props.value) {
        const list_el_count = document.getElementsByClassName('list-group')[0].children.length;
        // console.log(list_el_count);
        return (
            <p style={{textAlign: 'center'}}>Showed <b>{props.value}</b> pairs</p>
        )
    } else {
        return null
    }
};

const Show_raw_info = (props) => {
    if (Object.keys(props.value).length) {
        return (
            <div style={{textAlign: 'center', margin: '20px'}}>

                <p>
                    <button className="btn btn-warning" type="button" data-toggle="collapse"
                            data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"
                            onClick={props.onClick}>
                        Show raw JSON data
                    </button>
                </p>

                <div className="collapse" id="collapseExample">
                    <div className="card card-body">
                        {JSON.stringify(props.value)}
                    </div>
                </div>

            </div>
        )
    } else {
        return null
    }
};

class content extends React.Component {
    state = {
        pairs: [],
        pair_parameters: [],
        fetching_time: '',
        selected_parameter: 0,
        market_filter_list: [],
        market_filter_selected: 0,
        showed_pairs: 0,
        SHOW_RAW: false
    };

    // retrieveSubmit = async arg => {
    //     const response = await axios.get('https://poloniex.com/public?command=returnTicker'),
    //         keys = Object.keys(response.data),
    //         bank = [];
    //
    //     for (let i = 0; i < keys.length; i++) {
    //         const index_end_key = keys[i].indexOf('_');
    //         if (bank.indexOf(keys[i].substring(0, index_end_key)) === -1) {
    //             bank.push(keys[i].substring(0, index_end_key));
    //         }
    //     }
    //
    //     this.setState({
    //         pairs: response.data,
    //         fetching_time: String(new Date()),
    //         pair_parameters: Object.keys(response.data[Object.keys(response.data)[0]]),
    //         market_filter_list: bank.sort()
    //     });
    // };

    componentDidUpdate(prevProps, prevState, snapshot) {
        const list_el_count = document.getElementsByClassName('list-group')[0].children.length;
        if (this.state.showed_pairs !== list_el_count) {
            this.setState({
                showed_pairs: list_el_count
            })
        }
    }

    render() {

        var source = this.props.data;
        var selectors = this.props.selectors;

        if (source) {
            const pairs = source.pairs;
            const pair_parameters = Object.keys(pairs[Object.keys(pairs)[0]]);

            return (<div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">

                        <p style={{textAlign: 'center', margin: 10}}>Last
                            update: {" "}
                            <b>{String(new Date())}</b>
                        </p>

                        <button type="button" className="btn btn-success btn-block " id='fetch'
                                onClick={() => this.props.selectSong()}
                        >
                            {Object.keys(source.pairs).length === 0 ? 'FETCH' : 'RENEW'}
                        </button>

                        <p style={{
                            textAlign: 'center',
                            margin: 10
                        }}>
                            Total {" "}
                            <b>{Object.keys(source.pairs).length}</b>
                            {" "} pairs
                        </p>

                        <Show_raw_info value={source.pairs}
                            // onClick={() => this.state.SHOW_RAW ? this.setState({SHOW_RAW: false}) : this.setState({SHOW_RAW: true})}
                        />





                        <div className="card border-secondary mb-3" style={{textAlign: 'center'}}>
                            <div className="card-header">
                                <div style={{textAlign: 'center'}}><b>Choose parameter</b></div>
                            </div>
                            <div className="card-body text-secondary">
                                <Parameters onClick={(a) => this.props.onClick(a)}
                                            pair_parameters={pair_parameters}
                                            selected_parameter={selectors.selected_parameter}/>
                            </div>
                        </div>







                        <MarketFilter
                            // onClick={(e) => e > -1 ? this.setState({market_filter_selected: e}) : null}/>
                            //           onClick={this.some_act()}/>
                            //           onClick={this.props.MarketFilterClick('asd')}
                        />

                        <Showed_values value={selectors.showed_pairs}/>

                        <ul className="list-group">
                            <List data={pairs}
                                  selected_parameter={selectors.selected_parameter}
                                  pair_parameters={pair_parameters}
                                  market_filter_list={source.market_filter_list}
                                  market_filter_selected={selectors.market_filter_selected}/>
                        </ul>

                    </div>
                </div>

            </div>)
        } else {
            return (<div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">

                        <p style={{textAlign: 'center', margin: 10}}>Last
                            update: {" "}
                            <b>never</b>
                        </p>

                        <button type="button" className="btn btn-success btn-block " id='fetch'
                                onClick={() => this.props.selectSong()}
                        >
                            {Object.keys(this.state.pairs).length === 0 ? 'FETCH' : 'RENEW'}
                        </button>

                        <p style={{
                            textAlign: 'center',
                            margin: 10
                        }}>
                            Total {" "}
                            <b>0</b>
                            {" "} pairs
                        </p>

                    </div>
                </div>
            </div>)
        }

    }
}

const mapStateToProps = (state) => {
    return {data: state.selectedSong, selectors: state.local_selectors};
};

// export default content;
export default connect(mapStateToProps, {selectSong: FetchData, MarketFilterClick: MarketFilterClick})(content);
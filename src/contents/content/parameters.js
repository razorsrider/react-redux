import React from 'react';
import {connect} from "react-redux";
import {ParameterClick, FetchData} from "../../actions";

class retrieved_info extends React.Component {

    render() {
        return (
            this.props.pair_parameters.map((keyName, i) => {
                return (
                    <button
                        onClick={(() => this.props.ParameterClick(i))}
                        type="button" style={{margin: 5}}
                        className={this.props.selected_parameter === i ? 'btn btn-success' : 'btn btn-primary'}
                        key={this.props.pair_parameters[i]}>{keyName}
                    </button>
                )
            })
        )
    }
}


const mapStateToProps = (state) => {
    return {data: state.fetched_data, selectors: state.local_selectors};
};

// export default content;
export default connect(mapStateToProps, {selectSong: FetchData, ParameterClick: ParameterClick})(retrieved_info);
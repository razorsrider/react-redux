import React from 'react';
import {connect} from "react-redux";
import {MarketFilterClick} from "../../actions";

class render_buttons extends React.Component {
    render() {
        return (
            this.props.data.market_filter_list.map((keyName, i) => {
                return <button
                    onClick={(() => this.props.MarketFilterClick(i))}
                    type="button" style={{margin: 5}}
                    className={this.props.selectors.market_filter_selected === i ? 'btn btn-success' : 'btn btn-primary'}
                    key={this.props.data.market_filter_list[i]}>{keyName}
                </button>
            })
        )
    }
}

// export default render_buttons;
const mapStateToProps = (state) => {
    return {data: state.selectedSong, selectors: state.local_selectors};
};

export default connect(mapStateToProps, {MarketFilterClick: MarketFilterClick})(render_buttons);
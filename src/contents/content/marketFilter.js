import React from 'react';
import Render_buttons from "./render_buttons";


class MarketFilter extends React.Component {
    render() {
        // console.log(this.props);
        // if (Object.keys(this.props.market_filter_list).length) {
        return (
            <div className="card border-secondary mb-3" style={{textAlign: 'center'}}>
                <div className="card-header">
                    <div style={{textAlign: 'center'}}><b>Choose market</b></div>
                </div>
                <div className="card-body text-secondary">
                    <Render_buttons/>
                </div>
            </div>
        )
        // } else {
        //     return null
        // }
    }
}

export default MarketFilter;
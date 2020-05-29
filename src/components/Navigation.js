import React from 'react';
import {Link} from "react-router-dom";

const nav = () => {
    return (<div>

        <Link to='/' className="btn btn-outline-primary btn-lg btn-block">Main</Link>
        <Link to='/react-redux/data' className="btn btn-outline-primary btn-lg btn-block">Showing</Link>
        <Link to='/react-redux/about' role="button" className="btn btn-outline-primary btn-lg btn-block">About</Link>

    </div>)
};

export default nav;
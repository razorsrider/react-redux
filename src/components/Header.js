import React from 'react';

const style = {
    lineHeight: '30px'
};

const component1 = () => {
    return (<div>

            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="/react-redux/" style={style}>
                    <img src="logo192.png" className="d-inline-block align-top" alt="" width={30}/>
                    {"  "}React test application - Redux version
                </a>
            </nav>

        </div>
    )
};

export default component1;
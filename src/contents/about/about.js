import React from 'react';

const main = () => {
    return (<div>


            <div className="jumbotron jumbotron-fluid">
                <div className="container">

                    <div className="alert alert-success" role="alert">
                        <h4 className="alert-heading">Well done!</h4>
                        <p>This is just a test React application. This app doesn`t do anything useful. </p>

                        <hr/>

                    </div>

                    <div className="alert alert-danger" role="alert">
                        All interface written on Bootstrap 4
                    </div>

                    <p/>
                    <h5>Source code of this application you can find by address
                        <p>
                            <a href='https://github.com/razorsrider/react-test'>
                                https://github.com/razorsrider/react-redux
                            </a>
                        </p>
                    </h5>
                    <p/>

                    <div className="alert alert-secondary" role="alert">
                        Feel free to contact me <b>razorsrider@gmail.com</b>
                    </div>


                </div>
            </div>

        </div>
    )
};

export default main;
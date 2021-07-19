import React from 'react';
import PropTypes from 'prop-types';

import Link from 'next/link'


const SystemWindow = props => {
    return (
        <div className="card">
            <h5 className="card-header text-center">
                <div className="float-start">
                    <Link href="/">
                        <a className="btn btn-sm btn-danger">Menu</a>
                    </Link>
                </div>
                {props.windowName}
            </h5>
            <div className="card-body">
                {props.children}
            </div>
        </div>
    );
};

SystemWindow.propTypes = {
    windowName: PropTypes.string
};

export default SystemWindow;

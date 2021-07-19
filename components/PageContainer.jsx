import React from 'react';
import PropTypes from 'prop-types';

const PageContainer = props => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12">
                    {props.children}
                </div>
            </div>
        </div>
    );
};

PageContainer.propTypes = {

};

export default PageContainer;

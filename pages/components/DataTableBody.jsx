import React from 'react';
import PropTypes from 'prop-types';

const DataTableBody = props => {
    return (
        <tbody>
        {props.children}
        </tbody>
    );
};

DataTableBody.propTypes = {

};

export default DataTableBody;

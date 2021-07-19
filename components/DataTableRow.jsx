import React from 'react';
import PropTypes from 'prop-types';

const DataTableRow = props => {
    return (
        <tr>
            {props.children}
        </tr>

    );
};

DataTableRow.propTypes = {

};

export default DataTableRow;

import React from 'react';
import PropTypes from 'prop-types';

const DataTableHeader = props => {
    return <>
        <thead>
        <tr>
            {props.fieldLabels.map(value => <th key={value}>{value}</th>)}
        </tr>

        </thead>

    </>;
};

DataTableHeader.propTypes = {
    fieldLabels: PropTypes.array.isRequired
};

export default DataTableHeader;

import React from 'react';
import PropTypes from 'prop-types';

const DataTable = props => {
    return (
        <>
            <table className="table table-bordered">
                {props.children}
            </table>

        </>
    );
};

DataTable.propTypes = {

};

export default DataTable;

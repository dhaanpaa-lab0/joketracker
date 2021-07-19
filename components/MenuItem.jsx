import React from 'react';
import PropTypes from 'prop-types';

const MenuItem = props => {
    return (
        <>
            <li>
                <button type="button" onClick={props.onClick} className="btn btn-sm btn-primary">GO</button> &nbsp;
                {props.label}
            </li>
            <br/>
        </>


    );
};

MenuItem.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default MenuItem;

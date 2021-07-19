import React from 'react';
import PropTypes from 'prop-types';

const Menu = props => {
    return (
        <ul className="list-unstyled">
            {props.children}
        </ul>
    );
};

Menu.propTypes = {

};

export default Menu;

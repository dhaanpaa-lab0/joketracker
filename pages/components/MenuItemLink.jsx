import React from 'react';
import PropTypes from 'prop-types';

import Link from 'next/link'

const MenuItemLink = props => {
    return (
        <>
            <li>
                <Link href={props.linkTo} className="btn btn-sm btn-primary">
                    <a className="btn btn-sm btn-primary">GO</a>
                </Link> &nbsp;
                {props.label}
            </li>
            <br/>
        </>


    );
};

MenuItemLink.propTypes = {
    label: PropTypes.string.isRequired,
    linkTo: PropTypes.string.isRequired
};

export default MenuItemLink;

import React from 'react';
import PropTypes from 'prop-types';
import PageContainer from "./PageContainer";
import Head from "next/head";
import SystemWindow from "./SystemWindow";

const Layout = props => {
    return (
        <div className="container-fluid">
            <Head>
                <title>Random Bad Programing joke tracker</title>
            </Head>
            <br/>

            <PageContainer>
                <SystemWindow windowName={props.pageTitle}>
                    {props.children}
                </SystemWindow>
            </PageContainer>

            <footer>
            </footer>
        </div>
    );
};

Layout.propTypes = {
    pageTitle: PropTypes.string
};

export default Layout;

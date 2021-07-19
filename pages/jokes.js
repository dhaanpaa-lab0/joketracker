import React from 'react';
import PropTypes from 'prop-types';
import Layout from "../components/Layout";
import DataTable from "../components/DataTable";
import DataTableHeader from "../components/DataTableHeader";
import DataTableRow from "../components/DataTableRow";
import Router from 'next/router';
import DataTableBody from "../components/DataTableBody";
import Link from 'next/link'

const deleteRow = async id => {
    console.log("DELETE ROW: " + id);

    const res = await fetch(`/api/jokes/delete/${id}`,{
        body: {},
        method: 'POST'
    });
    const data = await res.json();
    await Router.push("/jokes");
}

function Jokes({jokes}) {
    return (
        <Layout pageTitle="List of Jokes">
            <DataTable>
                <DataTableHeader fieldLabels={["Joke", "Commands"]}/>
                <DataTableBody>
                    {jokes.map(item => <DataTableRow key={item._id}>
                        <td>{item.joke}</td>
                        <td>
                            <button className="btn btn-sm btn-danger" onClick={() => deleteRow(item._id)}>Delete</button>
                        </td>
                    </DataTableRow>)}
                </DataTableBody>
            </DataTable>
            <br/>
            <Link href="/jokes_add">
                <a className="btn btn-danger">ADD NEW JOKE</a>
            </Link>
        </Layout>
    );
}

export async function getServerSideProps({req}) {
    const protocol = req.headers['x-forwarded-proto'] || 'http'
    const baseUrl = req ? `${protocol}://${req.headers.host}` : ''
    console.log(`URL=${baseUrl}`)
    const res = await fetch(`${baseUrl}/api/jokes`);
    const data = await res.json();
    return { props: {
        jokes: data
        }};
}

export default Jokes;

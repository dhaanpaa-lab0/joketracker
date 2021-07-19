import React from 'react';
import PropTypes from 'prop-types';
import Layout from "../components/Layout";
import Router from 'next/router';

function JokesAdd(props) {

    const addNewJoke = async event => {
        event.preventDefault()

        const res = await fetch(`/api/jokes/new`, {
            body: JSON.stringify({
                joke: event.target.joke.value
            }),
            method: 'POST'
        });

        await Router.push("/jokes");

    }
    return (
        <Layout pageTitle="Add New Joke">
            <form onSubmit={addNewJoke}>
                <div className="row">
                    <label htmlFor="txtJoke" className="form-label">
                        Joke:
                    </label>
                    <input type="text" id="txtJoke" name="joke" className="form-control"/>
                </div>
                <br/>
                <button type="submit" className="btn btn-sm btn-secondary">Create</button>

            </form>
        </Layout>
    );
}

JokesAdd.propTypes = {

};

export default JokesAdd;

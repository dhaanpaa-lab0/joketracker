import React from 'react';
import PropTypes from 'prop-types';
import Layout from "./components/Layout";
import {connectToDatabase} from "../util/mongodb";

// db.products.aggregate([{$sample: {size: 10}}]);

export async function getServerSideProps() {
    const { db } = await connectToDatabase();
    const movies = await db
        .collection("jokes")
        .aggregate([{$sample: {size: 10}}])
        .toArray();

    let joke = JSON.stringify(movies[0]);
    return {
        props: {
            aRandomJoke: joke
        }
    }

}

const JokesRandom = props => {
    let aRandomJoke = JSON.parse(props.aRandomJoke);

    return (
        <Layout pageTitle="Get Random Joke">
            <div>
                { aRandomJoke.joke }
            </div>
        </Layout>
    );
};

JokesRandom.propTypes = {

};

export default JokesRandom;

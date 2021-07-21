import Router, {useRouter} from 'next/router'
import Layout from "../../components/Layout";
import React, {useState} from "react";
import {connectToDatabase} from "../../util/mongodb";
const { ObjectId } = require("mongodb");

export async function getServerSideProps({query}) {

    const {id} = query
    console.log("SSI:",query)
    const { db } = await connectToDatabase();
    const movies = await db
        .collection("jokes")
        .findOne({_id:ObjectId(id)});

    let joke = JSON.stringify(movies);
    console.log(joke)
    return {
        props: {
            jokeToEdit: joke
        }
    }

}

const Post = ({jokeToEdit}) => {
    const router = useRouter()
    const {id} = router.query
    const [joke,setJoke] = useState(JSON.parse(jokeToEdit))

    const updateJoke = async event => {
        event.preventDefault()

        const res = await fetch(`/api/jokes/update/${joke._id}`, {
            body: JSON.stringify({
                joke: joke.joke
            }),
            method: 'POST'
        });

        await Router.push("/jokes");

    }
    console.log("psot",joke);
    const updateState = (event, id) => {
        setJoke({_id:id, joke:event.target.value});
    }
    return (
        <Layout pageTitle="Edit Joke">
            <form onSubmit={updateJoke}>
                <div className="row">
                    <label htmlFor="txtJoke" className="form-label">
                        Joke:
                    </label>
                    <input type="text" id="txtJoke" name="joke" className="form-control" value={joke.joke} onChange={(event) => updateState(event, joke._id)}/>
                </div>
                <br/>
                <button type="submit" className="btn btn-sm btn-secondary">Save</button>

            </form>
        </Layout>)
}

export default Post;

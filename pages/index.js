import Head from 'next/head'
import { connectToDatabase } from '../util/mongodb'
import Layout from "../components/Layout";
import Menu from "../components/Menu";
import MenuItemLink from "../components/MenuItemLink";


export default function Home({ isConnected }) {
  return (
    <Layout pageTitle="Main Menu">
        <Menu>
          <MenuItemLink label="List Jokes" linkTo="/jokes"/>
          <MenuItemLink label="Add New Joke" linkTo="/jokes_add"/>
          <MenuItemLink label="Get Random Joke" linkTo="/jokes_random"/>

        </Menu>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const { client } = await connectToDatabase()

  const isConnected = await client.isConnected()

  return {
    props: { isConnected },
  }
}

## Random tool to keep track of progamming jokes

## Configuration

### Set up environment variables

Copy the `env.local.example` file in this directory to `.env.local` (which will be ignored by Git):

```bash
cp .env.local.example .env.local
```

Set each variable on `.env.local`:

- `MONGODB_URI` - Your MongoDB connection string. If you are using [MongoDB Atlas](https://mongodb.com/atlas) you can find this by clicking the "Connect" button for your cluster.
- `MONGODB_DB` - The name of the MongoDB database you want to use.

### Run Next.js in development mode

```bash
npm install
npm run dev

# or

yarn install
yarn dev
```

Your app should be up and running on [http://localhost:3000](http://localhost:3000)! If it doesn't work, post on [GitHub discussions](https://github.com/vercel/next.js/discussions).


When you are successfully connected, you can refer to the [MongoDB Node.js Driver docs](https://mongodb.github.io/node-mongodb-native/3.4/tutorials/collections/) for further instructions on how to query your database.

### Technologies Used

```
- NEXT.JS
- BOOTSTRAP 5
- REACT.JS
```

### Notes

```
Uses Server Side Rendering
Click on 'list' to list jokes defined in system
Click on 'Add New Joke' to add new joke to the system
Click on 'Get Random Joke' to get random programming joke that has been defined
```

### Why I Built this?

This is a programming joke that's why


### Support?

den-noc@djhent.us

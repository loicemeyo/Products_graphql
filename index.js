import express from 'express';
import graphlHTTP from 'express-graphql'
import mongoose from 'mongoose';
import schema from './schema';

const app = express();
const PORT = 3002;

mongoose.Promise = global. Promise;
mongoose.connect('mongodb://127.0.0.1:27017/graphql_db')


app.get('/', (req, res) => {
    res.json({
        msg: 'Hello from the server side, built in GraphQl!'
    })
});

//Middleware
app.use('/graphql', graphlHTTP ({
    schema: schema,
    graphiql: true,
}));

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`)
});
import express from 'express';
import cors from 'cors';
import path from 'path';




const __dirname = path.resolve();

import { usersRouter } from './src/users.routes.mjs';
import { likedItemsRouter } from './src/likedItems.routes.mjs';
import { addItemsRouter } from './src/addItems.routes.mjs';
import { viewAllRouter } from './src/viewAll.routes.mjs';
import { connect } from './db/connect.mjs';


const app = express();

app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies


app.use(cors());

app.use('/api/addedItems', express.static(path.join(__dirname, 'addedItems'))); //adding path to use at client side





app.use('/api/users', usersRouter);
app.use('/api/likedItems', likedItemsRouter);
// app.use('/api/collection', collectionRouter)
app.use('/api/addItems', addItemsRouter);
app.use('/api/viewAll', viewAllRouter);
app.use(express.static('../react-app/build'));//we run it from "final" folder


const port = process.env.PORT || 8080; //listening to heroku port Or 8080 default

app.listen(port, () => {
    connect();
});

console.log("Server up and running on localhost: "  + port);
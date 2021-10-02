import express from 'express';

import { deleteUser } from './users.service.mjs';
import { editUser } from './users.service.mjs';
import { addUser } from './users.service.mjs';
import {getUsers} from './users.service.mjs';
import {getUser} from './users.service.mjs';


export const usersRouter = express.Router();




usersRouter.get("/", (req, res) => {//Get all users
                              //No need to " "/users",  (req, res)", only "/" (req, res). because "/users" is defined in server.mjs app.use('/users', usersRouter);

    res.send(getUsers());//getUsers() function is imported from './users.service.mjs
});

//Create user 
usersRouter.post("/", (req, res) => {//If we want to create a new user we use post instead of get
                               //No need to " "/users",  (req, res)", only (req, res). because "/users" is defined in server.mjs app.use('/users', usersRouter);
                 
    res.send(addUser(req.body));//addUser() function is imported from './users.service.mjs
});

//Get single user from the users array 
usersRouter.get("/:id", (req, res) => {//If we want to see a single user by its acountNumber, we use :id , we save whatever is writen after users/ and saves it in id variable (can call "id" whatever instead)
                                                 //don't need to write "/users/:acountNumber", only "/:id", because /products is defined in users.mjs app.use('/users', usersRouter);
    res.send(getUser(req.params.userId));//getUser() function is imported from './users.service.mjs
});

//Update single user 
usersRouter.put("/:id", (req, res) => {//If we want to update a user we use put instead of get. we use :id to save whatever is writen after products/ and saves it in id variable (can call "id" whatever instead)
    res.send(editUser(req.params.id, req.body));//editUser() function is imported from './users.service.mjs
});

//Delete single user
usersRouter.delete("/:id", (req, res) => {//If we want to delete a user we use delete instead of get
    res.send(deleteUser(req.params.id));
});
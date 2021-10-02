import express from 'express';
import { getAllLikedItems } from './likedItems.service.mjs';
import { deleteCombination } from './likedItems.service.mjs';
import { addLiked } from './likedItems.service.mjs';
import {getLiked} from './likedItems.service.mjs';


export const likedItemsRouter = express.Router();


//Create post 
likedItemsRouter.post("/", async(req, res) => {
    try{
        res.send(await addLiked(req.body));
    } catch(e){
        res.status(400);
        res.send(e.message);
    }
});

//Get liked combinations by user id
// likedItemsRouter.get("/:id", (req, res) => {
//      res.send(getLIked(req.params.id));
// });
likedItemsRouter.get("/", async (req, res) => {
    res.send(await getAllLikedItems());
});


likedItemsRouter.get("/:id", async (req, res) => {
    res.send(await getLiked(req.params.id));
});


//Delete combination
likedItemsRouter.delete("/", async(req, res) => {
    res.send(await deleteCombination(req.params.id));
});

// Delete single product from the list
likedItemsRouter.delete('/:id', async (req, res) => {
    res.send(await deleteCombination(req.params.id));
});
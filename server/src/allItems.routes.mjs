import express from 'express';
import { getAllItems } from './allItems.service.mjs';
import { deleteCombination } from './likedItems.service.mjs';
import { addLiked } from './likedItems.service.mjs';
import {getLiked} from './likedItems.service.mjs';


export const allItemsRouter = express.Router();




allItemsRouter.get("/", async (req, res) => {
    res.send(await getAllItems());
});


// allItemsRouter.get("/:id", async (req, res) => {
//     res.send(await getLiked(req.params.id));
// });


// //Delete combination
// allItemsRouter.delete("/", async(req, res) => {
//     res.send(await deleteCombination(req.params.id));
// });

// // Delete single product from the list
// allItemsRouter.delete('/:id', async (req, res) => {
//     res.send(await deleteCombination(req.params.id));
// });
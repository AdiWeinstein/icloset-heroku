import express from 'express';
import { getItems } from './viewAll.service.mjs';
import { deleteItem } from './viewAll.service.mjs';
import { getItem } from './viewAll.service.mjs';




export const viewAllRouter = express.Router();


//get all items
viewAllRouter.get('/', async (req, res) => {
    try{
    res.send(await getItems(req.query));
    }catch(e) {
        res.status(400);
        res.send(e.message);
    }
});


// Get single item from the list
viewAllRouter.get('/:id', async (req, res) => {
    res.send(await getItem(req.params.id));
});


// Delete single item from the list
viewAllRouter.delete('/:id', async (req, res) => {
    res.send(await deleteItem(req.params.id));
});
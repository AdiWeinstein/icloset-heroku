
import express from 'express';
import { upload } from './addItems.servise.mjs';
import {singleFileUpload} from '../src/addItems.servise.mjs';


export const addItemsRouter = express.Router();


addItemsRouter.post('/',upload.single('file'),singleFileUpload);
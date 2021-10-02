import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const CombinationSchema = new mongoose.Schema({
    combination: [{ type: Schema.Types.ObjectId, ref: 'SingleFile' }] //called populate() - reference documents in other collections (singlefile)
});

export const Combination = mongoose.model('Combination', CombinationSchema); 
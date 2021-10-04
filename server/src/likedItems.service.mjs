import Mongo from "mongodb";
import { Combination } from "../db/Combination.model.mjs";

const { ObjectId } = Mongo;


export function getAllLikedItems() {
  return Combination.find().populate("combination").exec(); //called populate() - reference documents in other collections (singlefile)
}


export async function getLiked(id) {
  return Combination.findOne({
    _id: ObjectId(id),
  });
}

export async function addLiked(combination) {  //Should be executed when clicking on ♥ icon on nav
  const newCombination = new Combination({
    combination,
  });
  const doc = await newCombination.save();
  return await doc.populate("combination").execPopulate();
}


export function deleteCombination(id) {
  return Combination.findOneAndDelete({
    _id: ObjectId(id),
  });
}

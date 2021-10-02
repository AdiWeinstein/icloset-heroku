// import loadJson from 'load-json-file';
import Mongo from "mongodb";
import { Combination } from "../db/Combination.model.mjs";

const { ObjectId } = Mongo;

// let liked = loadJson.sync('./data/likedItems.json'); //liked.json is going to be an array of liked item objects

// export function getAllLikedItems() {
//    return liked;
// }

export function getAllLikedItems() {
  return Combination.find().populate("combination").exec(); //called populate() - reference documents in other collections (singlefile)
}

// export function getLIked(id){//get liked combinations by the id of the user that liked them
//     const [ combination ] = combinations.filter(combination => combination.id == id);
//     return combination;
// }

// export function getLiked(id){//get liked combinations by the id of the user that liked them
//     const  {combination} = liked.filter(item => item.id == id)[0];
//     console.log(combination)
//     return combination;
// }

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

// export function deleteCombination(){//need help with this one - has to dlelete shown combination from liked.json when "delete" button is clicked
//     liked = liked.filter(combination => combination);//
// }

export function deleteCombination(id) {
  return Combination.findOneAndDelete({
    _id: ObjectId(id),
  });
}

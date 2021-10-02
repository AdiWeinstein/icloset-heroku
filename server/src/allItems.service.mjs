import mongo from 'mongodb';
import {SingleFile} from '../db/Singlefile.model.mjs';
const { ObjectId } = mongo;
 
export function getAllItems() {
    return SingleFile.find();
 
 }

 
const getRendomItem = (type) => {
    return type[Math.floor(Math.random() * type.length)]

}

export const findCombination = () => {
const findTop = SingleFile.findOne(item => item.type === "top");
const findButtom = SingleFile.findOne(item => item.type === "buttom");
const findShoes = SingleFile.findOne(item => item.type === "shoes");
const newCombination = [getRendomItem(findTop), getRendomItem(findButtom), getRendomItem(findShoes)]
    // console.log(newCollection)
return newCombination
}
// console.log(newCombination)

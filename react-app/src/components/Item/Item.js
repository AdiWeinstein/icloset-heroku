import './item.css';
import React, {useContext } from "react";
import { ViewAllContext } from '../viewAll/ViewAllContext.js';


export default function Item( {
    _id,
    filePath,
    type,
    productType

}){
 const {getItems} = useContext(ViewAllContext); 
const deleteFromCloset = _id =>{

     fetch(`/api/viewAll/${_id}`,{
            method: 'DELETE',
            header:{
                'Accept':'application/json',
                'Content-Type': 'application/json'
            }
    })
    .then(getItems());
}

    return(
       <div className="item">
          <img src={`api/${filePath}`} className="item-image" alt="item-img"/>
         {<button onClick={() => deleteFromCloset(_id)}><span>Delete from closet</span></button>}
       </div>
    );
}


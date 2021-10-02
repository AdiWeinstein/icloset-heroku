import './ViewAll.css'; 
import React, {useContext} from "react";
import {Link} from "react-router-dom";
import { ViewAllContext } from './ViewAllContext.js';
import Item from '../Item/Item.js';


export default function ViewAll(){

  const {items} = useContext(ViewAllContext);



    return (

 <div className="view-all">

   <div className="view-all-container">

        {items.length > 0 //if 'items' array is not empty (after fetch filled the array)
        ? items.map(item => <Item key={item.filePath} {...item} />)  //...product - pass all elements of iterableObj as arguments to function
                                                               //key -> some value that is uniqe fo each product, in this case its the id                                                               //onAddToCart is the function that adds to cart on click
        :<div className="emptyCloset">
          <Link to='/addItems'>
         <button><span>Closet is empty, click to add items</span></button>
         </Link>
          </div>}
        </div>
  </div>  
                                                                 
    );

    }                                     
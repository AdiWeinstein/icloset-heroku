import React from "react";

import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import "./CollectionCard.css";

function CollectionCard({ combination, _id , deleteCombination, currentIndex}) {
  
  

  return (
    <>
      <div className="collection-card">
        <div className="Collection_Item">
          {combination.map(({ productType, filePath, type, _id }) => (
            <img
              key={_id}
              className={`liked-${type}`}
              src={'http://localhost:8080/api/'+filePath}
              alt={productType}
            
            />
          ))}
        </div>

        {/* {collection.length === 0 ? 'Loading...' : collection.map((item) => <Combination key={collection.id} {...item}/>)} */}
      </div>
      <DeleteOutlineOutlinedIcon
        className="delete_icon"
        onClick={() => deleteCombination(currentIndex._id)}
        // onClick={(e) => deleteCombination(combination.indexOf(e.target.value)._id)}
        
      />
    </>
  );
}

export default CollectionCard;

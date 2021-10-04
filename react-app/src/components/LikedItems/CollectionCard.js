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

      </div>
      <DeleteOutlineOutlinedIcon
        className="delete_icon"
        onClick={() => deleteCombination(currentIndex._id)}
        
      />
    </>
  );
}

export default CollectionCard;

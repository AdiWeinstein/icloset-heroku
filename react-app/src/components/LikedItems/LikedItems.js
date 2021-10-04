import "./LikedItems.css";

import React, { useState, useEffect, useContext } from "react";
import CollectionCard from "./CollectionCard";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { ViewAllContext } from "../viewAll/ViewAllContext";

export default function LikedItems() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { combination, setCombination, combinationsList } =
    useContext(ViewAllContext);

  const deleteCombination = (_id) => {
    // DELETE request
    console.log("id", _id);
    fetch(`/api/likedItems/${_id}`, {
      method: "DELETE",
      header: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then(setCombination(combination.filter((item) => item._id !== _id)));
    if (combination.length - 1 == currentIndex) {
      setCurrentIndex(currentIndex - 1);
    }

  };


  return (
    <div className="liked-items">
      <div className="carusel">
        <div className="caruselInner">
          <div className="left">
            <ArrowBackIosIcon
              onClick={() => {
                setCurrentIndex(
                  currentIndex - 1 < 0
                    ? combination.length - 1
                    : currentIndex - 1
                );
              }}
            />
          </div>

          <div className="center">
            {combination.length > 0 && (
              <CollectionCard
                deleteCombination={deleteCombination}
                id={combination[currentIndex].id}
                combination={combination[currentIndex].combination}
                currentIndex={combination[currentIndex]}
              />
            )}
          </div>

          <div className="right">
            <ArrowForwardIosIcon
              onClick={() => {
                setCurrentIndex(
                  currentIndex + 1 <= combination.length - 1
                    ? currentIndex + 1
                    : 0
                );
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

import "./MainComponent.css";
import { useState, useContext } from "react";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import { ViewAllContext } from "../viewAll/ViewAllContext";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { BiChevronsUp } from "react-icons/bi";

export default function MainComponent() {
  //Find me navbar link

  const { items } = useContext(ViewAllContext);
  console.log("all items", items);

  const [combination, setCombination] = useState([]);
  const context = useContext(ViewAllContext);

  const [isLikedItem, setIsLikedItem] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [findBtn, setFindBtn] = useState(false);

  const getRandom = (array) => {
    return array[Math.floor(Math.random() * array.length)]; //A general function that gets an array and knows how to random an item
  };

  const getrandomCombination = () => {
    const arrangeItems = {}; // finally we get an object that contains {top: [{...}] , bottom:[{...}] , shoes:[{...}]}
    items.forEach((item) => {
      if (arrangeItems[item.type]) {
        arrangeItems[item.type].push(item);
      } else {
        arrangeItems[item.type] = [item]; //first time for every key
      }
    });
    console.log("arrangeItems", arrangeItems);
    const theTop = getRandom(arrangeItems.top); //Calling getRandom function and passing into it an array (top, bottom, shoes)
    const theBottom = getRandom(arrangeItems.bottom);
    const theShoes = getRandom(arrangeItems.shoes);
    const thedress = getRandom(arrangeItems.else);

    const getDressComb = [thedress, theShoes]; //dress combination
    const threeItemsComb = [theTop, theBottom, theShoes]; //ather combination
    const randomProduct = getRandom(items).productType; //get a random item and make a condition if it is a dress or not
    if (randomProduct === "dress") {
      setCombination(getDressComb);
    } else {
      setCombination(threeItemsComb);
    }
    setIsLikedItem(false); // Resets the liked item button to false
    setShowResults(true); // switch the message with the images
    setFindBtn(true); // change the text on the "Find Me" button

    // const findElse = items.filter(item => item.type === "else"); const theElse =
    // findElse[Math.floor(Math.random() * findElse.length)];
    // return setCombination([theTop, theBottom, theShoes]);

    //Instead of duplicating this code for each category I created a global getRandom function
    // and a forEach function that goes over all the items
    // and produces an object whose "key" is the category (top,bottom,shoes,else)
    //and the value is an array of all the items from the same category.
  };
  console.log("combin", context.combination);

  const addlikedItem = (combination) => {
    // console.log("combination", combination.map((c) => c._id));
    fetch("/api/likedItems", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(combination.map((c) => c._id)),
    })
      .then((res) => res.json())
      .then((data) => {
        context.setCombination([...context.combination, data]);
      });

    setIsLikedItem(true); //change the liked item button state to true (The heart icon is marked)
  };

  return (
    <div className="main">
      <button className="findMeButton" onClick={getrandomCombination}>
        <span>
          {findBtn ? (
            <div>
              FIND ME SOMETHING ELSE <AutorenewIcon size="1.5em" />
            </div>
          ) : (
            "FIND ME SOMETHING!"
          )}
        </span>
      </button>
      <div className="main-component">
        <div className="new-combinatin">
          {showResults ? null : (
            <div className="results">
              <BiChevronsUp size="1.5em" /> Click on <br /> "FIND ME SOMETHING!"
              <br /> button to see the outfit
            </div>
          )}
          {items.length > 0 &&
            combination.map(({ productType, _id, type, filePath }) => (
              <img
                key={_id}
                className={type}
                src={`api/${filePath}`}
                alt={productType}
              />
            ))}
        </div>
        <div className="buttons">
          <button
            className="findMeButton likeButton"
            onClick={() => addlikedItem(combination)}
          >
            {isLikedItem === false ? (
              <span>
                <MdFavoriteBorder size="1.5em" />
              </span>
            ) : (
              <MdFavorite size="1.5em" />
            )}
          </button>
         
        </div>
      </div>
    </div>
  );
}

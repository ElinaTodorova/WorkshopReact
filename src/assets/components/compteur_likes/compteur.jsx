import { useState } from "react";
import "./compteur.css";

function CompteurLike() {
  const [count, setCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [dislike, setDislike] = useState(false);

  const handleLikeClick = () => {
    setCount(count + 1);
    if (clicked) {
      setCount(count - 1);
    } else {
      setCount(count + 1);
    }
    setClicked(!clicked);
  };

  const handleDislikeClick = () => {
    setDislikeCount(dislikeCount + 1);
    if (dislike) {
      setDislikeCount(dislikeCount - 1);
    } else {
      setDislikeCount(dislikeCount + 1);
    }
    setDislike(!dislike);
  };

  return (
    <div>
      <button id={clicked ? "liked" : ""} onClick={handleLikeClick}>
        <img
          className="like"
          src={clicked ? "images/heart-like.svg" : "images/icon-like.png"}
          alt="Like"
        />
        <p>{count}</p>
      </button>
      <button id={dislike ? "dislike" : ""} onClick={handleDislikeClick}>
        <img
          className="dislike"
          src={dislike ? "images/dislike-rouge.png" : "images/dislike.png"}
          alt="Dislike"
        />
        <p>{dislikeCount}</p>
      </button>
    </div>
  );
}
console.log("LIKE!!!!");

export default CompteurLike;

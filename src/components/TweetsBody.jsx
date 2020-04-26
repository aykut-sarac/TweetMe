import React from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
function TweetsBody(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="tweets">
      <div>
        <img className="avatar" src="/avatar.jpg"></img>
        <h2>{props.username}</h2>
      </div>
      <p>{props.tweets}</p>
      <button onClick={handleClick}>
        <DeleteForeverIcon />
      </button>
    </div>
  );
}

export default TweetsBody;

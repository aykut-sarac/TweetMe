import React from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
function TweetsBody(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

<<<<<<< HEAD
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
=======
    function handleClick(){
        props.onDelete(props.id);
    }

    return (<div className="tweets">
                <div>
                <img className="avatar" src="publicdomainvectors.org/photos/Linux-Avatar"></img>
                <h2>{props.username}</h2>
                </div>
        <p>{props.tweets}</p>
        <button onClick={handleClick}>
        <DeleteForeverIcon/>
        </button>
    </div>);
>>>>>>> 6a3ef6e1b097e5bb67e3b511b7d519af01872760
}

export default TweetsBody;

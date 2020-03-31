import React from "react";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
function TweetsBody(props){

    function handleClick(){
        props.onDelete(props.id);
    }

    return (<div className="tweets">
        <img class="avatar" src="https://publicdomainvectors.org/photos/Linux-Avatar.png"></img>
        <h2>{props.username}</h2>
        <p>{props.tweets}</p>
        <button onClick={handleClick}>
        <DeleteForeverIcon/>
        </button>
    </div>);
}


export default TweetsBody;

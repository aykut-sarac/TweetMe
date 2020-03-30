import React from "react";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
function TweetsBody(props){

    function handleClick(){
        props.onDelete(props.id);
    }

    return (<div className="tweets">
        <h2>{props.username}</h2>
        <p>{props.tweets}</p>
        <button onClick={handleClick}>
        <DeleteForeverIcon/>
        </button>
    </div>);
}


export default TweetsBody;

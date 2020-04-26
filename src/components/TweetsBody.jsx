import React from "react";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
function TweetsBody(props){

    function handleClick(){
        props.onDelete(props.id);
    }

    return (<div className="tweets">
                <div>
                <img className="avatar" src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_female_woman_avatar-512.png"></img>
                <h2>{props.username}</h2>
                </div>
        <p>{props.tweets}</p>
        <button onClick={handleClick}>
        <DeleteForeverIcon/>
        </button>
    </div>);
}


export default TweetsBody;

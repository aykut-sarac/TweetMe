import React, { useState } from "react";

function CreateTweet(props){

    const [tweet,setTweet] = useState({
        username: "Player1",
        tweets: "",
        
    });

    function handleChange(event){
        const {name,value} = event.target;

        setTweet(prevTweet => {
            return {
                ...prevTweet,
                [name]:value
            }
        })
    }

    function submitTweet(event){
        props.onAdd(tweet);
        setTweet({
            username: "Player1",
            tweets: "",
            

        });           
        event.preventDefault();
    }

    return (<div>
        <form>
            <div>
            <img 
            src="https://publicdomainvectors.org/photos/Linux-Avatar.png" 
            alt= "Avatar" 
            className="avatar"
            
        />
            <input 
            name= "username" 
            onChange={handleChange} 
            value= {tweet.username} 
            placeholder= "Player1"
            
            
            /> 
            </div>
            <textarea 
            name="tweets" 
            onChange={handleChange} 
            value={tweet.tweets} 
            placeholder="Howdy? Please insert Coin!" 
            rows= "2"
            
            />
            <button className=" btn btn-primary" onClick={submitTweet}>Tweet</button>

        </form>
    </div>);
}


export default CreateTweet;
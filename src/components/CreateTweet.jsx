import React, { useState } from "react";

function CreateTweet(props){

    const [tweet,setTweet] = useState({
        username: "",
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
            username: "",
            tweets: "",
            

        });           
        event.preventDefault();
    }

    return (<div>
        <form>
            <img 
            src="https://publicdomainvectors.org/photos/Linux-Avatar.png" 
            alt= "Avatar" 
            class="avatar"
            
        />
            {/* <input 
            name= "username" 
            onChange={handleChange} 
            value={tweet.username} 
            placeholder= "username"
            
            /> */}
            <textarea 
            name="tweets" 
            onChange={handleChange} 
            value={tweet.tweets} 
            placeholder="tweet" 
            rows= "2"
            
            />
            <button class=" btn btn-primary" onClick={submitTweet}>Tweet</button>

        </form>
    </div>);
}


export default CreateTweet;
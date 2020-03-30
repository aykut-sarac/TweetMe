import React, { useState } from "react";

import Header from "./Header";
import Footer from "./Footer";
import TweetsBody from "./TweetsBody";

import CreateTweet from "./CreateTweet";
import Sidenav from "./Sidenav";




function App(){

    const [tweets,setTweets] = useState([]);

    function addTweet(newTweet) {
        setTweets(prevTweets => {
            return [...prevTweets,newTweet];
        });
    }

    function deleteTweet(id) {
        setTweets(prevTweets => {
            return prevTweets.filter((tweetItem, index)=> {
                return index !== id;
            });
        });
    }

    return (<div>
        <Header/>
        <Sidenav/>
        <CreateTweet
            onAdd={addTweet}
        />

        {tweets.map((tweetItem,index) => <TweetsBody
        id= {index}
        key = {index}
        username={tweetItem.username}
        tweets = {tweetItem.tweets}
        onDelete = {deleteTweet}
    />
    )}
        
        <Footer/>

    </div>);
}


export default App;

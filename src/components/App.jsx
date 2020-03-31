import React, { useState } from "react";
import Footer from "./Footer";
import TweetsBody from "./TweetsBody";
import CreateTweet from "./CreateTweet";
import Navbar from "./Navbar";
import sampleTweets from "../sampleTweets";



function App(){

    const [tweets,setTweets] = useState([]);

    function addTweet(newTweet) {
        setTweets(prevTweets => {
            return [newTweet,...prevTweets];
        });
    }

    function deleteTweet(id) {
        setTweets(prevTweets => {
            return prevTweets.filter((tweetItem, index)=> {
                return index !== id;
            });
        });
    }

    function TweetSamples(props) {
        
        return (
            <div className="tweets">
                <div>
                    <img className="avatar" src={props.img}/>
                    <h2>{props.username}</h2>
                </div>
                <p>{props.tweets}</p>
            </div>
        )
    }

    return (<div className= "wrapper">
        
        <Navbar/>
        <CreateTweet onAdd={addTweet}/>
        {tweets.map((tweetItem,index) => <TweetsBody
        id= {index}
        key = {index}
        username={tweetItem.username}
        tweets = {tweetItem.tweets}
        onDelete = {deleteTweet}
        /> )}
        {sampleTweets.map((tweetItem) => <TweetSamples
         key={tweetItem.key}
         username={tweetItem.username}
         tweets={tweetItem.tweets}
         img={tweetItem.img}
         /> )}
        
        
        <Footer/>

            </div>);
}


export default App;

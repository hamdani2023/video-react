import React, { useState } from "react";

import Tweet from "./componnents/Tweet";

function App() {
  let [tweets, setTweets] = useState([
    { id: 0, name: "Johne", content: "content John", likes: 0 },
    { id: 1, name: "Sami", content: "content Sami", likes: 10 },
    { id: 2, name: "Edward", content: "content Edward", likes: 20 },
    { id: 3, name: "Kevin", content: "content Kevin", likes: 30 },
  ]);

  let [userName, setUserName] = useState("Hamdani");

  const onDelete = (tweetId) => {
    const filterTweet = tweets.filter((twt) => twt.id !== tweetId);
    setTweets(filterTweet);
  };

  const onLike = (tweetId) => {
    setTweets((curr) => {
      const copyTweet = [...curr];
      const likedTweet = copyTweet.find((tweet) => tweet.id === tweetId);
      likedTweet.likes += 1;
      return copyTweet;
    });
  };

  const hundleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const content = event.target.content.value;

    const newTweet = {
      id: tweets[tweets.length - 1]?.id + 1 ?? 0,
      name,
      content,
      likes: 0,
    };

    addTweet(newTweet);
  };

  const addTweet = (tweet) => {
    setTweets([...tweets, tweet]);
  };

  return (
    <div>
      <form onSubmit={hundleSubmit} className="tweet-form" action="">
        <h4> New tweet</h4>
        <input placeholder="name" type="text" name="name" />
        <input placeholder="content" type="text" name="content" />
        <input type="submit" />
      </form>

      <div className="tweet-container">
        {tweets.map((twt) => {
          return (
            <Tweet
              key={twt.id}
              id={twt.id}
              name={twt.name}
              content={twt.content}
              likes={twt.likes}
              onDelete={(id) => {
                onDelete(twt.id);
              }}
              onLike={(id) => {
                onLike(id);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
export default App;

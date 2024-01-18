import React, { useState } from "react";

import Tweet from "./componnents/Tweet";

function App() {
  let [tweets, setTweets] = useState([
    { id: 0, name: "Ahmed", content: "content Ahmed", likes: 0 },
    { id: 1, name: "Aya", content: "content Aya", likes: 10 },
    { id: 2, name: "Amine", content: "content Amine", likes: 20 },
    { id: 3, name: "Yassemine", content: "content Yassemine", likes: 30 },
  ]);

  let [userName, setUserName] = useState("hamdani");

  return (
    <div>
      <p> User name : {userName} </p>
      <div className="tweet-container">
        {tweets.map((twt) => {
          return (
            <Tweet
              key={twt.id}
              name={twt.name}
              content={twt.content}
              likes={twt.likes}
            />
          );
        })}
      </div>
    </div>
  );
}
export default App;

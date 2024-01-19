import React, { useState } from "react";

import Tweet from "./componnents/Tweet";

function App() {
  let [tweets, setTweets] = useState([
    { id: 0, name: "Johne", content: "content John", likes: 0 },
    { id: 1, name: "Sami", content: "content Sami", likes: 10 },
    { id: 2, name: "Edward", content: "content Edward", likes: 20 },
    { id: 3, name: "Kevin", content: "content Kevin", likes: 30 },
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
              onDelete={() => {
                console.log("Delete", twt.id);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
export default App;

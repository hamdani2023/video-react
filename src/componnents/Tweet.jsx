import React from "react";


export default function Tweet({ name, content, likes }) {
  const onLike = () => {
    
    console.log("Like ", name);
  };

  return (
    <div className="tweet">
      <h3>{name}</h3>
      <p>{content}</p>
      <button onClick={() => onLike()}> {likes} ❤️</button>
    </div>
  );
}

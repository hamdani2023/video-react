import React from "react";

export default function Tweet({ name, content, likes, onDelete }) {
  const onLike = () => {
    console.log("Like ", name);
  };

  return (
    <div className="tweet">
      <button onClick={() => onDelete()} className="delete">   ❌
      </button>
      <h3>{name}</h3>
      <p>{content}</p>
      <button onClick={() => onLike()}> {likes} ❤️</button>
    </div>
  );
}

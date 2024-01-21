import React from "react";

export default function Tweet({ id, name, content, likes, onDelete, onLike }) {
 

  return (
    <div className="tweet">
      <button onClick={() => onDelete()} className="delete">
        {" "}
        ❌
      </button>
      <h3>{name}</h3>
      <p>{content}</p>
      <button onClick={() => onLike(id)}> {likes} ❤️</button>
    </div>
  );
}

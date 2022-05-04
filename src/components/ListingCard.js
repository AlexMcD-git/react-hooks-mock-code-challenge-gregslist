import React from "react";

function ListingCard({listing, onClickFavorite, onClickDelete}) {
  const { id, description, image, location, favorite } = listing

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite ? (
          <button className="emoji-button favorite active" onClick={()=>onClickFavorite(id)}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={()=>onClickFavorite(id)}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={()=>onClickDelete(id)}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;

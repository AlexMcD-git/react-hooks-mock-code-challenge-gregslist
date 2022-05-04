import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, onClickFavorite, onClickDelete, searchContent}) {
  return (
    <main>
      <ul className="cards">
        {listings.filter(listing=>{
        return listing.description.includes(searchContent)
      })
      .map(listing=><ListingCard 
        key={listing.id} 
        listing={listing} 
        onClickFavorite={onClickFavorite}
        onClickDelete={onClickDelete}
        />)}
      </ul>
    </main>
  );
}

export default ListingsContainer;

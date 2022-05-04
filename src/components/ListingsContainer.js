import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, onClickFavorite, onClickDelete}) {
  return (
    <main>
      <ul className="cards">
        {listings.map(listing=><ListingCard 
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

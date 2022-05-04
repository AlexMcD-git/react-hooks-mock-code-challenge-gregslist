import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
// import { useEffect, useState } from "react/cjs/react.production.min";

function App() {
  const URL=`http://localhost:6001/listings`
  const [listings, setListings] = useState([])
  const [searchContent, setSearchContent] = useState("")

  useEffect(()=>{
    fetch(`http://localhost:6001/listings`)
    .then(r=>r.json())
    .then(data=>setListings(data.map(listing=>{
      return {...listing, favorite: false}
    })))
  },[])

  function updateSearchContent(search){
    setSearchContent(search)
  }

  function onClickFavorite(id){
    setListings([...listings].map(listing=>{
      if(id===listing.id){
        return {...listing, favorite:!listing.favorite}
      }
      else return listing
    }))
  }

  function onClickDelete(id){
    fetch(`${URL}/${id}`,{
      method: "DELETE"
    })
    .then(console.log(`Deleted element with id:${id}`))

    setListings([...listings].filter(listing=>{
      return listing.id===id?false:true
    }))
  }

  function sortByLocation(){
    setListings([...listings].sort((a,b) => (a.location>b.location)?1:((b.location>a.location)?-1:0)))
  }

  console.log(listings)
  return (
    <div className="app">
      <Header seachContent={searchContent} updateSearchContent={updateSearchContent} sortByLocation={sortByLocation}/>
      <ListingsContainer listings={listings.filter(listing=>{
        return listing.description.includes(searchContent)
      })}
      onClickFavorite={onClickFavorite} 
      onClickDelete={onClickDelete}/>
    </div>
  );
}

export default App;

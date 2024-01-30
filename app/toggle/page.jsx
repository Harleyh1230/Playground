"use client"
import React, { useState } from 'react';

const YourComponent = () => {
  // Sample data for your cards
  const cardData = [
    { id: 1, title: 'Card 1' },
    { id: 2, title: 'Card 2' },
    { id: 3, title: 'Card 3' },
    { id: 4, title: 'Card 4' },
    { id: 5, title: 'Card 5' },
    { id: 6, title: 'Card 6' },
    { id: 7, title: 'Card 7' },
    { id: 8, title: 'Card 8' },
    { id: 9, title: 'Card 9' },
    { id: 10, title: 'Card 10' },
    { id: 11, title: 'Card 11' },
    { id: 12, title: 'Card 12' },
    { id: 13, title: 'Card 13' },
    { id: 14, title: 'Card 14' },
    { id: 15, title: 'Card 15' },
    { id: 16, title: 'Card 16' },
    { id: 17, title: 'Card 17' },
    { id: 18, title: 'Card 18' },
    // Add more card data as needed
  ];

   // State to manage whether to show all cards or just the initial 6
   const [showAllCards, setShowAllCards] = useState(false);

   // Function to handle "Show more" button click
   const handleShowMore = () => {
     setShowAllCards(!showAllCards);
   };
 
   const [showAll, setShowAll] = useState(false)

   return (
     <div className="p-4">
       <div className="grid grid-cols-3 gap-4">
 
         {/* Show first 6 cards */}
         {cardData.slice(0, 6).map(card => (
           <Card key={card.id} {...card} /> 
         ))}
 
         {/* Remaining cards */}
         {cardData.slice(6).map(card => (
           <Card key={card.id} {...card} className={`${showAll ? 'opacity-100' : 'hidden'} transition-opacity duration-500`} />
         ))}

       </div>
 
       <button
         className="mt-4 bg-blue-500 text-white p-2 rounded"
         onClick={() => setShowAll(!showAll)}  
       >
         {showAll ? 'Hide' : 'Show More'}
       </button>
 
     </div>
   )
 }
 
 // Card component
 function Card({title, className}) {
   return (
     <div className={`border p-4 ${className}`}>
       {title}
     </div>
   )
 }

export default YourComponent;

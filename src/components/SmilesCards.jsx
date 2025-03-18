import React from "react";
import { SmileCard } from "./SmileCard.jsx";
import "./SmileCard.css";

export const SmilesCards = ({ votes, setVotes, smiles }) => {
  return (
    <div className="smiles-cards-container">
      {smiles.map(item => <SmileCard key={item.id} smile={item} setVote={setVotes} vote={votes[item.id]}/>)}
    </div>
  );
};
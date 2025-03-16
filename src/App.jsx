import "./App.css";
import { SmilesCards } from "./components/SmilesCards.jsx";
import { useState } from "react";

function App() {

  const [votes, setVotes] = useState({});

  const handleVote = (smileId) => {
    votes[smileId] ? ++votes[smileId] && setVotes({ ...votes }) : setVotes({ ...votes, [smileId]: 1 });
    console.log(votes);
    console.log(smileId);
  };

  return (
    <>
      <SmilesCards onVote={handleVote}></SmilesCards>
    </>
  );
}

export default App;

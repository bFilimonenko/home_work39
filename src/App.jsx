import "./App.css";
import { SmilesCards } from "./components/SmilesCards.jsx";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@mui/material";
import { ResultsBlock } from "./components/ResultsBlock.jsx";

function App() {
  const [votes, setVotes] = useState({});
  const [smiles, setSmiles] = useState([]);
  const [results, setResults] = useState([]);
  const [renderResults, setRenderResults] = useState(false);

  const calculateWinners = useCallback(() => {
    const sortedResult = Object.entries(votes)
      .sort((a, b) =>
        b[1] - a[1]
      );

    const newResults = [];

    for (let i = 0; i < 3; i++) {
      if (i > sortedResult.length - 1) {
        continue;
      }
      newResults.push(smiles.find(smile => smile.id === Number(sortedResult[i][0])));
    }

    setResults(newResults);
  }, [smiles, votes]);

  useEffect(() => {
    fetch("http://localhost:3001/Smiles.json")
      .then(response => response.json())
      .then(data => setSmiles(data));
  }, []);

  useEffect(() => {
    calculateWinners();
  }, [calculateWinners, votes]);

  return (
    <>
      {renderResults ?
        <ResultsBlock winners={results}></ResultsBlock> :
        <SmilesCards smiles={smiles} votes={votes} setVotes={setVotes}></SmilesCards>
      }
      <Button size="large" variant="outlined" color="primary"
              onClick={() => setRenderResults((prev) => !prev)}>
        Show Result
      </Button>
    </>
  );
}

export default App;

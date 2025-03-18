import { IconButton } from "@mui/material";
import { Favorite } from "@mui/icons-material";

export const SmileCard = ({ smile, vote, setVote }) => {
  const handleClick = () => {
    vote ? setVote((prev) => ({ ...prev, [smile.id]: vote + 1 }))
      : setVote(((prev) => ({ ...prev, [smile.id]: 1 })));
  };

  return (
    <div className="smile-card">
      <h2>{smile.content}</h2>
      <p>{smile.description}</p>

      <IconButton color="error" aria-label="favorite" onClick={handleClick}>
        <Favorite/>
      </IconButton>
    </div>
  );
};


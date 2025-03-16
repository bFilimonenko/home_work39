import { IconButton } from "@mui/material";
import { Favorite } from "@mui/icons-material";

export const SmileCard = ({ smile, onVote }) => {

  const handleClick = () => {
    onVote(smile.id)
  };

  return (
    <div className="smile-card">
      <h2>{smile.content}</h2>
      <p>{smile.description}</p>

      <IconButton color="error" aria-label="favorite" onClick={handleClick}>
        <Favorite />
      </IconButton>
    </div>
  );
};


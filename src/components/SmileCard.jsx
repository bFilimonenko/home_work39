import { IconButton } from "@mui/material";
import { Favorite } from "@mui/icons-material";

export const SmileCard = ({ smile }) => {

  return (
    <div className="smile-card">
      <h2>{smile.content}</h2>
      <p>{smile.description}</p>

      <IconButton color="error" aria-label="favorite">
        <Favorite />
      </IconButton>
    </div>
  );
};


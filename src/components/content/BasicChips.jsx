import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export const BasicChips = ({ positions }) => {
  if (!positions || positions.length === 0) return;
  return (
    <Stack direction="row" spacing={1}>
      {positions.map((position) => (
        <Chip
          sx={{ backgroundColor: position.color, color: "white" }}
          key={position.label}
          label={position.label}
          variant={position.variant}
        />
      ))}
    </Stack>
  );
};

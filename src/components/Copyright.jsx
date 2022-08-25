import React from "react";
import { Typography } from "@mui/material";
import Link from "@mui/material/Link";

export default function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      <Link color="inherit" href="https://maps.google.fr">
        WeWalk
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

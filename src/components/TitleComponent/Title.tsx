import Box from "@material-ui/core/Box/Box";
import React from "react";

interface ITitle {
  content: string;
}

const Title = (props: ITitle) => {
  const { content } = props;
  return (
    <Box
      sx={{
        display: "inline-flex",
        m: 1,
        p: 1,
        bgcolor: (theme: { palette: { mode: string } }) =>
          theme.palette.mode === "dark" ? "#101010" : "#fff",
        color: (theme: { palette: { mode: string } }) =>
          theme.palette.mode === "dark" ? "grey.300" : "grey.800",
        border: "1px solid",
        borderColor: (theme: { palette: { mode: string } }) =>
          theme.palette.mode === "dark" ? "grey.800" : "grey.300",
        borderRadius: 2,
        fontSize: "0.875rem",
        fontWeight: "700",
      }}
    >
      {content}
    </Box>
  );
};

export default Title;

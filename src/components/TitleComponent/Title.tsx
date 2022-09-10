import Box from "@mui/material/Box";
import React from "react";

interface ITitle {
  content: string;
}

const Title = (props: ITitle) => {
  const { content } = props;
  return (
    <Box
      display={"flex"}
      p={1}
      flexDirection={"column"}
    >
      {content}
    </Box>
  );
};

export default Title;

import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import React from "react";
import './ControlOption.css';

interface IButtonDetails {
  label: string | "Sample";
  onClick: () => void;
  color: "primary" | "inherit" | "secondary" | "success" | "error" | "info" | "warning" | undefined;
  variant: "text" | "outlined" | "contained" | undefined;
  size: "small" | "medium" | "large" | undefined
}

interface IControlOptions {
  buttonDetails: IButtonDetails[];
}

/**
 *
 * @param buttonDetails
 * @returns React Node
 */
const renderButtonGroup = (buttonDetails: IButtonDetails[]) => {
  return buttonDetails.map((detail: IButtonDetails, index: number) => (
    <Button
      key={index}
      variant={detail.variant}
      size={detail.size}
      color={detail.color}
      onClick={detail.onClick}
      className={`control-btn`}
    >
      {detail.label}
    </Button>
  ));
};

const ControlOption = (props: IControlOptions) => {
  const { buttonDetails } = props;

  return (
    <div style={{ width: "100%" }}>
      <Box display="flex" p={1}>
        <ButtonGroup>{renderButtonGroup(buttonDetails)}</ButtonGroup>
      </Box>
    </div>
  );
};

export default ControlOption;

import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Radio from "@mui/material/Radio";
import React, { useState } from "react";
import "./multipleChoice.css";

interface IChoiceOption {
  label: string;
  value: string;
}

interface IMultipleChoiceProps {
  type: "checkbox" | "radio";
  options: IChoiceOption[];
}

const MultipleChoice = (props: IMultipleChoiceProps) => {
  const { type, options } = props;

  const [value, setvalue] = useState("");

  const renderOptionWithType = (
    optionLabel: string,
    optionValue: string,
    type: "checkbox" | "radio"
  ) => {
    switch (type) {
      case "checkbox":
        return (
          <Box>
            <FormControlLabel
              control={
                <Checkbox
                  className="option-checkbox"
                />
              }
              label={optionLabel}
              value={optionValue}
              onChange={(value) => console.log("value :::", value)}
            />
          </Box>
        );
        break;
      case "radio":
        return (
          <Box>
            <FormControlLabel
              control={
                <Radio
                  className="option-radio"
                />
              }
              label={optionLabel}
              value={optionValue}
              onChange={(value) => console.log("value :::", value)}
            />
          </Box>
        );
        break;
    }
  };

  const renderAllOptions = (options: IChoiceOption[]) => {
    return options.map((option, index) => (
      <div className="mcq-option" key={index}>
        <FormGroup>
          {renderOptionWithType(option.label, option.value, type)}
        </FormGroup>
      </div>
    ));
  };

  return <div className="multiplechoice-wrap">{renderAllOptions(options)}</div>;
};

export default MultipleChoice;

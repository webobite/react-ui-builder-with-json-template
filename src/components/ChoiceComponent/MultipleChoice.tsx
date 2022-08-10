import React from "react";
import "./multipleChoice.css";

interface IChoiceOption {
  label: string;
  value: string;
}

interface IMultipleChoiceProps {
  type: "input" | "checkbox" | "radio";
  options: IChoiceOption[];
}
const MultipleChoice = (props: IMultipleChoiceProps) => {
  return <div className="multiplechoice-wrap"></div>;
};

export default MultipleChoice;

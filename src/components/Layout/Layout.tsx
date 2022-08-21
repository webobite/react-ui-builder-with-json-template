import { Button } from "@material-ui/core";
import React from "react";
import MultipleChoice from "../MultipleChoiceComponent/MultipleChoice";
import ProgressBar from "../ProgressBar/ProgressBar";
import Title from "../TitleComponent/Title";
import "./layoutStyle.css";
//TEST the layout with normal rendering

const Layout = () => {
  return (
    <div className="layout-wrapper">
      <ProgressBar value={20} variant={"determinate"} color={"primary"} />
      <Title content="The first problem title" />
      <MultipleChoice
        options={[
          {
            label: "Option A",
            value: "A",
          },
          {
            label: "Option B",
            value: "B",
          },
          {
            label: "Option C",
            value: "C",
          },
          {
            label: "Option D",
            value: "D",
          },
        ]}
        type="checkbox"
      />
      <div className="layout-btn-wrap">
        <Button className="layout-btn skip-btn" color="secondary">
          Skip
        </Button>
        <Button className="layout-btn next-btn" color="primary">
          Next
        </Button>
      </div>
    </div>
  );
};

export default Layout;

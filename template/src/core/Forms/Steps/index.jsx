import { Steps as Etapes } from "antd";
import React from "react";
import "./index.css";
const { Step } = Etapes;

const Steps = ({ current, steps, ...rest }) => {
  return (
    <Etapes size="small" direction="vertical" current={current} {...rest}>
      {steps.map((title, index) => (
        <Step key={index} title={title} />
      ))}
      {/* <Step title='Général' />
            <Step title='Menu' /> */}
    </Etapes>
  );
};

export default Steps;

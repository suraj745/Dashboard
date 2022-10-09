import { Steps } from "antd";
import React from "react";
const { Step } = Steps;
const Stepper = ({ current }) => {
  return (
    <Steps size="small" current={current}>
      <Step title="Basic Information" />
      <Step title="Profile Information" />
      <Step title="Address & Communication Details" />
      <Step title="Online Presence" />
    </Steps>
  );
};

export default Stepper;

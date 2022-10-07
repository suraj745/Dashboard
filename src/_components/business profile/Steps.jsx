import React from "react";
import { Steps } from "antd";

const Steps = () => {
  const { Step } = Steps;

  return (
    <Steps current={1} status="error">
      <Step
        title="Information"
        description="Name, Alias Name, Logo
"
      />
      <Step
        title="Profile Information"
        description="Business type, URL, category etc.
"
      />
      <Step
        title="Address & Communication Details"
        description="Business type, URL, category etc.
        "
      />
      <Step
        title="Online Presence"
        description="Website, Facebook, Instagram etc."
      />
    </Steps>
  );
};

export default Steps;

import Stepper from "./Steps/Stepper";
import { Collapse } from "antd";

import React, { useState } from "react";
import BasicInformation from "./BusinessProfileForm/BasicInformation";
import ProfileInformation from "./BusinessProfileForm/ProfileInformation";
import AddressForm from "./AddressCommunication/AddressForm";
import OnlinePresence from "./OnlinePresence/OnlinePresence";
const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const formpage = [
  {
    form: <BasicInformation />,
    header: `Basic Information`,
  },
  {
    form: <ProfileInformation />,
    header: `Profile Information`,
  },
  {
    form: <AddressForm />,
    header: `Address & Communication Details`,
  },
  {
    form: <OnlinePresence />,
    header: `Online Presence`,
  },
];
const BussinessForm = () => {
  const [step, setStep] = useState(0);
  console.log(step);
  return (
    <section className="container">
      <section className="row shadow-sm  py-4">
        <h3>Business Profile</h3>
      </section>

      <ul className="container">
        <li className="row mt-5">
          <Stepper current={step} />
        </li>

        <br />
        <li className="row justify-content-center mt-4">
          <section className="col-md-8">
            <Collapse
              className={`accordion`}
              accordion
              defaultActiveKey={0}
              expandIconPosition={"end"}
            >
              {formpage.map((value, index) => {
                return (
                  <Panel header={<h5>{value.header}</h5>} key={index}>
                    {value.form}
                  </Panel>
                );
              })}
            </Collapse>
          </section>
        </li>
      </ul>
    </section>
  );
};

export default BussinessForm;

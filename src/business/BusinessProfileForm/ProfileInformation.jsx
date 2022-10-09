import React, { useContext, useState } from "react";
import { SettingOutlined } from "@ant-design/icons";
import { stepCount } from "../index";
import {
  Cascader,
  Input,
  Select,
  Space,
  DatePicker,
  DatePickerProps,
  Radio,
} from "antd";
import moment from "moment";
import { useForm } from "react-hook-form";
const { Option } = Select;
const children = [];
const options = [
  ` Ui Designer`,
  `  Software Developer`,
  `  Website Developer`,
  `  Compliance & Tax`,
  `  Writing`,
  `Webflow Designer`,
  `  Shopify Developer`,
  `  Call Center Services`,
];

options.forEach((element, index) => {
  children.push(<Option key={index}>{element}</Option>);
});

const businessCategory = [];

const handleChange = (value) => {
  options.map((item, index) => {
    if (value == index) {
      businessCategory.push(item);
    }
  });
};

console.log(businessCategory);

const ProfileInformation = () => {
  const [form, setForm] = useState({
    profileUrl: "",
    BusinessDate: "",
    BusinessCategory: "",
  });
  const [individual, setIndividual] = useState(true);
  const time = new Date();

  const [size, setSize] = useState("middle");

  const monthFormat = "YYYY/MM";
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const {
    steps: [step, setStep],
  } = useContext(stepCount);

  const onSubmit = async (data) => {
    const data2 = {
      ...data,
      profileUrl: "1",
      what_describes_you_best: data.teamSize
        ? "Team/Agency/Company"
        : "Individual/Freelancer",
    };

    // const res = await fetch("http://localhost:5001/business", {
    //   method: "POST",
    //   headers: {
    //     "CONTENT-TYPE": "application/json",
    //   },
    //   body: JSON.stringify(data2),
    // });
    // const data3 = await res.json();
    console.log(data2);

    data && setStep(2);
    reset();
  };
  return (
    <section className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            <h5> What describes you best?</h5>
          </label>
          <br />
          <Radio.Group
            // defaultValue="Individual/Freelancer"
            buttonStyle="solid"
            className="custom-select"
            defaultValue={"Individual/Freelance"}
            onChange={(e) => {
              console.log("date", e.target.value);
            }}
          >
            <Radio.Button
              onClick={() => {
                setIndividual(true);
              }}
              value="Individual/Freelance"
            >
              Individual/Freelancer
            </Radio.Button>
            <Radio.Button
              onClick={() => {
                setIndividual(false);
              }}
              value="Team/Agency/Company"
            >
              Team/Agency/Company
            </Radio.Button>
          </Radio.Group>
        </div>

        {!individual && (
          <div className="col-md-6">
            <label for="exampleInputEmail1" className="form-label">
              Team Size <span className="text-danger">*</span>
            </label>
            <input
              {...register("teamSize")}
              type={`number`}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Number of people working in your company"
            />
          </div>
        )}
        <br />

        <div className="col-md-6">
          <label for="exampleInputEmail1" className="form-label">
            Set your Profile URL <span className="text-danger">*</span>
            <div className="form-text">
              Set a URL for your new profile. Help people find you online.
            </div>
          </label>

          <input
            className="input form-control"
            placeholder="Set Profile Url"
            {...register("Profile Url")}
            required
          />
        </div>
        <br />

        <div className="col-md-6">
          <label for="exampleInputEmail1" className="form-label">
            In Business Since
            <div className="form-text">
              Month and Year of when you started the business
            </div>
          </label>

          <input
            type="month"
            {...register("year/month")}
            placeholder="Business Since"
          />
        </div>

        <br />

        <div className="col-md-6">
          <label for="exampleInputEmail1" className="form-label">
            Your Business Category
            <div className="form-text">
              Month and Year of when you started the business
            </div>
          </label>
          <input
            type="text"
            className="input form-control"
            {...register("businessCategory")}
            placeholder="Business Category"
          />
        </div>

        <br />

        <section className="row gap-3">
          <button className="btn btn-primary col-sm-4">Save & Continue</button>

          <button
            className="btn btn-danger col-sm-4 "
            onClick={() => {
              reset();
            }}
          >
            Reset
          </button>
        </section>
      </form>
    </section>
  );
};

export default ProfileInformation;

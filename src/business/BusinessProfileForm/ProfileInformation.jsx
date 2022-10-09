import React, { useState } from "react";
import { SettingOutlined } from "@ant-design/icons";
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

const handleChange = (value) => {
  console.log(`Selected: ${value}`);
};

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
    watch,
    formState: { errors },
  } = useForm();

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const onSubmit = (data) => {
    const data2 = { ...data, profileUrl: "1" };

    console.log(data2);
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

          <Input
            onChange={(e) => {
              console.log(e.target.value);
            }}
            addonBefore="https://www.refrens.com"
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

          <DatePicker
            defaultValue={moment("2021/01", monthFormat)}
            format={monthFormat}
            picker="month"
            {...register("yearn/month")}
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
          <Select
            {...register("businessCategory")}
            mode="multiple"
            size={size}
            placeholder="Please select"
            defaultValue={[]}
            onChange={handleChange}
            style={{
              width: "100%",
            }}
          >
            {children}
          </Select>
        </div>

        <br />

        <section className="row gap-3">
          <button className="btn btn-primary col-sm-4">Save & Continue</button>

          <button className="btn btn-danger col-sm-4 ">Reset</button>
        </section>
      </form>
    </section>
  );
};

export default ProfileInformation;

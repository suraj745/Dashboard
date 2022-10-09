import { Input } from "antd";
import {
  GlobalOutlined,
  InstagramOutlined,
  FacebookOutlined,
  TwitterOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import { useForm } from "react-hook-form";
import { stepCount } from "../index";
import { useContext } from "react";

const links = [
  {
    placeholder: "https://www.yoursite.com",
    icon: <GlobalOutlined />,
    regsiter: "yoursite",
  },
  {
    placeholder: "https://www.facebook.com",
    icon: <FacebookOutlined />,
    regsiter: "facebook",
  },
  {
    placeholder: "https://www.twitter.com",
    icon: <TwitterOutlined />,
    regsiter: "twitter",
  },
  {
    placeholder: "https://www.linkedin.com",
    icon: <LinkedinOutlined />,
    regsiter: "linkedin",
  },
  {
    placeholder: "https://www.instagram.com",
    icon: <InstagramOutlined />,
    regsiter: "instagram",
  },
];

const OnlinePresence = () => {
  const { handleSubmit, reset, register } = useForm();

  const {
    steps: [step, setStep],
  } = useContext(stepCount);

  const onSubmit = async (data) => {
    // const res = await fetch("http://localhost:5001/business", {
    //   method: "POST",
    //   headers: {
    //     "CONTENT-TYPE": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // });
    // const data1 = await res.json();
    // console.log(data);

    data && setStep(4);
    reset();
  };
  return (
    <form action="" className="container" onSubmit={handleSubmit(onSubmit)}>
      <ul className="row">
        {links.map((value, index) => {
          return (
            <li className="col-md-12 d-flex  mt-3" key={index}>
              <input
                size="large"
                // type={`url`}
                className="form-control"
                placeholder={`${value.placeholder}`}
                {...register(`${value.regsiter}`)}
              />
            </li>
          );
        })}
      </ul>

      <section className="row gap-3 mx-1">
        <button class="col-sm-2 mt-3 btn btn-primary">Submit</button>
        <span class="col-sm-2  mt-3 btn btn-danger" onClick={() => reset()}>
          Reset
        </span>
      </section>
    </form>
  );
};

export default OnlinePresence;

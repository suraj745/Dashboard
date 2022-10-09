import { Input } from "antd";
import {
  GlobalOutlined,
  InstagramOutlined,
  FacebookOutlined,
  TwitterOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

const links = [
  {
    placeholder: "https://www.yoursite.com",
    icon: <GlobalOutlined />,
  },
  {
    placeholder: "https://www.facebook.com",
    icon: <FacebookOutlined />,
  },
  {
    placeholder: "https://www.twitter.com",
    icon: <TwitterOutlined />,
  },
  {
    placeholder: "https://www.linkedin.com",
    icon: <LinkedinOutlined />,
  },
  {
    placeholder: "https://www.instagram.com",
    icon: <InstagramOutlined />,
  },
];

const OnlinePresence = () => {
  return (
    <form action="" className="container">
      <ul className="row">
        {links.map((value, index) => {
          return (
            <li className="col-md-12 mt-3" key={index}>
              <Input
                size="large"
                placeholder={`${value.placeholder}`}
                prefix={value.icon}
              />
            </li>
          );
        })}
      </ul>
    </form>
  );
};

export default OnlinePresence;

import React, { useState, createContext, useContext } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Modal, Upload } from "antd";
import SelectCountry from "./SelectCountry";
import { useForm } from "react-hook-form";
import { stepCount } from "../index";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);

    reader.onerror = (error) => reject(error);
  });

const BasicInformation = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");

  const [country, setCountry] = useState(null);
  const [fileList, setFileList] = useState([]);

  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  // form

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  //

  const {
    steps: [step, setStep],
  } = useContext(stepCount);

  const onSubmit = (data) => {
    const data2 = {
      type: "BASIC INFORMATION",
      ...data,
      country,
      image: fileList.length > 0 ? fileList[0].thumbUrl : "",
    };

    data && setStep(1);

    reset();
  };

  console.log(step, setStep);

  return (
    <section className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <section className="row flex-column">
          <div class="col-sm-6">
            <h5>Profile Image/Business Logo</h5>
            <Upload
              className="mt-2"
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChange}
            >
              {fileList.length > 0 ? null : uploadButton}
            </Upload>
            <Modal
              open={previewOpen}
              title={previewTitle}
              footer={null}
              onCancel={handleCancel}
            >
              <img
                alt="example"
                style={{
                  width: "100%",
                }}
                src={previewImage}
              />
            </Modal>
          </div>
          <div class="col-sm-6">
            <label for="exampleInputPassword1" class="form-label">
              Business Name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="  Business Name"
              {...register("businessName")}
              required
            />
          </div>
          <br />

          <div class="col-sm-6">
            <label for="exampleInputPassword1" class="form-label">
              Brand or Alias Name
              <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Brand or Alias Name
              "
              {...register("brandName")}
              required
            />
          </div>
          <br />

          <div class="col-sm-6">
            <label for="exampleInputPassword1" class="form-label">
              Country <span className="text-danger">*</span>
            </label>
            <br />
            <SelectCountry register={(e) => setCountry(e)} />
          </div>

          <br />
          <section className="row gap-3 mx-1">
            <button class="col-sm-2 mt-3 btn btn-primary">Submit</button>
            <span class="col-sm-2  mt-3 btn btn-danger" onClick={() => reset()}>
              Reset
            </span>
          </section>
        </section>
      </form>
    </section>
  );
};

export default BasicInformation;

import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import styles from "./leads.module.scss";
import { useForm } from "react-hook-form";
import {
  Avatar_11,
  Avatar_09,
  Avatar_02,
  Avatar_10,
  Avatar_05,
  Avatar_12,
  Avatar_01,
  Avatar_13,
  Avatar_16,
} from "../../Entryfile/imagepath";
import { Table } from "antd";
import "antd/dist/antd.css";
import { itemRender, onShowSizeChange } from "../paginationfunction";
import "../antdstyle.css";
import { useEffect } from "react";

const Leads = () => {
  const [modal, setModal] = useState(false);
  const [data, setData] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let [lead, setlead] = useState([]);

  // 3. Create out useEffect function
  useEffect(() => {
    fetch(`http://localhost:5001/api/lead/getAllClient`)
      .then((response) => response.json())
      // 4. Setting *dogImage* to the image url that we received from the response above
      .then((data) => setlead(data.data));
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5001/api/lead/getAll`)
      .then((response) => response.json())
      // 4. Setting *dogImage* to the image url that we received from the response above
      .then((data) => setData(data.data));
  }, []);
  // console.log(lead, "datafetch11");
  const onSubmit = async (data) => {
    console.log(data);

    try {
      const res = await fetch(`http://localhost:5001/api/lead/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    {
      title: "#",
      dataIndex: "id",
      sorter: (a, b) => a.id.length - b.id.length,
    },
    {
      title: "Lead Name",
      dataIndex: "organizationName",
      render: (text, record) => (
        <h2 className="table-avatar">
          <Link to={`/app/profile/Leadprofile`}>{text}</Link>
        </h2>
      ),
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Email",
      dataIndex: "email",
      sorter: (a, b) => a.email.length - b.email.length,
    },

    {
      title: "Mobile",
      dataIndex: "contactName",
      sorter: (a, b) => a.contactName.length - b.contactName.length,
    },

    {
      title: "designation",
      dataIndex: "designation",
      render: (text, record) => (
        <Link to="/app/projects/projects-view">{text}</Link>
      ),
      sorter: (a, b) => a.project.length - b.project.length,
    },
    {
      title: "subject",
      dataIndex: "subject",
      render: (text, record) => (
        <Link to="/app/projects/projects-view">{text}</Link>
      ),
      sorter: (a, b) => a.project.length - b.project.length,
    },

    {
      title: "Status",
      dataIndex: "status",
      render: (text, record) => (
        <span
          className={
            text === "Working"
              ? "badge bg-inverse-success"
              : "badge bg-inverse-info"
          }
        >
          {text}
        </span>
      ),
    },
    {
      title: "Created",
      dataIndex: "created",
      sorter: (a, b) => a.created.length - b.created.length,
    },
    {
      title: "Action",
      dataIndex: "_id",
      render: (text, record) => (
        <div className="dropdown dropdown-action text-end">
          <a
            href="#"
            className="action-icon dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="material-icons">more_vert</i>
          </a>
          <div className="dropdown-menu dropdown-menu-right">
            <a className="dropdown-item" href="/app/profile/Lead_edit">
              <i className="fa fa-pencil m-r-5" /> Edit
            </a>
            <a className="dropdown-item" href="#">
              <i className="fa fa-trash-o m-r-5" /> Delete
            </a>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="page-wrapper">
      <Helmet>
        <title>Leads - HRMS Admin Template</title>
        <meta name="description" content="Login page" />
      </Helmet>
      {/* Page Content */}
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-6">
              <h3 className="page-title">Leads</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/app/main/dashboard">Dashboard</Link>
                </li>
                <li className="breadcrumb-item active">Leads</li>
              </ul>
            </div>
            <section className="col-sm-6">
              <a
                onClick={() => setModal(!modal)}
                href="#"
                className="btn add-btn"
                data-bs-toggle="modal"
                data-bs-target="#add_client"
              >
                <i className="fa fa-plus" /> Add Lead
              </a>
            </section>
          </div>
        </div>
        {/* /Page Header */}
        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              <Table
                className="table-striped"
                pagination={{
                  total: data.length,
                  showTotal: (total, range) =>
                    `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                  showSizeChanger: true,
                  onShowSizeChange: onShowSizeChange,
                  itemRender: itemRender,
                }}
                style={{ overflowX: "auto" }}
                columns={columns}
                // bordered
                dataSource={data}
                rowKey={(record) => record.id}
                onChange={console.log("change value")}
              />
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}

      {modal && (
        <div class={styles.modal} onClick={() => setModal(false)}>
          <form
            onClick={(e) => e.stopPropagation()}
            onSubmit={handleSubmit(onSubmit)}
          >
            <h3>Contact </h3>

            <section className="row">
              <section className="col-md-6">
                <label for="exampleInputEmail1" class="form-label">
                  Organization Name
                </label>
                <input
                  placeholder="Organization Name"
                  {...register("organizationName")}
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </section>

              <section className="col-md-6">
                <label for="exampleInputEmail1" class="form-label">
                  Contact Name
                </label>
                <input
                  {...register("contactName")}
                  type="text"
                  placeholder="Contact Name"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </section>

              <section className="col-md-6">
                <label for="exampleInputEmail1" class="form-label">
                  Designation
                </label>
                <input
                  {...register("designation")}
                  type="text"
                  placeholder=" Designation
                  "
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </section>

              <section className="col-md-6">
                <label for="exampleInputEmail1" class="form-label">
                  Email
                </label>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="Email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </section>

              <section className="col-md-6">
                <label for="exampleInputEmail1" class="form-label">
                  Phone
                </label>
                <input
                  {...register("Phone_Number")}
                  type={"number"}
                  placeholder="Phone"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </section>

              <section className="col-md-6">
                <label for="exampleInputEmail1" class="form-label">
                  Subject
                </label>
                <input
                  {...register("subject")}
                  type={"text"}
                  placeholder="Subject"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </section>

              <section className="col-sm-12">
                <label for="exampleInputEmail1" class="form-label">
                  Message
                </label>
                <textarea
                  {...register("message")}
                  type={"text"}
                  placeholder="Contact Name"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </section>
            </section>

            <button type="submit" class="btn btn-primary mt-2">
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Leads;

import React, { useEffect, useReducer } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { UploadOutlined, DownOutlined, UserOutlined } from "@ant-design/icons";

import {
  Button,
  Upload,
  Input,
  Dropdown,
  Menu,
  message,
  Select,
  Space,
  Tooltip,
} from "antd";

const initialState = {
  id: "",
  item: "",
  description: "",
  unit_cost: "",
  qty: "",
  amount: "",
};

const listData = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "ITEM":
      return (state = { ...state, item: action.payload });

    case "DESCRIPTION":
      return (state = { ...state, description: action.payload });

    case "UNIT_COST":
      return (state = { ...state, unit_cost: action.payload });

    case "QTY":
      return (state = { ...state, qty: action.payload });

    case "AMOUNT":
      const total = initialState.qty * initialState.unit_cost;
      return (state = { ...state, amount: total });

    case "ADD":
      return listData.push({
        ...action.payload,
        id: Date.now() * Math.random(),
      });

    case "REMOVE":
      return listData.filter((value, index) => {
        index + 1 !== action.payload;
      });
    default:
      state;
  }
};

console.log("list", listData);
const onChange = (value) => {
  // console.log(`selected ${value}`);
};

const onSearch = (value) => {
  // console.log("search:", value);
};

const { Option } = Select;

const props = {
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",

  onChange({ file, fileList }) {
    if (file.status !== "uploading") {
      // console.log(file, fileList);
    }
  },

  defaultFileList: [],
};
const CreateEstimate = () => {
  useEffect(() => {
    if ($(".select").length > 0) {
      $(".select").select2({
        minimumResultsForSearch: -1,
        width: "100%",
      });
    }
  });

  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return (
    <div className="page-wrapper">
      <Helmet>
        <title>Create Estimate - HRMS Admin Template</title>
        <meta name="description" content="Login page" />
      </Helmet>
      {/* Page Content */}
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">Create Estimate</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/app/main/dashboard">Dashboard</Link>
                </li>
                <li className="breadcrumb-item active">Create Estimate</li>
              </ul>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        <div className="row">
          <div className="col-sm-12">
            <form>
              <div className="row">
                <div className="col-sm-6 col-md-3">
                  <div className="form-group">
                    <label>
                      Client <span className="text-danger">*</span>
                    </label>
                    <select className="select">
                      <option>Please Select</option>
                      <option>Barry Cuda</option>
                      <option>Tressa Wexler</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className="form-group">
                    <label>
                      Project <span className="text-danger">*</span>
                    </label>
                    <select className="select">
                      <option>Select Project</option>
                      <option>Office Management</option>
                      <option>Project Management</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className="form-group">
                    <label>Email</label>
                    <input className="form-control" type="email" />
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className="form-group">
                    <label>Tax</label>
                    <select className="select">
                      <option>Select Tax</option>
                      <option>VAT</option>
                      <option>GST</option>
                      <option>No Tax</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className="form-group">
                    <label>Client Address</label>
                    <textarea
                      className="form-control"
                      rows={3}
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className="form-group">
                    <label>Billing Address</label>
                    <textarea
                      className="form-control"
                      rows={3}
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className="form-group">
                    <label>
                      Estimate Date <span className="text-danger">*</span>
                    </label>
                    <div>
                      <input
                        className="form-control datetimepicker"
                        type="date"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className="form-group">
                    <label>
                      Expiry Date <span className="text-danger">*</span>
                    </label>
                    <div>
                      <input
                        className="form-control datetimepicker"
                        type="date"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <label>
                    Signature <span className="text-danger">*</span>
                  </label>
                  <div>
                    <Upload {...props}>
                      <Button icon={<UploadOutlined />}>Upload</Button>
                    </Upload>
                  </div>
                </div>
              </div>
              <ul className="col-12 py-3">
                <li className="row justify-content-around align-items-center">
                  <li className="col-md-4 bg-white my-2 p-4">
                    <h2 className="d-flex gap-2">
                      Billed By{" "}
                      <span className="align-self-end">(Your Details)</span>
                    </h2>
                    <section className="row my-2">
                      <Select
                        showSearch
                        placeholder="Select a User"
                        optionFilterProp="children"
                        onChange={onChange}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                          option.children
                            .toLowerCase()
                            .includes(input.toLowerCase())
                        }
                      >
                        <Option value="Ritik">Ritik</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="tom">Tom</Option>
                      </Select>
                    </section>

                    <h4 className="name">Business details</h4>
                    <section className="d-flex gap-2">
                      <p>Business Name</p>-<p>Ritik Corporatie</p>
                    </section>
                    <section className="d-flex gap-2">
                      <p>Address </p> -<p>India</p>
                    </section>
                  </li>

                  <li className="col-md-4 bg-white my-2 p-4">
                    <h2 className="d-flex gap-2">
                      Billed To{" "}
                      <span className="align-self-end">(Client Details)</span>
                    </h2>
                    <section className="row gap-1 align-items-center justify-content-start">
                      <Select
                        className="col-md-6"
                        showSearch
                        placeholder="Select a User"
                        optionFilterProp="children"
                        onChange={onChange}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                          option.children
                            .toLowerCase()
                            .includes(input.toLowerCase())
                        }
                      >
                        <Option value="Ritik">Ritik</Option>
                      </Select>
                      <button
                        type="button"
                        className="btn col-sm-auto btn-primary"
                      >
                        Add New Client
                      </button>
                    </section>
                    <h4 className="name">Business details</h4>
                    <section className="d-flex gap-2">
                      <p>Business Name</p>-<p>Ritik Corporatie</p>
                    </section>
                    <section className="d-flex gap-2">
                      <p>Address </p> -<p>India</p>
                    </section>
                  </li>
                </li>
              </ul>
              <div className="row">
                <div className="col-md-12 col-sm-12">
                  <div className="table-responsive">
                    <table className="table table-hover table-white">
                      <thead>
                        <tr>
                          <th style={{ width: "20px" }}>#</th>
                          <th className="col-sm-2">Item</th>
                          <th className="col-md-6">Description</th>
                          <th style={{ width: "100px" }}>Unit Cost</th>
                          <th style={{ width: "80px" }}>Qty</th>
                          <th>Amount</th>
                          <th> </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>
                            <input
                              className="form-control"
                              type="text"
                              style={{ minWidth: "150px" }}
                              value={state.item}
                              onChange={(e) => {
                                dispatch({
                                  type: "ITEM",
                                  payload: e.target.value,
                                });
                              }}
                            />
                          </td>
                          <td>
                            <input
                              className="form-control"
                              type="text"
                              style={{ minWidth: "150px" }}
                              value={state.description}
                              onChange={(e) => {
                                dispatch({
                                  type: "DESCRIPTION",
                                  payload: e.target.value,
                                });
                              }}
                            />
                          </td>
                          <td>
                            <input
                              className="form-control"
                              style={{ width: "100px" }}
                              type="text"
                              value={state.unit_cost}
                              onChange={(e) => {
                                dispatch({
                                  type: "UNIT_COST",
                                  payload: e.target.value,
                                });
                              }}
                            />
                          </td>
                          <td>
                            <input
                              className="form-control"
                              style={{ width: "80px" }}
                              type="text"
                              value={state.qty}
                              onChange={(e) => {
                                dispatch({
                                  type: "QTY",
                                  payload: e.target.value,
                                });
                              }}
                            />
                          </td>
                          <td>
                            <input
                              className="form-control"
                              readOnly
                              style={{ width: "120px" }}
                              type="text"
                              value={state.qty * state.unit_cost}
                              onChange={() => {
                                dispatch({
                                  type: "AMOUNT",
                                  payload: e.target.value,
                                });
                              }}
                            />
                          </td>
                          <td>
                            <a
                              href="javascript:void(0)"
                              className="text-success font-18"
                              title="Add"
                              onClick={() =>
                                dispatch({ type: "ADD", payload: state })
                              }
                            >
                              <i className="fa fa-plus" />
                            </a>
                          </td>
                        </tr>

                        {listData.map(
                          (
                            { item, description, unit_cost, qty, amount, id },
                            index
                          ) => {
                            return (
                              <tr key={index}>
                                <td> {index + 1}</td>
                                <td>{item}</td>
                                <td>{description}</td>
                                <td>{unit_cost}</td>
                                <td>{qty}</td>
                                <td>{amount}</td>
                                <td>
                                  <td>
                                    <a
                                      className="text-danger font-18"
                                      title="Remove"
                                      onClick={() => {
                                        dispatch({
                                          type: "REMOVE",
                                          payload: index + 1,
                                        });
                                      }}
                                    >
                                      <i className="fa fa-trash-o" />
                                    </a>
                                  </td>
                                </td>
                              </tr>
                            );
                          }
                        )}
                      </tbody>
                    </table>
                  </div>
                  <div className="table-responsive">
                    <table className="table table-hover table-white">
                      <tbody>
                        <tr>
                          <td />
                          <td />
                          <td />
                          <td />
                          <td className="text-end">Total</td>
                          <td
                            style={{
                              textAlign: "right",
                              paddingRight: "30px",
                              width: "230px",
                            }}
                          >
                            0
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={5} className="text-end">
                            Tax
                          </td>
                          <td
                            style={{
                              textAlign: "right",
                              paddingRight: "30px",
                              width: "230px",
                            }}
                          >
                            <input
                              className="form-control text-end"
                              defaultValue={0}
                              readOnly
                              type="text"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={5} className="text-end">
                            Discount %
                          </td>
                          <td
                            style={{
                              textAlign: "right",
                              paddingRight: "30px",
                              width: "230px",
                            }}
                          >
                            <input
                              className="form-control text-end"
                              type="text"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td
                            colSpan={5}
                            style={{ textAlign: "right", fontWeight: "bold" }}
                          >
                            Grand Total
                          </td>
                          <td
                            style={{
                              textAlign: "right",
                              paddingRight: "30px",
                              fontWeight: "bold",
                              fontSize: "16px",
                              width: "230px",
                            }}
                          >
                            $ 0.00
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Other Information</label>
                        <textarea
                          className="form-control"
                          rows={4}
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="submit-section">
                <button className="btn btn-primary submit-btn m-r-10">
                  Save &amp; Send
                </button>
                <button className="btn btn-primary submit-btn">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </div>
  );
};

export default CreateEstimate;

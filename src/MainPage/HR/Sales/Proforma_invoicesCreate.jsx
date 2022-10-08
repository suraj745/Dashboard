import React, { useEffect, useState, useReducer } from "react";
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
  Item: "",
  Amount: 0,
  GST: 0,
  Quantity: 0,
  Rate: 0,
};

const datalist = [];

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

const row = [initialState];
const reducer = (state, action) => {
  switch (action.type) {
    case "ITEM":
      return (state = {
        ...state,
        Item: action.payload,
      });

    case "GST":
      const cgst = state.GST / 2;
      const amount = state.Quantity * state.Rate;
      const f_Gst = amount * state.GST;
      const final_Gst = f_Gst / 100;
      const amounta = amount + final_Gst;
      return (state = {
        ...state,
        GST: action.payload,
      });

    case "QUANTITY":
      return (state = { ...state, Quantity: action.payload });

    case "RATE":
      return (state = { ...state, Rate: action.payload });

    case "ADDROW":
      return datalist.push({ id: Date.now() + Math.random(), ...state });

    case "REMOVE":
      return datalist.filter((item) => item.id !== action.payload);

    default:
      break;
  }
};

console.log("datalist", datalist);
const Invoicecreate = () => {
  // const [Amount, setAmount] = useState(0);
  // const [GST, setGST] = useState(0);
  // const [Quantity, setQuantity] = useState(0);
  // const [Rate, setRate] = useState(0);
  // const addRow = [1];

  // console.log("row", addRow);

  // setAmount(amounta);

  const [state, dispatch] = useReducer(reducer, initialState);

  const cgst = state.GST / 2;
  const amount = state.Quantity * state.Rate;
  const f_Gst = amount * state.GST;
  const final_Gst = f_Gst / 100;
  const amounta = amount + final_Gst;

  useEffect(() => {
    if ($(".select").length > 0) {
      $(".select").select2({
        minimumResultsForSearch: -1,
        width: "100%",
      });
    }
  });

  console.log(datalist);

  return (
    <div className="page-wrapper">
      <Helmet>
        <title>Create Invoice</title>
        <meta name="description" content="Login page" />
      </Helmet>
      {/* Page Content */}
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">Create Invoice</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/app/main/dashboard">Dashboard</Link>
                </li>
                <li className="breadcrumb-item active">Create Invoice</li>
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
                      Invoice No <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      value={"A00001"}
                      type="text"
                    />
                  </div>
                </div>
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
                {/* <div className="col-sm-6 col-md-3">
                  <div className="form-group">
                    <label>Tax</label>
                    <select className="select">
                      <option>Select Tax</option>
                      <option>VAT</option>
                      <option>GST</option>
                      <option>No Tax</option>
                    </select>
                  </div>
                </div> */}
                <div className="col-sm-6 col-md-3">
                  <div className="form-group">
                    <label>Client Address</label>
                    <textarea
                      className="form-control"
                      rows={3}
                      defaultValue={""}
                      value={"delhi"}
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
                      Invoice date <span className="text-danger">*</span>
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
                      Due Date <span className="text-danger">*</span>
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
                <ul className="col-md-6"></ul>
              </div>
              <div className="row">
                <div className="col-md-12 col-sm-12">
                  <div className="table-responsive">
                    <table className="table table-hover table-white">
                      <thead>
                        <tr>
                          <th style={{ width: "20px" }}>#</th>
                          <th className="col-sm-2">Item</th>
                          <th className="col-sm-2">GST Rate</th>
                          <th className="col-sm-2">Quantity</th>
                          <th className="col-sm-2">Rate</th>
                          <th className="col-sm-2">CGST</th>
                          <th className="col-sm-2">SGST</th>
                          <th style={{ width: "100px" }}>Amount</th>

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
                              value={state.Item}
                              onChange={(e) =>
                                dispatch({
                                  type: "ITEM",
                                  payload: e.target.value,
                                })
                              }
                            />
                          </td>
                          <td>
                            <input
                              className="form-control"
                              style={{ width: "80px" }}
                              type="text"
                              onChange={(e) =>
                                dispatch({
                                  type: "GST",
                                  payload: e.target.value,
                                })
                              }
                            />
                          </td>
                          <td>
                            <input
                              className="form-control"
                              style={{ width: "80px" }}
                              type="text"
                              value={state.Quantity}
                              onChange={(e) =>
                                dispatch({
                                  type: "QUANTITY",
                                  payload: e.target.value,
                                })
                              }
                            />
                          </td>

                          <td>
                            <input
                              className="form-control"
                              style={{ width: "80px" }}
                              type="text"
                              value={state.Rate}
                              onChange={(e) =>
                                dispatch({
                                  type: "RATE",
                                  payload: e.target.value,
                                })
                              }
                            />
                          </td>
                          <td>
                            <input
                              className="form-control"
                              style={{ width: "80px" }}
                              type="text"
                              readOnly
                              value={cgst ? cgst : 0}
                            />
                          </td>
                          <td>
                            <input
                              className="form-control"
                              style={{ width: "80px" }}
                              type="text"
                              readOnly
                              value={cgst ? cgst : 0}
                            />
                          </td>
                          <td>
                            <input
                              className="form-control"
                              readOnly
                              style={{ width: "120px" }}
                              type="text"
                              value={amounta ? amounta : 0}
                            />
                          </td>
                          <td>
                            <a
                              href="javascript:void(0)"
                              className="text-success font-18"
                              title="Add"
                              onClick={() => {
                                dispatch({ type: "ADDROW", payload: state });
                              }}
                            >
                              <i className="fa fa-plus" />
                            </a>
                          </td>
                        </tr>

                        {datalist.map(
                          (
                            {
                              Amount,
                              GST,
                              Item,
                              Quantity,
                              Rate,
                              amounta,
                              cgst,
                              f_Gst,
                              final_Gst,
                              id,
                            },
                            index
                          ) => {
                            return (
                              <tr key={index} className="">
                                <td></td>
                                <td>{Item}</td>
                                <td>{GST}</td>
                                <td>{Quantity}</td>
                                <td>{Rate}</td>
                                <td>{cgst}</td>
                                <td>{final_Gst}</td>
                                <td>{amounta}</td>
                                <td>
                                  <section
                                    onClick={() => {
                                      dispatch({ type: "REMOVE", payload: id });
                                    }}
                                    className="btn btn-danger"
                                  >
                                    delete
                                  </section>
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
                          <td className="text-end">Amount</td>
                          <td
                            style={{
                              textAlign: "right",
                              paddingRight: "30px",
                              width: "230px",
                            }}
                          >
                            {amount}
                          </td>
                        </tr>
                        <tr>
                          <td />
                          <td />
                          <td />
                          <td />
                          <td className="text-end">SGST</td>
                          <td
                            style={{
                              textAlign: "right",
                              paddingRight: "30px",
                              width: "230px",
                            }}
                          >
                            {final_Gst}
                          </td>
                        </tr>
                        <tr>
                          <td />
                          <td />
                          <td />
                          <td />
                          <td className="text-end">SGST</td>
                          <td
                            style={{
                              textAlign: "right",
                              paddingRight: "30px",
                              width: "230px",
                            }}
                          >
                            {final_Gst}
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
                            ₹ {amounta}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Other Information</label>
                        <textarea className="form-control" defaultValue={""} />
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
export default Invoicecreate;

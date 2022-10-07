import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const initialState = [{}];

const Invoicecreate = () => {
  const [Amount, setAmount] = useState(0);
  const [GST, setGST] = useState(0);
  const [Quantity, setQuantity] = useState(0);
  const [Rate, setRate] = useState(0);
  const cgst = GST / 2;
  const amount = Quantity * Rate;
  const f_Gst = amount * GST;

  const final_Gst = f_Gst / 100;
  const amounta = amount + final_Gst;

  // setAmount(amounta);
  useEffect(() => {
    if ($(".select").length > 0) {
      $(".select").select2({
        minimumResultsForSearch: -1,
        width: "100%",
      });
    }
  });

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
                            />
                          </td>

                          <td>
                            <input
                              onChange={(e) => setGST(e.target.value)}
                              className="form-control"
                              style={{ width: "80px" }}
                              type="text"
                            />
                          </td>
                          <td>
                            <input
                              className="form-control"
                              style={{ width: "80px" }}
                              type="text"
                              onChange={(e) => setQuantity(e.target.value)}
                            />
                          </td>

                          <td>
                            <input
                              className="form-control"
                              style={{ width: "80px" }}
                              type="text"
                              onChange={(e) => setRate(e.target.value)}
                            />
                          </td>
                          <td>
                            <input
                              className="form-control"
                              style={{ width: "80px" }}
                              type="text"
                              readOnly
                              value={cgst}
                            />
                          </td>
                          <td>
                            <input
                              className="form-control"
                              style={{ width: "80px" }}
                              type="text"
                              readOnly
                              value={cgst}
                            />
                          </td>
                          <td>
                            <input
                              className="form-control"
                              readOnly
                              style={{ width: "120px" }}
                              type="text"
                              value={amounta}
                            />
                          </td>
                          <td>
                            <a
                              href="javascript:void(0)"
                              className="text-success font-18"
                              title="Add"
                            >
                              <i className="fa fa-plus" />
                            </a>
                            <br></br>
                            <a
                              href="javascript:void(0)"
                              className="text-danger font-18"
                              title="Remove"
                            >
                              <i className="fa fa-trash-o" />
                            </a>
                          </td>
                        </tr>
                        <tr></tr>
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

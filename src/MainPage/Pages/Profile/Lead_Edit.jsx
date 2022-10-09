/**
 * TermsCondition Page
 */
import React, { useEffect } from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {
  Avatar_02,
  Avatar_05,
  Avatar_09,
  Avatar_10,
  Avatar_16,
} from "../../../Entryfile/imagepath";

const Lead_edit = ({ match }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);

    try {
      const res = await fetch(
        `http://localhost:5001/api/lead/updateSingle/${match.params.clientid}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
  let [Client, setClient] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5001/api/lead/getSingle/${match.params.clientid}`)
      .then((response) => response.json())
      // 4. Setting *dogImage* to the image url that we received from the response above
      .then((data) => setClient(data.data));
  }, []);
  console.log(Client, "datafetch11");

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
        <title>Employee Profile - HRMS admin Template</title>
        <meta name="description" content="Reactify Blank Page" />
      </Helmet>
      {/* Page Content */}
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">Dashboard</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/app/employees/leads">Leads</Link>
                </li>
                <li className="breadcrumb-item active">Profile Leads</li>
              </ul>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        <div className="card mb-0">
          <div className="card-body">
            <div className="row">
              <form
                onClick={(e) => e.stopPropagation()}
                onSubmit={handleSubmit(onSubmit)}
              >
                <h3>Contact </h3>

                <section className="row">
                  <section className="col-md-6">
                    <label for="exampleInputEmail1" className="form-label">
                      Organization Name
                    </label>

                    <input
                      {...register("organizationName")}
                      value={Client.organizationName}
                      onInput={(e) =>
                        setClient({
                          ...Client,
                          organizationName: e.target.value,
                        })
                      }
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </section>

                  <section className="col-md-6">
                    <label for="exampleInputEmail1" className="form-label">
                      Contact Name
                    </label>
                    <input
                      {...register("contactName")}
                      type="text"
                      value={Client.contactName}
                      onInput={(e) =>
                        setClient({
                          ...Client,
                          contactName: e.target.value,
                        })
                      }
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </section>

                  <section className="col-md-6">
                    <label for="exampleInputEmail1" className="form-label">
                      Designation
                    </label>
                    <input
                      {...register("designation")}
                      type="text"
                      value={Client.designation}
                      className="form-control"
                      onInput={(e) =>
                        setClient({
                          ...Client,
                          designation: e.target.value,
                        })
                      }
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </section>

                  <section className="col-md-6">
                    <label for="exampleInputEmail1" className="form-label">
                      Email
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      value={Client.email}
                      onInput={(e) =>
                        setClient({
                          ...Client,
                          email: e.target.value,
                        })
                      }
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </section>

                  <section className="col-md-6">
                    <label for="exampleInputEmail1" className="form-label">
                      Phone
                    </label>
                    <input
                      {...register("Phone_Number")}
                      type={"number"}
                      value={Client.Phone_Number}
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      onInput={(e) =>
                        setClient({
                          ...Client,
                          Phone_Number: e.target.value,
                        })
                      }
                    />
                  </section>

                  <section className="col-md-6">
                    <label for="exampleInputEmail1" className="form-label">
                      Subject
                    </label>
                    <input
                      {...register("subject")}
                      type={"text"}
                      value={Client.subject}
                      onInput={(e) =>
                        setClient({
                          ...Client,
                          subject: e.target.value,
                        })
                      }
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                    <input
                      {...register("_id")}
                      type={"hidden"}
                      value={Client._id}
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </section>

                  <section className="col-md-12">
                    <label for="exampleInputEmail1" className="form-label">
                      Message
                    </label>
                    <textarea
                      {...register("message")}
                      type={"text"}
                      value={Client.message}
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </section>
                </section>
                <button type="submit" className="btn btn-primary mt-2">
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Lead_edit;

/**
 * TermsCondition Page
 */
import React, { Component } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import {
  Avatar_01,
  Avatar_02,
  Avatar_05,
  Avatar_09,
  Avatar_10,
  Avatar_11,
  Avatar_12,
  Avatar_13,
  Avatar_16,
  Avatar_19,
} from "../../../Entryfile/imagepath";

const ClientProfile = ({ match }) => {
  let [Client, setClient] = useState([]);
  let { userId } = useParams();
  console.log(match.params.clientid, "userId", useParams());

  // 3. Create out useEffect function
  useEffect(() => {
    fetch(`http://localhost:5001/api/client/getSingle/${match.params.clientid}`)
      .then((response) => response.json())
      // 4. Setting *dogImage* to the image url that we received from the response above
      .then((data) => setClient(data.data));
  }, []);

  console.log(Client, "datafetch11");
  return (
    <div className="page-wrapper">
      <Helmet>
        <title>Client Profile</title>
        <meta name="description" content="Reactify Blank Page" />
      </Helmet>
      {/* Page Content */}
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">Profile</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/app/main/dashboard">Dashboard</Link>
                </li>
                <li className="breadcrumb-item active">Profile</li>
              </ul>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        <div className="card mb-0">
          <div className="card-body">
            <div className="row">
              <div className="col-md-12">
                <div className="profile-view">
                  <div className="profile-img-wrap">
                    <div className="profile-img">
                      <a href="">
                        <img src={Avatar_19} alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="profile-basic">
                    <div className="row">
                      <div className="col-md-5">
                        <div className="profile-info-left">
                          <h3 className="user-name m-t-0">
                            {Client.businessName}
                          </h3>
                          <h5 className="company-role m-t-0 mb-0">
                            {Client.BusinessAlias}

                            {Client.BusinessAlias}
                          </h5>
                          <div className="staff-id">
                            Employee ID : CLT-{Client.uniquekey}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-7">
                        <ul className="personal-info">
                          <li>
                            <span className="title">Phone:</span>
                            <span className="text">
                              <a href="">{Client.phoneNumber}</a>
                            </span>
                          </li>
                          <li>
                            <span className="title">Email:</span>
                            <span className="text">
                              <a href="">{Client.email}</a>
                            </span>
                          </li>

                          <li>
                            <span className="title">
                              Communication Address:
                            </span>
                            <span className="text">
                              {Client.communicationStreetAddress}{" "}
                              {Client.communicationCity}{" "}
                              {Client.communicationState}{" "}
                              {Client.communicationPostalCode}
                              Airport Rd, Coosada, AL, 36020
                            </span>
                          </li>
                          <li>
                            <span className="title">Shipping Name</span>
                            <span className="text">{Client.shippingName}</span>
                            <span className="title">Shipping Address:</span>

                            <span className="text">
                              {Client.shippingStreetAddress}{" "}
                              {Client.shippingCity} {Client.shippingState}{" "}
                              {Client.shippingCountry}
                              {Client.shippingPostalCode}
                              Airport Rd, Coosada, AL, 36020
                            </span>
                          </li>
                          <li>
                            <span className="title">Gender:</span>
                            <span className="text">Male</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </div>
  );
};
export default ClientProfile;

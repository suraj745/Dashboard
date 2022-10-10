/**
 * TermsCondition Page
 */
import React, { useEffect } from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Client_Edit = ({ match }) => {
  // const id = searchParams.get("clientid");
  console.log(match.params.clientid, "---------------");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);

    try {
      const res = await fetch(
        `http://localhost:5001/api/client/updateSingle/${match.params.clientid}`,
        {
          method: "POST",
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
    fetch(
      `https://backend112.herokuapp.com/api/client/getSingle/${match.params.clientid}`
    )
      .then((response) => response.json())
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
        <title>Client Profile - HRMS admin Template</title>
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
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="col-form-label">
                        Select Country <span className="text-danger">*</span>
                      </label>
                      <select
                        {...register("selectCountry")}
                        class="form-select form-control"
                        style={{ height: "2.5rem" }}
                        aria-label="Default select example"
                      >
                        <option value="Afghanistan">
                          {Client.selectCountry}
                        </option>
                        <option value="Albania">Albania</option>
                        <option value="Algeria">Algeria</option>
                        <option value="American Samoa">American Samoa</option>
                        <option value="Andorra">Andorra</option>
                        <option value="Angola">Angola</option>
                        <option value="Anguilla">Anguilla</option>
                        <option value="Antartica">Antarctica</option>
                        <option value="Antigua and Barbuda">
                          Antigua and Barbuda
                        </option>
                        <option value="Argentina">Argentina</option>
                        <option value="Armenia">Armenia</option>
                        <option value="Aruba">Aruba</option>
                        <option value="Australia">Australia</option>
                        <option value="Austria">Austria</option>
                        <option value="Azerbaijan">Azerbaijan</option>
                        <option value="Bahamas">Bahamas</option>
                        <option value="Bahrain">Bahrain</option>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="Barbados">Barbados</option>
                        <option value="Belarus">Belarus</option>
                        <option value="Belgium">Belgium</option>
                        <option value="Belize">Belize</option>
                        <option value="Benin">Benin</option>
                        <option value="Bermuda">Bermuda</option>
                        <option value="Bhutan">Bhutan</option>
                        <option value="Bolivia">Bolivia</option>
                        <option value="Bosnia and Herzegowina">
                          Bosnia and Herzegowina
                        </option>
                        <option value="Botswana">Botswana</option>
                        <option value="Bouvet Island">Bouvet Island</option>
                        <option value="Brazil">Brazil</option>
                        <option value="British Indian Ocean Territory">
                          British Indian Ocean Territory
                        </option>
                        <option value="Brunei Darussalam">
                          Brunei Darussalam
                        </option>
                        <option value="Bulgaria">Bulgaria</option>
                        <option value="Burkina Faso">Burkina Faso</option>
                        <option value="Burundi">Burundi</option>
                        <option value="Cambodia">Cambodia</option>
                        <option value="Cameroon">Cameroon</option>
                        <option value="Canada">Canada</option>
                        <option value="Cape Verde">Cape Verde</option>
                        <option value="Cayman Islands">Cayman Islands</option>
                        <option value="Central African Republic">
                          Central African Republic
                        </option>
                        <option value="Chad">Chad</option>
                        <option value="Chile">Chile</option>
                        <option value="China">China</option>
                        <option value="Christmas Island">
                          Christmas Island
                        </option>
                        <option value="Cocos Islands">
                          Cocos (Keeling) Islands
                        </option>
                        <option value="Colombia">Colombia</option>
                        <option value="Comoros">Comoros</option>
                        <option value="Congo">Congo</option>
                        <option value="Congo">
                          Congo, the Democratic Republic of the
                        </option>
                        <option value="Cook Islands">Cook Islands</option>
                        <option value="Costa Rica">Costa Rica</option>
                        <option value="Cota D'Ivoire">Cote d'Ivoire</option>
                        <option value="Croatia">Croatia (Hrvatska)</option>
                        <option value="Cuba">Cuba</option>
                        <option value="Cyprus">Cyprus</option>
                        <option value="Czech Republic">Czech Republic</option>
                        <option value="Denmark">Denmark</option>
                        <option value="Djibouti">Djibouti</option>
                        <option value="Dominica">Dominica</option>
                        <option value="Dominican Republic">
                          Dominican Republic
                        </option>
                        <option value="East Timor">East Timor</option>
                        <option value="Ecuador">Ecuador</option>
                        <option value="Egypt">Egypt</option>
                        <option value="El Salvador">El Salvador</option>
                        <option value="Equatorial Guinea">
                          Equatorial Guinea
                        </option>
                        <option value="Eritrea">Eritrea</option>
                        <option value="Estonia">Estonia</option>
                        <option value="Ethiopia">Ethiopia</option>
                        <option value="Falkland Islands">
                          Falkland Islands (Malvinas)
                        </option>
                        <option value="Faroe Islands">Faroe Islands</option>
                        <option value="Fiji">Fiji</option>
                        <option value="Finland">Finland</option>
                        <option value="France">France</option>
                        <option value="France Metropolitan">
                          France, Metropolitan
                        </option>
                        <option value="French Guiana">French Guiana</option>
                        <option value="French Polynesia">
                          French Polynesia
                        </option>
                        <option value="French Southern Territories">
                          French Southern Territories
                        </option>
                        <option value="Gabon">Gabon</option>
                        <option value="Gambia">Gambia</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Germany">Germany</option>
                        <option value="Ghana">Ghana</option>
                        <option value="Gibraltar">Gibraltar</option>
                        <option value="Greece">Greece</option>
                        <option value="Greenland">Greenland</option>
                        <option value="Grenada">Grenada</option>
                        <option value="Guadeloupe">Guadeloupe</option>
                        <option value="Guam">Guam</option>
                        <option value="Guatemala">Guatemala</option>
                        <option value="Guinea">Guinea</option>
                        <option value="Guinea-Bissau">Guinea-Bissau</option>
                        <option value="Guyana">Guyana</option>
                        <option value="Haiti">Haiti</option>
                        <option value="Heard and McDonald Islands">
                          Heard and Mc Donald Islands
                        </option>
                        <option value="Holy See">
                          Holy See (Vatican City State)
                        </option>
                        <option value="Honduras">Honduras</option>
                        <option value="Hong Kong">Hong Kong</option>
                        <option value="Hungary">Hungary</option>
                        <option value="Iceland">Iceland</option>
                        <option value="India" selected>
                          India
                        </option>
                        <option value="Indonesia">Indonesia</option>
                        <option value="Iran">Iran (Islamic Republic of)</option>
                        <option value="Iraq">Iraq</option>
                        <option value="Ireland">Ireland</option>
                        <option value="Israel">Israel</option>
                        <option value="Italy">Italy</option>
                        <option value="Jamaica">Jamaica</option>
                        <option value="Japan">Japan</option>
                        <option value="Jordan">Jordan</option>
                        <option value="Kazakhstan">Kazakhstan</option>
                        <option value="Kenya">Kenya</option>
                        <option value="Kiribati">Kiribati</option>
                        <option value="Democratic People's Republic of Korea">
                          Korea, Democratic People's Republic of
                        </option>
                        <option value="Korea">Korea, Republic of</option>
                        <option value="Kuwait">Kuwait</option>
                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                        <option value="Lao">
                          Lao People's Democratic Republic
                        </option>
                        <option value="Latvia">Latvia</option>
                        <option value="Lebanon">Lebanon</option>
                        <option value="Lesotho">Lesotho</option>
                        <option value="Liberia">Liberia</option>
                        <option value="Libyan Arab Jamahiriya">
                          Libyan Arab Jamahiriya
                        </option>
                        <option value="Liechtenstein">Liechtenstein</option>
                        <option value="Lithuania">Lithuania</option>
                        <option value="Luxembourg">Luxembourg</option>
                        <option value="Macau">Macau</option>
                        <option value="Macedonia">
                          Macedonia, The Former Yugoslav Republic of
                        </option>
                        <option value="Madagascar">Madagascar</option>
                        <option value="Malawi">Malawi</option>
                        <option value="Malaysia">Malaysia</option>
                        <option value="Maldives">Maldives</option>
                        <option value="Mali">Mali</option>
                        <option value="Malta">Malta</option>
                        <option value="Marshall Islands">
                          Marshall Islands
                        </option>
                        <option value="Martinique">Martinique</option>
                        <option value="Mauritania">Mauritania</option>
                        <option value="Mauritius">Mauritius</option>
                        <option value="Mayotte">Mayotte</option>
                        <option value="Mexico">Mexico</option>
                        <option value="Micronesia">
                          Micronesia, Federated States of
                        </option>
                        <option value="Moldova">Moldova, Republic of</option>
                        <option value="Monaco">Monaco</option>
                        <option value="Mongolia">Mongolia</option>
                        <option value="Montserrat">Montserrat</option>
                        <option value="Morocco">Morocco</option>
                        <option value="Mozambique">Mozambique</option>
                        <option value="Myanmar">Myanmar</option>
                        <option value="Namibia">Namibia</option>
                        <option value="Nauru">Nauru</option>
                        <option value="Nepal">Nepal</option>
                        <option value="Netherlands">Netherlands</option>
                        <option value="Netherlands Antilles">
                          Netherlands Antilles
                        </option>
                        <option value="New Caledonia">New Caledonia</option>
                        <option value="New Zealand">New Zealand</option>
                        <option value="Nicaragua">Nicaragua</option>
                        <option value="Niger">Niger</option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="Niue">Niue</option>
                        <option value="Norfolk Island">Norfolk Island</option>
                        <option value="Northern Mariana Islands">
                          Northern Mariana Islands
                        </option>
                        <option value="Norway">Norway</option>
                        <option value="Oman">Oman</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="Palau">Palau</option>
                        <option value="Panama">Panama</option>
                        <option value="Papua New Guinea">
                          Papua New Guinea
                        </option>
                        <option value="Paraguay">Paraguay</option>
                        <option value="Peru">Peru</option>
                        <option value="Philippines">Philippines</option>
                        <option value="Pitcairn">Pitcairn</option>
                        <option value="Poland">Poland</option>
                        <option value="Portugal">Portugal</option>
                        <option value="Puerto Rico">Puerto Rico</option>
                        <option value="Qatar">Qatar</option>
                        <option value="Reunion">Reunion</option>
                        <option value="Romania">Romania</option>
                        <option value="Russia">Russian Federation</option>
                        <option value="Rwanda">Rwanda</option>
                        <option value="Saint Kitts and Nevis">
                          Saint Kitts and Nevis
                        </option>
                        <option value="Saint LUCIA">Saint LUCIA</option>
                        <option value="Saint Vincent">
                          Saint Vincent and the Grenadines
                        </option>
                        <option value="Samoa">Samoa</option>
                        <option value="San Marino">San Marino</option>
                        <option value="Sao Tome and Principe">
                          Sao Tome and Principe
                        </option>
                        <option value="Saudi Arabia">Saudi Arabia</option>
                        <option value="Senegal">Senegal</option>
                        <option value="Seychelles">Seychelles</option>
                        <option value="Sierra">Sierra Leone</option>
                        <option value="Singapore">Singapore</option>
                        <option value="Slovakia">
                          Slovakia (Slovak Republic)
                        </option>
                        <option value="Slovenia">Slovenia</option>
                        <option value="Solomon Islands">Solomon Islands</option>
                        <option value="Somalia">Somalia</option>
                        <option value="South Africa">South Africa</option>
                        <option value="South Georgia">
                          South Georgia and the South Sandwich Islands
                        </option>
                        <option value="Span">Spain</option>
                        <option value="SriLanka">Sri Lanka</option>
                        <option value="St. Helena">St. Helena</option>
                        <option value="St. Pierre and Miguelon">
                          St. Pierre and Miquelon
                        </option>
                        <option value="Sudan">Sudan</option>
                        <option value="Suriname">Suriname</option>
                        <option value="Svalbard">
                          Svalbard and Jan Mayen Islands
                        </option>
                        <option value="Swaziland">Swaziland</option>
                        <option value="Sweden">Sweden</option>
                        <option value="Switzerland">Switzerland</option>
                        <option value="Syria">Syrian Arab Republic</option>
                        <option value="Taiwan">
                          Taiwan, Province of China
                        </option>
                        <option value="Tajikistan">Tajikistan</option>
                        <option value="Tanzania">
                          Tanzania, United Republic of
                        </option>
                        <option value="Thailand">Thailand</option>
                        <option value="Togo">Togo</option>
                        <option value="Tokelau">Tokelau</option>
                        <option value="Tonga">Tonga</option>
                        <option value="Trinidad and Tobago">
                          Trinidad and Tobago
                        </option>
                        <option value="Tunisia">Tunisia</option>
                        <option value="Turkey">Turkey</option>
                        <option value="Turkmenistan">Turkmenistan</option>
                        <option value="Turks and Caicos">
                          Turks and Caicos Islands
                        </option>
                        <option value="Tuvalu">Tuvalu</option>
                        <option value="Uganda">Uganda</option>
                        <option value="Ukraine">Ukraine</option>
                        <option value="United Arab Emirates">
                          United Arab Emirates
                        </option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="United States">United States</option>
                        <option value="United States Minor Outlying Islands">
                          United States Minor Outlying Islands
                        </option>
                        <option value="Uruguay">Uruguay</option>
                        <option value="Uzbekistan">Uzbekistan</option>
                        <option value="Vanuatu">Vanuatu</option>
                        <option value="Venezuela">Venezuela</option>
                        <option value="Vietnam">Viet Nam</option>
                        <option value="Virgin Islands (British)">
                          Virgin Islands (British)
                        </option>
                        <option value="Virgin Islands (U.S)">
                          Virgin Islands (U.S.)
                        </option>
                        <option value="Wallis and Futana Islands">
                          Wallis and Futuna Islands
                        </option>
                        <option value="Western Sahara">Western Sahara</option>
                        <option value="Yemen">Yemen</option>
                        <option value="Serbia">Serbia</option>
                        <option value="Zambia">Zambia</option>
                        <option value="Zimbabwe">Zimbabwe</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="col-form-label">Unique Key</label>
                      <input
                        className="form-control"
                        onInput={(e) =>
                          setClient({
                            ...Client,
                            uniquekey: e.target.value,
                          })
                        }
                        value={Client.uniquekey}
                        {...register("uniquekey")}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="col-form-label">
                        Business Name <span className="text-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        onInput={(e) =>
                          setClient({
                            ...Client,
                            businessName: e.target.value,
                          })
                        }
                        value={Client.businessName}
                        {...register("businessName")}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="col-form-label">
                        Business Alias (Nick Name)
                      </label>
                      <input
                        className="form-control floating"
                        onInput={(e) =>
                          setClient({
                            ...Client,
                            BusinessAlias: e.target.value,
                          })
                        }
                        value={Client.BusinessAlias}
                        {...register("BusinessAlias")}
                      />
                      <input
                        className="form-control floating"
                        type="hidden"
                        value={0}
                        {...register("lead")}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="col-form-label">Email</label>
                      <input
                        onInput={(e) =>
                          setClient({
                            ...Client,
                            email: e.target.value,
                          })
                        }
                        className="form-control"
                        type="email"
                        value={Client.email}
                        {...register("email")}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="col-form-label">Phone Number</label>
                      <input
                        className="form-control"
                        type={"number"}
                        onInput={(e) =>
                          setClient({
                            ...Client,
                            phoneNumber: e.target.value,
                          })
                        }
                        value={Client.phoneNumber}
                        {...register("phoneNumber")}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="col-form-label">
                        VAT Registration Number
                      </label>
                      <input
                        className="form-control floating"
                        onInput={(e) =>
                          setClient({
                            ...Client,
                            VATRegistrationNumber: e.target.value,
                          })
                        }
                        value={Client.VATRegistrationNumber}
                        {...register("VATRegistrationNumber")}
                      />
                    </div>
                  </div>
                </div>

                {/* logo */}

                <section className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="col-form-label">Business Logo</label>
                      <input
                        type={"file"}
                        onInput={(e) =>
                          setClient({
                            ...Client,
                            businessLogo: e.target.value,
                          })
                        }
                        value={Client.businessLogo}
                        {...register("businessLogo")}
                      />
                    </div>
                  </div>
                </section>

                {/* communication */}

                <br />

                <section className="row">
                  <h3> Communication Address</h3>

                  <br />
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="col-form-label">
                        Street Address111
                      </label>
                      <input
                        onInput={(e) =>
                          setClient({
                            ...Client,
                            communicationStreetAddress: e.target.value,
                          })
                        }
                        className="form-control"
                        value={Client.communicationStreetAddress}
                        {...register("communicationStreetAddress")}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="col-form-label">City</label>
                      <input
                        className="form-control"
                        onInput={(e) =>
                          setClient({
                            ...Client,
                            communicationCity: e.target.value,
                          })
                        }
                        value={Client.communicationCity}
                        {...register("communicationCity")}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="col-form-label">State</label>
                      <input
                        className="form-control"
                        value={Client.communicationState}
                        onInput={(e) =>
                          setClient({
                            ...Client,
                            communicationState: e.target.value,
                          })
                        }
                        {...register("communicationState")}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="col-form-label">
                        Postal Code / Zip Code
                      </label>
                      <input
                        className="form-control"
                        value={Client.communicationPostalCode}
                        onInput={(e) =>
                          setClient({
                            ...Client,
                            communicationPostalCode: e.target.value,
                          })
                        }
                        {...register("communicationPostalCode")}
                      />
                    </div>
                  </div>
                </section>

                <section className="row">
                  <h3>Shipping Details</h3>

                  <br />
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="col-form-label">
                        Name <span className="text-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        value={Client.shippingName}
                        onInput={(e) =>
                          setClient({
                            ...Client,
                            shippingName: e.target.value,
                          })
                        }
                        {...register("shippingName")}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="col-form-label">
                        Street Address
                        <span className="text-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        value={Client.shippingStreetAddress}
                        onInput={(e) =>
                          setClient({
                            ...Client,
                            shippingStreetAddress: e.target.value,
                          })
                        }
                        {...register("shippingStreetAddress")}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="col-form-label">State</label>
                      <input
                        className="form-control"
                        value={Client.shippingState}
                        onInput={(e) =>
                          setClient({
                            ...Client,
                            shippingState: e.target.value,
                          })
                        }
                        {...register("shippingState")}
                      />
                    </div>
                  </div>
                  <br />
                </section>

                <section className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="col-form-label">
                        Select Country <span className="text-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        value={Client.shippingCountry}
                        onInput={(e) =>
                          setClient({
                            ...Client,
                            shippingCountry: e.target.value,
                          })
                        }
                        {...register("shippingCountry")}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="col-form-label">City</label>
                      <input
                        className="form-control"
                        value={Client.shippingCity}
                        onInput={(e) =>
                          setClient({
                            ...Client,
                            shippingCity: e.target.value,
                          })
                        }
                        {...register("shippingCity")}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="col-form-label">
                        Postal Code / Zip Code
                      </label>
                      <input
                        className="form-control"
                        value={Client.shippingPostalCode}
                        onInput={(e) =>
                          setClient({
                            ...Client,
                            shippingPostalCode: e.target.value,
                          })
                        }
                        {...register("shippingPostalCode")}
                      />
                    </div>
                  </div>
                </section>
                <div className="submit-section">
                  <button type="submit" className="btn btn-primary submit-btn">
                    Update
                  </button>
                </div>
              </form>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Client_Edit;

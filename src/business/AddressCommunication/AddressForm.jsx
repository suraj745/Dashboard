import React from "react";
import SelectCountry from "../BusinessProfileForm/SelectCountry";

const AddressForm = () => {
  return (
    <form action="" className="container">
      <ul className="row">
        <li className="col-sm-12">
          <label for="exampleInputEmail1" class="form-label">
            Street Address
            <div id="emailHelp" class="form-text">
              Your postal address. Helps us increase visibility of your profile
              in relevant geography
            </div>
          </label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter Street Address"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </li>
        <br />

        <li className="col-md-6 mt-4">
          <label for="exampleInputEmail1" class="form-label">
            Country <span className="text-danger">*</span>
          </label>
          <SelectCountry />
        </li>

        <li className="col-md-6 mt-4">
          <label for="exampleInputEmail1" class="form-label">
            State <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter Street Address"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </li>

        <li className="col-md-6 mt-4">
          <label for="exampleInputEmail1" class="form-label">
            City <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter Street Address"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </li>

        <li className="col-md-6 mt-4">
          <label for="exampleInputEmail1" class="form-label">
            Postal Code / Zip Code
          </label>
          <input
            type="text"
            class="form-control"
            placeholder="Postal Code / Zip Code
            "
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </li>

        <li className="row gap-2 mt-3 mx-1">
          <button type="submit" class="btn col-sm-2 btn-primary">
            Submit
          </button>
          <button type="submit" class="btn col-sm-2 btn-danger">
            reset
          </button>
        </li>
      </ul>
    </form>
  );
};

export default AddressForm;

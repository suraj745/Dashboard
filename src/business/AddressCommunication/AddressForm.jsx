import React, { useContext } from "react";
import SelectCountry from "../BusinessProfileForm/SelectCountry";
import { useForm } from "react-hook-form";
import { stepCount } from "../index";

const AddressForm = () => {
  const {
    steps: [step, setStep],
    country: [country, setCountry],
  } = useContext(stepCount);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const data2 = { ...data, country };

    console.log(data2);
    // const res = await fetch("http://localhost:5001/business", {
    //   method: "POST",
    //   headers: {
    //     "CONTENT-TYPE": "application/json",
    //   },
    //   body: JSON.stringify(data2),
    // });
    // const data3 = await res.json();

    data2 && setStep(3);

    reset();
  };

  return (
    <form action="" className="container" onSubmit={handleSubmit(onSubmit)}>
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
            {...register("streetAddress")}
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
            required
            type="text"
            class="form-control"
            placeholder="State"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            {...register("State")}
          />
        </li>

        <li className="col-md-6 mt-4">
          <label for="exampleInputEmail1" class="form-label">
            City <span className="text-danger">*</span>
          </label>
          <input
            required
            type="text"
            class="form-control"
            placeholder="City"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            {...register("City")}
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
            {...register("ZipCode")}
          />
        </li>

        <li className="row gap-2 mt-3 mx-1">
          <button type="submit" class="btn col-sm-2 btn-primary">
            Submit
          </button>
          <button
            type="submit"
            class="btn col-sm-2 btn-danger"
            onClick={() => reset()}
          >
            reset
          </button>
        </li>
      </ul>
    </form>
  );
};

export default AddressForm;

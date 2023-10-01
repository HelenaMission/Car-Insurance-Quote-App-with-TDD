import React, { useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function CarValueCalculator() {
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [result, setResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:4000/api/car_value", { model, year });
      if (response.data && typeof response.data === "string") {
        setErrorMessage(response.data);
        setResult(null);
      } else {
        setResult(response.data.value);
        setErrorMessage("");
      }
    } catch (error) {
      // console.log(error.response.data);
      // console.log(error.response.status);
      // console.log(error.response.headers);
      setErrorMessage("Invalid input. Please provide a valid value for model and year.");
    }
  };

  return (
    <div className="bg-indigo-400 w-full h-full">
      <NavBar />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-16 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-lg">
          <div className="flex font-sans justify-center text-6xl">
            <span className="text-cyan-700">Turners</span>
            <span className="text-neutral-400">Cars</span>
          </div>
          <h2 className="mt-12 text-center text-3xl font-bold leading-9 tracking-wider text-gray-900">
            <p className="py-4">Please Provide the brand and manufacturing year of your vehicle.</p>
            <p className="py-4">We will calculate its insurance value.</p>
          </h2>
        </div>
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="model" className="block text-2xl font-medium leading-6 text-gray-900 my-5">
                Car Model
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="model"
                  name="model"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="year" className="block text-2xl font-medium leading-6 text-gray-900">
                  Car Year
                </label>
              </div>
              <div className="mt-2">
                <input
                  type="text"
                  id="year"
                  name="year"
                  value={year}
                  onChange={(e) => setYear(Number(e.target.value))}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-2xl font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Calculate
              </button>
            </div>
          </form>
          <div id="result" className="text-2xl text-center">
            {result && result !== undefined ? <p>Your car value: ${result}</p> : <p>{errorMessage}</p>}
          </div>
          <p className="mt-10 text-center text-2xl border-2 rounded-lg py-3 shadow-2xl bg-slate-200">
            NOTE: Have your car's value ready for the quote page before moving on to the next step.
          </p>
          <Link to="http://localhost:3000/risk_rating">
            <button
              type="button"
              className="mt-6 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-2xl font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Next
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

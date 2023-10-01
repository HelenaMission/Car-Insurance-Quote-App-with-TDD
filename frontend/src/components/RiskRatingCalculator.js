import React, { useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { Textarea } from "@material-tailwind/react";

export default function RiskRatingCalculator() {
  const [claimHistory, setClaimHistory] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:4000/api/risk_rating", { claimHistory });
      if (response.data && typeof response.data === "string") {
        setError(response.data);
        setResult(null);
      } else {
        setResult(response.data.rate);
        setError("");
      }
    } catch (error) {
      // console.log(error.response.data);
      // console.log(error.response.status);
      // console.log(error.response.headers);
      setError("Invalid input. Please provide a valid claim history.");
    }
  };

  return (
    <div className="bg-indigo-400 w-full h-full">
      <NavBar />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-16 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-lg py-10">
          <div className="mt-11 flex font-sans justify-center text-6xl">
            <span className="text-cyan-700">Turners</span>
            <span className="text-neutral-400">Cars</span>
          </div>
          <h2 className="mt-12 text-center text-3xl font-bold leading-9 tracking-wider text-gray-900">
            <p className="py-4">Please provide details about your claims history.</p>
            <p className="py-4">We will calculate your car's risk rate accordingly.</p>
          </h2>
        </div>
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <form className="mt-5 space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="claim" className="block text-2xl font-medium leading-6 text-gray-900">
                Claim History
              </label>
              <div className="mt-5">
                <Textarea
                  type="text"
                  id="claim"
                  name="claim"
                  value={claimHistory}
                  onChange={(e) => setClaimHistory(e.target.value)}
                  required
                  rows={6}
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
            {result !== null ? <p>Rating Result: {result}</p> : <p>{error}</p>}
          </div>
          <p className="mt-10 text-center text-2xl border-2 rounded-lg py-3 shadow-2xl bg-slate-200">
            NOTE: Have your risk rate ready for the quote page before moving on to the next step.
          </p>
          <Link to="http://localhost:3000/final_quote">
            <button
              type="button"
              className="mt-8 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-2xl font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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


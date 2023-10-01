import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="bg-indigo-400 w-full h-screen">
        <NavBar />
        <div className=" flex text-8xl justify-center mx-36 my-36">
          <div className=" my-32 content-center ">
            <div className="">
              Protect yourself <br />
              against unexpected costs
            </div>
            <Link to="http://localhost:3000/car_value">
              <button
                type="button"
                className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              >
                Start here
              </button>
            </Link>
          </div>
          <div className="w-3/5 h-3/5">
            <img
              src="https://cdn.pixabay.com/photo/2019/07/07/14/03/fiat-500-4322521_1280.jpg"
              className="bg-auto rounded-lg shadow transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
              alt="car"
            />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

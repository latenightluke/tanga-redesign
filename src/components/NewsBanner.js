import React from "react";
import { NavLink } from "react-router-dom";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

export default function NewsBanner() {
  return (
    <div className="bg-red-700 text-white text-center md:text-left fs-xs px-md-4 px-2 py-1 flex justify-between">
      <div className="inline-flex font-normal text-center md:text-left align-self-center">
        <span>Free Returns</span>
        <span className="mx-2">•</span>100% Risk Free, 100% Easy{" "}
        <FontAwesomeIcon icon="long-arrow-alt-right" className="ml-2 mt-1" />
      </div>
      <NavLink to="/" className="hidden md:flex text-white">
        <FontAwesomeIcon icon="long-arrow-alt-left" className="mr-2 mt-1" />
        Back To Pattern Library
      </NavLink>
      <div className="font-normal hidden md:flex">
        <NavLink to="/" className="text-white mr-4">
          <span className="text">
            <FontAwesomeIcon icon="heart" className="mr-2" />
            My Likes
          </span>
        </NavLink>
        <NavLink to="/" className="group text-white">
          <span className="group-hover:border-b-2 group-hover:border-white">
            <FontAwesomeIcon icon="truck" className="mr-2" />
            Track An Order
          </span>
        </NavLink>
      </div>
    </div>
  );
}

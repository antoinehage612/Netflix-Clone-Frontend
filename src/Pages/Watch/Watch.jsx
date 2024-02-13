import React from "react";
import "./Watch.scss";
import { IoMdArrowBack } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

const Watch = () => {
  const location = useLocation();
  console.log(location);
  let { state } = useLocation();

  console.log(state);

  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <IoMdArrowBack />
          Home
        </div>
      </Link>
      <video className="video" autoPlay controls src={state.movie.trailer} />
    </div>
  );
};

export default Watch;

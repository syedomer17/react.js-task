import React from "react";

function Card(props) {
  console.log(props.City);
  return (
    <>
      <div className=" mr-7 bg-white text-black inline-block p-6 text-center rounded ">
        <img
          className="h-32 ml-8 w-32 rounder-full mb-3"
          src={props.photo}
          alt=""
        />
        <h1 className="text-2xl font-semibold mb-4">{props.userName}</h1>
        <h4 className="text-blue-400">{props.prof}</h4>
        <h2>
          {props.city}, {props.age}
        </h2>
        <button className=" mt-5 bg-emerald-700 text-white px-4 py-2 rounded font-med">
          Add Friend
        </button>
      </div>
    </>
  );
}

export default Card;

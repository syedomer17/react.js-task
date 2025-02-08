import React from "react";

function NavBar() {
  return (
    <>
      <nav className="bg-emerald-950 flex py-5 px-10 items-center justify-between">
        <h2 className="text-2xl text-white">Omer Ali</h2>
        <div className="flex gap-10 items-center">
          <h4 className="text-xl text-white">About</h4>
          <h4 className="text-xl text-white">Contact</h4>
          <h4 className="text-xl text-white">Services</h4>
          <h4 className="text-xl text-white">Your Account</h4>
        </div>
      </nav>
    </>
  );
}

export default NavBar;

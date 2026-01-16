import React from "react";
import Image from "next/image";
import NavLink from "../buttons/NavLink";
import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";
import AuthButtons from "../buttons/AuthButtons";

const Navbar = () => {
  const nav = (
    <>
      <li>
        <NavLink href="/">Home</NavLink>
      </li>
      <li>
        <NavLink href="/products">Products</NavLink>
      </li>
      <li>
        <NavLink href="/orders">My Ordes</NavLink>
      </li>
      <li>
        <NavLink href="/contacts">Contacts</NavLink>
      </li>
      <li>
        <NavLink href="/about">About US</NavLink>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar w-full mx-auto bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {nav}
            </ul>
          </div>
          <Image src="/assets/store.png" height={30} width={30} alt="logo" />
          <a className="text-amber-500 ml-4 font-bold text-xl">Motiar Store</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="text-xl text-teal-600 flex justify-center items-center gap-6 font-semibold px-1">
            {nav}
          </ul>
        </div>
        <div className="navbar-end space-x-2">
          <Link className="" href={"/cart"}>
            <Image src="/assets/trolley.png" height={30} width={30} alt="logo" />
          </Link>
          {/* <Image src={user?.photoURL} className="w-10 h-10 rounded-full mr-2" alt="" /> */}
          {/* <NavLink className="btn btn-primary" href="/rider">
            Be a Rider
          </NavLink> */}
          <AuthButtons></AuthButtons>
        </div>
      </div>
    </>
  );
};

export default Navbar;

import React from "react";
import logo from "../../../images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {

  const menuItems = (
    <>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/services'>Services</Link></li>
      <li><Link to='/blogs'>Blogs</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
    </>
  )

  return (
    <div class="navbar bg-base-100 border-b">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/">
          <img src={logo} alt="industo" />
        </Link>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0 text-xl">
          {menuItems}
        </ul>
      </div>
      <div class="navbar-end">
        {/* sign out button and user pic here */}
        <Link to="/"><small>signOut-userPic</small></Link>
      </div>
    </div>
  );
};

export default Navbar;

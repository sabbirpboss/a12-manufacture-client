import React, { useEffect } from "react";
import banner from "../../Assests/banner.jpg";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { themeChange } from "theme-change";
import logo from "../../Assests/logo.png";
import auth from "../../firebase.init";
import useAdmin from "../Hooks/useAdmin";

const Banner = ({children}) => {

  const { pathname } = useLocation();

  useEffect(() => {
    themeChange(false);
  }, []);
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  const handleLogout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
    toast.success("Logout Success");
  };

  return (
    <div className="border-t border-base-300">
        <div
          className="hero min-h-screen relative"
          style={{
            background: `url(${banner})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "100vh",
          }}
        >
          
          <div className="hero-content text-neutral-content absolute top-52 left-0">
            <div className="md:max-w-md lg:max-w-lg max-w-xl text-white">
            <h2 className="uppercase text-white text-5xl font-bold flex flex-col flex-start">
          <span className="text-[#00fff7]">New</span> 
           FriendsMoto 505
        </h2>
              <Link to="/products" className="btn bg-[#00fff7] text-[#0f172a] my-5">
                Pre-Booking
              </Link>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Banner;

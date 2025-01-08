import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import 'react-tooltip/dist/react-tooltip.css'
import { FaHome } from "react-icons/fa";
import { MdOutlineAppRegistration, MdRateReview } from "react-icons/md";
import { IoIosAddCircle, IoMdLogIn } from "react-icons/io";
import { RiBookMarkedFill } from "react-icons/ri";
import { VscCodeReview } from "react-icons/vsc";
import { IoLogOut } from "react-icons/io5";

const Navbar = () => {
  const { user, handleSignOut ,loading } = useContext(AuthContext);
  const navigate=useNavigate();
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    
    setTheme(theme === 'dark' ? 'light' : 'dark');
   
  };
 useEffect(() => {
    document.querySelector('html').setAttribute('data-theme', theme);
  }, [theme]);
  const handleLogOutUser =()=>{
    handleSignOut();
    navigate('/');

  }
  const navbarLinks = (
    <>
      <li>
        <NavLink to="/"><FaHome /> Home</NavLink>
      </li>
      <li>
        <NavLink to="/allReviews"> <MdRateReview />All Reviews</NavLink>
      </li>
    
      {user && (
        <>
          <li>
            <NavLink to="/addReviews"><IoIosAddCircle /> Add Review</NavLink>
          </li>
          <li>
            <NavLink to={`/myReviews/${user.email}`}><VscCodeReview /> My Review</NavLink>
          </li>
          <li>
            <NavLink to={`/gameWatchList/${user.email}`}><RiBookMarkedFill /> Game WatchList</NavLink>
          </li>
        </>
      )}
        <li>
        <a href="#Expert_opinion">Expert_opinion</a>
      </li>
      <li>
        <a href="#eras_OfGaming">Eras Of gaming</a>
      </li>
      <li>
       <a href="#subscribe">Contact Us</a>
      </li>
    </>
  );
  return (
    <div className="z-50 navbar backdrop-blur-lg w-11/12 mx-auto  fixed top-0  pt-4  pb-8 ">
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navbarLinks}
          </ul>
        </div>
         <Link to='/'> <img className="md:hidden w-16 animate-bounce" src="https://i.ibb.co.com/28Y9qyK/backiee-274647-landscape-removebg-preview.png" alt="" /></Link>
        <Link to='/' className="px-6 py-2 text-2xl font-bold font-roboto italic hidden md:block">
          <span className="text-rose-500 ">Chill</span> Gamer
        </Link>
        <div className=" hidden lg:flex">
          <ul className="menu menu-horizontal px-1 *:text-black">{navbarLinks}</ul>
        </div>
      </div>

      <div className="navbar-end flex items-center flex-col md:flex-row gap-4">
        {loading?<span className="loading loading-dots loading-lg"></span>: user ? (
          <div className="flex gap-4 flex-col md:flex-row items-center">
            <div className="flex justify-center items-center gap-2">
              <div
                className="avatar "
                data-tooltip-id="my-tooltip"
                data-tooltip-content={user?.displayName}
                data-tooltip-place="top"
              >
                <div className="ring-rose-600 ring-offset-base-100 w-12 rounded-full ring ring-offset-2">
                  <img src={user?.photoURL} />
                </div>
              </div>
              <button onClick={handleLogOutUser} className="btn btn-md border border-rose-300">
              <IoLogOut /> Sign Out
              </button>
            </div>
        
          </div>
        ) : (
          <div className="flex gap-4 flex-col md:flex-row items-center">
            <div className="flex justify-center items-center gap-2">
              <Link to="/login" className="btn border border-rose-200">
              <IoMdLogIn />  Log In
              </Link>
              <Link to="/register" className="btn border-rose-200">
              <MdOutlineAppRegistration /> register
              </Link>
            </div>
           
          </div>
        )}
         <label className="flex cursor-pointer gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <input
              onClick={toggleTheme}
                type="checkbox"
                value="synthwave"
                className="toggle theme-controller"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
      </div>
    </div>
  );
};

export default Navbar;

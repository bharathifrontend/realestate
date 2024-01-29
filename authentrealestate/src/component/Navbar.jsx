import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//react-icons
import { FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    // Perform logout actions

    // Redirect the user to the login page or any other appropriate page
    navigate("/Authendication");
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  //nav items
  const navItems = [
    { path: "/Home", link: "Home" },
    { path: "/about", link: "About" },
    { path: "/services", link: "Services" },
    { path: "/Pricing", link: "Pricing" },
    { path: "/contact", link: "Contact" },
  ];

  return (
    <header className="bg-white text-black fixed top-0 left-0 right-0">
      <nav className="px-4 py-4 max-w-7xl mx-auto flex justify-between items-center">
        <a href="/" className="text-xl font-bold text-black">
          Rent
          <span className="text-violet-800">Property</span>
        </a>

        {/* nav items for lg device */}
        <ul className="md:flex gap-12 text-lg hidden">
          {navItems.map(({ path, link }) => (
            <li
              className="text-black font-bold hover:text-violet-800"
              key={path}
            >
              <NavLink
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
                to={path}
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* menu icons */}
        <div className="text-white lg:flex gap-4 items-center ">
          <button
            onClick={handleLogout}
            className="bg-violet-800 px-6 py-2 font-medium rounded hover:bg-white
              hover:text-orange-500 transition-all duration-200 ease-in"
          >
            Logout
          </button>
        </div>

        {/* mobile menu btn - display mobile screen */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="cursor-pointer">
            {isMenuOpen ? (
              <FaXmark className="w-5 h-5" />
            ) : (
              <FaBars className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {/* menu items only for mb */}
      <div>
        <ul
          className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white text-black ${
            isMenuOpen
              ? "fixed top-0 left-0 w-full translate-all ease-out duration-150"
              : "hidden"
          }`}
        >
          {navItems.map(({ path, link }) => (
            <li className="text-black" key={path}>
              <NavLink onClick={toggleMenu} to={path}>
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
{
  /* <img
  className="rounded"
  src="https://img.freepik.com/free-vector/home-natural-logo-design_474888-1751.jpg?w=826&t=st=1701330690~exp=1701331290~hmac=100dd7cfba5c40d66bc132449cd1e973521747c5d1758ef8351e92ff62d344ab"
  alt="logo"
  height={100}
  width={100}
/>; */
}

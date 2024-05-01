import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineUserCircle } from "react-icons/hi";
import { MdShoppingCart } from "react-icons/md";
import logo from '../assest/logo.png';
import './Header.css'; // Import the CSS file

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(prev => !prev);
  } 

  // Placeholder value for the number of items in the cart
  const cartItemsCount = 5; // Replace this with the actual count from your state or context
  
  return (
    <header className='fixed top-0 left-0 w-full h-16 px-4 z-50 bg-white shadow-md flex items-center justify-between'>
        {/* Logo */}
        <Link to="/">
          <img src={logo} className='h-10' alt='Logo'/>
        </Link>

        {/* Navigation */}
        <nav className='hidden md:flex items-center space-x-6'>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/menu" className="nav-link">Menu</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>

        {/* Icons */}
        <div className='flex items-center space-x-6'>
          {/* User Icon */}
          <div className='text-xl text-gray-600 cursor-pointer relative'>
            <HiOutlineUserCircle onClick={handleShowMenu} />
            {showMenu && (
              <div className="absolute top-full right-0 mt-2 w-28 bg-white shadow-md p-2 rounded-md flex flex-col">
                <Link to="/newproduct" className='text-sm hover:text-gray-800'>New Product</Link>
                <Link to="/login" className='text-sm hover:text-gray-800'>Login</Link>
              </div>
            )}
          </div>
          
          {/* Cart Icon */}
          <div className='relative'>
            <MdShoppingCart className='text-xl text-gray-600 cursor-pointer' />
            <div className='absolute top-0 right-0 -mt-1 mr-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs'>
              {cartItemsCount}
            </div>
          </div>
        </div>

        {/* Mobile Menu Icon - Hidden by default */}
        <div className='md:hidden'>
          <button onClick={handleShowMenu} className='text-xl text-gray-600 cursor-pointer'>
            <svg className='w-6 h-6' fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu - Hidden by default */}
        {showMenu && (
          <div className='md:hidden absolute top-full right-0 mt-2 w-40 bg-white shadow-md p-2 rounded-md'>
            <Link to="/" className='block text-sm hover:text-gray-800 mb-2'>Home</Link>
            <Link to="/menu" className='block text-sm hover:text-gray-800 mb-2'>Menu</Link>
            <Link to="/about" className='block text-sm hover:text-gray-800 mb-2'>About</Link>
            <Link to="/contact" className='block text-sm hover:text-gray-800'>Contact</Link>
          </div>
        )}
    </header>
  );
};

export default Header;

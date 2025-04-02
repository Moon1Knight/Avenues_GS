// import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: 'Home', href: '/', isRoute: true },
    { title: 'About Avenues', href: '/avenues-education', isRoute: true },
    { title: 'Avenues Schooling ', href: '/avenues-schooling', isRoute: true },
    { title: 'Avenues Activities', href: '#avenuesActivities', isRoute: false },
    // { title: 'Testimonials', href: '#testimonials' },
    { title: 'Contact', href: '#contact', isRoute: false },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-[100] bg-white/80 backdrop-blur-md shadow-md transition-all duration-300"
    >
      <div className="flex items-center justify-between w-full px-6 py-2">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl font-bold bg-gradient-to-r from-[#4195d1] to-[#406ab4] text-transparent bg-clip-text"
        >
          <img
            src="/logo.png"
            alt="Global School Academy"
            className="h-16 w-auto object-contain"
          />
        </motion.div>

        {/* Desktop menu */}
        <div className="hidden md:flex justify-center text-blue flex-1 space-x-8">
          {menuItems.map((item) => (
            item.isRoute ? (
              <motion.div key={item.title} whileHover={{ y: -2 }}>
                <Link 
                  to={item.href}
                  className="text-blue transition-all duration-300"
                >
                  {item.title}
                </Link>
              </motion.div>
            ) : (
              <motion.a
                key={item.title}
                href={item.href}
                whileHover={{ y: -2 }}
                className="text-blue transition-all duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector(item.href);
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {item.title}
              </motion.a>
            )
          ))}
        </div>

        {/* Admission Button - Desktop */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block px-6 py-2 bg-gradient-to-r from-[#00833e] via-[#6cb33f] to-[#406ab4] text-white rounded-lg shadow-md hover:opacity-90 transition-all duration-300 text-base"
        >
          Admission
        </motion.button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          <motion.div
            animate={isOpen ? 'open' : 'closed'}
            className="flex flex-col space-y-1.5"
          >
            <motion.span
              variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: 45, y: 8 } }}
              className="block w-6 h-0.5 bg-gray-600"
            />
            <motion.span
              variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
              className="block w-6 h-0.5 bg-gray-600"
            />
            <motion.span
              variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: -45, y: -8 } }}
              className="block w-6 h-0.5 bg-gray-600"
            />
          </motion.div>
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm overflow-hidden md:hidden"
      >
        <div className="px-6 py-4 space-y-4">
          {menuItems.map((item) => (
            item.isRoute ? (
              <motion.div key={item.title} whileHover={{ x: 4 }}>
                <Link 
                  to={item.href}
                  className="block  bg-blue bg-clip-text transition-all duration-300 text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              </motion.div>
            ) : (
              <motion.a
                key={item.title}
                href={item.href}
                whileHover={{ x: 4 }}
                className="block  bg-blue bg-clip-text transition-all duration-300 text-sm"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector(item.href);
                  element?.scrollIntoView({ behavior: 'smooth' });
                  setIsOpen(false);
                }}
              >
                {item.title}
              </motion.a>
            )
          ))}
          <motion.button
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(false)}
            className="w-full text-left px-4 py-2 bg-gradient-to-r from-[#00833e] via-[#6cb33f] to-[#406ab4] text-white rounded-lg shadow-md hover:opacity-90 transition-all duration-300 text-sm"
          >
            Admission
          </motion.button>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;

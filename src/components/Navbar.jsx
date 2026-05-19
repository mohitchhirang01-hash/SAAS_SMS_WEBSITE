import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-primary">
              App Name
            </Link>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-gray-700 hover:text-primary transition-colors">Home</Link>
            <Link to="/features" className="text-gray-700 hover:text-primary transition-colors">Features</Link>
            <Link to="/for-schools" className="text-gray-700 hover:text-primary transition-colors">For Schools</Link>
            <Link to="/about" className="text-gray-700 hover:text-primary transition-colors">About Us</Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary transition-colors">Contact</Link>
            <Link 
              to="/contact" 
              className="bg-primary text-white px-6 py-2 rounded-md font-medium hover:bg-primary-dark transition-colors"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

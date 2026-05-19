import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-bold text-primary mb-4 block">
              App Name
            </Link>
            <p className="text-gray-600 max-w-sm">
              Empowering schools with AI-driven insights for student success and seamless parent communication.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/features" className="text-gray-600 hover:text-primary transition-colors">Features</Link></li>
              <li><Link to="/for-schools" className="text-gray-600 hover:text-primary transition-colors">For Schools</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-600">
              <li>hello@appname.com</li>
              <li>+91 (800) 123-4567</li>
              <li className="pt-2">
                <Link to="/contact" className="text-primary font-medium hover:underline">
                  Book a Demo &rarr;
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} App Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

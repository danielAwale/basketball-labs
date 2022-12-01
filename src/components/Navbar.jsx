import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Router>
    <div>
      {/* Navbar */}
      <nav className="relative container mx-auto p-6">
      {/* Flex container */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="pt2">
          <Link to='/' className='text-l font-press-start'>BasketBall Labs</Link>
        </div>
        {/* Menu items */}
        <div className="hidden md:flex space-x-11 ">
          <Link to="/graphs" className='text-lg hover:text-gray-400'>Graphs</Link>
          <Link to="/stats" className='text-lg hover:text-gray-400'>Stats</Link>
          <Link to="/watchist" className='text-lg hover:text-gray-400'>Watchlist</Link>
        </div>
        {/* Button */}
        <Link to="/register" className="p-3 px-5 pt-2 pb-2 text-white bg-orange-600 rounded-full baseline text-lg">Register</Link>
      </div>
      </nav>
    </div>
    </Router>
  )
}

export default Navbar
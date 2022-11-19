import React from 'react'

const Navbar = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="relative container mx-auto p-6">
      {/* Flex container */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="pt2">
          <h1 className='text-l font-press-start'>BasketBall Labs</h1>
        </div>
        {/* Menu items */}
        <div className="hidden md:flex space-x-11">
          <a href="#" className='text-lg hover:text-gray-200'>Graphs</a>
          <a href="#" className='text-lg hover:text-gray-200'>Stats</a>
          <a href="#" className='text-lg hover:text-gray-200'>Watchlist</a>
        </div>
        {/* Butto */}
        <a href="" className="p-3 px-6 pt-2 text-white bg-orange-600 rounded-full baseline text-lg">Register</a>
      </div>
      </nav>
    </div>
  )
}

export default Navbar
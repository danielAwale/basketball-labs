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
          <a href='#' className='text-l font-press-start'>BasketBall Labs</a>
        </div>
        {/* Menu items */}
        <div className="hidden md:flex space-x-11 ">
          <a href="#" className='text-lg hover:text-gray-400'>Graphs</a>
          <a href="#" className='text-lg hover:text-gray-400'>Stats</a>
          <a href="#" className='text-lg hover:text-gray-400'>Watchlist</a>
        </div>
        {/* Butto */}
        <a href="" className="p-3 px-5 pt-2 pb-2 text-white bg-orange-600 rounded-full baseline text-lg">Register</a>
      </div>
      </nav>
    </div>
  )
}

export default Navbar
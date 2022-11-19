import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-24 mx-auto px-4 max-w-[1240px] text-fuchsia-50'>

      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>BasketBall Labs</h1>
      <ul className='flex'>
        <li className='p-4'>Graphs</li>
        <li className='p-4'>Stats</li>
        <li className='p-4'>Watchlist</li>
        <li className='p-4'>Register</li>
      </ul>
    </div>
  )
}

export default Navbar
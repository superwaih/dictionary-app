import React from 'react'

const Header = () => {
  return (
    <div className='bg-gray-700' >
        <div className="mx-auto py-8 ">
            <h1 className='text-center font-bold text-white text-3xl'>Dictionary App </h1>
        </div>
        <div className="flex items-center justify-center mt-5">
            <div className="flex mb-5 rounded border-2 border-gray-200 rounded">
                <input className='px-5 py-2 md:w-80 ' type="text" placeholder='search for a word' />
                <button className='bg-blue-400 border-l px-4 py-2 text-white ' >Search </button>
            </div>
        </div>
        <h3 className='text-center text-gray-50 mt-4 pb-2' >Search Results for <span className='font-bold text-white'>Down</span> </h3>
    </div>
  )
}

export default Header
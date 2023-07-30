import React from 'react'
import { BsSearch } from "react-icons/bs"

const Search = () => {
  return (
    <div className='flex justify-center align-center mt-5 '>
        <input type="text" className='w-1/2 p-1 outline-none' />
        <button className='border bg-textColor px-2 '><BsSearch /></button>
    </div>
  )
}

export default Search

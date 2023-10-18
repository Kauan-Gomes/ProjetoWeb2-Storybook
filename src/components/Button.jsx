import React from 'react'

export default function Button({children}) {
  return (
    <button className='flex justify-center items-center h-6 w-6 rounded-full bg-black/30 '>
        {children}
    </button>
  )
}

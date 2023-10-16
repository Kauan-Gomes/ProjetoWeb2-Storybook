import React from 'react'

export default function Button({children}) {
  return (
    <button className='flex justify-center items-center h-16 w-16 rounded-full bg-black/30 '>
        {children}
    </button>
  )
}

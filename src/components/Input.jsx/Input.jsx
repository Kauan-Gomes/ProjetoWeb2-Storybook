import React from 'react'

export default function Input({className, color, placeholder, value}) {
  return (
    <input 
    value={value}
    className={`${color} max-w-full text-center text-3xl focus:outline-none pt-4  break-all overflow-auto border-b- pb-3` }
    type="text" 
    placeholder={placeholder}
    />
  )
}

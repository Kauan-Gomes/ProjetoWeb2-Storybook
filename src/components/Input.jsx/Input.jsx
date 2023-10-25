import React from 'react'

export default function Input({className, color, ...rest}) {
  return (
    <input 
    
    className={`${color} max-w-full text-center text-3xl focus:outline-none pt-4  break-all overflow-auto  pb-3 ${className}` }
    type="text" 
    {...rest}
    />
  )
}

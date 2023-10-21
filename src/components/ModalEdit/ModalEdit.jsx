import React, { useState } from 'react'
import Input from '../Input.jsx/Input';

export default function ModalEdit({titulo, notas, setNotas, setTitulo}) {

    const [toggleClose, setToggleClose] = useState(false)

    const handleModalClick = (e) => {
        if (e.target === e.currentTarget) {
          setToggleClose(true)
        }
      };
    
    return (
        <div 
        onClick={(e) => handleModalClick(e)}
        className={`fixed top-0 left-0 bg-black/40 w-full h-full flex justify-center items-center ${toggleClose ? "hidden" : ""}`}>
            <div 
            className='bg-white h-5/6 w-6/12 rounded-xl relative flex flex-col'>
                <button 
                onClick={() => setToggleClose(!toggleClose)}
                className='absolute right-6 top-4 font-bold text-xl'
                >X</button>
                <Input 
                className='border'
                

                />
                <textarea className='border'>{notas}</textarea>
            </div>
        </div>
    )
}

import React, { useState } from 'react'
import Button from '../Button.jsx/Button';
import Input from '../Input.jsx/Input';
import SpanCores from '../SpanCor/SpanCores';

export default function ModalEdit({ atributes, setAtributes, toggleClose, setToggleClose }) {

    const handleModalClick = (e) => {
        if (e.target === e.currentTarget) {
            setToggleClose(true)
        }
    };



    return (
        <div
            onClick={(e) => handleModalClick(e)}
            className={`fixed rounded top-0 left-0 bg-black/40 w-full h-full flex justify-center items-center ${toggleClose ? "hidden" : ""}`}>
            <div
                className='bg-white h-5/6 w-auto rounded-xl relative flex flex-col'>
                <button
                    onClick={() => setToggleClose(!toggleClose)}
                    className='absolute right-6 top-4 font-bold text-xl'
                >X</button>
                <Input
                    value={atributes.titulo}
                    onChange={(e) => setAtributes({
                        titulo: e.target.value,
                        notas: atributes.notas,
                        cor: atributes.cor
                    })}
                    className={`${atributes.cor} h-20 rounded-t-lg`}
                />
                <textarea
                    onChange={(e) => setAtributes({
                        titulo: atributes.titulo,
                        notas: e.target.value,
                        cor: atributes.cor
                    })}
                    value={atributes.notas}
                    className='mx-auto my-10 text-2xl resize-none w-5/6 border h-4/6 outline-none p-4'></textarea>
                <SpanCores setAtributes={setAtributes} />
                <div className='mx-5 my-6  flex gap-5'>
                    <Button
                        color={atributes.cor}
                    >Remover</Button>
                    <Button
                        color={atributes.cor}
                    >Cancelar</Button>
                    <Button
                        color={atributes.cor}
                    >Salvar
                    </Button>
                </div>
            </div>
        </div>
    )
}

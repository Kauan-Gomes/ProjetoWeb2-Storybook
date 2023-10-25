import React, { useState } from 'react'
import Button from '../Button.jsx/Button';
import Input from '../Input.jsx/Input';
import SpanCores from '../SpanCor/SpanCores';

export default function ModalEdit({ titulo, notas, setNotas, setTituloModal, corModal, setCorModal, toggleClose, setToggleClose }) {

    const handleModalClick = (e) => {
        if (e.target === e.currentTarget) {
            setToggleClose(true)
        }
    };



    return (
        <form
            onClick={(e) => handleModalClick(e)}
            className={`fixed rounded top-0 left-0 bg-black/40 w-full h-full flex justify-center items-center ${toggleClose ? "hidden" : ""}`}>
            <div
                className='bg-white h-5/6 w-6/12 rounded-xl relative flex flex-col'>
                <button
                    onClick={() => setToggleClose(!toggleClose)}
                    className='absolute right-6 top-4 font-bold text-xl'
                >X</button>
                <Input
                    value={titulo}
                    onChange={(e) => setTituloModal(e.target.value)}
                    className={`${corModal} h-20 rounded-t-lg`}
                />
                <textarea
                    value={notas}
                    className='mx-auto my-10 text-2xl resize-none w-5/6 border h-4/6 outline-none p-4'></textarea>
                <SpanCores setCorModal={setCorModal} />
                <div className='mx-auto mt-6  flex gap-5'>
                    <Button
                        color={corModal}
                    >Remover</Button>
                    <Button
                        color={corModal}
                    >Cancelar</Button>
                    <Button
                        color={corModal}
                    >Salvar</Button>
                </div>
            </div>
        </form>
    )
}

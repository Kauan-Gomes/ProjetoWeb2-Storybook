'use client';

import Header from '@/components/Header/Header'
import ListaNotas from '@/components/ListaNotas/ListaNotas'
import Modal from '@/components/Modal/Modal';
import { useState } from 'react';


// bg-[url('/paisagem.jpg')]

export default function Home() {


  const listaNotas = [
    {
      id: 1,
      titulo: "mercado",
      notas: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker includin",
    },
    {
      id: 2,
      titulo: "prova",
      notas: "ajskjaskjaksjkasjka",
    },
    {
      id: 3,
      titulo: "trabalho",
      notas: "ajskjaskjaksjkasjka",
    },
    {
      id: 4,
      titulo: "receita",
      notas: "ajskjaskjaksjkasjka",
    },
    {
      id: 5,
      titulo: "lista de tarefa",
      notas: "ajskjaskjaksjkasjka",
    },

  ]

  //valores do input com base no option
  const [selectedOption, setSelectedOption] = useState("");

  //valores das notas 
  const [filteredNotes, setFilteredNotes] = useState(listaNotas)

  //função para filtrar as notas com base na barra de pesquisa do input 
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);

    const filteredNotes = listaNotas.filter((notes) => notes.titulo.toLowerCase().includes(event.target.value.toLowerCase()))

    setFilteredNotes(filteredNotes)

  };

  console.log(selectedOption)
  console.log(filteredNotes)

  
  return (
    <>
      <body className="h-full">
        <Header

          listaNotas={listaNotas}
          handleOptionChange={handleOptionChange}
          selectedOption={selectedOption}
        />
        <section className='relative mt-5 '>
          <Modal/>
          <ListaNotas listaNotas={filteredNotes} />
        </section>
      </body>
    </>
  )

}

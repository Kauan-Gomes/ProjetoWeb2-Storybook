'use client';

import Header from '@/components/Header/Header'
import ListaNotas from '@/components/ListaNotas/ListaNotas'
import Modal from '@/components/Modal/Modal';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';



export default function Home() {

  

  const [listaNotas, setlistaNotas] = useState([
    {
      id: 1,
      titulo: "mercado",
      notas: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker includin",
      cor: "bg-violet-200"
    },
    {
      id: 2,
      titulo: "prova",
      notas: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      cor: "bg-green-200"
    },
    {
      id: 3,
      titulo: "trabalho",
      notas: " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when ",
      cor: "bg-red-200"
    },
    {
      id: 4,
      titulo: "receita",
      notas: "Peço desculpas pelo mal-entendido. Se você deseja que o texto seja truncado na vertical (em relação à altura da div) e não na horizontal, você pode usar a classe line-clamp-{n} do Tailwind CSS, onde {n} é",
      cor: "bg-yellow-200"
    },
    {
      id: 5,
      titulo: "lista de tarefa",
      notas: "ajskjaskjaksjkasjka",
      cor: "bg-blue-200"
    }
  ])
  
  const [color, setColor] = useState('bg-white')
  //valores do input com base no option
  const [selectedOption, setSelectedOption] = useState("");
  //valores das notas filtradas 
  const [filteredNotes, setFilteredNotes] = useState(listaNotas)


  //função para adicionar notas
  const handleAddNotes = (event, color) => {
    
    //pelo evento pegando os valores do input e textArea
    const titulo = event.target[0].value
    const notas = event.target[1].value
    
    //criando uma nota nova com suas propriedades
    const newNote = {
      id: uuidv4(),
      titulo: titulo == "" ? "undefined" : titulo,
      notas: notas,
      cor: color
    };

    //adicionando a nota as outras
    
    setlistaNotas([newNote, ...listaNotas]);
    setFilteredNotes([newNote, ...listaNotas])
  }

  //função para filtrar as notas com base na barra de pesquisa do input 
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);

    const filterNotes = listaNotas.filter((note) => {
      return note.titulo.toLowerCase().includes(event.target.value.toLowerCase());
    });
    
    setFilteredNotes(filterNotes)
  };
  
  return (
    <>
      <body className="h-full">
        <Header
          listaNotas={filteredNotes}
          handleOptionChange={handleOptionChange}
          selectedOption={selectedOption}
        />
        <section className='flex mt-5 '>
          <Modal color={color} setColor={setColor} functionAddnotes={handleAddNotes}/>
          <ListaNotas listaNotas={filteredNotes}/>
        </section>
      </body>
    </>
  )

}

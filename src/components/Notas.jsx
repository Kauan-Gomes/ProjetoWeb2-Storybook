import {useState } from "react"

export default function Notas({ titulo, notas, cor,  setAtributes, setToggleClose }) {

  const [toggleHover, setToggleHover] = useState(false)
 
 
  // pegar o estado com os objetos e passar o objeto novo, não precisando de todas essas props
  const handleOpenModalEdit = (titulo, notas) => {
    setAtributes({
      titulo: titulo,
      notas: notas,
      cor: cor
    })

    setToggleClose(false)
  };

  return (
    <div
      onClick={()=>handleOpenModalEdit(titulo, notas)}
      onMouseLeave={() => setToggleHover(false)}
      onMouseEnter={() => setToggleHover(true)}
      className="relative bg-white h-64 w-60 rounded m-5  border shadow-xl cursor-pointer">
      <h1 
      className={`text-xl font-semibold ${cor} p-3`}>{titulo}</h1>
      <p 
      className="mx-5 mt-5 line-clamp-6 overflow-hidden">{notas}</p>
      {toggleHover &&
        <div className="flex justify-center items-center font-semibold absolute bg-[#ffd569dc] h-64 w-60 top-0 rounded select-none">
          <h2 className="transition duration-300 transform scale-100 hover:scale-140 ">Clique aqui <br /> para ver mais</h2>
        </div>
      }

    </div>

  )
}

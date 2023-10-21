import Input from "../Input.jsx/Input"


const ModalAdd = ({color, setColor, functionAddnotes}) => {

  
  const handleSubmit = (event) => {
    event.preventDefault()
    functionAddnotes(event, color)

    setColor('bg-white')
    event.target[0].value = ""
    event.target[1].value = ""

  
  } 

  return (
    <form onSubmit={handleSubmit} className="relative border-2 left-5 w-96 h-[500px] rounded text-center overflow-hidden flex flex-col gap-5 items-center">
      <Input
      color={color}
      className=""
      placeholder="Título"
      type="text"
      />
      <textarea placeholder="Faça sua anotação..." className="text-lg mx-5 p-2 focus:outline-none resize-none" cols="30" rows="9"></textarea>

      <div className="flex flex-col gap-3 items-center">
        <label className="text-lg">Selecione uma cor </label>
        <div className="flex gap-3">
          <span onClick={() => setColor("bg-black/10")}  className="border cursor-pointer shadow hover:bg-black/10 bg-black/30 h-5 w-5 rounded-full"></span>
          <span onClick={() => setColor("bg-red-200")} className="border cursor-pointer shadow hover:bg-red-500 bg-red-400 h-5 w-5 rounded-full"></span>
          <span onClick={() => setColor("bg-yellow-200")}  className="border cursor-pointer shadow hover:bg-yellow-300 bg-yellow-200 h-5 w-5 rounded-full"></span>
          <span onClick={() => setColor("bg-green-200")} className="border cursor-pointer shadow hover:bg-green-600 bg-green-400 h-5 w-5 rounded-full"></span>
          <span onClick={() => setColor("bg-blue-200")}  className="border cursor-pointer shadow hover:bg-blue-600 bg-blue-400 h-5 w-5 rounded-full"></span>
          <span onClick={() => setColor("bg-violet-200")} className="border cursor-pointer shadow hover:bg-violet-600 bg-violet-400 h-5 w-5 rounded-full"></span>
          <span onClick={() => setColor('bg-white')} className={`border cursor-pointer shadow ${color === 'bg-white' ? 'bg-white' : 'bg-transparent'} h-5 w-5 rounded-full relative`}>
              <span className="absolute transform -rotate-45 left-[1px] bg-red-900 top-1/2 h-[1.4px] border-red-800" style={{ width: '90%', transformOrigin: 'center' }}></span>
          </span>
        </div>
      </div>
      <button type="submit" className={`font-semibold rounded-full bg-[#ffd569] w-3/5 py-1 text-xl hover:bg-yellow-500`} >Adicionar</button>
    </form>
  )
}

export default ModalAdd
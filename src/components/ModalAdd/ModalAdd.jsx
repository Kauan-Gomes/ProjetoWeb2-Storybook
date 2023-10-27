import Button from "../Button.jsx/Button"
import Input from "../Input.jsx/Input"
import SpanCores from "../SpanCor/SpanCores"


const ModalAdd = ({color, setColor, functionAddnotes}) => {

  
  const handleSubmit = (event) => {
    event.preventDefault()
    functionAddnotes(event, color)

    setColor('bg-white')
    event.target[0].value = ""
    event.target[1].value = ""

  
  } 

  return (
    <form onSubmit={handleSubmit} className="relative bg-white border-2 left-5 w-96 h-[500px] rounded text-center overflow-hidden flex flex-col gap-5 items-center">
      <Input
      color={color.cor}
      className=""
      placeholder="Título"
      type="text"
      />
      <textarea placeholder="Faça sua anotação..." className="text-lg mx-5 p-2 focus:outline-none resize-none" cols="30" rows="9"></textarea>

      <div className="flex flex-col gap-3 items-center">
        <label className="text-lg">Selecione uma cor </label>
        <div className="">
          <SpanCores setAtributes={setColor}/>
          
        </div>
      </div>
      <Button 
      color='bg-yellow-300'
      type="submit" >Adicionar</Button>
    </form>
  )
}

export default ModalAdd
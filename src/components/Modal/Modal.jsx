
const Modal = () => {
  return (
    <div className="relative border-8 left-5 w-96 h-[500px] rounded text-center overflow-hidden flex-wrap">
        <h1 className="text-2xl bg-yellow-400 p-5">Adicione notas novas</h1>
        <input className="text-center text-3xl focus:outline-none mt-5 max-w-full break-all overflow-auto" placeholder="Título" type="text" />
    </div>
  )
}

export default Modal
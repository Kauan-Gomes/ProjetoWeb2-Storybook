'use client';


export default function Header({ listaNotas, handleOptionChange, selectedOption }) {
  return (
    <div className="flex w-full h-20 bg-yellow-400 mx-auto justify-around items-center border-b-2 shadow-lg border-black/20">
      <h1 className='font-semibold text-4xl '>Betagera Notes</h1>

      <div className='flex gap-2'>
        <label className='font-semibold p-1' for="note">Lista de notas: </label>
        <input className='rounded shadow-lg p-1 pl-3' list="notes" name="note" id="note" value={selectedOption} onChange={handleOptionChange} />
        <datalist id="notes">
          {listaNotas.map((notas) => 
            <option value={notas.titulo} />
            
          )}
        </datalist>
      </div>
    </div>
  )
}

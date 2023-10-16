


export default function Notas({titulo, notas}) {
  return (
    <div className="bg-black/30 h-64 w-64 rounded m-5 overflow-clip p-3">
        <h1 className="text-xl font-semibold">{titulo}</h1>
        <p className="">{notas}</p>
    </div>
  )
}

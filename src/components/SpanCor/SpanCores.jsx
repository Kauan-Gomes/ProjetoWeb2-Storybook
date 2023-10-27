
const cores = [
    {
        corPrimaria: "bg-black/20",
        corHover: "bg-black/10",
    },
    {
        corPrimaria: "bg-red-200",
        corHover: "bg-red-500",
    },
    {
        corPrimaria: "bg-yellow-200",
        corHover: "bg-yellow-300",
    },
    {
        corPrimaria: "bg-green-200",
        corHover: "bg-green-600",
    },
    {
        corPrimaria: "bg-blue-200",
        corHover: "bg-blue-600",
    },
    {
        corPrimaria: "bg-violet-200",
        corHover: "bg-violet-600",
    },
]


const SpanCores = ({ setAtributes }) => {
    return (
        <div className="flex gap-3 mx-auto">
            {cores.map((props) => (
            <span onClick={() => setAtributes({cor: props.corPrimaria})} 
            className={`border cursor-pointer shadow hover:${props.corHover} ${props.corPrimaria} h-5 w-5 rounded-full`}></span>
            ))}
            {/* <span onClick={() => setCorModal("bg-black/10")} className="border cursor-pointer shadow hover:bg-black/10 bg-black/30 h-5 w-5 rounded-full"></span>
            <span onClick={() => setCorModal("bg-red-200")} className="border cursor-pointer shadow hover:bg-red-500 bg-red-400 h-5 w-5 rounded-full"></span>
            <span onClick={() => setCorModal("bg-yellow-200")} className="border cursor-pointer shadow hover:bg-yellow-300 bg-yellow-200 h-5 w-5 rounded-full"></span>
            <span onClick={() => setCorModal("bg-green-200")} className="border cursor-pointer shadow hover:bg-green-600 bg-green-400 h-5 w-5 rounded-full"></span>
            <span onClick={() => setCorModal("bg-blue-200")} className="border cursor-pointer shadow hover:bg-blue-600 bg-blue-400 h-5 w-5 rounded-full"></span>
            <span onClick={() => setCorModal("bg-violet-200")} className="border cursor-pointer shadow hover:bg-violet-600 bg-violet-400 h-5 w-5 rounded-full"></span> */}
            <span onClick={() => setAtributes({cor: "bg-white"})} className={`border cursor-pointer shadow bg-white 'bg-transparent'} h-5 w-5 rounded-full relative`}>
                <span className="absolute transform -rotate-45 left-[1px] bg-red-900 top-1/2 h-[1.4px] border-red-800" style={{ width: '90%', transformOrigin: 'center' }}></span>
            </span>
        </div>
    )
}

export default SpanCores
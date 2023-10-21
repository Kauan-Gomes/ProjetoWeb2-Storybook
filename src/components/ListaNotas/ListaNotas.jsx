

import Notas from "../Notas"

export default function ListaNotas({ listaNotas, listaFiltrada }) {

    return (
        <div className="absolute bg-white/50 w-8/12 right-5 overflow-auto h-[500px]  rounded 2xl:h-[700px] flex flex-wrap text-center border-2">
            {listaNotas.map((props) => <Notas key={props.id} {...props} />)}
        </div>
    )
}

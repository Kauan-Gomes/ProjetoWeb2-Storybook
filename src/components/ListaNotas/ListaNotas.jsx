

import { useState } from "react"
import ModalEdit from "../ModalEdit/ModalEdit"
import Notas from "../Notas"
import './style.css'

export default function ListaNotas({ listaNotas}) {

    const [tituloModal, setTituloModal] = useState('')
    const [notasModal, setNotasModal] = useState()
    const [corModal, setCorModal] = useState('bg-violet-200')

    // Usar um estado só para manipular tudo, usando um objeto para isso, não precisando dos outros
    const [atributes, setAtributes] = useState({
        titulo: "",
        notas: "",
        cor: "", 
    })
    const [toggleClose, setToggleClose] = useState(true)


    return (
        <div className={`absolute border-none w-8/12 right-5 overflow-auto h-[500px] rounded-xl  2xl:h-[700px] flex flex-wrap text-center border-2 rolagem`}>
            {listaNotas.map((props) => 
            <Notas 
            setAtributes={setAtributes}
            setToggleClose={setToggleClose}
            key={props.id}  
            {...props} 
            />
            )}

            <ModalEdit
            //mudar as props, ao inves de passar essas separadas, passar uma que contenha todas as informações
                atributes={atributes}
                setAtributes={setAtributes}
                toggleClose={toggleClose}
                setToggleClose={setToggleClose}
            />
        </div>
    )
}

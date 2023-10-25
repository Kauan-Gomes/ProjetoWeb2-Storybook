

import { useState } from "react"
import ModalEdit from "../ModalEdit/ModalEdit"
import Notas from "../Notas"

export default function ListaNotas({ listaNotas, setColor, color }) {

    const [tituloModal, setTituloModal] = useState('')
    const [notasModal, setNotasModal] = useState()
    const [corModal, setCorModal] = useState('bg-violet-200')

    // Usar um estado só para manipular tudo, usando um objeto para isso, não precisando dos outros
    const [modalEdit, setModalEdit] = useState({
        titulo: "",
        notas: "",
        cor: "", 
    })
    const [toggleClose, setToggleClose] = useState(true)


    return (
        <div className="absolute bg-white/50 w-8/12 right-5 overflow-auto h-[500px]  rounded 2xl:h-[700px] flex flex-wrap text-center border-2">
            {listaNotas.map((props) => 
            <Notas 
            setTituloModal={setTituloModal}
            setNotasModal={setNotasModal}
            setToggleClose={setToggleClose}
            key={props.id}  
            {...props} 
            />
            )}

            <ModalEdit
            //mudar as props, ao inves de passar essas separadas, passar uma que contenha todas as informações
                titulo={tituloModal}
                setTituloModal={setTituloModal}
                notas={notasModal}
                setNotasModal={setNotasModal}
                corModal={corModal}
                setCorModal={setCorModal}
                toggleClose={toggleClose}
                setToggleClose={setToggleClose}
            />
        </div>
    )
}

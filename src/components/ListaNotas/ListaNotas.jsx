import Notas from "../Notas"

const listaNotas = [
    {
        id: 1,
        titulo: "mercado",
        notas: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker includin",
    },
    {
        id: 2,
        titulo: "prova",
        notas: "ajskjaskjaksjkasjka",
    },
    {
        id: 3,
        titulo: "trabalho",
        notas: "ajskjaskjaksjkasjka",
    },
    {
        id: 4,
        titulo: "receita",
        notas: "ajskjaskjaksjkasjka",
    },
    {
        id: 5,
        titulo: "lista de tarefa",
        notas: "ajskjaskjaksjkasjka",
    },
    
]




export default function ListaNotas() {
    return (
        <div className="bg-white/50 w-10/12 mx-auto overflow-auto h-[400px] mt-10 rounded 2xl:h-[700px] flex flex-wrap text-center px-28">
            {listaNotas.map((props) => <Notas key={props.id} {...props} />)}
            
        </div>
    )
}

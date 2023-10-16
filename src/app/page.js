import Header from '@/components/Header/Header'
import ListaNotas from '@/components/ListaNotas/ListaNotas'


// bg-[url('/paisagem.jpg')]

export default function Home() {
  return (
    <>
    <body className="bg-red-400 h-full bg-cover  ">
      <Header/>
      <section> 
          <ListaNotas/>
      </section>
    </body>
    </>
  )
  
}

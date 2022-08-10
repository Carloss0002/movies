import { useEffect, useState } from "react"
import Page from '../../components/Page'
import api from '../../services/api'
import './Home.css'

function Home(){
    const [filmes, setFilmes] = useState([])
    const[loading, setLoading] = useState(true)
    const [search, setSearch] = useState('')


    const filteredFilmes = search.length > 0 ?
    filmes.filter(filme => filme.title.includes(search[0].toUpperCase() + search.substr(1))) : [];

    useEffect(()=>{
        async function loadFilmes(){
             const response = await api.get('movie/now_playing',{
                params:{
                    api_key: '03fd12db11fc225ed2549d84f1b1aa24',
                    language: 'pt-BR',
                    page: 1
                }
             }) 
             setFilmes(response.data.results)
             setLoading(false)
        }

        loadFilmes()
    },[])
    if(loading){
        return(
            <div>
                <h2>Carregando Filmes...</h2>
            </div>
        )
    }
    return(
        <div className="container">
             <div className="busca">
              <h1>Principais Lançamentos</h1>
                <input
                type="text"
                value={search}
                placeholder="Buscar"
                onChange={e => setSearch(e.target.value)}
                />
             </div>
          <div className="lista-filmes">
            
            <Page filteredFilmes={filteredFilmes} filmes={filmes} search={search} id={1}/>
           </div>
        </div>
    )
}

export default Home


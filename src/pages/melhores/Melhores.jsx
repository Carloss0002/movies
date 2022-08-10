import { useEffect, useState } from "react"
import Page from "../../components/Page"
import Loading from "../../components/Carregando"
import api from "../../services/api"
import '../home/Home.css'


function MelhoresFilmes(){
    const [melhores, setMelhores] = useState([])
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState('')

    const filteredMelhores = search.length > 0 ?
    melhores.filter(filme => filme.title.includes(search[0].toUpperCase() + search.substr(1))) : [];

    useEffect(()=>{
        async function melhoresFilmes(){
            const response = await api.get('movie/top_rated',{
                params:{
                    api_key: '03fd12db11fc225ed2549d84f1b1aa24',
                    language: 'pt-br',
                    page: 1
                }
            })
            setMelhores(response.data.results)
            setLoading(false)
        }

        melhoresFilmes()
    },[])
    
    if(loading){
        return(
            <Loading page="filmes aclamados pela crítica"/>
        )
    }
    
    return(
        <div className="container">
            <div className="busca">
              <h1>Aclamados pela crítica:</h1>
              <input 
                    type="text"
                    value={search}
                    placeholder="Buscar"
                    onChange={e => setSearch(e.target.value)}
                   />
            </div>
            <div className="lista-filmes">
               <Page filmes={melhores} filteredFilmes={filteredMelhores} search={search} id={2}/>
            </div>
        </div>
    )
   
}

export default MelhoresFilmes
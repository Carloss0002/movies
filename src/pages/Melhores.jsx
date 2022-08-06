import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Loading from "../components/Carregando"
import api from "../services/api"
import './Home.css'


function MelhoresFilmes(){
    const [melhores, setMelhores] = useState([])
    const [loading, setLoading] = useState(true)

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
            <h1>Aclamados pela crítica:</h1>
            <div className="lista-filmes">
                {melhores.map(item=>{
                    return(
                        <article key={item.id}>
                            <div className="card">
                                <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt={item.title} />
                                <Link className="btn-melhores" to={`/filmes/${item.id}`}>Detalhes</Link>
                            </div>
                        </article>
                    )
                })}
            </div>
        </div>
    )
   
}

export default MelhoresFilmes
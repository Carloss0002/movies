import { useEffect, useState } from "react"
import {Link} from 'react-router-dom'
import api from '../services/api'
import './Home.css'

function Home(){
    const [filmes, setFilmes] = useState([])
    const[loading, setLoading] = useState(true)

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
             <h1>Principais Lançamentos</h1>
           <div className="lista-filmes">
              {filmes.map(filme=>{
                return(
                    <article className="art" key={filme.id}>
                       <div className="card">
                            <strong name={filme.title}>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                            <Link to={`/filmes/${filme.id}`}>Detalhes</Link>
                       </div> 
                    </article>
                )
              })}
           </div>
        </div>
    )
}

export default Home


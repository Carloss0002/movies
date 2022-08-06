import { useNavigate, useParams } from "react-router-dom";
import {useState, useEffect} from 'react';
import { toast } from 'react-toastify';

import api from "../services/api"

import './Detalhe.css'
import Loading from "../components/Carregando";


function Detalhes(){
   const{id} = useParams()
   const NAVIGATE = useNavigate()

   const [filmes, setFilmes] = useState({})
   const [loading, setLoading] = useState(true)

   useEffect(()=>{
      async function details(){
          await api.get(`/movie/${id}`,{
            params:{
                api_key: '03fd12db11fc225ed2549d84f1b1aa24',
                language: 'pt-BR',
            }
          })
          .then((response)=>{
             setFilmes(response.data)
             setLoading(false)
          })
          .catch(()=>{
               NAVIGATE("/", { replace: true })
               return
          })

      }

      details()
   },[NAVIGATE, id])

   if(loading){
      return(
        <Loading page="detalhes"/>
      )
   }
   function salvarFilme(){
     const salvos = localStorage.getItem('salvos')

     let filmesSalvos = JSON.parse(salvos) || []
     
     const hasFilme = filmesSalvos.some((filmesSalvos)=> filmesSalvos.id === filmes.id)
      console.log(hasFilme)
     if(hasFilme){
           toast.warning('este filme ja esta na lista')
           return
     }
     filmesSalvos.push(filmes)
     localStorage.setItem('salvos', JSON.stringify(filmesSalvos))
     toast.info('item salvo com sucesso')
   }

    return(
        <div className="filme-info">
            <h1>{filmes.title}</h1>
           <img 
              src={`https://image.tmdb.org/t/p/original/${filmes.backdrop_path}`} 
              alt={filmes.title}
            />
            <h2>Sinopse</h2>
            <span>{filmes.overview}</span>
            <strong>Avaliação: {filmes.vote_average.toFixed(1)} /10</strong>

            <div className="area-btn">
                <button onClick={salvarFilme}>Salvar</button>
                <button>
                    <a 
                       href={`https://youtube.com/results?search_query=${filmes.title} trailer`} 
                       target="blank" 
                       rel="external"
                    >
                     Trailer
                    </a>
                </button>
                <button>
                    <a 
                       href={`https://google.com/search?q=${filmes.title}`} 
                       target="blank" 
                       rel="external"
                    >
                     Informações gerais
                    </a>
                </button>
                
            </div>
        </div>
    )
}

export default Detalhes
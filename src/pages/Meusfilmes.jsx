import { useEffect, useState } from "react"
import './Home.css'
import { toast } from 'react-toastify'

import {Link} from 'react-router-dom'

function Filmes(){

    const [salvos, setSalvos] = useState([])

    useEffect(()=>{
      const FAVORITOS = localStorage.getItem('salvos')
      const salvos = JSON.parse(FAVORITOS)
      setSalvos(salvos || [])
    }, [])
  
    
    function deleteFavorites(id, name){
        const Filtro = salvos.filter(item=> item.id !== id)
        setSalvos(Filtro)
        localStorage.setItem('salvos', JSON.stringify(Filtro))
        toast.success(`${name} excluido de sua lista`)
    }

    
    return(
        <div className="meus-filmes">
            <h1>Tela favoritos</h1>
            { salvos.length===0 && 
               <div>
                   <h2>Nada salvo ainda</h2>
               </div>
            }
            <ul>
                {salvos.map(item=>{
                    return(
                        <li key={item.id}>
                            <strong name={item.title}>{item.title}</strong>
                            <div>
                                <Link to={`/filmes/${item.id}`}>Ver detalhes</Link>
                                <button onClick={()=>deleteFavorites(item.id, item.title)}>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Filmes
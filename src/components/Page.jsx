import {Link} from 'react-router-dom'

function Page(props){
    
    const {filmes, filteredFilmes, search, id} = props

   
    return(
      <> 
        {search.length>0 ?(filteredFilmes.map(filme=>{
            return(
               <article className="art" key={filme.id}>
                  <div className="card">
                       <strong name={filme.title}>{filme.title}</strong>
                       <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                       <Link to={`/filmes/${filme.id}`}>Detalhes</Link>
                  </div> 
               </article>
           )
       })):(filmes.map(filme=>{
           return(
               <article className="art" key={filme.id}>
                  <div className="card">
                       <strong name={filme.title}>{filme.title}</strong>
                       <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                       <Link to={`/filmes/${filme.id}`} className={id===2? 'btn-melhores': ''}>Detalhes</Link>
                  </div> 
               </article>
           )
       }))}
     </>  
    )
}

export default Page
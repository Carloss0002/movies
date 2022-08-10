import {Link} from 'react-router-dom'

function Error(){
     return(
        <div>
           <h1>404</h1>
           <h2>Página não encontrada</h2>
           <Link to="/">Ir para Home</Link>
        </div>
     )
}

export default Error
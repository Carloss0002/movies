import {Link} from 'react-router-dom'
import './Header.css'

function Header(){
      return(
            <header>
                <nav className='menu'>
                    <Link className='logo' to="/">Prime Flix</Link>
                    <div className="btn"> 
                        <Link className='favoritos' to="melhores_classificados">Melhor avaliados</Link>
                        <Link className='favoritos' to="/MeusFilmes">Meus Filmes</Link>
                    </div>                   

                    
                </nav>
            </header>
      )
}

export default Header
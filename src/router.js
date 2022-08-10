import {Routes, Route} from 'react-router-dom'

import Home from './pages/home'
import Filmes from './pages/meusFilmes/Meusfilmes'
import Detalhes from './pages/detalhe/Detalhes'
import MelhoresFilmes from './pages/melhores/Melhores'
import Error from './pages/erro/Error'

function Router(){
     return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path='/filmes/:id' element={<Detalhes/>} />
            <Route path='/MeusFilmes' element={<Filmes/>} />
            <Route path="/melhores_classificados" element={<MelhoresFilmes/>}/>

            <Route path="*" element={<Error/>} />
        </Routes>
     )
}

export default Router
import {Routes, Route} from 'react-router-dom'

import Home from './pages'
import Filmes from './pages/Meusfilmes'
import Detalhes from './pages/Detalhes'
import MelhoresFilmes from './pages/Melhores'
import Error from './pages/Error'

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
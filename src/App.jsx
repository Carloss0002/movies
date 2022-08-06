import Router from "./router"
import Header from './components/Header'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css';

function App(){
    return(
      <div className="app">       
        <Header/>
         <ToastContainer autoClose={2000}/>
        <Router/>
      </div>  
    )
}

export default App
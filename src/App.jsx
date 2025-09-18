import './App.css'
import Frase from './views/Frase'
import Portada from './views/Portada'
import ReproductorMusic from './views/ReproductorMusic'


function App() {
  

  return (
    <section className='mainSection'>
     <Portada></Portada>
     <ReproductorMusic></ReproductorMusic>
     <Frase></Frase>
    </section>
  )
}

export default App

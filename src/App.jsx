import './App.css'
import CuentaRegresiva from './views/CuentaRegresiva'
import Frase from './views/Frase'
import Portada from './views/Portada'
import ReproductorMusic from './views/ReproductorMusic'
import Varios from './views/Varios'


function App() {
  

  return (
    <section className='mainSection'>
     <Portada></Portada>
     <ReproductorMusic></ReproductorMusic>
     <Frase></Frase>
     <CuentaRegresiva></CuentaRegresiva>
     <Varios></Varios>
    </section>
  )
}

export default App

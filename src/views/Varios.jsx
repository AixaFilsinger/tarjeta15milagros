import adorno from '../assets/adorno.png'
import boladisco from '../assets/Boladisco.png'
import dressCode from '../assets/Dresscode.png'
import copas from '../assets/Copas.png'
import calendario from '../assets/Calendario.png'

const Varios = () => {
    return (
        <section className='container d-flex flex-column align-items-center varios'>
            <img src={adorno} alt="" width={300} className='mt-5'/>
            <article className='row'>
               <aside className='col-xs-12 text-center cuando'>
                  <img src={calendario} alt="" width={100} />
                  <h4>¿Cuando?</h4>
                  <p>29 de noviembre <br/>21:30</p>
                  
               </aside>
               <aside className='col-xs-12 text-center donde'>
                  <img src={boladisco} alt="" width={100} />
                  <h4>¿Dónde?</h4>
                  <p>Salón Torre Molino</p>
                  <button className='btn-varios mt-3 mb-5'>CÓMO LLEGAR</button>
               </aside>
               <aside className='col-xs-12 text-center dressCode'>
                   <img src={dressCode} alt="" width={100} />
                   <h4>DressCode</h4>
                   <p>Gala <br/> Evitar el ROJO</p>
               </aside>
               <aside className='col-xs-12 text-center asistencia'>
                   <p>Soñé con este día y me gustaría vivirlo con quienes más quiero...</p>
                   <button className='btn-varios mt-3 mb-5'>Confirmar Asistencia</button>
               </aside>
            </article>
              <img src={adorno} alt="" width={300} />
        </section>
    );
};

export default Varios;
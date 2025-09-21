import adorno from '../assets/adorno.png'
import boladisco from '../assets/Boladisco.png'
import dressCode from '../assets/Dresscode.png'
import Notamusical from '../assets/Notamusical.png'
import calendario from '../assets/Calendario.png'
import asistencia from '../assets/invitacion.png'
import qr from '../assets/qr.jpeg'

const Varios = () => {
    return (
        <section className='container d-flex flex-column align-items-center varios'>
            <img src={adorno} alt="" width={300} className='mt-5'/>
            <article className='row'>
               <aside className='col-xs-12 text-center cuando mb-4 mt-5'>
                  <img src={calendario} alt="" width={100} />
                  <h4>¿Cuando?</h4>
                  <p>29 de noviembre <br/>21:30</p>
                  
               </aside>
               <aside className='col-xs-12 text-center donde mb-4'>
                  <img src={boladisco} alt="" width={100} />
                  <h4>¿Dónde?</h4>
                  <p>Salón Torre Molino</p>
                  <button className='btn-varios mt-3 mb-5' onClick={() => window.open("https://maps.app.goo.gl/TZHeGarFSuTrbdZf7")}>CÓMO LLEGAR</button>
               </aside>
               <aside className='col-xs-12 text-center dressCode mb-4'>
                   <img src={dressCode} alt="" width={100} />
                   <h4>DressCode</h4>
                   <p>Gala <br/> Evitar el ROJO</p>
               </aside>
               <aside className='col-xs-12 text-center playlist mb-4'>
                   <img src={Notamusical} alt="" width={100} />
                   <h4>PLAYLIST</h4>
                   <p>Creemos la playlist de la noche juntos!</p>
                   <button className='btn-varios mt-3 mb-5' onClick={() => window.open("https://open.spotify.com/playlist/2WHLlY0yQwWhGNDeti796r?si=DbqX2fBeShiJS8w295xqUQ")}>Sugerir canción</button>
               </aside>
               <aside className='col-xs-12 text-center asistencia mb-5'>
                   <img src={asistencia} alt="" width={100} />
                   <p>Soñé con este día y me gustaría vivirlo con quienes más quiero...</p>
                   <button className='btn-varios mt-3 mb-5' onClick={() => window.open("")}>Confirmar Asistencia</button>
               </aside>
            </article>
              <img src={adorno} alt="" width={300} />
              <article className='text-center mb-5'>
                <h3 className='qr mb-3'>Compartamos los recuerdos de la noche juntos. ¡Subí tus fotos acá!</h3>
                <img src={qr} alt="" width={300} />
              </article>
              <article className='my-5 fin d-flex flex-column align-items-center'>
                 <h4>¡No podes faltar!</h4>
                 <h2>Milagros</h2>
              </article>
              
        </section>
    );
};

export default Varios;
import { Link }  from 'react-router-dom'

/**
 * Esta funcion devuelve el componente Document01
 * Document01 es un documento de investigación
 * @returns 
 */
const Document01 = () => {
  return (
    <div className="m-8 content-center">
      <nav className="flex sm:justify-center space-x-4 text-center my-4 ">
        {[
          ['Página principal', '/index'],
          ['Equipo', '/team'],
          ['Documento 01', '/document01'],
          ['Artículos relacionados', '/relatedPosts']
        ].map(([title, url]) => (
          <Link to={url} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</Link>
        ))}
      </nav>
      <div className="flex flex-col justify-center items-center my-8">
          <h1 className="text-center text-4xl font-bold text-slate-300 ">Documento 01</h1>
      </div>



      <div className='flex justify-center items-center font-serif' >
        <div className='flex-col min-w-min'>
          <div className='bg-gray-200 rounded-lg max-w-screen-lg content-center p-12'>
            <div className='text-center mb-2'>

              <div className='text-3xl font-medium leading-9'>
                <h2>
                  <span className="">¿Cómo puede un modelo de lenguaje como Chat GPT utilizarse para mejorar la detección de amenazas informáticas en Colombia actualmente?</span>
                </h2>
              </div>


              <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 py-2'>
                <div className='py-2 text-sm p-1 leading-4'>
                  <span className=''>Braihan Ocampo García</span> <br/>
                  <span className='italic'> Estudiante de Ing. de Sistemas</span> <br/>
                  <span className='italic'> Facultad de Ing. Universidad de Antioquia</span> <br/>
                  <span className=''>Medellin, Colombia</span> <br/>
                  <span className=''>brahian.ocampo@udea.edu.co</span>
                </div>
                <div className='py-2 text-sm p-1 leading-4'>
                  <span className=''>Cristian Camilo Julio Mejía </span> <br/>
                  <span className='italic'> Estudiante de Ing. de Sistemas</span> <br/>
                  <span className='italic'> Facultad de Ing. Universidad de Antioquia</span> <br/>
                  <span className=''>Medellin, Colombia</span> <br/>
                  <span className=''>cristian.juliom@udea.edu.co</span>
                </div>
                <div className='py-2 text-sm p-1 leading-4'>
                  <span className=''>Vanessa Tocasuche</span> <br/>
                  <span className='italic'> Estudiante de Ing. de Sistemas</span> <br/>
                  <span className='italic'> Facultad de Ing. Universidad de Antioquia</span> <br/>
                  <span className=''>Medellin, Colombia</span> <br/>
                  <span className=''>vanessa.tocasuche@udea.edu.co</span>
                </div>
              </div>
            </div>

            <div className="text-base">
              <div className='leading-4 text-sm py-4' >
                <span className='font-semibold'>Palabras clave:</span>
                <span className=''> Chat GPT, Detección de amenazas, Inteligencia artificial, Lenguaje natural, Machine learning, Redes neuronales, Seguridad informática.</span>
              </div>
              <div>
                <div className='text-center py-2'>
                  <span className='font-semibold'>INTRODUCCIÓN</span> <br/>
                </div>
                <div className='text-justify'>
                  <span className=''> 
                En esta era digital, en la última década algunas tecnologías como la realidad virtual, 
                la inteligencia artificial, el ciberespacio, la realidad aumentada, entre otras, han 
                tenido un gran impacto en la sociedad. Gracias a su aplicabilidad en la ciencia, en 
                la educación, en la industria, en el entretenimiento, en el hogar y otros campos sociales.
                Estas tecnologías han permitido comunicarnos de una manera más rápida y eficiente, han 
                colaborado para impartir y recibir clases educativas desde nuestros propios hogares, 
                han ayudado a establecer diagnósticos médicos más precisos, etc...<br/>En este trabajo se 
                estará hablando sobre chat GPT, la cual es una herramienta de inteligencia artificial. 
                En primera instancia, se requerirá investigar sobre funcionalidad, su comportamiento,
                 sus elementos principales, sus ventajas y desventajas, para que posteriormente 
                 centrarnos en tratar de dar respuesta a la pregunta del caso, la cual se refiere: 
                 ¿Cómo puede una herramienta como Chatgpt utilizarse para mejorar la detección de 
                 amenazas informáticas en Colombia actualmente? Para ello se deberá realizar 
                 diferentes consultas y averiguaciones que podrían satisfacer la inquietud presentada.
                </span>
                </div>
                
                <div className='text-center py-2'>
                  <span className='font-semibold'>OBJETIVOS</span> <br/>
                  <div className='text-justify'>
                  <span className=''> 
                Parrafo
                </span>
                </div>
                </div>
                <div className='text-center py-2'>
                  <span className='font-semibold'>ENLACE</span> <br/>
                  <div className='text-justify'>
                  <Link to="https://docs.google.com/document/d/17956QHKOTNyGNMmsL9ookO7r_SY__MGK/edit?usp=sharing&ouid=110488139520024817449&rtpof=true&sd=true" className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">Ir a ver documento</Link>
                </div>
                </div>
            </div>
</div>

          </div>
        </div>
      </div>

      




    </div>    
  );
};

export default Document01;
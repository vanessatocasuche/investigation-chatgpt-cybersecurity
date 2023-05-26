/* eslint-disable jsx-a11y/img-redundant-alt */
import { Link }  from 'react-router-dom'
import resultado01 from '../assets/images/resultado01.jpeg'
import resultado02 from '../assets/images/resultado02.jpeg'
import resultado03 from '../assets/images/resultado03.jpeg'
import resultado04 from '../assets/images/resultado04.jpeg'
import resultado05 from '../assets/images/resultado05.jpeg'



const Resultados = () => {
    // Array de imágenes
    const images = [
      resultado01,
      resultado02,
      resultado03,
      resultado04,
      resultado05
    ];
  return (
    <div className="mt-8 mr-8 mb-8 ml-8">
      <nav className="flex sm:justify-center space-x-4 text-center my-4 ">
        {[
          ['Página principal', '/index'],
          ['Documento 01', '/document01'],
          ['Artículo elegido', '/articuloElegido'],
          ['Metodología', '/metodologia'],
          ['Resultados', '/resultados'],
          ['Equipo', '/team']
        ].map(([title, url]) => (
          <Link to={url} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</Link>
        ))}
      </nav>
      <div className="flex flex-col justify-center items-center mb-4 m-4">
        <div className='my-4'>
          <h1 className="text-center text-4xl font-bold text-slate-300 ">Resultados</h1>
        </div>
        <div className='flex justify-center items-center font-serif' >
          <div className='flex-col min-w-min'>
            <div className="image-column">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="image-item"
                />
              ))
              }
            </div>
          </div>
        </div>
        <div className='my-4'>
          <h1 className="text-center text-4xl font-bold text-slate-300 ">Analisis de los resultados</h1>
        </div>
        <div className='flex justify-center items-center font-serif' >
          <div className='flex-col min-w-min'>
            <div className='bg-gray-200 rounded-lg max-w-screen-lg content-center p-12'>
              <div className='text-justify'>
              <span className=''> 
                <ol className='list-disc'>
                  <li>
                    Existe un interés significativo en utilizar ChatGPT como herramienta 
                    para detectar amenazas informáticas en Colombia, aún así hay una 
                    división importante de opiniones.  Esto resalta la importancia de 
                    realizar investigaciones adicionales y evaluar a fondo las 
                    características y limitaciones de ChatGPT antes de implementarlo 
                    ampliamente en el campo de la ciberseguridad. Asimismo, se deben 
                    abordar las preocupaciones y dudas de aquellos que aún no se sienten 
                    seguros o están indecisos sobre su utilización.
                  </li>
                  <li>
                    Los resultados indican que el malware, el ransomware y el phishing se 
                    consideran como principales amenazas informáticas en Colombia en la 
                    actualidad. Por esto es fundamental estar al tanto de las nuevas 
                    tendencias y técnicas utilizadas por los ciberdelincuentes para 
                    adaptar constantemente las estrategias de seguridad y minimizar los 
                    riesgos asociados a estas amenazas informáticas.
                  </li>
                  <li>
                    Las funcionalidades propuestas para ChatGPT, basadas en los resultados obtenidos, 
                    tienen el potencial de mejorar la detección de amenazas informáticas y 
                    fortalecer la seguridad en Colombia. 
                    Estas funcionalidades brindarían una experiencia más completa y efectiva 
                    a los usuarios, al tiempo que les proporcionarían herramientas adicionales 
                    para enfrentar y prevenir ataques cibernéticos. Aun así queda demasiado claro 
                    que se requieren de más investigaciones para avanzar en este campo.
                  </li>

                </ol>
              </span>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>

    
  )
}

export default Resultados; 

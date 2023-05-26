import { Link }  from 'react-router-dom'

const ArticuloElegido = () => {
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
          <h1 className="text-center text-4xl font-bold text-slate-300 ">Artículo Elegido</h1>
        </div>

        <div className='flex justify-center items-center font-serif' >
        <div className='flex-col min-w-min'>
          <div className='bg-gray-200 rounded-lg max-w-screen-lg content-center p-12'>
            <div className='text-center mb-2'>
              <div className='text-3xl font-medium leading-9'>
                <h2>
                  <span className="">Impact of Big Data Analytics and ChatGPT on Cybersecurity</span>
                </h2>
              </div>
            </div>

            <div className="text-base">
              <div>
                <div className='grid -mx-2  xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 py-2 text-sm leading-4'>
                  <div className='mx-2'>
                    <div className='p-2 pl-4 mb-1 bg-gray-100 rounded-t-2xl'>
                      <div className='text-center font-semibold'>
                        <span>METODOLOGÍA</span>
                      </div>
                    </div>
                    <div className='text-justify '>
                      <div className='p-2 pl-4 mb-1 bg-gray-100'>
                        <span className='font-semibold'>Nombre: </span>
                        <span>
                          Impacto de Big Data Analytics y ChatGPT en la ciberseguridad
                        </span>
                      </div>
                      <div className='p-2 pl-4 mb-1 bg-gray-100'>
                        <span className='font-semibold'>Autor(es): </span>
                        <span className=''> 
                          <ol>
                            <li>Pawankumar Sharma</li>
                            <li>Bibhu Dash </li>
                          </ol>
                        </span>
                      </div>
                      <div className='p-2 pl-4 mb-1 bg-gray-100'>
                        <span className='font-semibold'>Año: </span>
                        <span > 
                          2023
                        </span>
                      </div>
                      <div className='p-2 pl-4 mb-1 bg-gray-100'>
                        <span className='font-semibold'>Escuela filosófica: </span>
                        <span> 
                        El subjetivismo porque las ideas fundamentadas están basadas en estudios 
                        previos donde los resultados son cualitativos, es decir, busca la 
                        comprensión profunda del tema por medio de enfoques metodológicos 
                        que dan prioridad a las percepciones y experiencias subjetivas 
                        de los investigadores, gracias a que el tema es demasiado reciente.
                        </span>
                      </div>
                      <div className='p-2 pl-4 mb-1 bg-gray-100'>
                        <span className='font-semibold'>Modelo de conocimiento: </span>
                        <span > 
                        Modelo de conocimiento es idealista, porque la realidad del objeto 
                        depende de cómo el sujeto lo percibe y lo interpreta, es decir, 
                        apenas se comienza a hacer una ruta de conceptos claves 
                        que se asocian, pero estos conceptos estan enlazados segun 
                        la percepción de la mente del sujeto que los percibe a través 
                        de los sentidos.
                        </span>
                      </div>
                      <div className='p-2 pl-4 mb-1 bg-gray-100'>
                        <span className='font-semibold'>Enfoque paradigmático: </span>
                        <span > 
                          Historico- Hermeneutico: (objeto - método) <br/><br/>
                          El objeto es histórico, porque se hace una comprensión de él a través 
                          de las investigaciones y artículos del pasado o históricos.<br/>
                          El método es hermenéutico porque descompone el problema en partes 
                          más pequeñas que se estudian a través de hechos históricos.<br/>
                          En conclusión, este enfoque paradigmático permite entender 
                          la realidad, entender sus conceptos en la historia para así 
                          continuar la ruta de enriquecer conocimiento, hasta que se 
                          llegue el punto de modelar.
                        </span>
                      </div>
                      <div className='pb-1 pl-4 mb-1 bg-gray-100'>
                        <span className='font-semibold'>Método: </span>
                        <span > 
                          El método es de un Predominio inductivo, sintético, hermenéutico, 
                          fenomenológico porque el proceso de investigación lo rige de la 
                          siguiente manera.
                          <ol className='list-decimal'>
                            <li>Recolecta datos u observaciones dadas por la experimentación para después hacer conclusiones.</li>
                            <li>Lleva estos conceptos a visiones globales y allí busca relaciones entre todos ellos.</li>
                            <li>Interpreta los resultados teniendo en cuenta el contexto histórico, sin suponer teorías que no estén en la historia.</li>
                          </ol>
                        </span>
                      </div>
                      <div className='p-2 pl-4 mb-1 bg-gray-100'>
                        <span className='font-semibold'>Diseño: </span>
                          <span > 
                            El diseño de la investigación es en gran medida cualitativa porque 
                            el objetivo es explorar y entender todo el contexto de ciberseguridad, 
                            antes que definir variables con objetivos claros.
                          </span>
                      </div>
                      <div className='pb-1 pl-4 mb-1 bg-gray-100'>
                        <span className='font-semibold'>Tipo: </span>
                        <span > 
                          De manera no muy clara, el tipo de investigación es Teoría fundada porque 
                          se funda principalmente en los datos recopilados de los estudios, 
                          más que en teorías, es decir, inicialmente se hace una observación 
                          y análisis de datos, para después fundar la propia teoría.
                        </span>
                      </div>
                      <div className='pb-1 pl-4 mb-1 bg-gray-100'>
                        <span className='font-semibold'>Técnica: </span>
                        <span > 
                          Las técnicas utilizadas son principalmente el análisis de documentos 
                          y la observación de datos a través de patrones.
                        </span>
                      </div>
                      <div className='pb-1 pl-4 mb-1 bg-gray-100'>
                        <span className='font-semibold'>Instrumentos: </span>
                        <span > 
                          <ol >
                            <li>Artículos o estudios: Se alimenta de los datos encontramos en artículos o estudios previos.</li>
                            <li>Análisis de datos: Aquí se pueden utilizar las diferentes herramientas de analizar datos, ya sean gráficos, mapas de calor, etc…</li>
                          </ol>
                        </span>
                      </div>
                      <div className='font-light text-sm pb-1 pl-4 mb-5 bg-gray-100 rounded-b-2xl'>
                        <span > 
                        [Sharma, Pawankumar & Dash, Bibhu. (2023). Impact of Big Data Analytics and ChatGPT on Cybersecurity.] [En línea]
                        </span>
                        <span>
                          <Link 
                            className='text-blue-500 '
                            to="https://www.researchgate.net/publication/369358499_Impact_of_Big_Data_Analytics_and_ChatGPT_on_Cybersecurity"
                            > [enlace] </Link>
                        </span>
                        <span > 
                          [Último acceso: 02 Mayo 2023]                       
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>  
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default ArticuloElegido 

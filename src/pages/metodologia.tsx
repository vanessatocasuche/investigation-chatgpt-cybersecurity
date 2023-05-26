import { Link }  from 'react-router-dom'

const Metodologia = () => {
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
        <h1 className="text-center text-4xl font-bold text-slate-300 ">Metodología</h1>
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
            </div>
            <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 py-2 '>
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
                          Amenazas informáticas en Colombia y su detección con modelos de lenguaje
                        </span>
                      </div>
                      <div className='p-2 pl-4 mb-1 bg-gray-100'>
                        <span className='font-semibold'>Autor(es): </span>
                        <span className=''>
                          <ol>
                            <li>Braihan Ocampo García</li>
                            <li>Cristian Camilo Julio Mejía</li>
                            <li>Vanessa Tocasuche</li>
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
                          En esta investigación, la realidad es concebida como una construcción 
                          subjetiva, donde el sujeto desempeña un papel fundamental. 
                          El conocimiento obtenido, a través de las consultas, investigaciones, 
                          indagaciones y aprendizajes, se origina en la perspectiva individual 
                          del sujeto. Por lo tanto, se podría considerar que el enfoque 
                          filosófico subyacente en este contexto sería el idealismo y/o el 
                          naturalismo.
                        </span>
                      </div>
                      <div className='p-2 pl-4 mb-1 bg-gray-100'>
                        <span className='font-semibold'>Modelo de conocimiento: </span>
                        <span > 
                          El modelo de conocimiento utilizado en esta investigación se basa en el 
                          enfoque mecanicista. En este contexto, el Chat GPT desempeña un papel 
                          central como herramienta que permite plantear y responder la pregunta de 
                          investigación. No se trata simplemente de un concepto abstracto o 
                          imaginario, sino de un producto tangible y utilizable. Por lo tanto, 
                          el conocimiento generado a través del uso del Chat GPT se alinea con 
                          el enfoque mecanicista, que busca comprender la realidad a través de 
                          un enfoque basado en procesos y sistemas.
                        </span>
                      </div>
                      <div className='p-2 pl-4 mb-1 bg-gray-100'>
                        <span className='font-semibold'>Enfoque paradigmático: </span>
                        <span > 
                          En esta investigación, se ha adoptado un enfoque paradigmático 
                          empírico-analítico. Este enfoque se caracteriza por centrarse en el 
                          estudio de un objeto específico, cuyas diferentes partes proporcionan 
                          información relevante para el desarrollo del producto. Mediante un 
                          análisis detallado y sistemático, se busca obtener datos empíricos 
                          que permitan comprender y explicar el fenómeno estudiado de manera 
                          analítica. De esta manera, se busca obtener un conocimiento 
                          fundamentado en la evidencia y en un análisis riguroso de los datos 
                          recopilados.
                        </span>
                      </div>
                      <div className='pb-1 pl-4 mb-1 bg-gray-100'>
                        <span className='font-semibold'>Método: </span>
                        <span > 
                          Este estudio se lleva a cabo utilizando un enfoque experimental, 
                          con el objetivo de responder a una pregunta de investigación. 
                          A medida que se avanza en las diferentes consultas, se va 
                          construyendo un sólido soporte que satisface el conocimiento 
                          desconocido. En este contexto, el método utilizado es principalmente 
                          deductivo. A través de la aplicación de razonamiento lógico y 
                          la extracción de conclusiones a partir de premisas, se busca inferir respuestas y generar conocimiento en base a la información disponible.
                        </span>
                      </div>
                      <div className='p-2 pl-4 mb-1 bg-gray-100'>
                        <span className='font-semibold'>Diseño: </span>
                          <span > 
                            El diseño de esta investigación se basa principalmente en un enfoque 
                            cuantitativo, ya que se busca recopilar y analizar datos numéricos 
                            para fortalecer el producto final. Se utiliza un enfoque deductivo, 
                            que implica la formulación de hipótesis y la realización de pruebas 
                            y experimentos para confirmar o refutar esas hipótesis. 
                            Además, se emplea un enfoque analítico, que implica descomponer y 
                            examinar los datos de manera detallada y sistemática. El objetivo 
                            principal es obtener información objetiva y precisa que respalde el 
                            desarrollo del producto final.
                          </span>
                      </div>
                      <div className='pb-1 pl-4 mb-1 bg-gray-100'>
                        <span className='font-semibold'>Tipo: </span>
                        <span > 
                          Con el objetivo de abordar la pregunta de investigación, se ha llevado 
                          a cabo una consulta exhaustiva sobre el tipo, elementos, beneficios,
                           ventajas y desventajas de la herramienta ChatGPT. Este enfoque se ha 
                           caracterizado por ser descriptivo y detallado en su análisis. Por lo 
                           tanto, el tipo de investigación adoptado se centra principalmente en 
                           un diseño cualitativo. Este enfoque permite una comprensión más 
                           profunda y contextualizada de los fenómenos estudiados, al explorar 
                           y analizar en detalle las características y cualidades de la 
                           herramienta ChatGPT.
                        </span>
                      </div>
                      <div className='pb-1 pl-4 mb-1 bg-gray-100'>
                        <span className='font-semibold'>Técnica: </span>
                        <span > 
                          Cuestionario y/o entrevistas.
                        </span>
                      </div>
                      <div className='pb-1 pl-4 mb-1 bg-gray-100'>
                        <span className='font-semibold'>Instrumentos: </span>
                        <span > 
                          <ol>
                            <li>Mapa conceptual.</li>
                            <li>Artículos de investigación.</li>
                          </ol>
                        </span>
                      </div>
                      <div className='pb-1 pl-4 mb-1 bg-gray-100'>
                        <span className='font-semibold'>Procedimiento: </span>
                        <span > 
                          <ol>
                            <li >
                              Selección del tema:<br/>
                              en este caso se eligió chatGPT, porque es un tema 
                              de mayor  interés en la actualidad, está en su bunde, y se desea 
                              saber qué es, quién lo inventó, como lo hicieron, cómo se puede 
                              utilizar, qué hay por encima y por debajo de este, el porqué muchas 
                              personas lo están utilizando constantemente, entre otras preguntas 
                              que se requieran.<br/><br/>
                            </li>
                            <li>
                              Formulación de la pregunta de investigación:<br/>
                              La inteligencia artificial es una tecnología que nos ayuda a 
                              facilitar nuestra condición de vida, por ende, se desea saber 
                              cómo una de sus herramientas, como chaGPT podría ayudarnos para 
                              mejorar la detección de amenazas informáticas actualmente en Colombia.
                              <br/><br/>
                            </li>
                            <li>
                              Revisión de literatura:<br/>
                              Luego de seleccionar la pregunta de investigación, se dispuso a 
                              consultar algunos artículos investigativos en donde se buscaban 
                              aportes significativos de los actores que ayudarán a dar respuesta 
                              a la pregunta planteada. 
                              <br/><br/>
                            </li>
                            <li>
                              Diseño de investigación:<br/>
                              Seguidamente de haber revisado los diferentes artículos investigativos 
                              se realizó una ficha técnica en donde se planteó la metodología del 
                              tema, en la cual recae el método, el enfoque, el paradigma, 
                              los instrumentos, las técnicas y otros apartados necesarios para ello. 
                              Además en este rublo se ha de seleccionar la encuesta como método de 
                              recolección de datos. Esta consta de 5 preguntas. las cuales serán 
                              desarrolladas en un formulario de google y serán respondidas por una 
                              muestra de 20 personas.
                              <br/><br/>
                            </li>
                            <li>
                              Interpretación y análisis de las respuestas: <br/>
                              Este será implementado 
                              en el apartado de resultados, según las respuestas emitidas en el 
                              formulario formulado. Este apartado mostrará gráficas concretas que 
                              denoten los resultados obtenidos.
                              <br/><br/>
                            </li>
                          </ol>
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
      <Link to="/resultados" className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">Ver resultados</Link>
      </div>
    </div>
  )
}

export default Metodologia 

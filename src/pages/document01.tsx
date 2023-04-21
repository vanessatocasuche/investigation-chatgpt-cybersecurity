import { Link }  from 'react-router-dom'
import mapaconceptualchatgpt from '../assets/images/mapaconceptualchatgpt.png'

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
                  <span className='font-semibold'>MAPA CONCEPTUAL DE CHAT GPT</span> <br/>
                    <div className='py-6'>
                      <img className='image' src={mapaconceptualchatgpt} alt='mapa conceptual chatGPT' />
                    </div>
                    <Link to="/mapaconceptualchatgpt" className="items-center rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">Visitar la imagen</Link>
                  
                </div>

                <div className='text-center py-2'>
                  <span className='font-semibold'>GUÍA SOBRE PREGUNTA DE INVESTIGACIÓN</span>

                  <div className='text-justify'>
                    <span className='underline font-medium'>
                      ¿Cuál es mi tema?
                    </span>
                    <br />
                    <span className=''>
                      Ciberseguridad con Inteligencia Artificial
                    </span>
                    <br />
                    <br />

                    <span className='underline font-medium pt-12'>
                      ¿Cuál es la delimitación conceptual, temporal o espacial?
                    </span>
                    <br />
                    <span className=''>
                      <li>Delimitación conceptual: Chat GPT </li>
                      <li>Delimitación temporal: 2023</li>
                      <li>Delimitación espacial: Colombia</li>
                    </span>
                    <br />
                    <span className='underline font-medium'>
                       Experiencia previa: <br/> 
                       ¿Qué me dice la literatura o qué hipótesis tengo para hacer de este tema investigable y debatible (ensayo argumentativo)?
                    </span>
                    <br />
                    <span className=''>
                      Chat GPT es una herramienta que se ha entrenado para responder preguntas y mantener conversaciones con personas de una manera 
                      precisa y detallada. Se encuentra alimentada por una gran base de datos que nos proporciona información bastante oportuna de 
                      acuerdo a nuestras necesidades. <br/>
                      Este modelo se puede aplicar en diferentes aspectos, por lo que queremos aplicarlo al ámbito de la ciberseguridad o seguridad de la información, de manera que podamos detectar posibles amenazas informáticas contra nuestros sistemas o información. 
                    </span>
                    <br />
                    <br />

                    <span className='underline font-medium pt-12'>
                      ¿Cuál es el problema investigable que encontré?
                    </span>
                    <br />
                    <span className=''>
                      <li>Amenazas informáticas.</li>
                      <li>Sensibilidad de datos.</li> 
                      <li>Seguridad de los datos con Chat GPT.</li>
                      <li>Detección de amenazas. </li>
                    </span>
                    <br />

                    <span className='underline font-medium'>
                      ¿Cuál es el pronombre interrogativo que guiará mi pregunta?
                    </span>
                    <br />
                    <span className='font-semibold'>
                      ¿Cómo?
                    </span>
                    <br />
                    <br />

                    <span className='underline font-medium pt-12'>
                      PREGUNTA 1: 
                    </span>
                    <br />
                    <span className=''>
                      ¿Cómo puede una herramienta de lenguaje como Chat GPT utilizarse para mejorar la detección de 
                      amenazas informáticas en Colombia actualmente?
                    </span>
                    <br />
                    <br />

                    <span className='underline font-medium pt-12'>
                      PREGUNTA 2: 
                    </span>
                    <br />
                    <span className=''>
                      ¿Cómo utilizando una IA como Chat GPT se pueden tomar medidas para mitigar los riesgos con la 
                      protección de datos sensibles?
                    </span>
                  </div>

                </div>
                <div>
                  <div className='text-center my-6'>
                    <span className='font-semibold'>ARTÍCULOS RELACIONADOS</span>
                  </div>
                  <div className='grid -mx-2  xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-2 text-sm leading-4'>

                    <div className='mx-2'>
                      <div className='p-2 pl-4 mb-1 bg-gray-100 rounded-t-2xl'>
                        <div className='text-center font-semibold'>
                          <span>Artículo 1</span>
                        </div>
                      </div>
                      <div className='text-justify'>
                        <div className='p-2 pl-4 mb-1 bg-gray-100'>
                          <span className='font-semibold'>Nombre: </span>
                          <span>
                            Chat GPT y su papel como herramienta y amenaza en ciberseguridad.
                          </span>
                        </div>
                        <div className='p-2 pl-4 mb-1 bg-gray-100'>
                          <span className='font-semibold'>Autor(es): </span>
                          <span className=''> 
                            Antonio Rentero
                          </span>
                        </div>
                        <div className='p-2 pl-4 mb-1 bg-gray-100'>
                          <span className='font-semibold'>Contexto: </span>
                          <span> 
                            Era digital
                          </span>
                        </div>
                        <div className='p-2 pl-4 mb-1 bg-gray-100'>
                          <span className='font-semibold'>Actores: </span>
                          <span > 
                            Chat GPT, Open AI, personas, máquinas, empresas de ciberseguridad.
                          </span>
                        </div>
                        <div className='p-2 pl-4 mb-1 bg-gray-100'>
                          <span className='font-semibold'>Necesidad: </span>
                          <span > 
                            Entendimiento y protección del ser
                          </span>
                        </div>
                        <div className='pb-1 pl-4 mb-1 bg-gray-100'>
                          <span className='font-semibold'>Problema: </span>
                          <span > 
                            Amenazas cibernéticas
                          </span>
                        </div>

                        <div className='font-light text-sm pb-1 pl-4 mb-5 bg-gray-100 rounded-b-2xl'>
                          <span > 
                          [A. Rentero, «Silicon,» TECHNOLOGY POWERING BUSINESS, 28 Marzo 2023.] [En línea]
                          </span>
                          <span>
                            <Link 
                              className='text-blue-500 '
                              to="https://www.silicon.es/chatgpt-y-su-papel-como-herramienta-y-amenaza-en-ciberseguridad-2475490"
                              > [enlace] </Link>
                          </span>
                          <span > 
                            [Último acceso: 02 Abril 2023]                       
                          </span>
                        </div>

                      </div>
                    </div>

                    <div className='mx-2'>
                      <div className='p-2 pl-4 mb-1 bg-gray-100 rounded-t-2xl'>
                        <div className='text-center font-semibold'>
                          <span>Artículo 2</span>
                        </div>
                      </div>
                      <div className='text-justify '>
                        <div className='p-2 pl-4 mb-1 bg-gray-100'>
                          <span className='font-semibold'>Nombre: </span>
                          <span>
                            Los peligros de Chat GPT: "Es capaz de generar un correo electrónico que te contamine o robe datos"
                          </span>
                        </div>
                        <div className='p-2 pl-4 mb-1 bg-gray-100'>
                          <span className='font-semibold'>Autor(es): </span>
                          <span className=''> 
                            David Laso
                          </span>
                        </div>
                        <div className='p-2 pl-4 mb-1 bg-gray-100'>
                          <span className='font-semibold'>Contexto: </span>
                          <span> 
                            Era digital
                          </span>
                        </div>
                        <div className='p-2 pl-4 mb-1 bg-gray-100'>
                          <span className='font-semibold'>Actores: </span>
                          <span > 
                            OpenIA, IA, Usuarios, instituciones educativas, Periodismo
                          </span>
                        </div>
                        <div className='p-2 pl-4 mb-1 bg-gray-100'>
                          <span className='font-semibold'>Necesidad: </span>
                          <span > 
                            Entendimiento y protección del ser
                          </span>
                        </div>
                        <div className='pb-1 pl-4 mb-1 bg-gray-100'>
                          <span className='font-semibold'>Problema: </span>
                          <span > 
                            Amenazas cibernéticas (Chat GPT como generador de código malicioso)
                          </span>
                        </div>

                        <div className='font-light text-sm pb-1 pl-4 mb-5 bg-gray-100 rounded-b-2xl'>
                          <span > 
                          [D. Laso, «Cadena Ser,» Cadena Ser, 17 Enero 2023.] [En línea]
                          </span>
                          <span>
                            <Link 
                              className='text-blue-500 '
                              to="https://cadenaser.com/nacional/2023/01/17/los-peligros-de-chatgtp-es-capaz-de-generar-un-correo-electronico-que-te-contamine-o-robe-datos-cadena-ser/#:~:text=La%20existencia%20de%20ChatGPT%20tambi%C3%A9n%20conlleva%20riesgos.%20Seg%C3%BAn,robe%20datos.%20."
                              > [enlace] </Link>
                          </span>
                          <span > 
                            [Último acceso: 02 Abril 2023]                       
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className='mx-2'>
                      <div className='p-2 pl-4 mb-1 bg-gray-100 rounded-t-2xl'>
                        <div className='text-center font-semibold'>
                          <span>Artículo 3</span>
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
                            Pawankumar Sharma <br />
                            Bibhu Dash 
                          </span>
                        </div>
                        <div className='p-2 pl-4 mb-1 bg-gray-100'>
                          <span className='font-semibold'>Contexto: </span>
                          <span> 
                            El análisis de seguridad debe procesar grandes cantidades 
                            de datos para revelar las anomalías y los patrones que pueden 
                            desencadenar alertas de posibles ataques. Las herramientas de 
                            seguridad, los dispositivos de usuario personales, el hardware 
                            de red y los registros en los servidores son fuentes que generan 
                            cantidades tan grandes de datos.
                          </span>
                        </div>
                        <div className='p-2 pl-4 mb-1 bg-gray-100'>
                          <span className='font-semibold'>Actores: </span>
                          <span > 
                            Ciberamenazas, ataques a la red, análisis de Big Data, inteligencia artificial, ciberseguridad, ChatGPT, 
                          </span>
                        </div>
                        <div className='p-2 pl-4 mb-1 bg-gray-100'>
                          <span className='font-semibold'>Necesidad: </span>
                          <span > 
                            Protección del ser, identidad del hacer, libertad del ser.
                          </span>
                        </div>
                        <div className='pb-1 pl-4 mb-1 bg-gray-100'>
                          <span className='font-semibold'>Problema: </span>
                          <span > 
                            Cambio de los patrones en ataques cibernéticos. 
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
                            [Último acceso: 06 Abril 2023]                       
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className='mx-2'>
                      <div className='p-2 pl-4 mb-1 bg-gray-100 rounded-t-2xl'>
                        <div className='text-center font-semibold'>
                          <span>Artículo 4</span>
                        </div>
                      </div>
                      <div className='text-justify  '>
                        <div className='p-2 pl-4 mb-1 bg-gray-100'>
                          <span className='font-semibold'>Nombre: </span>
                          <span>
                            ¿Los algoritmos ChatGPT y Deepfake están poniendo en peligro la industria de la ciberseguridad? Una revisión
                          </span>
                        </div>
                        <div className='p-2 pl-4 mb-1 bg-gray-100'>
                          <span className='font-semibold'>Autor(es): </span>
                          <span className=''> 
                            <br />
                            Pawankumar Sharma 
                            <br />
                            Bibhu Dash 
                          </span>
                        </div>
                        <div className='p-2 pl-4 mb-1 bg-gray-100'>
                          <span className='font-semibold'>Contexto: </span>
                          <span> 
                            En esta era de digitalización, la ciberseguridad es una preocupación 
                            importante a nivel mundial. Los piratas informáticos utilizan los 
                            algoritmos deepfake y la evolución de los modelos de lenguaje 
                            masivo (MLM) como ChatGPT para crear contenidos falsos sin código 
                            para propagar amenazas cibernéticas
                          </span>
                        </div>
                        <div className='p-2 pl-4 mb-1 bg-gray-100'>
                          <span className='font-semibold'>Actores: </span>
                          <span > 
                          Algoritmos deepfake, procesamiento de lenguaje natural (NLP), 
                          aprendizaje profundo (DL), generadores, 
                          redes adversarias generativas (GAN), redes neuronales, ChatGPT
                          </span>
                        </div>
                        <div className='p-2 pl-4 mb-1 bg-gray-100'>
                          <span className='font-semibold'>Necesidad: </span>
                          <span > 
                            Entendimiento del hacer, protección del ser
                          </span>
                        </div>
                        <div className='pb-1 pl-4 mb-1 bg-gray-100'>
                          <span className='font-semibold'>Problema: </span>
                          <span > 
                          Pocas medidas en la salvaguardia de los datos por parte de las organizaciones con datos personales de los humanos <br />
                          Interacción similar a la humana
                          </span>
                        </div>

                        <div className='font-light text-sm pb-1 pl-4 mb-5 bg-gray-100 rounded-b-2xl'>
                          <span > 
                            [International Journal of Engineering and Applied Sciences (IJEAS) ISSN: 2394-3661, Volume-10, Issue-1, January 2023.] [En línea]
                          </span>
                          <span>
                            <Link 
                              className='text-blue-500 '
                              to="https://www.researchgate.net/publication/368838115_Are_ChatGPT_and_Deepfake_Algorithms_Endangering_the_Cybersecurity_Industry_A_Review"
                              > [enlace] </Link>
                          </span>
                          <span > 
                            [Último acceso: 07 Abril 2023]                       
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className='mx-2'>
                      <div className='p-2 pl-4 mb-1 bg-gray-100 rounded-t-2xl'>
                        <div className='text-center font-semibold'>
                          <span>Artículo 5</span>
                        </div>
                      </div>
                      <div className='text-justify  '>
                        <div className='p-2 pl-4 mb-1 bg-gray-100'>
                          <span className='font-semibold'>Nombre: </span>
                          <span>
                            Ingeniería social con ChatGPT
                          </span>
                        </div>
                        <div className='p-2 pl-4 mb-1 bg-gray-100'>
                          <span className='font-semibold'>Autor(es): </span>
                          <span className=''> 
                            <br />
                            Dijana Vukovic Grbic 
                            <br />
                            Igor Dujlovic
                          </span>
                        </div>
                        <div className='p-2 pl-4 mb-1 bg-gray-100'>
                          <span className='font-semibold'>Contexto: </span>
                          <span> 
                            Una de las más recientes tecnologías de Inteligencia Artificial lanzada al público 
                            por OpenAl en noviembre de 2022 es ChatGPT, un chatbot construido sobre la familia G
                            PT-3 que es un modelo de IA de procesamiento de lenguaje de última generación, el 
                            cual ha mostrado un excelente desempeño en diferentes campos y ha sido utilizado para 
                            distintos propósitos, al  responder de manera acertada y oportuna a algunas preguntas 
                            generales o específicas, generando textos similar al humano, incluso, resolviendo 
                            problemas matemáticos, redactando textos sobre temas específicos o hasta generando 
                            código de programación. <br />
                            Con una buena combinación de estas posibilidades es posible generar las condiciones 
                            para lo que se denomina phishing o algún otro ataque informático que puede ser 
                            creado con una buena manipulación del lenguaje artificial y en pocos minutos, por 
                            lo que es de vital importancia buscar prevenciones en cuanto a posibles ataques de 
                            ingeniería social. 


                          </span>
                        </div>
                        <div className='p-2 pl-4 mb-1 bg-gray-100'>
                          <span className='font-semibold'>Actores: </span>
                          <span > 
                            
                          </span>
                        </div>
                        <div className='p-2 pl-4 mb-1 bg-gray-100'>
                          <span className='font-semibold'>Necesidad: </span>
                          <span > 
                            No toda la ayuda que este chatbot nos ofrece puede ser utilizada para buenos propósitos, 
                            algunos estudios han demostrado que ChatGPT puede ser utilizado por personas con o sin 
                            conocimiento técnico para crear distintos ataques de informática, como estafas o ataques 
                            de phishing, creación de virus, troyanos, malware y ransomware, entre otros. <br />
                            n términos de ciberseguridad, las estafas o el phishing se clasifican como ataques de 
                            ingeniería social, los cuales implican la explotación de vulnerabilidades humanas para 
                            adquirir información confidencial, acceso no autorizado, conocimiento de medidas de 
                            ciberseguridad, etc. Por lo cual se hace necesario investigar sobre las técnicas de 
                            prevención existentes para prevenir este tipo de ataques.
                          </span>
                        </div>
                        <div className='pb-1 pl-4 mb-1 bg-gray-100'>
                          <span className='font-semibold'>Problema: </span>
                          <span > 
                            Aunque ChatGPT parece una gran herramienta y una fuente útil de información, tiene 
                            algunas limitaciones, tales como: conocimiento limitado en el momento en lo que ha 
                            sucedido en el mundo después de 2021, a veces puede generar información incorrecta, 
                            obtener respuestas incorrectas, o  malinterpretar lo que se está tratando de preguntarle 
                            y si se agrega demasiados factores a la pregunta puede sentirse abrumado o ignorar 
                            partes de una pregunta por completo.
                          </span>
                        </div>

                        <div className='font-light text-sm pb-1 pl-4 mb-5 bg-gray-100 rounded-b-2xl'>
                          <span > 
                          [D. V. Grbic and I. Dujlovic, "Social engineering with ChatGPT," 2023 22nd International Symposium INFOTEH-JAHORINA (INFOTEH), East Sarajevo, Bosnia and Herzegovina, 2023, pp. 1-5, doi: 10.1109/INFOTEH57020.2023.10094141.] [En línea]
                          </span>
                          <span>
                            <Link 
                              className='text-blue-500 '
                              to="https://ieeexplore-ieee-org.udea.lookproxy.com/document/10094141"
                              > [enlace] </Link>
                          </span>
                          <span > 
                            [Último acceso: 17 Abril 2023]                       
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
  );
};

export default Document01;
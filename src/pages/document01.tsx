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
      <div className='flex justify-center items-center' >
        <div className='flex-col min-w-min'>
          <div className='bg-gray-200 rounded-lg max-w-screen-md content-center p-12'>
            <div className='text-center mb-2'>
              <div className=''>
                <h2>
                  <span className="">¿Cómo puede un modelo de lenguaje como Chat GPT utilizarse para mejorar la detección de amenazas informáticas en Colombia actualmente?</span>
                </h2>
              </div>
              <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div className='py-4'>
                  <span className='text-sm'>Autor 01</span>
                  <span className='text-sm text-inherit'></span>
                </div>
                
              <div>

              </div>
            </div>
            <div className="">
              <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                consectetur, nisl vitae ultricies lacinia, nisl nisl aliquet nisl, ut
                aliquet nisl nisl sit amet nisl. Nulla facilisi. Nulla facilisi. Donec
                eget nisl auctor, aliquam nisl vitae, aliquam nisl. Nulla facilisi.
                Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>

      




    </div>    
  );
};

export default Document01;
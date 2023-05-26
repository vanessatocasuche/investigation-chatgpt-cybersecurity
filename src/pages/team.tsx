import { Link }  from 'react-router-dom'

const Team = () => {
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
          <h1 className="text-center text-4xl font-bold text-slate-300 ">Equipo de trabajo</h1>
        </div>
        <div className='flex-col min-w-min'>
          <div className='bg-gray-200 rounded-lg max-w-screen-lg content-center p-12'>
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
          </div>
            

          <Link to="/resultados" className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">Ver resultados</Link>
      </div>
    </div>
  )
}

export default Team;
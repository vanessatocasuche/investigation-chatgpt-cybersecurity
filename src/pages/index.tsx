import { Link }  from 'react-router-dom'

const IndexPage = () => {
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
          <h1 className="text-center text-4xl font-bold text-slate-300 ">Página principal</h1>
        </div>
        <div className='my-8'>
          <p>
            En contrucción...
          </p>   
        </div>

        <Link to="/resultados" className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">Ver resultados</Link>
      </div>
    </div>
  )
}

export default IndexPage;

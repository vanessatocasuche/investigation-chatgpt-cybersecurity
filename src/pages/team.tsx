import { Link }  from 'react-router-dom'

const Team = () => {
  return (
    <div className="mt-8 mr-8 mb-8 ml-8">
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
      <div className="flex flex-col justify-center items-center mb-4 m-4">
        <div className='my-4'>
          <h1 className="text-center text-4xl font-bold text-slate-300 ">Equipo de trabajo</h1>
        </div>
        <div className='my-8'>
          <p>
            En contrucción...
          </p>   
        </div>

        <Link to="/document01" className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">Ir a Documento 01</Link>
      </div>
    </div>
  )
}

export default Team;
import {Link} from 'react-router-dom'
import mapaconceptualchatgpt from '../assets/images/mapaconceptualchatgpt.png'

const Mapaconceptualchatgpt = () => {
  return (
    <div className="mt-4 mr-4 mb-2 ml-2">
      <img className='my-6' src={mapaconceptualchatgpt} alt='mapa conceptual chatGPT' />
      <Link to="/document01" className="items-center rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">Volver al documento</Link>

    </div>

  )
}

export default Mapaconceptualchatgpt
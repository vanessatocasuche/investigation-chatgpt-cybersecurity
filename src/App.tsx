import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IndexPage from './pages/index';
import Document01 from './pages/document01';
import Metodologia from './pages/metodologia';
import Resultados from './pages/resultados';
import ArticuloElegido from './pages/articuloElegido';
import Team from './pages/team';
import Mapaconceptualchatgpt from './pages/mapaconceptualchatgpt';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/index" element={<IndexPage />} />
        <Route path="/document01" element={<Document01 />} />
        <Route path="/articuloElegido" element={<ArticuloElegido />} />
        <Route path="/metodologia" element={<Metodologia />} />
        <Route path="/resultados" element={<Resultados />} />
        <Route path="/team" element={<Team />} />
        <Route path="/mapaconceptualchatgpt" element={<Mapaconceptualchatgpt />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

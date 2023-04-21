import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IndexPage from './pages/index';
import Document01 from './pages/document01';
import Team from './pages/team';
import RelatedPosts from './pages/relatedPosts';
import Mapaconceptualchatgpt from './pages/mapaconceptualchatgpt';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/index" element={<IndexPage />} />
        <Route path="/document01" element={<Document01 />} />
        <Route path="/team" element={<Team />} />
        <Route path="/relatedPosts" element={<RelatedPosts />} />
        <Route path="/mapaconceptualchatgpt" element={<Mapaconceptualchatgpt />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

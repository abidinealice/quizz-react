import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Francais from './pages/Francais/Francais';
import Maths from './pages/Maths/Maths';
import Error from './pages/Error/Error';

window.addEventListener('beforeunload', () => {});

function App() {
  return (
    <Router>
      <div className="containerIndex">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/francais" element={<Francais />} />
          <Route path="/maths" element={<Maths />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

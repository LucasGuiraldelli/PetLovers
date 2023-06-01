import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TelaInicial from './TelaInicial';
import TelaSecundaria from './TelaSecundaria';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Tela Inicial</Link>
            </li>
            <li>
              <Link to="/tela-secundaria">Tela Secundária</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<TelaInicial />} />
          <Route path="/tela-secundaria" element={<TelaSecundaria />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



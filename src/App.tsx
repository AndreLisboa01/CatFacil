/*import { SignIn } from './pages/SignIn';

import './styles/global.scss';

export default function App() {
  return (
    <SignIn />
  );
}*/





/*import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SignIn } from './pages/SignIn/SignIn';
import Home from './pages/Home/home';
import './styles/global.scss';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/home/*" element={<Home />} />
      </Routes>
    </Router>
  );
}


export default App;*/






















/*
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SignIn } from './pages/SignIn/SignIn';
import Home from './pages/Home/home';
import './styles/global.scss';
import { UserProvider } from './pages/SignIn/UserContext'; // Importe o UserProvider

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/home/*" element={<Home />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
*/










import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SignIn } from './pages/SignIn/SignIn';
import Home from './pages/Home/home';
import './styles/global.scss';
import { UserProvider } from './pages/SignIn/UserContext'; // Se você ainda precisa disso
import { StoreProvider } from './StoreContext'; // Seu novo StoreProvider

function App() {
  return (
    <UserProvider>
      <StoreProvider>
        <Router>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/home/*" element={<Home />} />
          </Routes>
        </Router>
      </StoreProvider>
    </UserProvider>
  );
}

export default App;

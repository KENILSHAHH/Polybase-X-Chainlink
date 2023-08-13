/** @format */

import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import HomePage from './Pages/HomePage';
import { PolybaseProvider, AuthProvider } from '@polybase/react';
import { Polybase } from '@polybase/client';
import { Auth } from '@polybase/auth';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePageContents from './Pages/HomePageContents';
import Todo from './Pages/Todo';

// https://youtube.com/shorts/ESfDVsjJKtM?feature=share
function App() {
  return (
    <Router>
      {/* <Routes>
        <Route
          path="/"
          element={<HomePage pageContents={HomePageContents} />}
        />
      </Routes> */}
      <Routes>
        <Route
          path="/"
          element={<HomePage pageContents={Todo} />}
        />
      </Routes>
    </Router>
  );
}

export default App;

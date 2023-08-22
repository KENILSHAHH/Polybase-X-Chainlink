/** @format */
import './App.css';
import * as React from 'react';
import HomePage from './Pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Todo from './Pages/Todo';

function App() {
  return (
    <Router>
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

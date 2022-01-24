import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Signin from './views/Signin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signin" element={<Signin />} />
        <Route
          path="*"
          element={
            <main className="p-4">
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Experience from './Experience';
import Projects from './Projects';
import About from './About';

function App() {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-1/4 bg-white p-5 text-center border-r border-black">
        <img src="https://via.placeholder.com/150" alt="placeholder" className="rounded-full w-36 h-36 object-cover mb-5 mx-auto border border-black" />
        <h2 className="text-2xl font-bold">Jules</h2>
        <p className="mb-2">Software Engineer</p>
        <p className="mb-5">A short description about me.</p>
        <nav className="mt-5">
          <Link to="/experience" className="block my-2 text-black font-bold hover:underline">Experience</Link>
          <Link to="/projects" className="block my-2 text-black font-bold hover:underline">Projects</Link>
          <Link to="/about" className="block my-2 text-black font-bold hover:underline">About</Link>
        </nav>
      </div>
      <div className="w-3/4 p-5 bg-white">
        <Routes>
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

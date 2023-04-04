// npx json-server --watch data/db.json --port 8000
import Navbar from './Navbar';
import Home from './Home'
import ProjectList from './ProjectList';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  useEffect(() => { 
    console.log("App loaded...")
  }) 

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/projects' element={ <ProjectList /> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
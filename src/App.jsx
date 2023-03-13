import { useEffect, useState } from 'react';
import './App.css'
import Navbar from './components/Navbar.jsx'
import ProjectList from './components/ProjectList'
import ActiveProject from './components/ActiveProject';

function App() {

  const [projectData, setProjectData] = useState([])
  const [activeProject, setActiveProject] = useState(0)

  return (
    <div className='main-container'>

      <Navbar setProjectData={setProjectData} setActiveProject={setActiveProject} />

      {!activeProject ? <ProjectList projectData={projectData} setActiveProject={setActiveProject} />:
      <ActiveProject activeProject={activeProject} />}

      </div>
  )
}

export default App

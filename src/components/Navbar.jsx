import React from 'react'
import '../components/Navbar.css'

import { Search, CreateNewFolder, FolderOpen, BugReport } from '@material-ui/icons'

const Navbar = ({ setProjectData, setActiveProject }) => {

    async function loadProjects() {
        try {
          const response = await fetch('http://localhost:3000/projects');
          const data = await response.json();
          setProjectData(data)
        } catch (error) {
          console.error(error);
        }
        setActiveProject(0)
        
      }

    return (
        <div className='nav-container'>
            <div className='search-container'>
                <button className='navbar-button left-radius navbar-search' ><Search className='navbar-icon' /></button>
                <input className='search-text' type='text' defaultValue='in:open by:joe'></input>
            </div>

            <div>
                <button className='navbar-button'>
                    <CreateNewFolder className='navbar-icon'/> New Project</button>
                <button onClick={loadProjects} className='navbar-button right-radius white-left-border'>
                    <FolderOpen className='navbar-icon' /> Load Project</button>
            </div>


        </div>
    )
}

export default Navbar

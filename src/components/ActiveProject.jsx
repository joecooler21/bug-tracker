import React, { useEffect, useState } from 'react'
import IssueForm from './IssueForm'
import { BugReport } from '@material-ui/icons'
import '../components/ActiveProject.css'



const ActiveProject = ({ activeProject }) => {

  const [projectData, setProjectData] = useState(null)
  const [activeTab, setActiveTab] = useState('open')
  

  useEffect(() => {

    async function loadProject() {
      try {
        const response = await fetch(`http://localhost:3000/projects/${activeProject}`);
        const data = await response.json();
        setProjectData(data)
      } catch (error) {
        console.error(error);
      }

    }

    loadProject()



  }, [])

  

  return (
    <div className='active-project-container'>
      {!projectData ? <div>Error loading project data</div>:<div className='tab-container'>

      <div onClick={()=>{setActiveTab('open')}}
       className={activeTab==='open' ? 'tab open-tab-active' : 'tab'}>Open<span className='badge red'>
        {projectData.open.length}</span></div>

      <div onClick={()=>{setActiveTab('closed')}}
       className={activeTab==='closed' ? 'tab closed-tab-active':'tab'}>Closed<span className='badge blue'>
        {projectData.closed.length}</span></div>

        <div onClick={()=>{setActiveTab('new-issue')}} className='tab bugreport'>
          <BugReport className='navbar-icon' />New Issue</div>

        <div className='tab-item-container'>

        {activeTab === 'open' ? <div>{projectData.open.map((e) =>{
          return(<div className='project-tab-list-item issue-open' key={e.id}>{e.title}</div>)
        })}</div>:null}

        {activeTab === 'closed' ? <div>{projectData.closed.map((e) => {
          return(<div className='project-tab-list-item issue-closed' key={e.id}>{e.title}</div>)
        })}</div>:null}

        {activeTab === 'new-issue' ? <IssueForm />:null}

        </div>
      </div>}


    </div>
  )
}

export default ActiveProject

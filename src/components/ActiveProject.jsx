import React, { useEffect, useState } from 'react'
import IssueForm from './IssueForm'
import OpenIssue from './OpenIssue'
import ClosedIssue from './ClosedIssue'
import { BugReport, Close } from '@material-ui/icons'
import '../components/ActiveProject.css'



const ActiveProject = ({ activeProject }) => {

  const [projectData, setProjectData] = useState(null)
  const [activeTab, setActiveTab] = useState('open')
  const [openIssue, setOpenIssue] = useState(null)
  const [closedIssue, setClosedIssue] = useState(null)

  const URL = `https://delightful-neckerchief-foal.cyclic.app/projects/`


  useEffect(() => {

    async function loadProject() {
      try {
        const response = await fetch(URL + `${activeProject}`);
        const data = await response.json();
        setProjectData({id:data[0].id, title:data[0].title, open:data[0].open, closed:data[0].closed})
      } catch (error) {
        console.error(error);
      }
    }
    loadProject()
  }, [])

  const openIssueClick = (index) => {
    setOpenIssue(projectData.open[index])
  }

  const closeIssueClick = (index) => {
    setClosedIssue(projectData.closed[index])

  }

  useEffect(() => {
    setOpenIssue(null)
    setClosedIssue(null)

  }, [activeTab])

  return (
    <div className='active-project-container'>
      {!projectData ? <div>Error loading project data</div> : <div className='tab-container'>

        <div onClick={() => { setActiveTab('open') }}
          className={activeTab === 'open' ? 'tab open-tab-active' : 'tab'}>Open<span className='badge red'>
            {projectData.open.length}</span></div>

        <div onClick={() => { setActiveTab('closed') }}
          className={activeTab === 'closed' ? 'tab closed-tab-active' : 'tab'}>Closed<span className='badge blue'>
            {projectData.closed.length}</span></div>

        <div onClick={() => { setActiveTab('new-issue') }} className={activeTab === 'new-issue' ?
          'tab bugreport bugreport-active' : 'tab bugreport'}>
          <BugReport className='navbar-icon' />New Issue</div>



        <div className='tab-item-container'>

          <div className='active-project-title'>{projectData.title}</div>
          <div className='issue-item-container'>

            {/* open issue list */}
            {activeTab === 'open' ? <div className='issue-item-list'>{projectData.open.map((e, index) => {
              return (<div onClick={() => openIssueClick(index)}
                className='project-tab-list-item'
                key={index}>Issue # {e.id} {e.title}</div>)
            })}</div> : null}
            
            {/*open issue side panel */}
            {openIssue != null && <OpenIssue projectId={projectData.id} setOpenIssue={setOpenIssue} openIssue={openIssue} />} 

            {/* closed tab content */}
            {activeTab === 'closed' ? <div className='issue-item-list closed'>{projectData.closed.map((e, index) => {
              return (<div onClick={() => { closeIssueClick(index) }} className='project-tab-list-item issue-closed' key={index}>Issue # {e.id} {e.title}</div>)
            })}</div> : null}

            {closedIssue != null && <ClosedIssue closedIssue={closedIssue} />}

            {activeTab === 'new-issue' ? <IssueForm /> : null}
          </div>


        </div>
      </div>}



    </div>
  )
}

export default ActiveProject

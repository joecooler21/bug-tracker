import React, { useEffect, useState } from 'react'
import IssueForm from './IssueForm'
import { BugReport } from '@material-ui/icons'
import '../components/ActiveProject.css'



const ActiveProject = ({ activeProject }) => {

  const [projectData, setProjectData] = useState(null)
  const [activeTab, setActiveTab] = useState('open')
  const [activeIssue, setActiveIssue] = useState(null)


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

  const openIssue = (id) => {
    setActiveIssue(id)
    //setActiveTab('open-issue')
    let index = projectData.open.findIndex(e => e.id === id)
    setActiveIssue(projectData.open[index])
  }

  useEffect(() => {
    if (activeTab != 'open') {
      setActiveIssue(null)
    }

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

            {/* open issue tab list */}
            {activeTab === 'open' ? <div className='issue-item-list'>{projectData.open.map((e) => {
              return (<div onClick={() => openIssue(e.id)} className='project-tab-list-item' key={e.id}>Issue # {e.id} {e.title}</div>)
            })}</div> : null}

            {activeTab === 'open' && activeIssue != null ? <div className='submit-comment-container'>
              <input className='submit-comment-text' type='text'></input>
              <div className='submit-comment-button'>Submit</div>
            </div>: null}

            {/*open issue side panel */}
            {activeIssue && <div className='issue-item-view'>
              <div>
                <h3>Title:</h3>
                <label>{activeIssue.title}</label>
                <h3>Submitted by</h3>
                <label>{activeIssue.author}</label>
                <h3>Description:</h3>
                <label>{activeIssue.comment}</label>
                <h3>Comments &#40;{activeIssue.comments.length}&#41;</h3>
                <div className='comments-container'>
                  {activeIssue.comments.map((e, index) => {
                    return (<div className='comment' key={index}><span className='bold'>{e.author} </span>says {e.body}</div>)
                  })}
                </div>




              </div>
            </div>}

            {activeTab === 'closed' ? <div className='issue-item-list closed'>{projectData.closed.map((e) => {
              return (<div className='project-tab-list-item issue-closed' key={e.id}>Issue # {e.id} {e.title}</div>)
            })}</div> : null}

            {activeTab === 'new-issue' ? <IssueForm /> : null}


            {/* {activeTab === 'open-issue' ? <ActiveIssue activeIssue={activeIssue} /> : null} */}
          </div>


        </div>
      </div>}


    </div>
  )
}

export default ActiveProject

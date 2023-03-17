import React from 'react'
import '../components/ProjectList.css'
import { Delete } from '@material-ui/icons'

const ProjectList = ({ projectData, setActiveProject }) => {
    return (
        <div className='project-list-container'>
            {projectData.map((e) => {
                
                return(<div onClick={() => {setActiveProject(e.id)}} key={e.id} className='project-card-container shadow'>
                    <div className='project-card-header'>{e.title}</div>
                    <div className='info'>{e.info}</div>
                    <button onClick={(e)=>{e.stopPropagation()}} className='delete-button'><Delete className='navbar-icon' /></button>
                    <div className='status-container'>
                        <label className='open-label'>Open: {e.open.length}</label>
                         <label className='close-label'>Closed: {e.closed.length}</label></div>
                </div>)
            })}
        </div>
    )
}

export default ProjectList

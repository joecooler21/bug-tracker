import React from 'react'
import '../components/IssueForm.css'

const IssueForm = () => {

  const options = ['Bug', 'Enhancement', 'Feature']

  return (
    <div className='new-issue-container'>
    <label>Title:</label>
    <input className='new-issue-title' type='text' defaultValue={'write a fascinating title here'}></input>
    <label>Description:</label>
    <textarea className='new-issue-comment' defaultValue={'write a captivating description here'}></textarea>
    <div className='submit-button-container'>
      <select className='select'>

        {options.map((e, index) => {
          return(<option key={index} value={index}>{e}</option>)
        })}

      </select>
      <button className='navbar-button submit'>Submit</button>
      <button className='navbar-button submit'>Cancel</button>
    </div>
    </div>
  )
}

export default IssueForm

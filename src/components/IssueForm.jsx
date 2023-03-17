import React, { useRef } from 'react'
import '../components/IssueForm.css'

const IssueForm = () => {

  const options = ['Bug', 'Enhancement', 'Feature']
  const titleRef = useRef('')
  const descRef = useRef('')

  const submit = () => {
    console.log(titleRef.current.value, descRef.current.value)
  }

  return (
    <div className='new-issue-container'>
    <label className='form-label'>Title:</label>
    <input placeholder='Write a captivating title here' ref={titleRef}  className='new-issue-title' type='text'></input>
    <label  className='form-label'>Description:</label>
    <textarea placeholder='Write a fascinating description here'  ref={descRef}  className='new-issue-comment'></textarea>
    <div className='submit-button-container'>
      <select className='select'>

        {options.map((e, index) => {
          return(<option key={index} value={index}>{e}</option>)
        })}

      </select>
      <button onClick={submit} className='navbar-button submit'>Submit</button>
    </div>
    </div>
  )
}

export default IssueForm

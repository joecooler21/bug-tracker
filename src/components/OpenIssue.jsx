import React, { useState, useEffect } from 'react'
import '../components/OpenIssue.css'

const OpenIssue = ({ openIssue, projectId }) => {

  const [comment, setComment] = useState('')


  const handleText = (e) => {
    setComment(e.currentTarget.value)
  }

  const submitComment = async () => {
    let new_id = openIssue.comments.length + 1
    const msg = { id: new_id, body: comment, author: 'Joe' }

    try {
      const response = await
        fetch(`http://localhost:3000/projects/${projectId}/open/${openIssue.id}/comments`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(msg)
          })
          const data = await response.json()
          console.log(data)


    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='issue-item-view'>
      <div>
        <div className='margin-bottom'><span className='bold-label'>Title: </span> {openIssue.title}</div>
        <div className='margin-bottom'><span className='bold-label'>Author: </span> {openIssue.author}</div>
        <div className='margin-bottom'><span className='bold-label'>Description: </span> {openIssue.comment}</div>
        <div className='close-button-container'><h3>Comments &#40;{openIssue.comments.length}&#41;</h3><button className='close-issue-button'>Close Issue</button></div>
        <div className='comments-container'>
          {openIssue.comments.map((e, index) => {
            return (<div className='comment' key={index}><span className='bold'>{e.author} </span>says {e.body}</div>)
          })}

        </div>

        <div className='submit-comment-container'>
          <input onChange={handleText} className='submit-comment-text' type='text'></input>
          <div onClick={submitComment} className='submit-comment-button'>Submit</div>
        </div>




      </div>
    </div>
  )
}
export default OpenIssue

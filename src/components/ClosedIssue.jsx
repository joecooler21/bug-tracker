import React from 'react'

const ClosedIssue = ({ closedIssue }) => {
    return (
        <div className='issue-item-view'>

            <div>
                <div className='margin-bottom'><span className='bold-label'>Title: </span>{closedIssue.title} </div>
                <div className='margin-bottom'><span className='bold-label'>Author: </span>{closedIssue.author} </div>
                <div className='margin-bottom'><span className='bold-label'>Description: </span>{closedIssue.body} </div>
            </div>

        </div>
    )
}

export default ClosedIssue

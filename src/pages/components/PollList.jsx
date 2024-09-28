import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function PollList() {
  const [polls, setPolls] = useState([]);

  useEffect(() => {
    // Retrieve polls from localStorage
    const savedPolls = JSON.parse(localStorage.getItem("polls")) || [];
    setPolls(savedPolls);
  }, []);
  return (
    <div className='card m-0'>
      <div className="h2 text-center">Polls List</div>

      {polls.length === 0 ? (
        <p>No polls available. Please create one.</p>
      ) : (
        polls.map((poll) => (
          <div key={poll.id} className="poll">
            <div className="flex d-flex justify-content-between  m-0 ">
            <div className="flex m-0 ">
              <div className='h5 text-success m-0'>{poll.title}</div>
              <div className="flex d-flex m-0">
                <div className="m-0">Describe:</div>
                <div className='m-0 ps-2'>{poll.description}</div>
              </div>
            </div>
            <Link to={`/pollDetail/${poll.id}`} className='text-decoration-none'>View Poll</Link>
            </div>
            <hr />
          </div>
        ))
      )}
    </div>
  )
}

export default PollList;
import React from 'react';
import { Link } from 'react-router-dom'

function VoteConfirm() {
  return (
    <div className="card flex align-items-center justify-center">
     
       <div className="h1 pt-5 m-0">
         Vote Confirmation
        </div> 
        <div className="mb-3 mt-2">Thank you for voting!</div>
        <div className='mb-3 mt-0'>Your vote has been successfully submitted</div>
        <Link to="/pollList" className=' text-decoration-none text-success'>Back to Poll List</Link>

    </div>
  );
}

export default VoteConfirm;

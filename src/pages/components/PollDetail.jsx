import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

function PollDetail() {
  const { id } = useParams(); // Extract poll ID from the URL
  const [poll, setPoll] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");
  const [votes, setVotes] = useState({ option1: 0, option2: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve polls and votes from localStorage
    const polls = JSON.parse(localStorage.getItem('polls')) || [];
    const storedVotes = JSON.parse(localStorage.getItem('votes')) || {};

    // Find the poll by ID
    const foundPoll = polls.find((poll) => poll.id.toString() === id);

    // Set the poll and votes state if the poll is found
    if (foundPoll) {
      setPoll(foundPoll);

      // Load existing votes for this poll if available
      if (storedVotes[foundPoll.id]) {
        setVotes(storedVotes[foundPoll.id]);
      }
    }
  }, [id]);

  // Handle voting
  const handleVoteSubmit = () => {
    if (!selectedOption) {
      alert("Please select an option to vote!");
      return;
    }

    const updatedVotes = {
      ...votes,
      [selectedOption]: votes[selectedOption] + 1,
    };

    // Update the votes state
    setVotes(updatedVotes);

    // Store the updated votes in localStorage
    const allVotes = JSON.parse(localStorage.getItem('votes')) || {};
    allVotes[poll.id] = updatedVotes;
    localStorage.setItem('votes', JSON.stringify(allVotes));

    navigate('/voteConfirm');

  };

  if (!poll) {
    return (
      <p>
        Poll not found. <Link to="/polls">Go back to poll list</Link>
      </p>
    );
  }

  return (
    <div className='card'>
      <div className="h2 text-center">Polls Details</div>
      <div key={poll.id} className="poll">
        <div className="flex d-flex justify-content-between  m-0 ">
          <div className="flex m-0 ">
            <div className='h5 text-success m-0'>{poll.title}</div>
            <div className="flex d-flex m-0">
              <div className="m-0">Describe:</div>
              <div className='m-0 ps-2'>{poll.description}</div>
            </div>
          </div>
        </div></div>

      <div className="form m-0 p-0">

        <form>
          <div class="flex d-flex justify-between m-0">
            <input
              className='w-auto mx-2'
              type="radio"
              name="option"
              value="option1"
              checked={selectedOption === "option1"}
              onChange={() => setSelectedOption("option1")}
            />
            <label>
              {poll.option1} (Votes: {votes.option1})
            </label>
          </div>
          <br />
          <div className="m-0 ml-8 d-flex ">
            <input
              className='w-auto mx-2'
              type="radio"
              name="option"
              value="option2"
              checked={selectedOption === "option2"}
              onChange={() => setSelectedOption("option2")}
            />
            <label>
              {poll.option2} (Votes: {votes.option2})
            </label>
          </div>
          <button type="button" className='btn btn-success m-4' onClick={handleVoteSubmit}>Submit Vote</button>
        </form>
        <Link to="/pollList" className='text-decoration-none m-4 text-success'>Back to Poll List</Link>
      </div>

    </div>
  );
}

export default PollDetail;

import React, { useState } from 'react'
import './CreatePoll.css'

function CreatePoll() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a poll object
    const poll = {
      id: Date.now(), // Unique ID using timestamp
      title,
      description,
      option1,
      option2,
    };

    // Retrieve existing polls from localStorage
    let polls = JSON.parse(localStorage.getItem("polls")) || [];

    // Add new poll to polls array
    polls.push(poll);

    // Save updated polls to localStorage
    localStorage.setItem("polls", JSON.stringify(polls));

    // Clear form
    setTitle("");
    setDescription("");
    setOption1("");
    setOption2("");

    // Optionally redirect or show a success message
    alert("Poll created successfully!");


    console.log('Poll created:', pollData);
  };
  return (
    <div className="card p-3 bg-white">
      <div className="h2 font-weight-bolder text-center">Create a New Poll</div>
      <form onSubmit={handleSubmit}>
        <div className='d-grid gap-2'>
          <label htmlFor="title">Poll Title:</label>
          <input
            className=' border rounded w-full'
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className='d-grid gap-2'>
          <label htmlFor="description" >Description</label>

          <textarea
            className=' border rounded w-full'
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>

        <div className='d-grid gap-2'>
          <label htmlFor="option1" >Option 1</label>
          <input
            className=' border rounded'
            type="text"
            id="option1"
            value={option1}
            onChange={(e) => setOption1(e.target.value)}
            required
          />
        </div>

        <div className='d-grid gap-2'>
          <label htmlFor="option2" >Option 2</label>
          <input
            className=' rounded '
            type="text"
            id="option2"
            value={option2}
            onChange={(e) => setOption2(e.target.value)}
            required
          />
        </div>

        <div className=" d-grid gap-1">
          <button type="submit" className='btn btn-success' >Create Poll</button>
        </div>
      </form>
    </div>
  )
}

export default CreatePoll
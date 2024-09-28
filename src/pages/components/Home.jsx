import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <div className="card p-3 bg-zinc-50">
                <div className="h2 text-center">
                    Welcome to Online Polling System
                </div>

                <div className='text-center'>
                    <Link className='text-success mx-3 text-decoration-none font-extrabold' to="/createPoll">Create Poll</Link>
                    <Link className='text-success mx-3 text-decoration-none font-extrabold' to="/pollList">Poll List</Link>
                </div>

                <div className='fs-6'>Manage and praticpate in polls with ease. Use the navigation links to create new polls or view and vote in existing ones</div>
            </div>
        </>
    )
}

export default Home
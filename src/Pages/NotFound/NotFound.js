import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css';

function NotFound() {
  return (
    <div className='notFound'>
      <div className='errorStyle'>
        <h1>This page isn't available! Sorry about that.</h1>
        <h2>404 - File or directory not found.</h2>
      </div>
      <Link to="/" className='goHomePage'>Go Back Home</Link>
    </div>
  )
}

export default NotFound
import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className="error-page section">
      <div className="error-container">
        <h1>Oops! it's a dead end...</h1>
        <Link to="/" className="btn btn-primary">back to home</Link>
      </div>
    </section>
  )
}

export default Error

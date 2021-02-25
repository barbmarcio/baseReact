import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundScreen = () => {
  return (
    <div>
      <h3>
        Page not found
      </h3>
      <Link to={'/'}> Back to main page  </Link>
    </div>
  )
}

export default NotFoundScreen
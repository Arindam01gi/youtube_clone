import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({name}) => {
  return (
    <Link to={`/results?search_query=${name}`}>
    <div className="px-4 py-2 bg-gray-100 rounded-lg font-semibold hover:bg-black hover:text-white">{name}</div>
    </Link>
  )
}

export default Button;
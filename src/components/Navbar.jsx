import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        
        <div class="card text-center">
  <div class="card-header">
    
    <ul class="nav nav-tabs card-header-tabs">
      <li class="nav-item">
        <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        
      </li>
    
      <li class="nav-item">
      <Link class="nav-link active" aria-current="page" to="/Search">Search</Link>
      </li>
      <li class="nav-item">
      <Link class="nav-link active" aria-current="page" to="/Delete">Delete</Link>
      </li>
      <li class="nav-item">
      <Link class="nav-link active" aria-current="page" to="/View">View</Link>
      </li>
    </ul>
  </div>

</div>
    </div>
  )
}

export default Navbar
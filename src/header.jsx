import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div> <h1>header</h1>
    <nav>
    <ul>
<li> <Link to={'/'}>Home</Link> </li>
<li> <Link to={'/Blog'}>Blog</Link> </li>
<li> <Link to={'/app'}>app</Link> </li>
<li> <Link to={'/Menu'}>menu</Link> </li>

        </ul></nav>
        </div>

  )
}

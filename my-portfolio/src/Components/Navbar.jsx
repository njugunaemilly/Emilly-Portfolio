import React from 'react'

function Navbar() {
  let links = [
    {name: 'Home', link:'/'},
    {name: 'About', link:'/AboutMe'},
    {name: 'Projects', link:'/Proects'},
    {name: 'Skills', link:'/Skills'}
  ]
  return (
    <>
      <div>Emilly</div>
      <ul>
        {links.map(link =>(
          <li>
            <a href={link.link}>{link.name}</a>
          </li>
        ))}
      </ul>

      </>
  )
}

export default Navbar
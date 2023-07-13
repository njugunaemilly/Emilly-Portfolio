import React from 'react'

function Navbar() {
  let links = [
    {name: 'Home', link:'/'},
    {name: 'About Me', link:'/AboutMe'},
    {name: 'Projects', link:'/Proects'},
    {name: 'Skills', link:'/Skills'}
  ]
  return (
    <div className='nav'>
      <div className='logo'>Emilly <span>Wanjiku</span></div>
      <ul className='ul'>
        {links.map(link =>(
          <li>
            <a href={link.link}>{link.name}</a>
          </li>
        ))}
      </ul>

      </div>
  )
}

export default Navbar
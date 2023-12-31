import React, { useState } from 'react'


function Navbar() {
  let links = [
    {name: 'Home', link:'/'},
    {name: 'About Me', link:'/AboutMe'},
    {name: 'Projects', link:'/Proects'},
    {name: 'Skills', link:'/Skills'}
  ]

  const[nav, setNav]=(useState(false))

  const changeBackground = ()=>{
    if(window.scrollY >=80){
      setNav(true)
    }
    else{
      setNav(false)
    }
  }
  
window.addEventListener('scroll', changeBackground)

  return (
    <>
    <nav className={nav ? 'nav active' : nav}>
    <div className='navbar-container'>
    <div className='logo'>
        {/* <img src="./images/Ew.png" alt="Logo" /> */}
        Emilly <span>Wanjiku</span>
      </div>
      <ul className='ul'>
        {links.map(link =>(
          <li>
            <a href={link.link}>{link.name}</a>
          </li>
        ))}
      </ul>
    </div>
    </nav>
    </>
  )
}

export default Navbar
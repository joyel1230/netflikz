import React, { useEffect } from 'react'
import './NavBar.css';

function NavBar() {
  useEffect(() => {
    const navbar1 = document.getElementById('nav');
    function handleScroll() {
      if (window.scrollY > 0) {
        navbar1.classList.add('scrolled');
      } else {
        navbar1.classList.remove('scrolled');
      }
    }
    window.addEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className='navbar' id='nav'>
        <img className='logo' src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="Netflikz-Logo" />
        <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="" />
    </div>
  )
}

export default NavBar
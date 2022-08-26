import React, {useState, useEffect} from 'react'
import './Header.css'
import tuanmai from '../assets/img/tuanmai.svg'
function Header() {
  const [backgroundColor, setBackgroundColor] = useState('bg-transparent')
  const handleChangeBackgroundColor = () => {
    if(window.scrollY > 75)
    {
      setBackgroundColor('bg-neutral-800' + ' ' + 'border-b') // change background color and add border bottom
    }
    else
    {
      setBackgroundColor('bg-transparent')
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleChangeBackgroundColor)
    return () => {
      window.removeEventListener('scroll', handleChangeBackgroundColor)
    };
  },[])
  return (
    <section id='header' className={`z-10 fixed flex flex-row max-w-full h-16 ${backgroundColor} border-slate-200 text-white justify-around items-center inset-x-0 top-0`} >
        <a className='header__logo font-mono text-2xl font-extrabold' href="">TUANMAI</a>
        {/* Menu */}
        <nav className='navbar'> 
            <ul className=' flex flex-row justify-between '>
                <li className='mr-8'><a className='py-2 px-4 text-lg font-semibold' href="#hero">Home</a></li>
                <li className='mr-8'><a className='py-2 px-4 text-lg font-semibold' href="#about">About</a></li>
                <li className='mr-8'><a className='py-2 px-4 text-lg font-semibold' href="#project">Projects</a></li>
                <li className='mr-8'><a className='py-2 px-4 text-lg font-semibold' href="#contact">Contact me</a></li>
            </ul>
        </nav>
    </section>
  )
}

export default Header
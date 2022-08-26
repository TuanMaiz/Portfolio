import React, {useState} from 'react'
import TypeAnimation from 'react-type-animation';
import './Hero.css'
import background from '../assets/img/1.png'
import astranout from '../assets/img/astranout.png'
import {FacebookOutlined, InstagramOutlined, MailOutlined} from '@ant-design/icons';

const steps = [
    'Front-end Developer', 2000, 
]
function Hero() {
  return (
    <section id='hero' className='z-0 relative inset-x-0 top-0'>
        <img src={background} alt="Background about galaxy" />
        {/* <video id="video1" className='video' src={Video1} autoPlay loop muted></video> */}
        <div className='hero__text z-10 font-mono text-white absolute inset-y-1/3 left-32'>
            <p className='text-2xl'>Mai Chấn Tuấn</p>
            <p className='text-4xl font-mono text-white '> I am {' '}
                <TypeAnimation
                    cursor={true}
                    sequence={steps}
                    repeat={Infinity}
                    wrapper="b"/>
            </p>
            <p className='contact text-lg'>Contact me!</p>
            <ul className='hero__social-icons mt-4'>
              <li className='inline mr-2'><a className='text-xl' href="https://www.facebook.com/profile.php?id=100010599103429" target='_blank'><FacebookOutlined className='icon-social'/></a></li>
              <li className='inline mr-2'><a className='text-xl' href="https://www.instagram.com/tuan.mai_159/" target='_blank'><InstagramOutlined className='icon-social'/></a></li>
              <li className='inline mr-2'><a className='text-xl' href="mailto: tuanmai1509work@gmail.com" target='_blank'><MailOutlined className='icon-social'/></a></li>
            </ul>
        </div>
        <img className="astranout absolute  right-60" src={astranout}  alt="Picture about an astranout"/>
    </section>
  )
}

export default Hero
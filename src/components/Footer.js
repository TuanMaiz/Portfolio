import React from 'react'
import {FacebookOutlined, InstagramOutlined, MailOutlined} from '@ant-design/icons';
function Footer() {
  return (
    <section id="footer" className="bg-neutral-800 h-fit p-10 text-white text-base flex justify-between items-center">
        <p>Copyright</p>
        <ul className=''>
            <p>Let's connect</p>
            <li className='inline mr-2'><a className='text-xl' href="https://www.facebook.com/profile.php?id=100010599103429" target='_blank'><FacebookOutlined className='icon-social'/></a></li>
            <li className='inline mr-2'><a className='text-xl' href="https://www.instagram.com/tuan.mai_159/" target='_blank'><InstagramOutlined className='icon-social'/></a></li>
            <li className='inline mr-2'><a className='text-xl' href="mailto: tuanmai1509work@gmail.com" target='_blank'><MailOutlined className='icon-social'/></a></li>
        </ul>
    </section>
  )
}

export default Footer

import { useState } from 'react';
import Link from '../Link/Link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const NavBar = () => {
  const [open , setOpen] = useState(false);
      const routes = [
        {
          path: '/',
          name: 'Home',
          id: 'home-route'
        },
        {
          path: '/about',
          name: 'About',
          id: 'about-route'
        },
        {
          path: '/services',
          name: 'Services',
          id: 'services-route'
        },
        {
          path: '/contact',
          name: 'Contact',
          id: 'contact-route'
        },
        {
          path: '*',
          name: 'NotFound',
          id: 'not-found-route'
        }
      ];


    return (
        <nav className='p-8'>
          <div className='text-2xl md:hidden' 
          onClick={()=>setOpen(!open)}>
            {
              open=== true ? <AiOutlineClose ></AiOutlineClose> : <AiOutlineMenu ></AiOutlineMenu>
            }
            
          
          </div> 
          <ul className={`md:flex absolute md:static duration-1000 bg-amber-900 p-5 ${open? 'top-16' : '-top-60'}`}>  {
                routes.map(route => <Link key={route.id} route = {route}></Link>)
            }</ul>
        </nav>
    );
};

export default NavBar;
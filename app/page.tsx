'use client'

import Home from './Home/page';
import Profile from './profile/page';
import Projects from './projects/page';
import Skills from './skills/page';
import Contact from './contact/page';

import { Element } from 'react-scroll'

export default function Scrolling() {
  return (
    <>
        <Element name='home' className='h-screen'>
          <Home />
        </Element>
        <Element name='profile' className='h-screen'>
          <Profile />
        </Element>
        <Element name='projects' className='h-screen'>
          <Projects />
        </Element>
        <Element name='skills' className='h-screen'>
          <Skills />
        </Element>
        <Element name='contact' className='h-screen'>
          <Contact />
        </Element>
    </>
  );
}

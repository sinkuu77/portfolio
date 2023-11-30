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
        <Element name='profile' className='min-h-full mb-[300px]'>
          <Profile />
        </Element>
        <Element name='projects' className='min-h-full'>
          <Projects />
        </Element>
        <Element name='skills' className='min-h-full mb-[300px]'>
          <Skills />
        </Element>
        <Element name='contact' className='min-h-full'>
          <Contact />
        </Element>
    </>
  );
}

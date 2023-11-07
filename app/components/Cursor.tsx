'use client'
import {gsap} from 'gsap'
import { useEffect } from 'react'

export default function Cursor() { 
    useEffect(() => {
        const cursor = document.getElementById('cursor')
        const links = document.querySelectorAll('a')
        const cursorText = document.querySelector('.cursor-text') as HTMLElement | null

        const onMouseMove = (event: any) => {
            const {clientX, clientY} = event;
            gsap.to(cursor, {x:clientX, y:clientY})
        }

        const onMouseEnterLink = (event: any) => {
            const link = event.target;
            if(link.classList.contains('view') && cursorText) {
                gsap.to(cursor, {scale: 4})
                cursorText.style.display = 'block'
            }
            else {
                gsap.to(cursor, {scale: 4})
        }
    }

        const onMouseLeaveLink = (event: any) => {
            if(cursorText) {
                gsap.to(cursor, {scale: 1})
                cursorText.style.display = 'none'
            }
        }

        links.forEach((link) => {
            link.addEventListener('mouseenter', onMouseEnterLink)
            link.addEventListener('mouseleave', onMouseLeaveLink)
        })
        document.addEventListener('mousemove', onMouseMove)
    })
    return (
        <div id='cursor' className='fixed top-5 left-5 w-4 h-4 rounded-full z-10 mix-blend-difference p-2.5 flex justify-center items-center bg-amber-200'>
            <span className='cursor-text cursor-size font-bold tracking-normal hidden'>
                View
            </span>
        </div>
    )
}
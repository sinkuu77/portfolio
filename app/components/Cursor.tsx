'use client'
import {gsap} from 'gsap'
import { useEffect } from 'react'

export default function Cursor() { 
    useEffect(() => {
        const cursor = document.getElementById('cursor')
        const pdfContainer = document.getElementById('pdf-container')
        const links = document.querySelectorAll('a')
        const cursorText = document.querySelector('.cursor-text') as HTMLElement | null
        const cursorTextCV = document.querySelector('.cursor-text-cv') as HTMLElement | null


        const onMouseMove = (event: MouseEvent) => {
            const {clientX, clientY} = event;
            gsap.to(cursor, {x:clientX, y:clientY})
        }

        const onMouseEnterLink = (event: MouseEvent) => {
            const link = event.target as HTMLElement;
            if(link && link.classList.contains('view') && cursorText) {
                gsap.to(cursor, {scale: 4})
                cursorText.style.display = 'block'
            } else {
                gsap.to(cursor, {scale: 4})
        }
    }

        const onMouseLeaveLink = () => {
            if(cursorText) {
                gsap.to(cursor, {scale: 1})
                cursorText.style.display = 'none'
            } 
        }
        
        const onMouseEnterPDFContainer = () => {
            if(cursorTextCV) {
                gsap.to(cursor, {scale: 4})
                cursorTextCV.style.display = 'block'
            }
        }

        const onMouseLeavePDFContainer = () => {
            if(cursorTextCV) {
                gsap.to(cursor, {scale: 1})
                cursorTextCV.style.display = 'none'
            }
        }

        links.forEach((link) => {
            link.addEventListener('mouseenter', onMouseEnterLink)
            link.addEventListener('mouseleave', onMouseLeaveLink)
        })
        document.addEventListener('mousemove', onMouseMove)
        pdfContainer?.addEventListener('mouseenter', onMouseEnterPDFContainer)
        pdfContainer?.addEventListener('mouseleave', onMouseLeavePDFContainer)
    })
    return (
        <div id='cursor' className='fixed top-5 left-5 w-4 h-4 rounded-full z-10 mix-blend-difference p-2.5 flex justify-center items-center bg-amber-200'>
            <span className='cursor-text cursor-size font-bold tracking-normal hidden'>
                View
            </span>
            <span className='cursor-text-cv cursor-size font-bold tracking-normal hidden'>
                CV
            </span>
        </div>
    )
}
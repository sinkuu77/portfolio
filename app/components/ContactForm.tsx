'use client'

import React, { useState, FormEvent, useRef } from 'react';
import emailjs from 'emailjs-com';


export default function ContactForm() { 
    const form = useRef<HTMLFormElement>(null);
    const [submissionStatus, setSubmissionStatus] = useState('');

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const currentForm = form.current;
    if(currentForm === null) return;

    emailjs.sendForm('service_s4g2q6p', 'template_8ktvrrh', currentForm, 'TpnOmxd2BIHBgGIC1')
        .then((result) => {
            console.log(result.text);
            setSubmissionStatus('success')
        }, (error) => {
            console.log(error.text);
            setSubmissionStatus('error')
        });
        e.currentTarget.reset()
        setSubmissionStatus('')
    };
    return (
        <div className='flex flex-col justify-center items-center p-12'>
            <form  ref={form} onSubmit={sendEmail}>
                <div className='flex flex-col gap-2 text-gray-700 w-[650px] md:w-[300px]'>
                    <label className='text-2xl md:text-xl' htmlFor='name'>Nom</label>
                    <input type='text' id='name' name='name' className='rounded h-[40px] p-2' required/>
                </div>
                <div className='flex flex-col gap-2 text-gray-700 w-[650px] md:w-[300px]'>
                    <label className='text-2xl md:text-xl' htmlFor='email'>E-mail</label>
                    <input type='email' id='email' name='email' className='rounded h-[40px] p-2'  required/>
                </div>
                <div className='flex flex-col gap-2 text-gray-700 w-[650px] md:w-[300px]'>
                    <label className='text-2xl md:text-xl' htmlFor='message'>Message</label>
                    <textarea id='message' name='message' rows={10} cols={30} className='rounded p-2' required></textarea>
                </div>
                <div className='flex items-center justify-center m-10'>
                    <button className='text-2xl px-10 py-1.5 rounded-full email-btn md:text-base'>
                        Envoyer
                    </button>
                </div>
            </form>
            {submissionStatus === 'success' && (
            <p className='text-gray-700 fade-out'>Message envoyé avec succès!</p>)}
            {submissionStatus === 'error' && (
            <p className='text-red-500 fade-out'>Une erreur s&apos;est produite. Veuillez réessayer.</p>)}
        </div>
    )
}
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'

const Contact = () => {

    const [result,setResult]=useState("");

    const onSubmit =async (event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        setResult("sending...");
        const formData = new FormData(event.target as HTMLFormElement);

        formData.append("access_key", "2ecc1d8c-618d-4b8a-ab8d-63d55b5a0eb7");

        const response =await fetch("https://api.web3forms.com/submit", {
            method:"POST",
            body:formData
        });

        const data=await response.json();

        if(data.success){
            setResult("Form submitted successfully");
            (event.target as HTMLFormElement).reset();
        }else{
            console.log("Error", data);
            setResult(data.message);
        }

    }

  return (
    <div id="contact" className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] br-no-repeat bg-center bg-[length:90%_auto]">
    <h4 className="text-center mb-1 text-lg font-Ovo">Connect with me</h4>
    <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>

    <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I&apos;d love to hear from you! If you have any questions, comments, or feedBack, please use the form below.
      </p>


<form className='max-w-2xl mx-auto' onSubmit={onSubmit}>
    <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
        <input className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' type="text" placeholder='Enter your name' required name='name' />
        <input className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' type="email" placeholder='Enter your email' required name='email' />
    </div>
    <textarea className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6" rows={6} placeholder='Enter your message' required name='message'></textarea>

    <button type="submit" className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500'>Submit now <Image src={assets.right_arrow_white} alt="" className='w-4' /></button>

    <p className='mt-4'>{result}</p>

</form>


</div>
  )
}

export default Contact

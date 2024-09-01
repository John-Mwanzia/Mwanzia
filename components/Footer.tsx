'use client';

import sendActions from '@/app/actions/sendActions';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';
import toast from 'react-hot-toast';
import SendButton from './SendButton';
import { FaGithub } from 'react-icons/fa';
import { CiLinkedin } from 'react-icons/ci';
import { FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  const ref = useRef<HTMLFormElement>(null);
  const handleSubmit = async (formData: FormData) => {
    ref.current!.reset();
    const name = formData.get('name') as string;
    const email = formData.get('Email') as string;
    const message = formData.get('Message') as string;

    const res = await sendActions(name, email, message);
    if (res.status === 'success') {
      toast.success(res.message);
    } else {
      toast.error(res.message);
    }
  };

  return (
    <>
      <footer className="container mt-12  " id="Contact">
        <h1 className="mb-6 mt-12 text-center  text-4xl font-semibold">
          Contact
        </h1>
        <p className="text-lg text-white sm:text-center">
          Let's Connect and Build Something Great Together
        </p>
        <div className="lg:mx-20 border-b-[1px] border-blue-500 py-3 "></div>
        <div className="relative flex flex-wrap items-start justify-around gap-4   pb-8">
          <div className="mt-8 px-4">
            <p className="text-3xl font-bold ">Get in touch</p>
            <form action={handleSubmit} ref={ref}>
              <div className="mt-8 flex flex-wrap gap-4">
                <input
                  className="w-full  rounded-xl border border-primary bg-transparent p-2 text-white shadow-md shadow-primary outline-none sm:w-auto"
                  placeholder="Name..."
                  required
                  name="name"
                />
                <input
                  className="w-full  rounded-xl border border-primary bg-transparent p-2 text-white shadow-md shadow-primary outline-none sm:w-auto"
                  placeholder="Email..."
                  required
                  type="Email"
                  name="Email"
                />
              </div>
              <textarea
                id="message"
                className=" mt-4 w-full  rounded-xl border border-primary bg-transparent p-2.5 text-sm text-white shadow-md shadow-primary outline-none"
                placeholder="Your message..."
                name="Message"
              ></textarea>
              <SendButton />
            </form>
          </div>

          <div className=" mt-8 flex flex-col items-start text-left ">
            <h2 className="text-xl ">Quick Contact</h2>
            <div className="mb-4 mt-6">
              <h3 className="text-blue-500">johnmwanzia277@gmail.com</h3>
            </div>
            <div className="">
              <h3 className="text-blue-500"> 0707979247</h3>
            </div>
          </div>
          <div className='text-left'> 
            <h2 className="mt-8 ">Socials</h2>
            <div className="mt-4 flex flex-row justify-around gap-4 ">
              <Link href="https://github.com/John-Mwanzia" target="blank">
                <FaGithub className="text-3xl text-blue-500" />
              </Link>
              <Link href="https://twitter.com/John_Mwanzia144" target="blank">
                <FaXTwitter className="text-3xl text-blue-500" />
              </Link>
              <Link href="">
                <CiLinkedin className="text-3xl text-blue-500" target="blank" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

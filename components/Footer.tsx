'use client';

import sendActions from '@/app/actions/sendActions';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';
import toast from 'react-hot-toast';
import SendButton from './SendButton';

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
      <footer data-aos="fade-up" className="mt-12 w-screen" id="Contact">
        <h1 className="mb-6 mt-12 text-center  text-4xl font-semibold">
          Contact
        </h1>
        <p className="text-lg text-white sm:text-center">
        Let's Connect and Build Something Great Together
        </p>
        <div className="mt-10 flex flex-wrap justify-around gap-4 rounded-tl-3xl rounded-tr-3xl bg-blue-900 pb-8">
          <div className="mt-8 px-4">
            <p className="text-6xl font-bold ">Get in touch</p>
            <form action={handleSubmit} ref={ref}>
              <div className="mt-8 flex flex-wrap gap-4">
                <input
                  className="w-full rounded-md bg-white p-2 text-black outline-none sm:w-auto"
                  placeholder="Name..."
                  required
                  name="name"
                />
                <input
                  className="w-full rounded-md bg-white p-2 text-black outline-none sm:w-auto"
                  placeholder="Email..."
                  required
                  type='Email'
                  name="Email"
                />
              </div>
              <textarea
                id="message"
                className=" mt-4 w-full rounded-lg bg-white p-2.5 text-sm text-black outline-none"
                placeholder="Your message..."
                name="Message"
              ></textarea>
              <SendButton />
            </form>
          </div>

          <div className=" mt-8 flex  flex-col items-center">
            <p className="text-4xl text-red-500">Quick Access</p>
            <div className="mt-6 flex flex-1 flex-wrap  justify-center gap-x-4">
              <h3 className="text-xl">Email :</h3>
              <h3 className="text-xl">johnmwanzia277@gmail.com</h3>
            </div>
            <div className="flex flex-1  flex-wrap gap-4">
              <h3 className="text-xl">Phone No : </h3>
              <h3 className="text-xl"> 0707979247</h3>
            </div>
          </div>
          <div className="mt-8 flex flex-row justify-around gap-4  lg:flex-col">
            <Link href="https://github.com/John-Mwanzia">
              <Image
                src="/github-icon.svg"
                width={66}
                height={57}
                alt="github icon"
              />
            </Link>
            <Link href="https://twitter.com/John_Mwanzia144">
              <Image
                src="/twitter-icon.svg"
                width={66}
                height={57}
                alt="github icon"
              />
            </Link>
            <Link href="">
              <Image
                src="/linkedin.svg"
                width={66}
                height={57}
                alt="github icon"
              />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}

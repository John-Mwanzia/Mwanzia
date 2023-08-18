import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <>
             <footer data-aos="fade-up" className="mt-20" id="Contact">
        <h1 className="text-center text-4xl font-semibold  mt-12 mb-10">
          Contact
        </h1>
        <div className="flex flex-wrap justify-around pb-8 gap-4 mt-10 bg-blue-900 rounded-tl-3xl rounded-tr-3xl">
          <div className="mt-8 px-4">
            <p className="text-6xl font-bold ">Get in touch</p>
            <form>
              <div className="flex flex-wrap gap-4 mt-8">
                <input
                  className="rounded-md p-2 outline-none text-black bg-white w-full sm:w-auto"
                  placeholder="Name..."
                  required
                />
                <input
                  className="rounded-md p-2 outline-none text-black bg-white w-full sm:w-auto"
                  placeholder="Email..."
                  required
                />
              </div>
              <textarea
                id="message"
                className=" mt-4 p-2.5 w-full text-sm rounded-lg outline-none text-black bg-white"
                placeholder="Your message..."
              ></textarea>
              <button className=" button-color float-right p-2 pr-4 pl-4 mb-6 rounded-lg font-semibold  ">
                Submit
              </button>
            </form>
          </div>

          <div className=" flex flex-col  items-center mt-8">
            <p className="text-4xl text-red-500">Quick Access</p>
            <div className="flex flex-wrap justify-center flex-1  gap-x-4 mt-6">
              <h3 className="text-xl">Email :</h3>
              <h3 className="text-xl">johnmwanzia277@gmail.com</h3>
            </div>
            <div className="flex gap-4  flex-wrap flex-1">
              <h3 className="text-xl">Phone No : </h3>
              <h3 className="text-xl"> 0707979247</h3>
            </div>
          </div>
          <div className="flex flex-row gap-4 justify-around lg:flex-col  mt-8">
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
  )
}

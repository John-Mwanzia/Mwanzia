import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div>
      <h1 className="text-center text-4xl font-semibold  mt-12 mb-10">
        Contact
      </h1>
      <div className="flex flex-wrap justify-around gap-4 mt-10 bg-blue-900 rounded-tl-3xl rounded-tr-3xl">
        <div className="mt-8">
          <p className="text-6xl font-bold ">Get in touch</p>
          <form>
            <div className="flex flex-wrap gap-4 mt-8">
              <input
                className="rounded-md p-2 outline-none text-black"
                placeholder="Name..."
                required
              />
              <input
                className="rounded-md p-2 outline-none text-black"
                placeholder="Email..."
                required
              />
            </div>
            <textarea
              id="message"
              className=" mt-4 p-2.5 w-full text-sm rounded-lg outline-none text-black"
              placeholder="Your message..."
            ></textarea>
            <button className=" button-color float-right p-2 pr-4 pl-4 mb-6 rounded-lg font-semibold  ">
              Submit
            </button>
          </form>
        </div>

        <div className=" flex flex-col items-center mt-8">
          <p className="text-4xl text-red-500">Quick Access</p>
          <div className="flex gap-4 mt-6">
            <h2>Email :</h2> <h3>johnmwanzia277@gmail.com</h3>
          </div>
          <div className="flex gap-4">
            {" "}
            <h2>Phone No : </h2> <h3> 0707979247</h3>
          </div>
        </div>
        <div className="flex flex-row gap-4 justify-around sm:flex-col   mt-8">
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
    </div>
  );
}

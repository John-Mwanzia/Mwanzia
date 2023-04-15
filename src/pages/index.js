import Image from "next/image";
import { Inter } from "next/font/google";
import Canvas from "@/Components/Canvas";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  ">
      <div className=" wrapper inline-flex  items-center justify-between w-full mt-7 mb-8 ">
        <div className="flex space-x-4">
          <p className="text-4xl font-bold text-yellow-600">John</p>
          <p className="text-4xl mr-4 font-bold text-red-500">Kioko</p>
        </div>

        <div className="inline-flex space-x-32 items-center justify-end">
          <p className="text-xl text-white">Home</p>
          <p className="text-xl text-white">About</p>
          <p className="text-xl text-white">Services</p>
          <p className="text-xl text-white">Contact</p>
        </div>
      </div>

      <div className="relative" style={{ width: 1116, height: 407 }}>
        <div>
          <p
            className="absolute text-4xl font-semibold text-white"
            style={{ left: 3, top: 101 }}
          >
            Hello
          </p>
          <p
            className="absolute text-6xl font-bold text-white"
            style={{ left: 3, top: 145 }}
          >
            I’m a web developer
          </p>
          <p
            className="absolute text-base font-semibold text-white"
            style={{ width: 438, left: 0, top: 219 }}
          >
            with passion for creating responsive, user-friendly websites. With
            expertise in front-end and back-end development, I deliver
            high-quality work that exceeds client expectations.
          </p>
        </div>
        <Canvas />
        <Image
          className="absolute right-0 top-0"
          src="/young-freelancer.svg"
          alt="young freelancer programmer working on laptop"
          width={419}
          height={407}
        />
        <div className="w-40 h-14 absolute" style={{ left: 3, top: 304 }}>
          <button className="flex items-center justify-center flex-1 h-full py-3 pl-9 pr-10 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 rounded-3xl">
            <p className="text-2xl text-white">Hire me</p>
          </button>
        </div>
      </div>
    </main>
  );
}

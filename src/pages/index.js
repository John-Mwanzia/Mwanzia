import Image from "next/image";
import { Inter } from "next/font/google";
import Canvas from "@/Components/Canvas";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
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
          {/* <Canvas /> */}
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

        <div>
          <p className=" text-4xl font-semibold text-white mt-8">About Me</p>
          <div className="inline-flex items-center mt-8 flex-wrap">
            <div>
              <Image src="/my-pic.svg" alt="my pic" width={465} height={370} />
            </div>

            <div>
              <p className=" max-w-xl font-semibold text-white ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum! Provident similique accusantium nemo autem.
                Veritatis
              </p>
              <button className=" flex-1 py-4 pl-4 pr-3 border-2 rounded-3xl border-indigo-900 text-2xl font-semibold text-white mt-4">
                Download CV
              </button>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-4xl font-semibold text-white mt-10 mb-20 underline">
            Projects
          </h1>
          <div className="flex flex-wrap mt-12">
            <div>
              <Image
                src="/images/mobile.png"
                alt="project-pic-item1"
                width={450}
                height={370}
              />
            </div>
            <div>
              <Image
                src="/images/mobile.png"
                alt="project-pic-item1"
                width={450}
                height={370}
              />
            </div>
            <div>
              <Image
                src="/images/mobile.png"
                alt="project-pic-item1"
                width={450}
                height={370}
              />
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h1 className="text-4xl font-semibold text-white mt-12 mb-10 ">
            Services
          </h1>
          <div className="flex flex-wrap gap-4 ">
            <div className="ground-color p-4 text-center rounded-lg">
              <h1 className="text-3xl mb-4">Web Development</h1>
              <p className="max-w-sm">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia,molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum
              </p>
            </div>
            <div className="ground-color p-4 text-center rounded-lg">
              <h1 className="text-3xl mb-4">Video editing</h1>
              <p className="max-w-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia,molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum
              </p>
            </div>
            <div className="ground-color p-4 text-center rounded-lg">
              <h1 className="text-3xl mb-4">Figma Web design</h1>
              <p className="max-w-sm">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia,molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h1 className="text-4xl font-semibold text-white mt-12 mb-10 ">
            SKILL SET
          </h1>
          <div className="flex flex-wrap  gap-10">
            <div>
              <h1 className="text-center mb-8 front-back-color">Frontend</h1>
              <Image
                src="/skill-set.svg"
                alt="skill set image"
                width={578}
                height={586}
              />
            </div>
            <div>
              <h1 className="text-center mb-10 front-back-color">Backend</h1>
              <div className="flex flex-wrap gap-4 items-center">
                <Image
                  src="/nodejs.svg"
                  alt="nodejs icon"
                  width={143}
                  height={132}
                />
                <h1>Nodejs</h1>
              </div>
              <div className="flex flex-wrap gap-4 items-center mt-8 ">
                <Image
                  src="/mongodb.svg"
                  alt="nodejs icon"
                  width={143}
                  height={132}
                />
                <h1>Mongodb</h1>
              </div>
              <div className="flex flex-wrap gap-4 items-center mt-8">
                <Image
                  src="/mongoose-icon.svg"
                  alt="nodejs icon"
                  width={143}
                  height={132}
                />
                <h1>Mongoose</h1>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </main>

      <footer className="mt-20">
        <div className="flex flex-wrap justify-around gap-4 mt-10 bg-blue-900 rounded-tl-3xl rounded-tr-3xl">
          <div className="mt-8">
            <p className="text-6xl font-bold text-white">Get in touch</p>
            <form>
              <div className="flex gap-4 mt-8">
                <input className="rounded-md p-2 outline-none text-black" placeholder="Name..." required />
                <input className="rounded-md p-2 outline-none text-black" placeholder="Email..." required />
              </div>
              <textarea
                id="message"
                className=" mt-4 p-2.5 w-full text-sm rounded-lg outline-none text-black"
                placeholder="Your message..."
              ></textarea>
              <button className=" button-color float-right p-2 pr-4 pl-4  rounded-lg font-semibold text-white ">
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
          <div className="mt-8">
            <Image
              src="/github-icon.svg"
              width={66}
              height={57}
              alt="github icon"
            />
            <Image
              src="/twitter-icon.svg"
              width={66}
              height={57}
              alt="github icon"
            />
            <Image
              src="/linkedin.svg"
              width={66}
              height={57}
              alt="github icon"
            />
          </div>
        </div>
      </footer>
    </>
  );
}

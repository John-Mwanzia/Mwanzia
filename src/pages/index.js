import Image from "next/image";
import { Inter } from "next/font/google";
import Canvas from "@/Components/Canvas";
import Link from "next/link";
import Footer from "@/Components/Footer";
import { Navbar, Text } from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const collapseItems = [
    "Home",
    "About",
    "Services",
    "Contact",
  ];
  return (
    <>
      <main className="flex min-h-screen flex-col items-center  ">
        <div className="  inline-flex  items-center justify-between w-full mt-7 mb-8 ">
        <Navbar isBordered variant="sticky">
        <Navbar.Toggle showIn="xs" />
        <Navbar.Brand
         
        >
        
          <Text b color="inherit" >
          <div className="flex space-x-4">
            <p className="text-4xl font-bold text-yellow-600">John</p>
            <p className="text-4xl mr-4 font-bold text-red-500">Kioko</p>
          </div>
          </Text>
        </Navbar.Brand>
      
        <Navbar.Content
          hideIn="xs"
          className="inline-flex space-x-24 items-center justify-end flex-wrap"
        >
          <Navbar.Link href="#" className="text-xl">Home</Navbar.Link>
          <Navbar.Link href="#" className="text-xl">About</Navbar.Link>
          <Navbar.Link href="#" className="text-xl">Services</Navbar.Link>
          <Navbar.Link href="#" className="text-xl">Contact</Navbar.Link>
        </Navbar.Content>
        
     
        
        <Navbar.Collapse>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem
              key={item}
            >
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href="#"
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
        </div>

        <div className="flex flex-wrap gap-32 mt-40" >
          <div>
           <div>
           <p className=" text-4xl font-semibold  mb-8">Hello</p>
            <p className=" text-6xl font-bold mb-4">
              I’m a web developer
            </p>
            <p className=" max-w-xl  text-base font-semibold ">
              with passion for creating responsive, user-friendly websites. With
              expertise in front-end and back-end development, I deliver
              high-quality work that exceeds client expectations.
            </p>
           </div>
           
            <button className=" flex-1 mt-5  py-3 pl-9 pr-10 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 rounded-3xl text-2xl ">
              Hire me
            </button>
          </div>
          {/* <Canvas /> */}
          <div>
            <Image
              className=""
              src="/young-freelancer.svg"
              alt="young freelancer programmer working on laptop"
              width={419}
              height={407}
            />
          </div>

         
        </div>

        <div>
          <p className=" text-4xl font-semibold  mt-8">About Me</p>
          <div className="flex items-center mt-8 flex-wrap gap-28">
            <div>
              <Image src="/my-pic.svg" alt="my pic" width={465} height={370} />
            </div>

            <div>
              <p className=" max-w-xl font-semibold  ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum! Provident similique accusantium nemo autem.
                Veritatis
              </p>
              <button className=" flex-1 py-3 pl-4 pr-4 border-2 rounded-3xl border-indigo-900 text-2xl font-semibold mt-4">
                Download CV
              </button>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-4xl font-semibold mt-10 mb-20 underline">
            Projects
          </h1>
          <div className="flex flex-wrap mt-12">
            <div>
              <Image
                src="/images/mobile.png"
                alt="project-pic-item1"
                width={430}
                height={350}
              />
            </div>
            <div>
              <Image
                src="/images/mobile.png"
                alt="project-pic-item1"
                width={430}
                height={350}
              />
            </div>
            <div>
              <Image
                src="/images/mobile.png"
                alt="project-pic-item1"
                width={430}
                height={350}
              />
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h1 className="text-4xl font-semibold mt-12 mb-10 ">
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
          <h1 className="text-4xl font-semibold mt-12 mb-10 ">
            SKILL SET
          </h1>
          <div className="flex flex-wrap gap-64 justify-center">
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

      <footer  className="mt-20">
        <Footer />
      </footer>
    </>
  );
}

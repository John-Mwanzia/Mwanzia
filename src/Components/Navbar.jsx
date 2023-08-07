import React from "react";
import { Navbar, Text } from "@nextui-org/react";
import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function NavBar(props) {
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
  const { collapseItems } = props;
  return (
    <div>
      <div className="  inline-flex  items-center justify-between w-full xl:w-[88%] mt-7 mb-8 ">
        <Navbar isBordered className="relative">
          <Navbar.Toggle showIn="xs" />
          <Navbar.Brand>
            <Text b color="inherit">
              <div
                className="flex space-x-4"
                data-aos="fade-down"
                data-aos-delay="300"
              >
                <p className="text-4xl font-bold text-yellow-600">John</p>
                <p className="text-4xl mr-4 font-bold text-red-500">Kioko</p>
              </div>
            </Text>
          </Navbar.Brand>

          <Navbar.Content
            hideIn="xs"
            className="inline-flex space-x-12 lg:space-x-24  items-center justify-end flex-wrap "
          >
            <Navbar.Link
              href="#Home"
              data-aos-delay="400"
              data-aos="fade-down"
              className="text-xl"
              onClick={() => {
                animateScroll.scrollTo(
                  document.getElementById("Home").offsetTop
                );
              }}
            >
              Home
            </Navbar.Link>
            <Navbar.Link
              href="#About"
              data-aos-delay="500"
              data-aos="fade-down"
              className="text-xl"
              onClick={() => {
                animateScroll.scrollTo(
                  document.getElementById("About").offsetTop
                );
              }}
            >
              About
            </Navbar.Link>
            <Navbar.Link
              href="#Services"
              data-aos-delay="600"
              data-aos="fade-down"
              className="text-xl"
              onClick={() => {
                animateScroll.scrollTo(
                  document.getElementById("Services").offsetTop
                );
              }}
            >
              Services
            </Navbar.Link>
            <Navbar.Link
              href="#Contact"
              data-aos-delay="700"
              data-aos="fade-down"
              className="text-xl"
              onClick={() => {
                animateScroll.scrollTo(
                  document.getElementById("Contact").offsetTop
                );
              }}
            >
              Contact
            </Navbar.Link>
          </Navbar.Content>

          <Navbar.Collapse className="mt-4">
            {collapseItems.map((item, index) => (
              <Navbar.CollapseItem key={item.Href}>
                <Link
                  color="inherit"
                  css={{
                    minWidth: "100%",
                  }}
                  href={item.Href}
                  onClick={() => {
                    animateScroll.scrollTo(
                      document.getElementById(`${item.id}`).offsetTop
                    );
                  }}
                >
                  {item.name}
                </Link>
              </Navbar.CollapseItem>
            ))}
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}

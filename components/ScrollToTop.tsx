'use client'

import { useEffect, useState } from "react";
import { ArrowUp, ArrowUpFromLine, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

export default function ScrollToTop() {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="overflow-hidden">
  

      <Button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed size-12 right-4 bottom-4  z-50 bg-primary pulse-shadow hover:bg-purple-900 text-white rounded-full ${
          backToTop ? "opacity-100" : "opacity-0"
        } transition-opacity`}
      >
        <ArrowUp  />
      </Button>
    </div>
  );
}

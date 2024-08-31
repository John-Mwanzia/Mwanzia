'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import clsx from 'clsx';
import { useInView } from 'framer-motion';
import Container from './Container';
import { RiNextjsFill } from 'react-icons/ri';
import { SiTailwindcss, SiTypescript } from 'react-icons/si'; // Importing Next.js and other icons
import { FaPython, FaNodeJs, FaPhp } from 'react-icons/fa'; // Importing Python icon
import { IoLogoJavascript } from 'react-icons/io';
import { RiReactjsFill } from 'react-icons/ri';
import { BiLogoMongodb } from 'react-icons/bi';

interface Skill {
  name: string;
  description: string;
  icon?: React.ComponentType;
}

const skills: Array<Skill> = [
  {
    name: 'JavaScript',
    description:
      'Expert in JavaScript with a deep understanding of ES6+ features.',
    icon: IoLogoJavascript,
  },
  {
    name: 'React',
    description: 'Proficient in building dynamic web applications using React.',
    icon: RiReactjsFill,
  },
  {
    name: 'TypeScript',
    description:
      'Strong knowledge of TypeScript for building type-safe applications.',
    icon: SiTypescript,
  },
  {
    name: 'Node.js',
    description:
      'Experienced in server-side development with Node.js and Express.',
    icon: FaNodeJs,
  },
  {
    name: 'Next.js',
    description:
      'Specialized in developing full-stack applications with Next.js.',
    icon: RiNextjsFill,
  },
  {
    name: 'Tailwind CSS',
    description: 'Skilled in creating responsive designs using Tailwind CSS.',
    icon: SiTailwindcss,
  },
  {
    name: 'MongoDB',
    description: 'Knowledgeable in NoSQL database management with MongoDB.',
    icon: BiLogoMongodb,
  },
  {
    name: 'PHP',
    description: 'Experienced in server-side scripting with PHP .',
    icon: FaPhp,
  },
  {
    name: 'Python',
    description:
      'Proficient in Python programming for backend and data science tasks.',
    icon: FaPython,
  },
  {
    name: 'Machine Learning',
    description:
      'Knowledgeable in implementing machine learning models and algorithms.',
  },
];

function SkillCard({
  name,
  description,
  className,
  ...props
}: Omit<React.ComponentPropsWithoutRef<'figure'>, keyof Skill> & Skill) {
  let animationDelay = useMemo(() => {
    let possibleAnimationDelays = [
      '0s',
      '0.1s',
      '0.2s',
      '0.3s',
      '0.4s',
      '0.5s',
    ];
    return possibleAnimationDelays[
      Math.floor(Math.random() * possibleAnimationDelays.length)
    ];
  }, []);

  return (
    <figure
      className={clsx(
        'animate-fade-in rounded-3xl bg-black p-6 text-white opacity-0 shadow-lg shadow-white/20',
        className,
      )}
      style={{ animationDelay }}
      {...props}
    >
      <blockquote>
        <div className="flex items-center justify-center gap-3">
          <div>
            <p className="text-xl font-semibold ">{name}</p>
          </div>
          <div className=" flex h-11 w-11 items-center justify-center rounded-full bg-gray-800 text-4xl text-blue-500">
            {props.icon && <props.icon />}
          </div>
        </div>
        <p className="mt-3 text-base leading-7">{description}</p>
      </blockquote>
    </figure>
  );
}

function splitArray<T>(array: Array<T>, numParts: number) {
  let result: Array<Array<T>> = [];
  for (let i = 0; i < array.length; i++) {
    let index = i % numParts;
    if (!result[index]) {
      result[index] = [];
    }
    result[index].push(array[i]);
  }
  return result;
}

function SkillColumn({
  skills,
  className,
  skillClassName,
  msPerPixel = 0,
}: {
  skills: Array<Skill>;
  className?: string;
  skillClassName?: (skillIndex: number) => string;
  msPerPixel?: number;
}) {
  let columnRef = useRef<React.ElementRef<'div'>>(null);
  let [columnHeight, setColumnHeight] = useState(0);
  let duration = `${columnHeight * msPerPixel}ms`;

  useEffect(() => {
    if (!columnRef.current) {
      return;
    }

    let resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current?.offsetHeight ?? 0);
    });

    resizeObserver.observe(columnRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={columnRef}
      className={clsx('animate-marquee space-y-8 py-4', className)}
      style={{ '--marquee-duration': duration } as React.CSSProperties}
    >
      {skills.concat(skills).map((skill, skillIndex) => (
        <SkillCard
          key={skillIndex}
          aria-hidden={skillIndex >= skills.length}
          className={skillClassName?.(skillIndex % skills.length)}
          {...skill}
        />
      ))}
    </div>
  );
}

function SkillGrid() {
  let containerRef = useRef<React.ElementRef<'div'>>(null);
  let isInView = useInView(containerRef, { once: true, amount: 0.4 });
  let columns = splitArray(skills, 3);
  let column1 = columns[0];
  let column2 = columns[1];
  let column3 = splitArray(columns[2], 2);

  console.log('Is in view:', isInView);

  return (
    <div
      ref={containerRef}
      className="relative z-50 -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView && (
        <>
          <SkillColumn
            skills={[...column1, ...column3.flat(), ...column2]}
            skillClassName={(skillIndex) =>
              clsx(
                skillIndex >= column1.length + column3[0].length && 'md:hidden',
                skillIndex >= column1.length && 'lg:hidden',
              )
            }
            msPerPixel={10}
          />
          <SkillColumn
            skills={[...column2, ...column3[1]]}
            className="hidden md:block"
            skillClassName={(skillIndex) =>
              skillIndex >= column2.length ? 'lg:hidden' : ''
            }
            msPerPixel={15}
          />
          <SkillColumn
            skills={column3.flat()}
            className="hidden lg:block"
            msPerPixel={10}
          />
        </>
      )}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black via-gray-900 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black via-gray-900 to-transparent" />
    </div>
  );
}

export function SkillsSection() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="pb-16 pt-20 sm:pb-24 sm:pt-32"
    >
      <Container>
        <h2
          id="skills-title"
          className="text-3xl font-medium tracking-tight text-white sm:text-center"
        >
          My Skills & Expertise
        </h2>
        <p className="mt-2 text-lg text-white sm:text-center">
          A showcase of the technical skills and tools I excel in.
        </p>
        <div className="z-50">
          <SkillGrid />
        </div>
      </Container>
    </section>
  );
}

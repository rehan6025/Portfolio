"use client";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import Svg from "./Svg";
import { Calendar, Cross, Github, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectType {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  techs: string[];
  image: string;
  date: string;
  links: {
    live: string;
    code: string;
  };
}

const ProjectsSection = () => {
  const [opened, setOpened] = useState<string>("");
  const [openedProject, setOpenedProject] = useState<ProjectType | null>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outsideClickHandler = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setOpened("");
        setOpenedProject(null);
      }
    };

    document.addEventListener("mousedown", outsideClickHandler);

    return () => {
      document.removeEventListener("mousedown", outsideClickHandler);
    };
  }, [opened]);

  useEffect(() => {
    if (opened) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [opened]);

  const projects = [
    {
      id: "project-1",
      title: "SketchRoom - Real-time Drawing Platform",
      shortDesc:
        "A real-time collaborative drawing platform with an infinite canvas, letting users create together seamlessly",
      fullDesc:
        "SketchRoom is a real-time collaborative drawing platform with an infinite canvas, enabling multiple users to draw, erase, zoom, and create together seamlessly in a clean interface.",
      techs: ["TypeScript", "Next.js", "Node.js", "Postgres", "WebSockets"],
      image: "/p1.png",
      date: "Aug 2025",
      links: {
        live: "",
        code: "https://github.com/rehan6025/draw-app",
      },
    },
    {
      id: "project-2",
      title: "Syncify – Playlist Transfer App",
      shortDesc:
        "Transfer Spotify playlists to YouTube effortlessly with just a few clicks using fuzzy matching algorithms.",
      fullDesc:
        "Syncify is a playlist transfer app that allows users to seamlessly move their Spotify playlists to YouTube. Users can connect their Spotify and YouTube accounts via OAuth2, select a playlist, and transfer it with 98% accuracy.",
      techs: ["React.js", "Redux", "Express.js", "OAuth2", "Algorithms"],
      image: "/p2.png",
      date: "May 2025",
      links: {
        live: "https://sync-ify.vercel.app/",
        code: "https://github.com/rehan6025/syncify-frontend",
      },
    },
    {
      id: "project-3",
      title: "URL Shortner",
      shortDesc:
        "A secure URL shortener with custom links, authentication, and persistent storage",
      fullDesc:
        "A full-featured URL shortener that allows users to create, manage, and customize short links. Authenticated users can view their previously shortened URLs, add custom slugs (if available), and enjoy persistent storage using MongoDB. The app ensures security and uniqueness through nanoid and efficient backend validation.",
      techs: ["React.js", "Node.js", "MongoDB", "Nanoid"],
      image: "/p3.png",
      date: "July 2025",
      links: {
        live: "https://rurll.vercel.app/",
        code: "https://github.com/rehan6025/URL-SHORTNER",
      },
    },
    {
      id: "project-4",
      title: "JobBoard – Job Posting & Application Portal",
      shortDesc:
        "A full-stack job portal where employers can post jobs, manage applications, and candidates can apply and track their status.",
      fullDesc:
        "JobBoard is a modern job management platform that connects employers and job seekers. Employers can create job postings, review applications, change statuses, and view applicant resumes directly via provided links. Job seekers can browse openings, apply, and track the status of their submissions in real time.",
      techs: [
        "TypeScript",
        "React.js",
        "Redux",
        "TailwindCSS",
        "Express.js",
        "MongoDB",
      ],
      image: "/p4.png",
      date: "September 2025",
      links: {
        live: "",
        code: "https://github.com/rehan6025/Job-board-app",
      },
    },
  ];

  return (
    <section id="projects" className="group relative">
      <h1 className="flex items-center text-2xl font-semibold mb-4">
        Projects
        <Link href="#projects">
          <Svg />
        </Link>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => {
          return (
            <div
              key={project.id}
              className=" w-full h-100 rounded-lg cursor-pointer  transition-all flex-col flex justify-between  text-white font-semibold border border-border  hover:-translate-y-1 duration-400 overflow-hidden hover:shadow-lg shadow-[#b89ef9]"
              onClick={() => {
                setOpened(project.id);
                setOpenedProject(project);
              }}
            >
              <div className="h-[60%] overflow-hidden ">
                <Image
                  src={project.image}
                  width={700}
                  height={700}
                  alt="project preview"
                  className="hover:scale-105 transition-all duration-300"
                />
              </div>
              <div className="bg-zinc-900 p-4 ">
                <h2 className="text-lg overflow-hidden whitespace-nowrap text-ellipsis">
                  {project.title}
                </h2>
                <p className="text-zinc-400 text-sm overflow-hidden text-ellipsis line-clamp-2 mb-4">
                  {project.shortDesc}
                </p>
                <div className="bottom-0 flex space-x-2 ">
                  {project.techs?.map((tech, index) => (
                    <div
                      className="text-xs py-1 px-2 text-black bg-zinc-500 rounded-full"
                      key={index}
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
        {/* <div
                    id="project-1"
                    className="bg-blue-500 w-50 h-30"
                    onClick={(e) => {
                        setOpened(e.target.id);
                        console.log(opened);
                    }}
                ></div> */}

        {opened && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-lg  z-20 flex items-center justify-center ">
            <div
              ref={popupRef}
              className="bg-zinc-950 w-11/12 flex flex-col pl-4 pr-4 pb-3 max-w-4xl border border-[#b89ef9]  rounded-xl  shadow-2xl shadow-[#b89ef9] overflow-auto"
            >
              <div className="border-b border-border p-4">
                <div className="flex justify-between mb-2">
                  <h1 className="text-2xl font-semibold mt-1">
                    {openedProject?.title}
                  </h1>
                  <button
                    onClick={() => {
                      setOpened("");
                    }}
                  >
                    <Cross className="cursor-pointer opacity-50 hover:opacity-100 rotate-45" />
                  </button>
                </div>
                <div className="flex space-x-2  items-center">
                  <p className="text-xs border border-border inline p-1">
                    Web Application
                  </p>
                  <p className="text-border flex items-center      text-sm">
                    <Calendar className=" pr-1  " />
                    {openedProject?.date}
                  </p>
                </div>
              </div>
              <div className="flex justify-center mt-2 mb-2 overflow-hidden">
                <Image
                  src={openedProject?.image || ""}
                  alt="project preview"
                  width={600}
                  height={600}
                  className="hover:scale-105 transition-all duration-300"
                />
              </div>
              <div className="mt-6">
                <p className="text-gray-400">{openedProject?.fullDesc}</p>
                <div className="mt-5">
                  <p className="font-semibold">Technologies</p>
                  <div className="flex space-x-2 mt-2 border-b border-border pb-5">
                    {openedProject?.techs?.map((tech, index) => (
                      <span
                        className="text-xs py-1 px-3 text-white bg-zinc-900 hover:bg-zinc-800 rounded-full "
                        key={index}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex mt-4 space-x-2 ">
                <Link
                  href={openedProject?.links.live ?? "#"}
                  target="_blank"
                  className=" text-xs bg-white text-gray-900 flex items-center justify-center p-2 rounded-full space-x-1 cursor-pointer"
                >
                  <Globe className="w-4 h-4 mr-2" />
                  Visit Website
                </Link>
                <Link
                  href={openedProject?.links.code ?? "#"}
                  target="_blank"
                  className=" text-xs bg-white text-gray-900 flex items-center p-2 rounded-full space-x-1 cursor-pointer"
                >
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;

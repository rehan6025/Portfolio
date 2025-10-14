"use client";
import React, { ReactEventHandler, useEffect, useRef, useState } from "react";
import Svg from "./Svg";
import { Cross } from "lucide-react";
import clsx from "clsx";

const ProjectsSection = () => {
    const [opened, setOpened] = useState<string>("");
    const popupRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const outsideClickHandler = (e: MouseEvent) => {
            if (
                popupRef.current &&
                !popupRef.current.contains(e.target as Node)
            ) {
                setOpened("");
            }
        };

        document.addEventListener("mousedown", outsideClickHandler);

        return () => {
            document.removeEventListener("mousedown", outsideClickHandler);
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
            techs: [
                "TypeScript",
                "Next.js",
                "Node.js",
                "Postgres",
                "WebSockets",
            ],
        },
        { id: "project-2", title: "project2", shortDesc: "this is project 2 " },
        { id: "project-3", title: "project3", shortDesc: "this is project 3 " },
        { id: "project-4", title: "project4", shortDesc: "this is project 4 " },
    ];

    return (
        <section id="projects" className="group relative">
            <h1 className="flex items-center text-2xl font-semibold mb-4">
                Projects
                <a href="#projects">
                    <Svg />
                </a>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project) => {
                    return (
                        <div
                            key={project.id}
                            className=" w-full h-100 rounded-lg cursor-pointer  transition-all flex-col flex justify-between  text-white font-semibold border border-border hover:-translate-y-1 duration-300  "
                            onClick={() => setOpened(project.id)}
                        >
                            <div className="h-[60%]">image</div>
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
                    <div className="fixed inset-0 bg-black/40 z-10 flex items-center justify-center">
                        <div
                            ref={popupRef}
                            className="bg-white w-11/12 max-w-4xl h-5/6"
                        >
                            <button
                                onClick={() => {
                                    setOpened("");
                                }}
                            >
                                <Cross className="text-black rotate-45" />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProjectsSection;

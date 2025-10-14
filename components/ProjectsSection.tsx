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
        { id: "project-1", title: "project1", desc: "this is project 1 " },
        { id: "project-2", title: "project2", desc: "this is project 2 " },
        { id: "project-3", title: "project3", desc: "this is project 3 " },
        { id: "project-4", title: "project4", desc: "this is project 4 " },
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
                            <div className="bg-zinc-900 p-4">section</div>
                            <div className="p-4 bottom-0">Technology</div>
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

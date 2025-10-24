"use client";
import { Github } from "lucide-react";
import React, { useState } from "react";

const Navbar = () => {
    const [hovered, setHovered] = useState(false);
    return (
        <div className="p-3 bg-[#37353E]/40 bg-contain backdrop-blur-lg rounded-full flex gap-5  ">
            <a
                className="w-10 h-10 bg-zinc-800/60 flex items-center justify-center rounded-full hover:-translate-y-2 transition-all duration-300"
                href="https://github.com/rehan6025"
                target="_blank"
            >
                <Github className="w-6 h-6 " />
            </a>
            <a
                className="w-10 h-10 bg-zinc-800/60 flex items-center justify-center rounded-full hover:-translate-y-2 transition-all duration-300"
                href="https://x.com/rehan6025"
                target="_blank"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-twitter-x w-5 h-5 "
                    viewBox="0 0 16 16"
                >
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                </svg>
            </a>
            <a
                className="w-10 h-10 bg-zinc-800/60 flex items-center justify-center rounded-full hover:-translate-y-2 transition-all duration-300"
                href="https://www.linkedin.com/in/rehan6025/"
                target="_blank"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-linkedin w-5 h-5"
                    viewBox="0 0 16 16"
                >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
            </a>
            <div
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="mr-2 ml-1 flex items-center gap-2"
            >
                <div className="relative flex items-center justify-center">
                    <span className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-green-500 opacity-75"></span>
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500 shadow-[0_0_8px_2px_rgba(34,197,94,0.6)]"></span>
                </div>

                <span
                    className={` ml-1 overflow-hidden text-sm  font-medium  whitespace-nowrap text-white transition-all duration-800 ease-in-out ${
                        hovered ? "max-w-xs opacity-100" : "max-w-0 opacity-0"
                    }`}
                >
                    Open to Work
                </span>
            </div>
        </div>
    );
};

export default Navbar;

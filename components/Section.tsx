import React from "react";
import Svg from "./Svg";

interface SectionProps {
    title: string;
    children: React.ReactNode;
}

function Section({ title, children }: SectionProps) {
    return (
        <section id="about" className="group">
            <div className="text-xl sm:text-2xl font-semibold text-gray-100 mb-4 flex items-center">
                {title}
                <a
                    href={`/#${title}`}
                    className="opacity-0 group-hover:opacity-100 transition-all"
                >
                    <Svg />
                </a>
            </div>
            <div className="ml-1">
                <p className=" text-base sm:text-lg leading-relaxed text-gray-300">
                    {children}
                </p>
            </div>
        </section>
    );
}

export default Section;

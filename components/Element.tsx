import React from "react";
import Magnet from "./Magnet";

interface Props {
    Path: string;
    Name: string;
}

const Element = ({ Path, Name }: Props) => {
    return (
        <Magnet
            padding={3}
            magnetStrength={6}
            className="hover:scale-102 transition-all hover:rotate-2 "
        >
            <div className=" flex items-center w-fit border border-border p-1 px-2 cursor-pointer leading-none hover:shadow-md shadow-[#b89ef9]">
                <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    role="img"
                    viewBox="0 0 24 24"
                    className="h-5 w-5 mr-2"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d={`${Path}`}></path>
                </svg>
                {Name}
            </div>
        </Magnet>
    );
};

export default Element;

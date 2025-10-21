import React from "react";
import Svg from "./Svg";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface connectOptInterface {
    platform: string;
    url: string;
    username: string;
}

const connectOptions: connectOptInterface[] = [
    {
        platform: "Github",
        url: "https://github.com/rehan6025",
        username: "@rehan6025",
    },
    {
        platform: "Linkedin",
        url: "https://www.linkedin.com/in/rehan6025/",
        username: "@rehan6025",
    },
    {
        platform: "X",
        url: "https://x.com/rehan6025",
        username: "@rehan6025",
    },
    {
        platform: "Leetcode",
        url: "https://leetcode.com/u/rehan_999/",
        username: "@rehan_999",
    },
    {
        platform: "Email",
        url: "mailto:rehanahmed9690@gmail.com",
        username: "rehanahmed9690@gmail.com",
    },
];

const Connect = () => {
    return (
        <section id="connect" className="group relative">
            <h1 className="flex items-center text-2xl font-semibold mb-4">
                Connect
                <Link href="#connect">
                    <Svg />
                </Link>
            </h1>

            <div className="flex flex-col space-y-2">
                {connectOptions.map((option, index) => (
                    <div className="flex gap-4" key={index}>
                        <p className="max-w-[6ch] w-full">{option.platform}</p>
                        <Link
                            target="_blank"
                            href={option.url}
                            className="flex items-center text-gray-400 hover:text-gray-200 decoration-1 underline transition-all  decoration-gray-950 hover:decoration-gray-200 gap-2  underline-offset-4"
                        >
                            {option.username}
                            <ArrowUpRight className="w-4 h-4 " />
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Connect;

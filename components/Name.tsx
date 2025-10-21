"use client";
import React from "react";
import { motion } from "motion/react";

const Name = () => {
    return (
        <motion.div
            whileHover={{ rotateX: 90 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="[transform-style:preserve-3d]  relative"
        >
            <div className=" w-full h-full  backface-hidden">
                <h1 className="text-3xl font-semibold tracking-wide leading-normal">
                    Rehan Ahmed
                </h1>
                <div className="text-xl text-gray-400 tracking-normal">
                    <div>Software Engineer</div>
                    <div>Full Stack Developer</div>
                </div>
            </div>
        </motion.div>
    );
};

export default Name;

import Image from "next/image";
import LightRays from "@/components/LightRays";
import Section from "@/components/Section";
import Svg from "@/components/Svg";
import { motion } from "motion/react";
import Element from "@/components/Element";
import SkillStack from "@/components/SkillStack";
import ProjectsSection from "@/components/ProjectsSection";
import PopupPractise from "@/components/PopupPractise";

export default function Home() {
    return (
        <div className="relative w-full min-h-screen">
            <LightRays
                raysOrigin="top-center"
                raysColor="#b89ef9"
                raysSpeed={1.3}
                lightSpread={1}
                rayLength={1.5}
                followMouse={true}
                mouseInfluence={0.1}
                noiseAmount={0.1}
                distortion={0.05}
            />
            <main className="relative bg-transparent">
                <div className="container px-4 sm:px-6 md:px-8 py-6 max-w-7xl mx-auto">
                    <div className="w-full mx-auto bg-transparent max-w-4xl py-4 px-4 sm:py-10 sm:px-6 space-y-7 sm:space-y-16">
                        <div className="space-y-4">
                            <div className="flex justify-between w-full items-center">
                                <div className="flex gap-x-4">
                                    <div className="flex items-center">
                                        <Image
                                            src="/CrpMyImage.jpg"
                                            alt="rehan-ahmed-image"
                                            width={70}
                                            height={70}
                                        />
                                    </div>
                                    <div>
                                        <h1 className="text-3xl font-semibold tracking-wide leading-normal">
                                            Rehan Ahmed
                                        </h1>
                                        <div className="text-xl text-gray-400 tracking-normal">
                                            <div>Software Engineer</div>
                                            <div>Full Stack Developer</div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="hover:animate-pulse group relative">
                                        <a
                                            className="cursor-pointer tracking-wide text-gray-300 "
                                            target="_blank"
                                            href="https://drive.google.com/file/d/1J3WccJnPsaiKOExOvcf-Anwek26kulbi/view?usp=sharing"
                                        >
                                            <p className="group-hover:text-gray-100 transition-all ">
                                                My Resume
                                            </p>
                                            <span
                                                className=" pointer-events-none absolute left-0 bottom-0 h-[2px] w-full bg-gray-100
           origin-center scale-x-0 transition-transform duration-300 ease-out
           group-hover:scale-x-100"
                                            ></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-[1px] bg-border shrink-0"></div>
                        </div>

                        <div className="space-y-12">
                            <Section title="About">
                                Computer Science student at Institute of
                                Technology and Management, Dehradun. Learning
                                how to build and maintain web applications
                            </Section>
                            <Section title="Present">YO</Section>
                        </div>

                        <section id="stack">
                            <h2 className="text-lg flex items-center">
                                Tech-Stack
                                <a
                                    href="/#stack"
                                    className="opacity-100 transition-all"
                                >
                                    <Svg />
                                </a>
                            </h2>
                            <SkillStack />
                        </section>
                        <ProjectsSection />
                    </div>
                </div>
            </main>
        </div>
    );
}

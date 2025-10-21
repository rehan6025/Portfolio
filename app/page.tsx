import Image from "next/image";
import LightRays from "@/components/LightRays";
import Section from "@/components/Section";
import Svg from "@/components/Svg";
import { motion } from "motion/react";
import SkillStack from "@/components/SkillStack";
import ProjectsSection from "@/components/ProjectsSection";
import Connect from "@/components/Connect";
import DecryptedText from "@/components/DecryptedText";
import Profile from "@/components/Profile";

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
                    <div className="w-full mx-auto bg-transparent max-w-4xl pt-4 px-4 sm:pt-10 sm:px-6 space-y-7 sm:space-y-16">
                        <div className="space-y-4">
                            <div className="flex justify-between w-full items-center">
                                <Profile />
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
                                how to build and maintain web applications.
                            </Section>
                            <Section title="Present">
                                Developing and maintaining systems, and actively
                                seeking opportunities to grow as a full stack
                                developer.
                            </Section>
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
                        <Connect />
                        <div
                            className="flex items-center justify-center"
                            style={{
                                backgroundClip: "text",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                color: "transparent",
                                backgroundImage:
                                    "linear-gradient(rgb(255, 255, 255), rgb(0,0,0))",
                            }}
                        >
                            <DecryptedText
                                text="REHAN AHMED"
                                speed={70}
                                maxIterations={90}
                                sequential={true}
                                revealDirection="start"
                                animateOn="both"
                                characters="ABCDEFエィ゛もアゲゴバパボホユヨリモルゥォヾオエィㄿㄶㆂㆊㆉㆈㆇㆆㅃㅌㅍㅎㅘㅗㅖㅠLMNOPQRSTUVWXYZअयरऱलवशषसह"
                                className="text-7xl sm:text-nowrap text-center uppercase cursor-pointer"
                                encryptedClassName="text-7xl sm:text-nowrap text-center uppercase cursor-pointer"
                            />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

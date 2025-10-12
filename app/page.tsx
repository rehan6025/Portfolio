import Image from "next/image";
import LightRays from "@/components/LightRays";
import Section from "@/components/Section";

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
                                Technology and Management, Dehardun. Learning
                                how to build and maintain web applications
                            </Section>
                            <Section title="Present">YO</Section>
                        </div>

                        <section id="stack">
                            <h2 className="text-lg flex items-center">
                                Tech-Stack
                                <a
                                    href="/#about"
                                    className="opacity-100 transition-all"
                                >
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        stroke-width="0"
                                        viewBox="0 0 448 512"
                                        className="ml-2 h-3 w-3 text-gray-400 hover:text-gray-200"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M440.667 182.109l7.143-40c1.313-7.355-4.342-14.109-11.813-14.109h-74.81l14.623-81.891C377.123 38.754 371.468 32 363.997 32h-40.632a12 12 0 0 0-11.813 9.891L296.175 128H197.54l14.623-81.891C213.477 38.754 207.822 32 200.35 32h-40.632a12 12 0 0 0-11.813 9.891L132.528 128H53.432a12 12 0 0 0-11.813 9.891l-7.143 40C33.163 185.246 38.818 192 46.289 192h74.81L98.242 320H19.146a12 12 0 0 0-11.813 9.891l-7.143 40C-1.123 377.246 4.532 384 12.003 384h74.81L72.19 465.891C70.877 473.246 76.532 480 84.003 480h40.632a12 12 0 0 0 11.813-9.891L151.826 384h98.634l-14.623 81.891C234.523 473.246 240.178 480 247.65 480h40.632a12 12 0 0 0 11.813-9.891L315.472 384h79.096a12 12 0 0 0 11.813-9.891l7.143-40c1.313-7.355-4.342-14.109-11.813-14.109h-74.81l22.857-128h79.096a12 12 0 0 0 11.813-9.891zM261.889 320h-98.634l22.857-128h98.634l-22.857 128z"></path>
                                    </svg>
                                </a>
                            </h2>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
}

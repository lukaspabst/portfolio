"use client";

import { motion } from "framer-motion";
import HeroScene from "@/components/3d/HeroScene";
import { ArrowRight, Github, Mail } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            <HeroScene />

            <div className="z-10 container px-4 md:px-6 relative">
                <div className="flex flex-col items-center text-center space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-4"
                    >
                        <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-sm md:text-base text-primary backdrop-blur-md">
                            Software Developer &bull; Creative Technologist
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
                            Hi, ich bin <span className="text-gradient">Lukas Pabst</span>.
                        </h1>
                        <p className="max-w-[700px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                            Ein Softwareentwickler aus Mühlhausen/Thüringen. Derzeit tätig bei Primeo Energie AG, Sissach.
                            Experte in Java, Spring Boot und modernen Web-Technologien.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row gap-4 min-[400px]:gap-6"
                    >
                        <a
                            href="#projects"
                            className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        >
                            Projekte ansehen
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex h-12 items-center justify-center rounded-md border border-white/10 bg-white/5 px-8 text-sm font-medium shadow-sm transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 backdrop-blur-sm"
                        >
                            Kontaktieren
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="flex gap-6 text-gray-400"
                    >
                        <a href="https://github.com/lukaspabst" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                            <Github className="h-6 w-6" />
                        </a>
                        <a href="https://www.xing.com/profile/Lukas_Pabst102" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-6 w-6"
                            >
                                <path d="M16.35 3.55h-3.13L8.93 11.2 5.07 4.6H1.9l5.05 8.7L1.5 21l3.35-.05 5.2-9.25 5.15 9.25h3.35l-6.22-11.23z" />
                            </svg>
                        </a>
                        <a href="mailto:lukas.pabst.business@outlook.de" className="hover:text-white transition-colors">
                            <Mail className="h-6 w-6" />
                        </a>
                    </motion.div>
                </div>
            </div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
            >
                <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
                    <div className="w-1 h-3 bg-white/50 rounded-full" />
                </div>
            </motion.div>
        </section>
    );
}

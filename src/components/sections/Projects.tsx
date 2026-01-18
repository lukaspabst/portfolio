"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Star, GitFork } from "lucide-react";
import { useState } from "react";

// Mock data - normally fetched from GitHub API
const projects = [
    {
        name: "Customer-Service-Platform",
        description: "A comprehensive backend system for Primeo Energie's customer service operations, handling complex data flows and ticketing.",
        language: "Java",
        stars: 12,
        forks: 3,
        url: "https://github.com/lukaspabst/customer-service",
        tech: ["Spring Boot", "PostgreSQL", "Kafka"]
    },
    {
        name: "Portfolio-V2",
        description: "High-performance personal portfolio with 3D elements and Next.js App Router.",
        language: "TypeScript",
        stars: 45,
        forks: 8,
        url: "https://github.com/lukaspabst/portfolio",
        tech: ["Next.js", "Three.js", "Tailwind"]
    },
    {
        name: "Finance-Aggregator",
        description: "REST API service aggregating financial data for real-time analysis.",
        language: "Java",
        stars: 8,
        forks: 1,
        url: "https://github.com/lukaspabst/finance-aggregator",
        tech: ["Java", "Spring Security", "Docker"]
    }
];

export default function Projects() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section id="projects" className="py-24 relative w-full bg-black/20">
            <div className="container px-4 md:px-6 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A selection of my recent work in software development, focusing on scalable backends and immersive frontends.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onHoverStart={() => setHoveredIndex(index)}
                            onHoverEnd={() => setHoveredIndex(null)}
                            className="group relative h-full"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative h-full glass-panel p-8 rounded-2xl border border-white/5 bg-[#0a0a0a] flex flex-col hover:-translate-y-2 transition-transform duration-300">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-white/5 rounded-xl">
                                        <Github className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="flex gap-4 text-gray-400 text-sm font-mono">
                                        <span className="flex items-center gap-1">
                                            <Star className="w-3 h-3" /> {project.stars}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <GitFork className="w-3 h-3" /> {project.forks}
                                        </span>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                    {project.name}
                                </h3>
                                <p className="text-gray-400 text-sm mb-6 flex-grow">
                                    {project.description}
                                </p>

                                <div className="space-y-4">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map(t => (
                                            <span key={t} className="text-xs px-2 py-1 rounded bg-white/5 border border-white/5 text-gray-300">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-between w-full py-3 px-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-sm font-medium"
                                    >
                                        View Repository
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <a
                        href="https://github.com"
                        target="_blank"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors border-b border-primary/30 pb-1"
                    >
                        View all repositories on GitHub <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </section>
    );
}

function ArrowRight({ className }: { className?: string }) {
    return (
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
            className={className}
        >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
        </svg>
    );
}

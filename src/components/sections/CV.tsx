"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";

const experience = [
    {
        company: "Primeo Energie AG",
        role: "Software Developer",
        period: "09.2024 - Present",
        location: "Sissach, Switzerland",
        description: "Developing modern energy solutions and software systems.",
    },
    {
        company: "Finanz-Data GmbH",
        role: "Software Developer",
        period: "Pre 09.2024",
        location: "Gotha, Germany",
        description: "Backend development with Java, Spring Boot, and REST services.",
    },
];

const education = [
    {
        school: "Hochschule (University of Applied Sciences)",
        degree: "Bachelor Wirtschaftsinformatik",
        period: "Completed",
        description: "Focus on Software Engineering and Business Processes.",
    },
];

const bio = {
    birth: "23.03.2001 (24 Years)",
    hobbies: ["Kraftsport", "Coding", "Reading"],
    languages: ["Deutsch (Native)", "English (Fluent)"],
};

export default function CV() {
    return (
        <section id="cv" className="py-24 relative w-full">
            <div className="container px-4 md:px-6 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Experience & Education</h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div className="flex items-center gap-3 mb-6">
                            <Briefcase className="text-primary w-6 h-6" />
                            <h3 className="text-2xl font-semibold">Work Experience</h3>
                        </div>

                        {experience.map((job, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="glass-panel p-6 rounded-xl relative overflow-hidden group hover:glow transition-all duration-300"
                            >
                                <div className="absolute top-0 left-0 w-1 h-full bg-linear-to-b from-primary to-transparent" />
                                <div className="flex justify-between items-start mb-2">
                                    <h4 className="text-xl font-bold text-white">{job.company}</h4>
                                    <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">{job.period}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                                    <MapPin className="w-3 h-3" />
                                    {job.location}
                                </div>
                                <h5 className="text-lg text-secondary mb-2">{job.role}</h5>
                                <p className="text-gray-300">{job.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="space-y-12">
                        <div className="space-y-8">
                            <div className="flex items-center gap-3 mb-6">
                                <GraduationCap className="text-primary w-6 h-6" />
                                <h3 className="text-2xl font-semibold">Education</h3>
                            </div>
                            {education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="glass-panel p-6 rounded-xl relative hover:glow transition-all"
                                >
                                    <h4 className="text-xl font-bold text-white mb-1">{edu.school}</h4>
                                    <div className="text-secondary mb-2">{edu.degree}</div>
                                    <p className="text-gray-300">{edu.description}</p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="glass-panel p-8 rounded-2xl bg-white/5">
                            <h3 className="text-xl font-bold mb-4">Personal Info</h3>
                            <ul className="space-y-4 text-gray-300">
                                <li className="flex items-center gap-3">
                                    <Calendar className="text-primary w-4 h-4" />
                                    <span>Born: {bio.birth}</span>
                                </li>
                                <li className="flex flex-wrap gap-2">
                                    {bio.languages.map(lang => (
                                        <span key={lang} className="px-3 py-1 bg-white/10 rounded-full text-sm">{lang}</span>
                                    ))}
                                </li>
                                <li className="flex flex-wrap gap-2 pt-2">
                                    <span className="text-gray-400 text-sm w-full">Hobbies:</span>
                                    {bio.hobbies.map(hobby => (
                                        <span key={hobby} className="px-3 py-1 border border-primary/30 text-primary rounded-full text-sm">{hobby}</span>
                                    ))}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

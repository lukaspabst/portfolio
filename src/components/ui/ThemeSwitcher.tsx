"use client";

import * as React from "react";
import { Moon, Sun, Palette } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

const colors = [
    { name: "violet", value: "#7c3aed" },
    { name: "blue", value: "#2563eb" },
    { name: "rose", value: "#e11d48" },
    { name: "orange", value: "#ea580c" },
    { name: "green", value: "#16a34a" },
];

export function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();
    const [activeColor, setActiveColor] = React.useState("violet");
    const [isOpen, setIsOpen] = React.useState(false);

    // Load saved color on mount
    React.useEffect(() => {
        const savedColor = localStorage.getItem("theme-brand") || "violet";
        setActiveColor(savedColor);
        document.documentElement.setAttribute("data-brand", savedColor);
    }, []);

    const changeColor = (color: string) => {
        setActiveColor(color);
        localStorage.setItem("theme-brand", color);
        document.documentElement.setAttribute("data-brand", color);
    };

    return (
        <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
            <div className="relative">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-3 rounded-full bg-card border border-border shadow-md hover:bg-secondary/10 transition-colors"
                    aria-label="Customize theme"
                >
                    <Palette className="w-5 h-5 text-foreground" />
                </button>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            className="absolute top-14 right-0 bg-card border border-border p-4 rounded-xl shadow-xl flex flex-col gap-4 min-w-[200px]"
                        >
                            <div className="space-y-2">
                                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Mode</span>
                                <div className="flex bg-secondary/10 rounded-lg p-1">
                                    <button
                                        onClick={() => setTheme("light")}
                                        className={`flex-1 flex items-center justify-center p-2 rounded-md transition-all ${theme === 'light' ? 'bg-background shadow-sm' : 'text-muted-foreground'}`}
                                    >
                                        <Sun className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={() => setTheme("dark")}
                                        className={`flex-1 flex items-center justify-center p-2 rounded-md transition-all ${theme === 'dark' ? 'bg-background shadow-sm' : 'text-muted-foreground'}`}
                                    >
                                        <Moon className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Color</span>
                                <div className="flex flex-wrap gap-2">
                                    {colors.map((c) => (
                                        <button
                                            key={c.name}
                                            onClick={() => changeColor(c.name)}
                                            className={`w-8 h-8 rounded-full border-2 transition-transform hover:scale-110 ${activeColor === c.name ? 'border-foreground' : 'border-transparent'}`}
                                            style={{ backgroundColor: c.value }}
                                            aria-label={`Set theme to ${c.name}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

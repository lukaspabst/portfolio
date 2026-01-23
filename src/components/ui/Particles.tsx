"use client";

import { useEffect, useRef } from "react";

export default function Particles() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let particles: { x: number; y: number; dx: number; dy: number; size: number }[] = [];
        let particleColor = "rgba(0, 0, 0, 0.1)"; // Default

        const updateColor = () => {
            const computedStyle = getComputedStyle(document.documentElement);
            const primary = computedStyle.getPropertyValue('--primary').trim();
            const isDark = document.documentElement.classList.contains('dark');

            // If primary is available, use it with transparency. 
            // Otherwise fallback based on mode.
            if (primary) {
                // Convert hex to rgb for opacity handling if needed, 
                // but if it's already a color, we can just set globalAlpha.
                // However, canvas fillStyle string is easier.
                particleColor = primary;
            } else {
                particleColor = isDark ? "#ffffff" : "#000000";
            }

            // Update global alpha base on mode
            ctx.globalAlpha = isDark ? 0.2 : 0.1;
        };

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
            updateColor();
        };

        const initParticles = () => {
            particles = [];
            const count = Math.floor((canvas.width * canvas.height) / 15000);
            for (let i = 0; i < count; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    dx: (Math.random() - 0.5) * 0.5,
                    dy: (Math.random() - 0.5) * 0.5,
                    size: Math.random() * 2 + 1,
                });
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = particleColor;

            particles.forEach((p) => {
                p.x += p.dx;
                p.y += p.dy;

                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        // Initial setup
        resize();
        updateColor();
        draw();

        // Watch for theme changes
        const observer = new MutationObserver(() => {
            updateColor();
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class", "data-brand"],
        });

        window.addEventListener("resize", resize);

        return () => {
            window.removeEventListener("resize", resize);
            observer.disconnect();
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-[-1] pointer-events-none"
        />
    );
}


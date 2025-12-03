import React, { useEffect, useState, useRef } from 'react';

const CustomCursor = () => {
    const [particles, setParticles] = useState([]);
    const prevPositionRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        let frameId;
        let lastTime = Date.now();
        let particleId = 0;

        const updateCursor = (e) => {
            const now = Date.now();

            // Calculate direction based on mouse movement
            const dx = e.clientX - prevPositionRef.current.x;
            const dy = e.clientY - prevPositionRef.current.y;
            const angle = Math.atan2(dy, dx) * (180 / Math.PI);

            prevPositionRef.current = { x: e.clientX, y: e.clientY };

            // Add new DNA segment every 20ms
            if (now - lastTime > 20) {
                const newParticle = {
                    x: e.clientX,
                    y: e.clientY,
                    id: particleId++,
                    angle: angle, // Direction when created
                    twist: (particleId * 30) % 360, // Helix twist
                    opacity: 1,
                    scale: 1,
                    createdAt: now
                };

                setParticles(prevParticles => {
                    const updatedParticles = [...prevParticles, newParticle]
                        .filter(p => now - p.createdAt < 1000)
                        .map(p => {
                            const age = now - p.createdAt;
                            return {
                                ...p,
                                opacity: Math.max(0, 1 - age / 1000),
                                scale: Math.max(0.5, 1 - age / 2000)
                            };
                        });
                    return updatedParticles;
                });

                lastTime = now;
            }
        };

        const animate = () => {
            const now = Date.now();
            setParticles(prevParticles =>
                prevParticles
                    .filter(p => now - p.createdAt < 1000)
                    .map(p => {
                        const age = now - p.createdAt;
                        return {
                            ...p,
                            opacity: Math.max(0, 1 - age / 1000),
                            scale: Math.max(0.5, 1 - age / 2000)
                        };
                    })
            );
            frameId = requestAnimationFrame(animate);
        };

        document.addEventListener('mousemove', updateCursor);
        frameId = requestAnimationFrame(animate);

        return () => {
            document.removeEventListener('mousemove', updateCursor);
            cancelAnimationFrame(frameId);
        };
    }, []);

    return (
        <div className="cursor-trail-container">
            {particles.map((particle, index) => {
                // Calculate positions for the two DNA strands
                const helixRadius = 8;
                const twistRad = (particle.twist * Math.PI) / 180;

                // Left strand position
                const leftX = Math.cos(twistRad) * helixRadius;
                const leftY = Math.sin(twistRad) * helixRadius;

                // Right strand position (opposite side)
                const rightX = -leftX;
                const rightY = -leftY;

                // Get previous particle for strand connections
                const prevParticle = index > 0 ? particles[index - 1] : null;
                let leftConnector = null;
                let rightConnector = null;

                if (prevParticle) {
                    const prevTwistRad = (prevParticle.twist * Math.PI) / 180;
                    const prevLeftX = Math.cos(prevTwistRad) * helixRadius;
                    const prevLeftY = Math.sin(prevTwistRad) * helixRadius;
                    const prevRightX = -prevLeftX;
                    const prevRightY = -prevLeftY;

                    // Calculate connector angles and lengths for left strand
                    const leftDx = (prevParticle.x + prevLeftX) - (particle.x + leftX);
                    const leftDy = (prevParticle.y + prevLeftY) - (particle.y + leftY);
                    const leftLength = Math.sqrt(leftDx * leftDx + leftDy * leftDy);
                    const leftAngle = Math.atan2(leftDy, leftDx) * (180 / Math.PI);

                    // Calculate connector angles and lengths for right strand
                    const rightDx = (prevParticle.x + prevRightX) - (particle.x + rightX);
                    const rightDy = (prevParticle.y + prevRightY) - (particle.y + rightY);
                    const rightLength = Math.sqrt(rightDx * rightDx + rightDy * rightDy);
                    const rightAngle = Math.atan2(rightDy, rightDx) * (180 / Math.PI);

                    leftConnector = { length: leftLength, angle: leftAngle };
                    rightConnector = { length: rightLength, angle: rightAngle };
                }

                return (
                    <div
                        key={particle.id}
                        className="dna-segment"
                        style={{
                            left: `${particle.x}px`,
                            top: `${particle.y}px`,
                            opacity: particle.opacity,
                            transform: `translate(-50%, -50%) rotate(${particle.angle}deg) scale(${particle.scale})`,
                        }}
                    >
                        {/* Left strand backbone connector */}
                        {leftConnector && (
                            <div
                                className="strand-connector"
                                style={{
                                    width: `${leftConnector.length}px`,
                                    transform: `translate(${leftX}px, ${leftY}px) rotate(${leftConnector.angle - particle.angle}deg)`,
                                    background: `linear-gradient(90deg, transparent, #00ff9d88, transparent)`,
                                    boxShadow: `0 0 4px #00ff9d66`,
                                }}
                            />
                        )}

                        {/* Right strand backbone connector */}
                        {rightConnector && (
                            <div
                                className="strand-connector"
                                style={{
                                    width: `${rightConnector.length}px`,
                                    transform: `translate(${rightX}px, ${rightY}px) rotate(${rightConnector.angle - particle.angle}deg)`,
                                    background: `linear-gradient(90deg, transparent, #00d0ff88, transparent)`,
                                    boxShadow: `0 0 4px #00d0ff66`,
                                }}
                            />
                        )}

                        {/* Left strand bead */}
                        <div
                            className="dna-bead"
                            style={{
                                transform: `translate(${leftX}px, ${leftY}px)`,
                                background: `radial-gradient(circle at 30% 30%, #00ff9ddd, #00ff9d88 40%, #00ff9d33 70%, transparent)`,
                                boxShadow: `
                                    0 0 8px #00ff9d88,
                                    0 0 15px #00ff9d44,
                                    inset -2px -2px 6px rgba(0, 0, 0, 0.3),
                                    inset 2px 2px 6px #00ff9d44
                                `,
                            }}
                        />

                        {/* Right strand bead */}
                        <div
                            className="dna-bead"
                            style={{
                                transform: `translate(${rightX}px, ${rightY}px)`,
                                background: `radial-gradient(circle at 30% 30%, #00d0ffdd, #00d0ff88 40%, #00d0ff33 70%, transparent)`,
                                boxShadow: `
                                    0 0 8px #00d0ff88,
                                    0 0 15px #00d0ff44,
                                    inset -2px -2px 6px rgba(0, 0, 0, 0.3),
                                    inset 2px 2px 6px #00d0ff44
                                `,
                            }}
                        />

                        {/* Base pair connection */}
                        <div
                            className="dna-connector"
                            style={{
                                width: `${helixRadius * 2}px`,
                                transform: `rotate(${particle.twist}deg)`,
                                background: `linear-gradient(90deg, #bd00ff44, #bd00ff88, #bd00ff44)`,
                                boxShadow: `0 0 4px #bd00ff66`,
                            }}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default CustomCursor;
import React, { useEffect, useState, useRef } from 'react';

const CustomCursor = () => {
    const [particles, setParticles] = useState([]);
    const prevPosRef = useRef({ x: 0, y: 0 });
    const lastTimeRef = useRef(Date.now());
    const particleIdRef = useRef(0);

    useEffect(() => {
        let frameId;

        const updateCursor = (e) => {
            const now = Date.now();
            if (now - lastTimeRef.current < 20) return;

            const dx = e.clientX - prevPosRef.current.x;
            const dy = e.clientY - prevPosRef.current.y;
            const angle = Math.atan2(dy, dx) * (180 / Math.PI);

            prevPosRef.current = { x: e.clientX, y: e.clientY };

            setParticles(prev => [
                ...prev.filter(p => now - p.createdAt < 1000),
                {
                    x: e.clientX,
                    y: e.clientY,
                    id: particleIdRef.current++,
                    angle,
                    twist: (particleIdRef.current * 30) % 360,
                    createdAt: now
                }
            ]);

            lastTimeRef.current = now;
        };

        const animate = () => {
            const now = Date.now();
            setParticles(prev => prev.filter(p => now - p.createdAt < 1000));
            frameId = requestAnimationFrame(animate);
        };

        document.addEventListener('mousemove', updateCursor);
        frameId = requestAnimationFrame(animate);

        return () => {
            document.removeEventListener('mousemove', updateCursor);
            cancelAnimationFrame(frameId);
        };
    }, []);

    const getOpacity = (p) => Math.max(0, 1 - (Date.now() - p.createdAt) / 1000);
    const getScale = (p) => Math.max(0.5, 1 - (Date.now() - p.createdAt) / 2000);

    return (
        <div className="cursor-trail-container">
            {particles.map((p, i) => {
                const helixRadius = 8;
                const twistRad = (p.twist * Math.PI) / 180;
                const leftX = Math.cos(twistRad) * helixRadius;
                const leftY = Math.sin(twistRad) * helixRadius;
                const rightX = -leftX;
                const rightY = -leftY;

                const prev = i > 0 ? particles[i - 1] : null;
                let leftConn = null;
                let rightConn = null;

                if (prev) {
                    const prevTwistRad = (prev.twist * Math.PI) / 180;
                    const prevLeftX = Math.cos(prevTwistRad) * helixRadius;
                    const prevLeftY = Math.sin(prevTwistRad) * helixRadius;

                    const leftDx = (prev.x + prevLeftX) - (p.x + leftX);
                    const leftDy = (prev.y + prevLeftY) - (p.y + leftY);
                    const leftLen = Math.sqrt(leftDx * leftDx + leftDy * leftDy);
                    const leftAngle = Math.atan2(leftDy, leftDx) * (180 / Math.PI);

                    const rightDx = (prev.x - prevLeftX) - (p.x + rightX);
                    const rightDy = (prev.y - prevLeftY) - (p.y + rightY);
                    const rightLen = Math.sqrt(rightDx * rightDx + rightDy * rightDy);
                    const rightAngle = Math.atan2(rightDy, rightDx) * (180 / Math.PI);

                    leftConn = { length: leftLen, angle: leftAngle };
                    rightConn = { length: rightLen, angle: rightAngle };
                }

                const opacity = getOpacity(p);
                const scale = getScale(p);

                return (
                    <div
                        key={p.id}
                        className="dna-segment"
                        style={{
                            left: `${p.x}px`,
                            top: `${p.y}px`,
                            opacity,
                            transform: `translate(-50%, -50%) rotate(${p.angle}deg) scale(${scale})`,
                        }}
                    >
                        {leftConn && (
                            <div
                                className="strand-connector"
                                style={{
                                    width: `${leftConn.length}px`,
                                    transform: `translate(${leftX}px, ${leftY}px) rotate(${leftConn.angle - p.angle}deg)`,
                                    background: 'linear-gradient(90deg, transparent, #00ff9d88, transparent)',
                                    boxShadow: '0 0 4px #00ff9d66',
                                }}
                            />
                        )}

                        {rightConn && (
                            <div
                                className="strand-connector"
                                style={{
                                    width: `${rightConn.length}px`,
                                    transform: `translate(${rightX}px, ${rightY}px) rotate(${rightConn.angle - p.angle}deg)`,
                                    background: 'linear-gradient(90deg, transparent, #00d0ff88, transparent)',
                                    boxShadow: '0 0 4px #00d0ff66',
                                }}
                            />
                        )}

                        <div
                            className="dna-bead"
                            style={{
                                transform: `translate(${leftX}px, ${leftY}px)`,
                                background: 'radial-gradient(circle at 30% 30%, #00ff9ddd, #00ff9d88 40%, #00ff9d33 70%, transparent)',
                                boxShadow: '0 0 8px #00ff9d88, 0 0 15px #00ff9d44, inset -2px -2px 6px rgba(0,0,0,0.3), inset 2px 2px 6px #00ff9d44',
                            }}
                        />

                        <div
                            className="dna-bead"
                            style={{
                                transform: `translate(${rightX}px, ${rightY}px)`,
                                background: 'radial-gradient(circle at 30% 30%, #00d0ffdd, #00d0ff88 40%, #00d0ff33 70%, transparent)',
                                boxShadow: '0 0 8px #00d0ff88, 0 0 15px #00d0ff44, inset -2px -2px 6px rgba(0,0,0,0.3), inset 2px 2px 6px #00d0ff44',
                            }}
                        />

                        <div
                            className="dna-connector"
                            style={{
                                width: `${helixRadius * 2}px`,
                                transform: `rotate(${p.twist}deg)`,
                                background: 'linear-gradient(90deg, #bd00ff44, #bd00ff88, #bd00ff44)',
                                boxShadow: '0 0 4px #bd00ff66',
                            }}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default CustomCursor;
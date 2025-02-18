import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const ParticleWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let particlesArray;

    const colors = ["#ffffff"];

    // Set the canvas width and height to the window width and height
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Create particles
    function init() {
      particlesArray = [];
      for (let i = 0; i < 20; i++) {
        const size = Math.random() * 1 + 0.5;
        const x = Math.random() * (canvas.width - size * 2) + size;
        const y = Math.random() * (canvas.height - size * 2) + size;
        const directionX = Math.random() * 3 - 1;
        const directionY = Math.random() * 3 - 1;
        const color = colors[Math.floor(Math.random() * colors.length)];
        particlesArray.push({
          x,
          y,
          directionX,
          directionY,
          size,
          color,
        });
      }
    }

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesArray.length; i++) {
        ctx.beginPath();
        ctx.arc(
          particlesArray[i].x,
          particlesArray[i].y,
          particlesArray[i].size,
          0,
          Math.PI * 2,
          false,
        );
        ctx.fillStyle = particlesArray[i].color;
        ctx.fill();
        particlesArray[i].x += particlesArray[i].directionX;
        particlesArray[i].y += particlesArray[i].directionY;
        if (particlesArray[i].x < 0 || particlesArray[i].x > canvas.width) {
          particlesArray[i].directionX *= -1;
        }
        if (particlesArray[i].y < 0 || particlesArray[i].y > canvas.height) {
          particlesArray[i].directionY *= -1;
        }
      }
    }

    // Event listeners
    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    });

    // Initialize particles and start animation
    init();
    animate();
  }, []);

  return (
    <ParticleWrapper>
      <canvas ref={canvasRef} />
    </ParticleWrapper>
  );
};

export default ParticleBackground;

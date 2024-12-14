"use client"; // This marks the component as a client component

import { useEffect, useRef } from 'react';
import styles from '../styles/AnimatedBackground.module.css';

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const balls = [];
    const numBalls = 50;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Reinitialize ball positions to spread around the screen
      balls.length = 0; // Clear the array
      for (let i = 0; i < numBalls; i++) {
        balls.push({
          x: Math.random() * canvas.width, // Random x within canvas width
          y: Math.random() * canvas.height, // Random y within canvas height
          radius: Math.random() * 5 + 2, // Random radius between 2 and 7
          dx: Math.random() * 2 - 1, // Random horizontal speed
          dy: Math.random() * 2 - 1, // Random vertical speed
        });
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const getDistance = (ball1, ball2) => {
      const dx = ball1.x - ball2.x;
      const dy = ball1.y - ball2.y;
      return Math.sqrt(dx * dx + dy * dy);
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw the lines between nearby balls
      for (let i = 0; i < balls.length; i++) {
        for (let j = i + 1; j < balls.length; j++) {
          const distance = getDistance(balls[i], balls[j]);
          if (distance < 100) { // Draw line if the balls are close enough
            ctx.beginPath();
            ctx.moveTo(balls[i].x, balls[i].y);
            ctx.lineTo(balls[j].x, balls[j].y);
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Update ball positions and draw them
      balls.forEach(ball => {
        ball.x += ball.dx;
        ball.y += ball.dy;

        // Bounce off edges
        if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
          ball.dx *= -1;
        }
        if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
          ball.dy *= -1;
        }

        // Draw the ball
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,255,255,1)';
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas}></canvas>;
};

export default AnimatedBackground;

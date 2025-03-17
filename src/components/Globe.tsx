import { useEffect, useRef } from 'react';

export const Globe = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let rotation = 0;

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    const draw = () => {
      if (!ctx || !canvas) return;
      
      const radius = Math.min(canvas.width, canvas.height) * 0.2;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      
      // Center the globe
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate(rotation);

      // Set line styles
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.08)';

      // Draw main globe circle
      ctx.beginPath();
      ctx.arc(0, 0, radius, 0, Math.PI * 2);
      ctx.stroke();

      // Draw latitude lines with perspective
      for (let i = -8; i <= 8; i++) {
        const y = (radius / 8) * i;
        const r = Math.sqrt(radius * radius - y * y);
        
        ctx.beginPath();
        ctx.ellipse(0, y, r, r * 0.15, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Draw longitude lines
      for (let i = 0; i < 24; i++) {
        const angle = (i * Math.PI) / 12;
        ctx.beginPath();
        ctx.moveTo(radius * Math.cos(angle), radius * Math.sin(angle));
        ctx.lineTo(-radius * Math.cos(angle), -radius * Math.sin(angle));
        ctx.stroke();
      }

      ctx.restore();
      rotation += 0.0005;
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10">
      <div className="absolute inset-0 backdrop-blur-sm">
        <canvas
          ref={canvasRef}
          className="w-full h-full opacity-50"
        />
      </div>
    </div>
  );
};
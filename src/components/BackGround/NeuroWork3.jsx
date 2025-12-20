import React, { useEffect, useRef, useState } from 'react';

const SpiderWebNeural = () => {
  const canvasRef = useRef(null);
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Typing animation
  useEffect(() => {
    const phrases = [
      'Train the neural network',
      'Deploy the model to production',
      'Debug the source code',
      'Optimize algorithm performance',
      'Protect data with encryption',
      'Detect vulnerabilities in the system',
      'Analyze big data patterns',
      'Build scalable applications',
      'Prevent cyber attacks',
      'Authenticate user credentials',
      'Automate repetitive tasks',
      'Improve machine learning accuracy',
      'Secure the API endpoints',
      'Refactor legacy code',
      'Monitor system performance',
      'Process natural language input',
      'Handle asynchronous operations',
      'Validate user input',
      'Store data in the cloud',
      'Integrate artificial intelligence solutions',
    ];
    const currentPhrase = phrases[currentIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (typedText.length < currentPhrase.length) {
            setTypedText(currentPhrase.substring(0, typedText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (typedText.length > 0) {
            setTypedText(currentPhrase.substring(0, typedText.length - 1));
          } else {
            setIsDeleting(false);
            setCurrentIndex(prev => (prev + 1) % phrases.length);
          }
        }
      },
      isDeleting ? 30 : 80
    );

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, currentIndex]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || dimensions.width === 0 || dimensions.height === 0) return;

    const ctx = canvas.getContext('2d');
    const { width, height } = dimensions;

    // Web nodes
    const nodes = Array.from({ length: 50 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: Math.random() * 2 + 1,
    }));

    // Floating code snippets
    const codeSnippets = [
      'def neural_net():',
      'import tensorflow',
      'while True:',
      'if x > 0:',
      'return output',
      'class Model:',
      'async function',
      'const data =',
      'SELECT * FROM',
      'try { catch }',
      'for i in range',
      'let result =',
      'print(result)',
      'app.listen(3000)',
      'git commit -m',
      'npm install',
    ];

    const floatingCode = Array.from({ length: 25 }, () => ({
      text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
      x: Math.random() * width,
      y: Math.random() * height,
      opacity: Math.random(),
      speed: Math.random() * 0.5 + 0.2,
      life: Math.random() * 300 + 200,
    }));

    // Math numbers
    const mathNumbers = Array.from({ length: 30 }, () => ({
      value: Math.floor(Math.random() * 9999),
      x: Math.random() * width,
      y: Math.random() * height,
      opacity: Math.random(),
      fadeSpeed: Math.random() * 0.02 + 0.01,
      fadingOut: Math.random() > 0.5,
    }));

    let animationId;
    let frame = 0;

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
      ctx.fillRect(0, 0, width, height);

      // Update and draw nodes
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(74, 222, 128, 0.8)';
        ctx.fill();
      });

      // Draw spider web connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const opacity = (1 - distance / 150) * 0.5;

            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);

            const gradient = ctx.createLinearGradient(
              nodes[i].x,
              nodes[i].y,
              nodes[j].x,
              nodes[j].y
            );
            gradient.addColorStop(0, `rgba(34, 197, 94, ${opacity})`);
            gradient.addColorStop(0.5, `rgba(74, 222, 128, ${opacity * 0.7})`);
            gradient.addColorStop(1, `rgba(34, 197, 94, ${opacity})`);

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1;
            ctx.stroke();

            // Draw pulse effect on some connections
            if (distance < 100 && Math.random() > 0.98) {
              const midX = (nodes[i].x + nodes[j].x) / 2;
              const midY = (nodes[i].y + nodes[j].y) / 2;

              ctx.beginPath();
              ctx.arc(midX, midY, 3, 0, Math.PI * 2);
              ctx.fillStyle = 'rgba(134, 239, 172, 0.8)';
              ctx.fill();
            }
          }
        }
      }

      // Draw floating code
      floatingCode.forEach((code, index) => {
        code.y -= code.speed;
        code.life--;

        if (code.life <= 0 || code.y < -20) {
          code.text =
            codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
          code.x = Math.random() * width;
          code.y = height + 20;
          code.life = Math.random() * 300 + 200;
          code.opacity = Math.random();
        }

        code.opacity = Math.sin(frame * 0.02 + index) * 0.3 + 0.5;

        ctx.font = '12px monospace';
        ctx.fillStyle = `rgba(34, 197, 94, ${code.opacity * 0.6})`;
        ctx.fillText(code.text, code.x, code.y);
      });

      // Draw math numbers
      mathNumbers.forEach((num, index) => {
        if (num.fadingOut) {
          num.opacity -= num.fadeSpeed;
          if (num.opacity <= 0) {
            num.fadingOut = false;
            num.value = Math.floor(Math.random() * 9999);
            num.x = Math.random() * width;
            num.y = Math.random() * height;
          }
        } else {
          num.opacity += num.fadeSpeed;
          if (num.opacity >= 1) {
            num.fadingOut = true;
          }
        }

        ctx.font = 'bold 16px monospace';
        ctx.fillStyle = `rgba(167, 243, 208, ${Math.max(
          0,
          Math.min(1, num.opacity)
        )})`;
        ctx.fillText(num.value.toString(), num.x, num.y);

        // Add mathematical symbols randomly
        if (Math.random() > 0.97) {
          const symbols = ['+', '-', '×', '÷', '=', '√', 'π', '∑', '∫'];
          const symbol = symbols[Math.floor(Math.random() * symbols.length)];
          ctx.fillStyle = `rgba(74, 222, 128, ${num.opacity * 0.5})`;
          ctx.fillText(symbol, num.x + 40, num.y);
        }
      });

      frame++;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [dimensions]);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      <canvas
        ref={canvasRef}
        width={dimensions.width}
        height={dimensions.height}
        className="absolute top-0 left-0"
      />

      {/* Corner frames */}
      <div className="absolute top-6 left-6 w-16 h-16 border-l-2 border-t-2 border-green-400 opacity-70"></div>
      <div className="absolute top-6 right-6 w-16 h-16 border-r-2 border-t-2 border-green-400 opacity-70"></div>
      <div className="absolute bottom-6 left-6 w-16 h-16 border-l-2 border-b-2 border-green-400 opacity-70"></div>
      <div className="absolute bottom-6 right-6 w-16 h-16 border-r-2 border-b-2 border-green-400 opacity-70"></div>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center px-8 max-w-4xl">
          <div className="mb-8">
            <div className="text-green-400 font-mono text-xs tracking-widest mb-4 opacity-70">
              [ NEURAL PROCESSING UNIT ACTIVE ]
            </div>

            {/* Typing effect */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-mono min-h-[120px] flex items-center justify-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-emerald-300 to-green-500">
                {typedText}
                <span className="animate-pulse">|</span>
              </span>
            </h1>
          </div>

          <div className="flex items-center justify-center gap-3 text-green-300 font-mono text-sm">
            <div className="flex gap-1">
              {[0, 1, 2].map(i => (
                <div
                  key={i}
                  className="w-2 h-2 bg-green-400 rounded-full animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                ></div>
              ))}
            </div>
            <span>Обробка даних...</span>
          </div>
        </div>
      </div>

      {/* Status indicators */}
      <div className="absolute top-20 left-8 text-green-400 font-mono text-xs space-y-1 opacity-60">
        <div>&gt; THREADS: 64</div>
        <div>&gt; RAM: 47.2 GB</div>
        <div>&gt; CACHE: 98%</div>
      </div>

      <div className="absolute top-20 right-8 text-green-400 font-mono text-xs text-right space-y-1 opacity-60">
        <div>EPOCH: 247 &lt;</div>
        <div>LOSS: 0.0034 &lt;</div>
        <div>ACC: 99.87% &lt;</div>
      </div>

      {/* Bottom status */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4 text-green-400 font-mono text-xs">
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        <span>QUANTUM NEURAL NETWORK • ONLINE</span>
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default SpiderWebNeural;

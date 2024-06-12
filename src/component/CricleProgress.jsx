// CircleProgress.js
import React, { useEffect, useRef } from 'react';

const CircleProgress = () => {
    const canvasRef = useRef(null);
    const progressRef = useRef(0);
    const startRadius = 272 * Math.PI / 180;
    const cw = 62; // canvas width
    const ch = 62; // canvas height
    let diff = 0;
    let progressId = null;

    useEffect(() => {
        const ctx = canvasRef.current.getContext('2d');
            
        const progressCallback = () => {
            diff = (progressRef.current / 100) * Math.PI * 2;
            ctx.clearRect(0, 0, cw, ch);

            // Calculate line width based on progress, maximum 8px
            const lineWidth = Math.min(5, 1 + (progressRef.current / 100) * 7); // Start from 1px, max 8px

            // Calculate color based on progress
            let color;
            let shadowColor;
            if (progressRef.current < 10) {
                color = "#ffffff"; // White for 0-10%
                shadowColor = "#ffffff"; // Shadow color
            } else if (progressRef.current < 20) {
                color = "#af9aeb"; // #af9aeb for 10-20%
                shadowColor = "#af9aeb"; // Shadow color
            } else if (progressRef.current < 60) {
                const ratio = (progressRef.current - 20) / 40;
                color = blendColors("#af9aeb", "#bdfffe", ratio); // Blend from #af9aeb to #bdfffe for 20-60%
                // shadowColor = blendColors("#af9aeb", "#bdfffe", ratio); // Shadow color blend
            } else {
                const ratio = (progressRef.current - 60) / 40;
                color = blendColors("#bdfffe", "#13fcf9", ratio); // Blend from #bdfffe to #13fcf9 for 60-100%
                // shadowColor = blendColors("#bdfffe", "#13fcf9", ratio); // Shadow color blend
            }

            ctx.lineWidth = lineWidth;

            // Add shadow
            // ctx.shadowBlur = 10;
            // ctx.shadowColor = shadowColor;

            // Draw circle
            ctx.fillStyle = color;
            ctx.strokeStyle = color;

            ctx.textAlign = "center";
            ctx.fillText(progressRef.current + "%", cw * 0.5, ch * 0.5 + 2);
            ctx.beginPath();
            ctx.arc(cw * 0.5, ch * 0.5, cw * 0.5 - lineWidth * 0.5, startRadius, diff + startRadius, false);
            ctx.stroke();

            // Remove shadow
            ctx.shadowBlur = 0;

            if (progressRef.current >= 100) {
                clearInterval(progressId);
            }
            progressRef.current++;
        };

        progressId = setInterval(progressCallback, 60);

        return () => clearInterval(progressId);
    }, []);

    // Function to blend colors based on a ratio
    const blendColors = (color1, color2, ratio) => {
        ratio = Math.min(1, Math.max(0, ratio)); // Clamp ratio between 0 and 1
        const r = Math.round(parseInt(color1.slice(1, 3), 16) * (1 - ratio) + parseInt(color2.slice(1, 3), 16) * ratio);
        const g = Math.round(parseInt(color1.slice(3, 5), 16) * (1 - ratio) + parseInt(color2.slice(3, 5), 16) * ratio);
        const b = Math.round(parseInt(color1.slice(5, 7), 16) * (1 - ratio) + parseInt(color2.slice(5, 7), 16) * ratio);
        return `rgb(${r}, ${g}, ${b})`;
    };

    return (
        <canvas ref={canvasRef} width={cw} height={ch} style={{ border: 'none' }}></canvas>
    );
};

export default CircleProgress;

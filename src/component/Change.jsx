import React, { useState, useEffect } from 'react';

function LoaderPage() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prevProgress => {
                const newProgress = prevProgress + 10;
                const newColor = getColor(newProgress);
                document.body.style.backgroundColor = newColor;
                return newProgress;
            });
        }, 100);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (progress >= 100) {
            // Hide loader
            document.getElementById("loader-container").style.display = "none";
            // Show content
            document.getElementById("content").style.display = "block";
        }
    }, [progress]);

    const getColor = (progress) => {
        const startColor = [255, 155, 255]; // White
        const endColor = [236, 236, 252]; // Red
        const color = startColor.map((start, index) => {
            return start + Math.round((endColor[index] - start) * (progress / 100));
        });
        return `rgb(${color[0]}, ${color[1]}, ${color[1]})`;
    };

    return (
        <>
            <div id="loader-container">
                <div id="loader"></div>
            </div>
            <div id="content" style={{ display: progress >= 100 ? 'block' : 'none' }}>
                {/* {/ <h1>Welcome to My Page</h1> /} */}
                {/* {/ <p>This is  some content...</p> /} */}
            </div>
        </>
    );
}

export default LoaderPage;

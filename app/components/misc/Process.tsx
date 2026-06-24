'use client'
import p5 from "p5";
import "./style.scss";
import { useEffect, useRef } from "react";

export default function Process() {
    const containerRef = useRef<HTMLDivElement>(null);
    

    useEffect(() => {
        let p5js: p5;

        const sketch = (p: p5) => {
            p.setup = () => {
                const parent = containerRef.current;
                p.createCanvas(parent?.clientWidth, parent?.clientHeight);
                p.colorMode(p.HSB);
                p.angleMode(p.DEGREES);
            }

            p.draw = () => {
                p.background("#36248700");

                const leftX = p.width * 0.4;
                const leftY = p.height * 0.5;
                const leftAngle = p.atan2(p.mouseY - leftY, p.mouseX - leftX);

                p.push();
                p.translate(leftX, leftY);
                p.fill(255);
                p.ellipse(0, 0, 50, 50);
                p.rotate(leftAngle);
                p.fill(0);
                p.ellipse(12.5, 0, 25, 25);
                p.pop();

                const rightX = p.width * 0.6;
                const rightY = p.height * 0.5;
                const rightAngle = p.atan2(p.mouseY - rightY, p.mouseX - rightX);

                p.push();
                p.translate(rightX, rightY);
                p.fill(255);
                p.ellipse(0, 0, 50, 50);
                p.rotate(rightAngle);
                p.fill(0);
                p.ellipse(12.5, 0, 25, 25);
                p.pop();
            }
        }

        if(containerRef.current) {
            p5js = new p5(sketch, containerRef.current);
        }

        return () => {
            p5js?.remove();
        }
    }, [])

    return (
        <div 
            className="flex items-center justify-center process home-page__box" 
            ref={containerRef}
        >
        </div>
    )
}
'use client'
import { useState } from "react";
import "./background.scss";
import BackgroundPopup from "./BackgroundPopup";

export default function Background() {
    const [isBackgroundOpen, setIsBackgroundOpen] = useState(false);

    return (
        <div 
            className="flex items-center justify-center background home-page__box"
            onClick={() => setIsBackgroundOpen(true)}
        >
            Education & <br />
            Experience

            {isBackgroundOpen && (
                <BackgroundPopup 
                    onClose={() => setIsBackgroundOpen(false)}
                />
            )}
        </div>
    )
}
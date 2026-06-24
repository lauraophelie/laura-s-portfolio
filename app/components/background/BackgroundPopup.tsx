import { useRef } from "react";
import "./background.scss";
import Draggable from "react-draggable";

interface BackgroundPopupProps {
    isOpen?: boolean;
    onClose: () => void;
}

export default function BackgroundPopup({ onClose } : BackgroundPopupProps ) {
    const handleClosing = (e: { stopPropagation: () => void; }) => {
        e.stopPropagation();
        onClose();
    }
    const nodeRef = useRef(null);

    return (
        <Draggable nodeRef={nodeRef}>
            <div className="background__popup" ref={nodeRef}>
                <div className="background__popup__header" onClick={handleClosing}>x</div>
                Background details
            </div>
        </Draggable>
    )
}
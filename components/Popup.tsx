import React from "react";

interface PopupProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Popup = ({ isOpen, onClose, children }: PopupProps) => {
    if (!isOpen) return null;

    return (
        <div onClick={onClose}>
            <div onClick={(e) => e.stopPropagation()}>
                {children}
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Popup;

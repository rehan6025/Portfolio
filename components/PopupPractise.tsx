"use client";
import React, { useState } from "react";
import Popup from "./Popup";

function PopupPractise() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => setIsPopupOpen(true);
    const closePopup = () => setIsPopupOpen(false);

    return (
        <div>
            <h1>My Application</h1>
            <button onClick={openPopup}>Open Popup</button>

            <Popup isOpen={isPopupOpen} onClose={closePopup}>
                <h2>Welcome to the Popup!</h2>
                <p>This is some content inside the popup.</p>
            </Popup>
        </div>
    );
}

export default PopupPractise;


import React, { useState } from 'react';

function ToggleButton() {
    const [isOn, setIsOn] = useState(false);

    const handleToggle = () => {
        setIsOn(!isOn);
    };

    return (
        <div>
            <button onClick={handleToggle}>
                {isOn ? "ON" : "OFF"}
            </button>

            <h2>
                Status: {isOn ? "The button is ON" : "The button is OFF"}
            </h2>
        </div>
    );
}

export default ToggleButton;

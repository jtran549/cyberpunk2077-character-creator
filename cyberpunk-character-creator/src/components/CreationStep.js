import React, { useState } from 'react';
import { Steps } from 'primereact/steps';

export default function CreationStep() {
    const [activeIndex, setActiveIndex] = useState(0);
    const items = [
        {
            label: 'Role',
        },
        {
            label: 'Lifepath',
        },
        {
            label: 'Stats',
        },
        {
            label: 'Derived Stats',
        },
        {
            label: 'Skills',
        },
        {
            label: 'Armaments',
        },
        {
            label: 'Outfit',
        },
        {
            label: 'Cyberware',
        }
    ];

    return (
        <div className="card">
            <Steps model={items} activeIndex={activeIndex} onSelect={(e) => setActiveIndex(e.index)} readOnly={false} />
        </div>
    )
}
        
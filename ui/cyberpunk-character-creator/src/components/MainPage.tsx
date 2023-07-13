import React, {useState} from 'react';
import { Steps } from 'primereact/steps';
import { Outlet } from 'react-router-dom';

function MainPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
      {
          label: 'Role',
          url: "Role"
      },
      {
          label: 'Lifepath',
          url: "Lifepath"
      },
      {
          label: 'Stats',
          url: "Stats"
      },
      {
          label: 'Derived Stats',
          url: "DerivedStats"
      },
      {
          label: 'Skills',
          url: "Skills"
      },
      {
          label: 'Armaments',
          url: "Armaments"
      },
      {
          label: 'Outfit',
          url: "Outfit"
      },
      {
          label: 'Cyberware',
          url: "Cyberware"
      }
  ];

  return (
    <>
      <Steps model={items} activeIndex={activeIndex} onSelect={(e) => setActiveIndex(e.index)} readOnly={false} />
      <Outlet/>
    </>
  );
}

export default MainPage;

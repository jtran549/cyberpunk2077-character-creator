import React, {useState} from 'react';
import { Steps } from 'primereact/steps';

function MainPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
      {
          label: 'Role',
          url: "RolePage"
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
    <>
      <Steps model={items} activeIndex={activeIndex} onSelect={(e) => setActiveIndex(e.index)} readOnly={false} />
    </>
  );
}

export default MainPage;

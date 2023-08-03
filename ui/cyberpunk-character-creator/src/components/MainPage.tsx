import React, {useEffect, useState} from 'react';
import { Steps } from 'primereact/steps';
import { Image } from 'primereact/image';
import { Outlet } from 'react-router-dom';

function MainPage() {
  const [activeIndex, setActiveIndex] = useState(Number(sessionStorage.getItem('activeIndex')));

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

  useEffect (() => {
    sessionStorage.setItem('activeIndex', activeIndex.toString())
  }, [activeIndex])

  return (
    <>
    <Image src={require('../images/logo.png')} width='400' height='130'/>
      <Steps model={items} activeIndex={Number(sessionStorage.getItem('activeIndex'))} onSelect={(e) => setActiveIndex(e.index)} readOnly={false} />
      <div className='grid' style={{paddingLeft:'200px', paddingRight:'200px', paddingTop:'50px'}}>
        <Outlet/>
      </div>
    </>
  );
}

export default MainPage;

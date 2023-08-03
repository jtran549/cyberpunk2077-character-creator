import React from 'react';
import ReactDOM from 'react-dom/client';
import {  createBrowserRouter, RouterProvider,} from "react-router-dom";
import 'primereact/resources/primereact.css';         
import './index.css';
import '../node_modules/primeflex/primeflex.css'
import './theme.css';
import MainPage from './components/MainPage';
import RolePage from './components/RolePage';
import LifepathPage from './components/LifepathPage';
import StatsPage from './components/StatsPage';
import DerivedStatsPage from './components/DerivedStatsPage';
import SkillsPage from './components/SkillsPage';
import ArmamentsPage from './components/ArmamentsPage';
import OutfitPage from './components/Outfit';
import CyberwarePage from './components/CyberwarePage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage/>,
    children: [
      {
        path: "/Role",
        element: <RolePage/>
      },
      {
        path: "/Lifepath",
        element: <LifepathPage/>
      },
      {
        path: "/Stats",
        element: <StatsPage/>
      },
      {
        path: "/DerivedStats",
        element: <DerivedStatsPage/>
      },
      {
        path: "/Skills",
        element: <SkillsPage/>
      },
      {
        path: "/Armaments",
        element: <ArmamentsPage/>
      },
      {
        path: "/Outfit",
        element: <OutfitPage/>
      },
      {
        path: "/Cyberware",
        element: <CyberwarePage/>
      }
    ],
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
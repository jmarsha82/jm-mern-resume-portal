import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GeneralsContextProvider } from './context/GeneralContext';
import { CurrentSkillsContextProvider } from './context/CurrentSkillsContext';
import { WorkExperiencesContextProvider } from './context/WorkExperienceContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GeneralsContextProvider>
      <CurrentSkillsContextProvider>
        <WorkExperiencesContextProvider>
          <App />
        </WorkExperiencesContextProvider>
      </CurrentSkillsContextProvider>
    </GeneralsContextProvider>
  </React.StrictMode>
)
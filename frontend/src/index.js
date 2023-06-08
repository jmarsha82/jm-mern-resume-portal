import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GeneralsContextProvider } from './context/GeneralContext';
import { CurrentSkillsContextProvider } from './context/CurrentSkillsContext';
import { WorkExperiencesContextProvider } from './context/WorkExperienceContext';
import { EducationsContextProvider } from './context/EducationContext';
import { FullSkillsContextProvider } from './context/FullSkillsContext';
import { DevBooksContextProvider } from './context/DevBookContext';
import { DevLinksContextProvider } from './context/DevLinkContext';
import { ArtworksContextProvider } from './context/ArtworkContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GeneralsContextProvider>
      <CurrentSkillsContextProvider>
        <WorkExperiencesContextProvider>
          <EducationsContextProvider>
            <FullSkillsContextProvider>
              <DevBooksContextProvider>
                <DevLinksContextProvider>
                  <ArtworksContextProvider>
                    <App />
                  </ArtworksContextProvider>
                </DevLinksContextProvider>
              </DevBooksContextProvider>
            </FullSkillsContextProvider>
          </EducationsContextProvider>
        </WorkExperiencesContextProvider>
      </CurrentSkillsContextProvider>
    </GeneralsContextProvider>
  </React.StrictMode>
)
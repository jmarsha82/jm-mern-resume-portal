import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import ProgrammerProfile from './pages/ProgrammerProfile';
import ArtistProfile from './pages/ArtistProfile';
import About from './pages/About';
import { ThemeContextProvider } from './context/ThemeContext';

function App() {
    return ( 
    <ThemeContextProvider>
        <div data-testid="app-element" className = "" >
            <BrowserRouter>
                    <Routes>
                        <Route 
                        path="/"
                        element={<Home />}
                        />
                        <Route 
                        path="programmer"
                        element={<ProgrammerProfile />}
                        />
                        <Route 
                        path="artist"
                        element={<ArtistProfile />}
                        />
                        <Route 
                        path="about"
                        element={<About />}
                        />
                    </Routes>
            </BrowserRouter>
        </div>
    </ThemeContextProvider>
    );
}

export default App;

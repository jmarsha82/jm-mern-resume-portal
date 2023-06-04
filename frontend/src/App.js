import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import ProgrammerProfile from './pages/ProgrammerProfile';
import ArtistProfile from './pages/ArtistProfile';

function App() {
    return ( 
    <div data-testid="app-element" className = "" >
        <BrowserRouter>
            <div className="pages">
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
                </Routes>
            </div>
        </BrowserRouter>
    </div>
    );
}

export default App;
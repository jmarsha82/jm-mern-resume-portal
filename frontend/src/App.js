import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import ProgrammerProfile from './pages/ProgrammerProfile';
import ArtistProfile from './pages/ArtistProfile';
import ArtworkDetails from './components/ArtworkDetails';

function App() {
    return ( 
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
                    path="/artist/:id"
                    element={<ArtworkDetails />}
                    />
                </Routes>
        </BrowserRouter>
    </div>
    );
}

export default App;
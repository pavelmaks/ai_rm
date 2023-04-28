import './App.css';

import { Route, Routes } from 'react-router-dom'

import DropFileInput from './components/drop-file-input/DropFileInput';
import NavBar from './components/nav-bar/NavBar';
import Calibrate from './pages/Calibrate/Calibrate';

function App() {
    return (
        <div className="App">
            <div class="page">
                <NavBar />
                <Routes>
                    <Route path="/" element={<DropFileInput />} />
                    <Route path="/calibrate" element={<Calibrate />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { QrGenerator } from './Components/Pages/QrGenerator';
import { Projects } from './Components/Pages/Projects';
import { ScanProjectConfirmation } from './Components/Pages/ScanProjectConfirmation';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<QrGenerator />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/scan-project/:id" element={<ScanProjectConfirmation />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;

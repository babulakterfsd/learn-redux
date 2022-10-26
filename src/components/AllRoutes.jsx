import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../views/Home';
import NotFound from '../views/NotFound';
import Video from '../views/Video';
import Footer from './Footer';
import Navbar from './navbar/Navbar';

function AllRoutes() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Navigate to="/" replace />} />
                <Route path="/videos/:videoId" element={<Video />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </>
    );
}

export default AllRoutes;

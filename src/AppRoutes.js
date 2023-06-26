import React from 'react';
import { Routes, Route } from 'react-router-dom';
import VideoList from './components/VideoList';
import VideoUpload from './components/VideoUpload';
import Map from './components/Map';

const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/list" element={<VideoList />} />
        <Route path="/upload" element={<VideoUpload />} />
        <Route path="/map" element={<Map />} />
      </Routes>
  );
};

export default AppRoutes;

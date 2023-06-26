import React, { useEffect, useState } from 'react';
import VideoFeed from './VideoFeed';
import { fetchVideos } from '../services/api'; // Adjust the path to the api.js file

const VideoList = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const videoData = await fetchVideos(); // Fetch videos using the fetchVideos function from the api.js service
        setVideos(videoData);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideoData();
  }, []);

  return (
    <div>
      <h2>Video List</h2>
      <VideoFeed videos={videos} />
    </div>
  );
};

export default VideoList;

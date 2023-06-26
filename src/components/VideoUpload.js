import React, { useState } from "react";
import { uploadVideo } from "../services/api";

const VideoUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [videoName, setVideoName] = useState("");

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleVideoNameChange = (event) => {
    setVideoName(event.target.value);
  };

  const handleUpload = async () => {
    if (selectedFile && videoName) {
      const formData = new FormData();
      formData.append("videoName", videoName);
      formData.append("file", selectedFile);

      try {
        await uploadVideo(formData);
        console.log("Video uploaded successfully");
        // Reset the form
        setSelectedFile(null);
        setVideoName("");
      } catch (error) {
        console.error("Failed to upload video:", error);
      }
    } else {
      console.error("Please select a video file and enter a video name");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl font-bold mb-6">Video Upload</h2>
      <div className="bg-white rounded-lg p-6 shadow w-80">
        <input
          type="text"
          value={videoName}
          onChange={handleVideoNameChange}
          placeholder="Video Name"
          className="mb-4 p-2 border rounded w-full"
        />
        <input
          type="file"
          onChange={handleFileChange}
          className="mb-4 p-2 border rounded w-full"
        />
        <button
          onClick={handleUpload}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 w-full"
        >
          Upload
        </button>
      </div>
    </div>
  );
};

export default VideoUpload;

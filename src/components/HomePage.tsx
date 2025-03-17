"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import { ChevronDown } from 'lucide-react';

export default function HomePage() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setSelectedImage(file);
      setProcessedImage(null);
      setError(null);
      
      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
      
      // Auto process the image
      processImage(file);
    }
  };

  const processImage = async (file: File) => {
    setLoading(true);
    setError(null);
    
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://127.0.0.1:8000/remove-bg/", {
        method: "POST",
        body: formData,
      });
      
      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      setProcessedImage(imageUrl);
    } catch (error) {
      console.error("Error removing background:", error);
      setError("Failed to remove background. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setSelectedImage(file);
      setProcessedImage(null);
      
      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
      
      // Auto process the image
      processImage(file);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {!processedImage ? (
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Left side with heading */}
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Remove Image<br />Background
              </h1>
              <p className="text-xl text-gray-600">
                100% Automatically and <span className="bg-yellow-300 px-2 py-1 rounded">Free</span>
              </p>
            </div>
            
            {/* Right side with upload card */}
            <div className="md:w-1/2 max-w-md">
              <div 
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
              >
                <div className="flex flex-col items-center">
                  <button
                    onClick={triggerFileInput}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full text-lg transition-all mb-4"
                  >
                    Upload Image
                  </button>
                  
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  
                  <p className="text-gray-500 mb-2">or drop a file,</p>
                  <p className="text-gray-500">
                    paste image or <span className="text-blue-500 cursor-pointer">URL</span>
                  </p>
                </div>
              </div>
              
              <div className="mt-8">
                <p className="text-center text-gray-600 mb-4">No image? Try one of these:</p>
                <div className="grid grid-cols-4 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="cursor-pointer rounded-lg overflow-hidden border border-gray-200 hover:border-blue-500 transition-all">
                      <img 
                        src={`/placeholder.svg?height=80&width=80&text=${i}`} 
                        alt={`Example ${i}`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              <p className="text-center text-xs text-gray-500 mt-8">
                By uploading an image or URL you agree to our <span className="text-blue-500">Terms of Service</span>.
              </p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Background Removed Successfully</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
              {previewImage && (
                <div className="flex flex-col items-center">
                  <h3 className="text-lg font-medium text-gray-700 mb-4">Original Image</h3>
                  <div className="border border-gray-200 rounded-lg overflow-hidden bg-gray-50 w-full h-64 flex items-center justify-center">
                    <img 
                      src={previewImage || "/placeholder.svg"} 
                      alt="Original" 
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>
              )}
              
              <div className="flex flex-col items-center">
                <h3 className="text-lg font-medium text-gray-700 mb-4">Processed Image</h3>
                <div className="border border-gray-200 rounded-lg overflow-hidden bg-gray-100 w-full h-64 flex items-center justify-center">
                  {loading ? (
                    <div className="flex flex-col items-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                      <p className="mt-4 text-gray-600">Processing image...</p>
                    </div>
                  ) : (
                    <img 
                      src={processedImage || "/placeholder.svg"} 
                      alt="Processed" 
                      className="max-w-full max-h-full object-contain"
                    />
                  )}
                </div>
                
                <a 
                  href={processedImage || "#"} 
                  download="bg_removed.png"
                  className="mt-6 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full text-lg transition-all flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                  </svg>
                  Download Image
                </a>
                
                <button
                  onClick={() => {
                    setSelectedImage(null);
                    setPreviewImage(null);
                    setProcessedImage(null);
                  }}
                  className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
                >
                  Remove another image
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
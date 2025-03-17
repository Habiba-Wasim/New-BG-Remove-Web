// export default function UploadPage() {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
//         <h1 className="text-3xl font-bold text-gray-800 mb-4">Upload Your Image</h1>
//         <p className="text-gray-600 mb-6">Choose an image to remove its background.</p>
        
//         <input type="file" accept="image/*" className="p-2 border border-gray-300 rounded-lg shadow-sm" />
//       </div>
//     );
//   }
  


































// "use client";
// import { useState } from "react";

// export default function UploadPage() {
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);
//   const [processedImage, setProcessedImage] = useState<string | null>(null);
//   const [loading, setLoading] = useState(false);

//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (event.target.files && event.target.files[0]) {
//       setSelectedFile(event.target.files[0]);
//     }
//   };

//   const removeBackground = async () => {
//     if (!selectedFile) return;
    
//     setLoading(true);
//     setProcessedImage(null);
    
//     const formData = new FormData();
//     formData.append("file", selectedFile);

//     try {
//       const response = await fetch("http://127.0.0.1:8000/remove-bg/", {
//         method: "POST",
//         body: formData,
//       });

//       if (!response.ok) throw new Error("Failed to remove background");

//       const blob = await response.blob();
//       const imageUrl = URL.createObjectURL(blob);
//       setProcessedImage(imageUrl);
//     } catch (error) {
//       console.error("Error:", error);
//       alert("Background removal failed.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
//       <h1 className="text-3xl font-bold text-gray-800 mb-4">Upload Your Image</h1>
      
//       <input type="file" accept="image/*" onChange={handleFileChange} className="mb-4 p-2 border border-gray-300 rounded-lg" />

//       {selectedFile && !processedImage && (
//         <button 
//           onClick={removeBackground} 
//           className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
//           disabled={loading}
//         >
//           {loading ? "Processing..." : "Remove Background"}
//         </button>
//       )}

//       {loading && <p className="mt-4 text-gray-500">Processing... Please wait.</p>}

//       {processedImage && (
//         <div className="mt-6 flex flex-col items-center">
//           <img src={processedImage} alt="Processed" className="w-64 h-auto rounded-lg shadow-lg" />
//           <a href={processedImage} download="bg_removed.png" className="mt-4 px-6 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition">
//             Download Image
//           </a>
//         </div>
//       )}
//     </div>
//   );
// }




















// "use client";
// import { useState } from "react";

// export default function UploadPage() {
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);
//   const [processedImage, setProcessedImage] = useState<string | null>(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (event.target.files && event.target.files[0]) {
//       setSelectedFile(event.target.files[0]);
//       setProcessedImage(null);
//       setError(null);
//     }
//   };

//   const removeBackground = async () => {
//     if (!selectedFile) return;
    
//     setLoading(true);
//     setError(null);
//     setProcessedImage(null);
    
//     const formData = new FormData();
//     formData.append("file", selectedFile);

//     try {
//       console.log("Sending request to remove background...");
      
//       const response = await fetch("http://127.0.0.1:8000/remove-bg/", {
//         method: "POST",
//         body: formData,
//       });

//       console.log("Response status:", response.status);
      
//       if (!response.ok) {
//         const errorText = await response.text();
//         console.error("Error response:", errorText);
//         throw new Error(`Server error: ${response.status} ${response.statusText}`);
//       }

//       const blob = await response.blob();
//       const imageUrl = URL.createObjectURL(blob);
//       setProcessedImage(imageUrl);
//       console.log("Background removed successfully");
//     } catch (error) {
//       console.error("Error removing background:", error);
//       if (error instanceof Error) {
//         setError(error.message || "Failed to remove background. Please try again.");
//       } else {
//         setError("Failed to remove background. Please try again.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
//       <h1 className="text-3xl font-bold text-gray-800 mb-4">Upload Your Image</h1>
//       <p className="text-gray-600 mb-6">Choose an image to remove its background.</p>
      
//       <input 
//         type="file" 
//         accept="image/*" 
//         onChange={handleFileChange} 
//         className="mb-4 p-2 border border-gray-300 rounded-lg" 
//       />

//       {selectedFile && !processedImage && (
//         <div className="mb-4">
//           <p className="text-sm text-gray-600 mb-2">Selected: {selectedFile.name}</p>
//           <button 
//             onClick={removeBackground} 
//             className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition disabled:opacity-50"
//             disabled={loading}
//           >
//             {loading ? "Processing..." : "Remove Background"}
//           </button>
//         </div>
//       )}

//       {loading && (
//         <div className="mt-4 flex items-center justify-center">
//           <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-700"></div>
//           <span className="ml-2 text-gray-600">Processing image...</span>
//         </div>
//       )}

//       {error && (
//         <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-lg">
//           {error}
//         </div>
//       )}

//       {processedImage && (
//         <div className="mt-6 flex flex-col items-center">
//           <img src={processedImage || "/placeholder.svg"} alt="Processed" className="w-64 h-auto rounded-lg shadow-lg bg-gray-200" />
//           <a 
//             href={processedImage} 
//             download="bg_removed.png" 
//             className="mt-4 px-6 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition"
//           >
//             Download Image
//           </a>
//         </div>
//       )}
//     </div>
//   );
// }


























// "use client";
// import { useState, useRef } from "react";
// import Header from "@/components/Header";

// export default function UploadPage() {
//   const [selectedImage, setSelectedImage] = useState<File | null>(null);
//   const [previewImage, setPreviewImage] = useState<string | null>(null);
//   const [processedImage, setProcessedImage] = useState<string | null>(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const fileInputRef = useRef<HTMLInputElement>(null);

//   const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (event.target.files && event.target.files[0]) {
//       const file = event.target.files[0];
//       setSelectedImage(file);
//       setProcessedImage(null);
//       setError(null);
      
//       // Create preview
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         setPreviewImage(e.target?.result as string);
//       };
//       reader.readAsDataURL(file);
      
//       // Auto process the image
//       processImage(file);
//     }
//   };

//   const processImage = async (file: File) => {
//     setLoading(true);
//     setError(null);
    
//     const formData = new FormData();
//     formData.append("file", file);

//     try {
//       const response = await fetch("http://127.0.0.1:8000/remove-bg/", {
//         method: "POST",
//         body: formData,
//       });
      
//       if (!response.ok) {
//         throw new Error(`Server error: ${response.status}`);
//       }

//       const blob = await response.blob();
//       const imageUrl = URL.createObjectURL(blob);
//       setProcessedImage(imageUrl);
//     } catch (error) {
//       console.error("Error removing background:", error);
//       setError("Failed to remove background. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const triggerFileInput = () => {
//     fileInputRef.current?.click();
//   };

//   const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
//     e.preventDefault();
//     e.stopPropagation();
    
//     if (e.dataTransfer.files && e.dataTransfer.files[0]) {
//       const file = e.dataTransfer.files[0];
//       setSelectedImage(file);
//       setProcessedImage(null);
      
//       // Create preview
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         setPreviewImage(e.target?.result as string);
//       };
//       reader.readAsDataURL(file);
      
//       // Auto process the image
//       processImage(file);
//     }
//   };

//   const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
//     e.preventDefault();
//     e.stopPropagation();
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       <Header />
      
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         {!processedImage ? (
//           <div className="flex flex-col items-center justify-center">
//             <div className="relative w-full max-w-3xl text-center">
//               {/* Yellow plus icon */}
//               <div className="absolute top-0 right-1/3 text-yellow-400">
//                 <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                 </svg>
//               </div>
              
//               <h1 className="text-4xl font-bold text-gray-800 mb-8">
//                 Upload an image to<br />remove the background
//               </h1>
              
//               <div 
//                 className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 mx-auto max-w-md"
//                 onDrop={handleDrop}
//                 onDragOver={handleDragOver}
//               >
//                 <div className="flex flex-col items-center">
//                   <button
//                     onClick={triggerFileInput}
//                     className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full text-lg transition-all mb-4"
//                   >
//                     Upload Image
//                   </button>
                  
//                   <input
//                     ref={fileInputRef}
//                     type="file"
//                     accept="image/*"
//                     onChange={handleImageUpload}
//                     className="hidden"
//                   />
                  
//                   <p className="text-gray-500 mb-2">or drop a file,</p>
//                   <p className="text-gray-500">
//                     paste image or <span className="text-blue-500 cursor-pointer">URL</span>
//                   </p>
//                 </div>
//               </div>
              
//               <div className="mt-12">
//                 <p className="text-center text-gray-600 mb-4">No image? Try one of these:</p>
//                 <div className="grid grid-cols-4 gap-4 max-w-lg mx-auto">
//                   {[1, 2, 3, 4].map((i) => (
//                     <div key={i} className="cursor-pointer rounded-lg overflow-hidden border border-gray-200 hover:border-blue-500 transition-all">
//                       <img 
//                         src={`/example-${i}.jpg`} 
//                         alt={`Example ${i}`} 
//                         className="w-full h-full object-cover"
//                         onError={(e) => {
//                           e.currentTarget.src = `/placeholder.svg?height=80&width=80&text=${i}`;
//                         }}
//                       />
//                     </div>
//                   ))}
//                 </div>
//               </div>
              
//               <p className="text-center text-xs text-gray-500 mt-8">
//                 By uploading an image or URL you agree to our <span className="text-blue-500">Terms of Service</span>.
//               </p>
//             </div>
//           </div>
//         ) : (
//           <div className="flex flex-col items-center justify-center">
//             <h2 className="text-2xl font-bold text-gray-800 mb-8">Background Removed Successfully</h2>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
//               {previewImage && (
//                 <div className="flex flex-col items-center">
//                   <h3 className="text-lg font-medium text-gray-700 mb-4">Original Image</h3>
//                   <div className="border border-gray-200 rounded-lg overflow-hidden bg-gray-50 w-full h-64 flex items-center justify-center">
//                     <img 
//                       src={previewImage || "/placeholder.svg"} 
//                       alt="Original" 
//                       className="max-w-full max-h-full object-contain"
//                     />
//                   </div>
//                 </div>
//               )}
              
//               <div className="flex flex-col items-center">
//                 <h3 className="text-lg font-medium text-gray-700 mb-4">Processed Image</h3>
//                 <div className="border border-gray-200 rounded-lg overflow-hidden bg-[url('/checkerboard.png')] w-full h-64 flex items-center justify-center">
//                   {loading ? (
//                     <div className="flex flex-col items-center">
//                       <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
//                       <p className="mt-4 text-gray-600">Processing image...</p>
//                     </div>
//                   ) : (
//                     <img 
//                       src={processedImage || "/placeholder.svg"} 
//                       alt="Processed" 
//                       className="max-w-full max-h-full object-contain"
//                     />
//                   )}
//                 </div>
                
//                 <a 
//                   href={processedImage || "#"} 
//                   download="bg_removed.png"
//                   className="mt-6 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full text-lg transition-all flex items-center"
//                 >
//                   <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
//                   </svg>
//                   Download Image
//                 </a>
                
//                 <button
//                   onClick={() => {
//                     setSelectedImage(null);
//                     setPreviewImage(null);
//                     setProcessedImage(null);
//                   }}
//                   className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
//                 >
//                   Remove another image
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </main>
//     </div>
//   );
// }

















'use client';
const processImage = async (file: File) => {
  setLoading(true);
  setError(null);
  
  const formData = new FormData();
  formData.append("file", file);

  // Log the attempt
  console.log("Attempting to connect to backend at: http://127.0.0.1:8000/remove-bg/");
  
  try {
    // Try with explicit timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout
    
    const response = await fetch("http://127.0.0.1:8000/remove-bg/", {
      method: "POST",
      body: formData,
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);
    
    console.log("Response status:", response.status);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error("Error response:", errorText);
      throw new Error(`Server error: ${response.status} ${errorText}`);
    }

    const blob = await response.blob();
    const imageUrl = URL.createObjectURL(blob);
    setProcessedImage(imageUrl);
  } catch (error) {
    console.error("Error details:", error);
    
    // More specific error message based on the error
    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        setError("Request timed out. The server might be down or too slow to respond.");
      } else if (error.message.includes('Failed to fetch')) {
        setError("Could not connect to the server. Make sure the backend is running at http://127.0.0.1:8000");
      } else {
        setError(`Failed to remove background: ${error.message}`);
      }
    } else {
      setError("An unknown error occurred.");
    }
  } finally {
    setLoading(false);
  }
};

function setError(arg0: string | null) {
  throw new Error("Function not implemented.");
}
function setLoading(arg0: boolean) {
  throw new Error("Function not implemented.");
}


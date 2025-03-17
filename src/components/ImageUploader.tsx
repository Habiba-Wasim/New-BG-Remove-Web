// "use client";
// import { useState } from "react";

// export default function ImageUploader() {
//   const [selectedImage, setSelectedImage] = useState<File | null>(null);
//   const [processedImage, setProcessedImage] = useState<string | null>(null);
//   const [loading, setLoading] = useState(false);

//   const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (event.target.files && event.target.files[0]) {
//       setSelectedImage(event.target.files[0]);
//     }
//   };

//   const removeBackground = async () => {
//     if (!selectedImage) return;
//     setLoading(true);

//     const formData = new FormData();
//     formData.append("file", selectedImage);

//     try {
//       const response = await fetch("http://127.0.0.1:8000/remove-bg/", {
//         method: "POST",
//         body: formData,
//         headers: {
//           "Accept": "image/png",
//         },
//       });

//       if (!response.ok) throw new Error("Failed to remove background");

//       const blob = await response.blob();
//       setProcessedImage(URL.createObjectURL(blob));
//     } catch (error) {
//       console.error("Error:", error);
//       alert("Background removal failed. Check console for details.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
//       <h1 className="text-3xl font-bold mb-4">Upload Image to Remove Background</h1>

//       <input type="file" accept="image/*" onChange={handleImageUpload} className="mb-4" />

//       {selectedImage && (
//         <button
//           onClick={removeBackground}
//           className="px-6 py-2 bg-blue-500 text-white rounded-md"
//           disabled={loading}
//         >
//           {loading ? "Processing..." : "Remove Background"}
//         </button>
//       )}

//       {processedImage && (
//         <div className="mt-4 flex flex-col items-center">
//           <img src={processedImage} alt="Processed" className="w-64 h-64 object-contain mb-4" />
//           <a href={processedImage} download="bg_removed.png" className="px-6 py-2 bg-green-500 text-white rounded-md">
//             Download Image
//           </a>
//         </div>
//       )}
//     </div>
//   );
// }














//   "use client";
// import { useState } from "react";

// export default function ImageUploader() {
//   const [selectedImage, setSelectedImage] = useState<File | null>(null);
//   const [processedImage, setProcessedImage] = useState<string | null>(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (event.target.files && event.target.files[0]) {
//       setSelectedImage(event.target.files[0]);
//       setProcessedImage(null);
//       setError(null);
//     }
//   };

//   const removeBackground = async () => {
//     if (!selectedImage) return;
    
//     setLoading(true);
//     setError(null);
//     setProcessedImage(null);

//     const formData = new FormData();
//     formData.append("file", selectedImage);

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
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
//       <h1 className="text-3xl font-bold mb-4">Upload Image to Remove Background</h1>

//       <input 
//         type="file" 
//         accept="image/*" 
//         onChange={handleImageUpload} 
//         className="mb-4 p-2 border border-gray-300 rounded-lg" 
//       />

//       {selectedImage && (
//         <div className="mb-4">
//           <p className="text-sm text-gray-600 mb-2">Selected: {selectedImage.name}</p>
//           <button
//             onClick={removeBackground}
//             className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all disabled:opacity-50"
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
//         <div className="mt-4 flex flex-col items-center">
//           <img src={processedImage || "/placeholder.svg"} alt="Processed" className="w-64 h-64 object-contain mb-4 bg-gray-200 rounded-lg" />
//           <a 
//             href={processedImage} 
//             download="bg_removed.png" 
//             className="px-6 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition-all"
//           >
//             Download Image
//           </a>
//         </div>
//       )}
//     </div>
//   );
// }
































// "use client";
// import { useState } from "react";

// export default function ImageUploader() {
//   const [message, setMessage] = useState<string>("");
//   const [loading, setLoading] = useState(false);

//   const testConnection = async () => {
//     setLoading(true);
//     setMessage("Testing connection...");
    
//     try {
//       // Test basic connectivity first
//       const response = await fetch("http://127.0.0.1:8000/test");
//       const data = await response.json();
//       setMessage(`Connection successful: ${JSON.stringify(data)}`);
//     } catch (error) {
//       console.error("Error:", error);
//       if (error instanceof Error) {
//         setMessage(`Connection failed: ${error.message}`);
//       } else {
//         setMessage("Connection failed: An unknown error occurred.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
//       <h1 className="text-3xl font-bold mb-4">API Connection Test</h1>
      
//       <button
//         onClick={testConnection}
//         className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all"
//         disabled={loading}
//       >
//         {loading ? "Testing..." : "Test API Connection"}
//       </button>
      
//       {message && (
//         <div className="mt-4 p-4 bg-gray-200 rounded-lg">
//           <pre>{message}</pre>
//         </div>
//       )}
//     </div>
//   );
// }
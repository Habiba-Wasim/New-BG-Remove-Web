// "use client";
// import Link from "next/link";
// import { useState } from "react";
// import { Menu, X } from "lucide-react";

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="bg-white shadow-md sticky top-0 w-full z-50">
//       <div className="max-w-7xl mx-auto px-6 lg:px-10 flex justify-between items-center h-16">
        
//         {/* ✅ Logo & Website Name */}
//         <Link href="/" className="flex items-center space-x-3">
//           <img src="/logo.png" alt="Logo" className="h-10 w-10" />
//           <span className="text-2xl font-bold text-gray-800">BG Remover</span>
//         </Link>

//         {/* ✅ Navigation Links */}
//         <nav className="hidden md:flex space-x-8 text-lg font-medium">
//           <Link href="/" className="text-gray-700 hover:text-blue-500 transition">Home</Link>
//           <Link href="/features" className="text-gray-700 hover:text-blue-500 transition">Features</Link>
//           <Link href="/pricing" className="text-gray-700 hover:text-blue-500 transition">Pricing</Link>
//           <Link href="/contact" className="text-gray-700 hover:text-blue-500 transition">Contact</Link>
//         </nav>

//         {/* ✅ Upload Button */}
//         <Link href="/upload" className="hidden md:block px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-lg shadow-md hover:scale-105 transition-all">
//           Upload Image
//         </Link>

//         {/* ✅ Mobile Menu Button */}
//         <button className="md:hidden text-gray-700 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
//           {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
//         </button>
//       </div>

//       {/* ✅ Mobile Menu */}
//       {isOpen && (
//         <nav className="md:hidden bg-white shadow-lg absolute w-full left-0 top-16 z-50 p-4">
//           <div className="flex flex-col items-center space-y-4 text-lg font-medium">
//             <Link href="/" className="text-gray-700 hover:text-blue-500 transition" onClick={() => setIsOpen(false)}>Home</Link>
//             <Link href="/features" className="text-gray-700 hover:text-blue-500 transition" onClick={() => setIsOpen(false)}>Features</Link>
//             <Link href="/pricing" className="text-gray-700 hover:text-blue-500 transition" onClick={() => setIsOpen(false)}>Pricing</Link>
//             <Link href="/contact" className="text-gray-700 hover:text-blue-500 transition" onClick={() => setIsOpen(false)}>Contact</Link>
//             <Link href="/upload" className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-lg shadow-md hover:scale-105 transition-all" onClick={() => setIsOpen(false)}>
//               Upload Image
//             </Link>
//           </div>
//         </nav>
//       )}
//     </header>
//   );
// }













































// "use client";
// import Link from "next/link";
// import { useState } from "react";
// import { Menu, X } from 'lucide-react';

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="bg-white shadow-md sticky top-0 w-full z-50">
//       <div className="max-w-7xl mx-auto px-6 lg:px-10 flex justify-between items-center h-16">
        
//         {/* ✅ Logo & Website Name */}
//         <Link href="/" className="flex items-center space-x-3">
//           <img src="/logo.png" alt="Logo" className="h-10 w-10" />
//           <span className="text-2xl font-bold text-gray-800">BG Remover</span>
//         </Link>

//         {/* ✅ Navigation Links */}
//         <nav className="hidden md:flex space-x-8 text-lg font-medium">
//           <Link href="/" className="text-gray-700 hover:text-blue-500 transition">Home</Link>
//           <Link href="/features" className="text-gray-700 hover:text-blue-500 transition">Features</Link>
//           <Link href="/pricing" className="text-gray-700 hover:text-blue-500 transition">Pricing</Link>
//           <Link href="/contact" className="text-gray-700 hover:text-blue-500 transition">Contact</Link>
//         </nav>

//         {/* ✅ Upload Button - FIXED */}
//         <Link href="/upload">
//           <button className="hidden md:block px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all">
//             Upload Image
//           </button>
//         </Link>

//         {/* ✅ Mobile Menu Button */}
//         <button className="md:hidden text-gray-700 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
//           {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
//         </button>
//       </div>

//       {/* ✅ Mobile Menu */}
//       {isOpen && (
//         <nav className="md:hidden bg-white shadow-lg absolute w-full left-0 top-16 z-50 p-4">
//           <div className="flex flex-col items-center space-y-4 text-lg font-medium">
//             <Link href="/" className="text-gray-700 hover:text-blue-500 transition" onClick={() => setIsOpen(false)}>Home</Link>
//             <Link href="/features" className="text-gray-700 hover:text-blue-500 transition" onClick={() => setIsOpen(false)}>Features</Link>
//             <Link href="/pricing" className="text-gray-700 hover:text-blue-500 transition" onClick={() => setIsOpen(false)}>Pricing</Link>
//             <Link href="/contact" className="text-gray-700 hover:text-blue-500 transition" onClick={() => setIsOpen(false)}>Contact</Link>
//             <Link href="/upload" onClick={() => setIsOpen(false)}>
//               <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all">
//                 Upload Image
//               </button>
//             </Link>
//           </div>
//         </nav>
//       )}
//     </header>
//   );
// }
























// "use client";
// import Link from "next/link";
// import { ChevronDown } from 'lucide-react';

// export default function Header() {
//   return (
//     <header className="bg-white shadow-sm sticky top-0 w-full z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
//         <div className="flex items-center space-x-8">
//           <Link href="/" className="flex items-center space-x-2">
//             <div className="w-10 h-10 bg-gray-700 rounded flex items-center justify-center">
//               <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path d="M7 4v16M17 4v16M3 8h18M3 16h18" />
//               </svg>
//             </div>
//             <span className="text-2xl font-bold text-gray-700">remove<span className="text-gray-400">bg</span></span>
//           </Link>
          
//           <nav className="hidden md:flex space-x-6">
//             <Link href="/" className="text-gray-600 hover:text-gray-900">
//               Remove Background
//             </Link>
//             <div className="relative group">
//               <button className="flex items-center text-gray-600 hover:text-gray-900">
//                 Features <ChevronDown className="ml-1 w-4 h-4" />
//               </button>
//             </div>
//             <div className="relative group">
//               <button className="flex items-center text-gray-600 hover:text-gray-900">
//                 For Business <ChevronDown className="ml-1 w-4 h-4" />
//               </button>
//             </div>
//             <Link href="/pricing" className="text-gray-600 hover:text-gray-900">
//               Pricing
//             </Link>
//           </nav>
//         </div>
        
//         <div className="hidden md:flex items-center space-x-4">
//           <Link href="/login" className="text-gray-600 hover:text-gray-900">
//             Log in
//           </Link>
//           <Link href="/signup" className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full font-medium hover:bg-gray-200">
//             Sign up
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }



















"use client";
import Link from "next/link";
import { ChevronDown } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gray-700 rounded flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 4v16M17 4v16M3 8h18M3 16h18" />
              </svg>
            </div>
            <span className="text-2xl font-bold text-gray-700">remove<span className="text-gray-400">bg</span></span>
          </Link>
          
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Remove Background
            </Link>
            <div className="relative group">
              <button className="flex items-center text-gray-600 hover:text-gray-900">
                Features <ChevronDown className="ml-1 w-4 h-4" />
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center text-gray-600 hover:text-gray-900">
                For Business <ChevronDown className="ml-1 w-4 h-4" />
              </button>
            </div>
            <Link href="/pricing" className="text-gray-600 hover:text-gray-900">
              Pricing
            </Link>
          </nav>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/login" className="text-gray-600 hover:text-gray-900">
            Log in
          </Link>
          <Link href="/signup" className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full font-medium hover:bg-gray-200">
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
}
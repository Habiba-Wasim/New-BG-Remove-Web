// import Header from "@/components/Header";
// import "./globals.css";

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body className="bg-gray-50">
//         <Header />
//         {children}
//       </body>
//     </html>
//   );
// }














import "./globals.css";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>BG Remover - Remove Image Background</title>
        <meta name="description" content="Remove image backgrounds automatically" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}

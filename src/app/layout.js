// layout.js or _app.js (where your RootLayout is defined)
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/topNavBar/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="fixed top-0 left-0 w-full bg-white dark:bg-gray-800 shadow-md z-50">
          <NavBar />
        </div>
        <div className="pt-0"> 
          {children}
        </div>
      </body>
    </html>
  );
}

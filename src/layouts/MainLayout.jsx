// src/layouts/MainLayout.jsx
import { Outlet } from "react-router-dom"; // ← Add this import
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      {/* Outlet renders the matched page: Home, Contributors, etc. */}
      <main className="flex-1 px-6 py-8 max-w-7xl mx-auto w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

function App() {
  return (
    // 1. Full-screen wrapper to center the inner container
    <div className="flex min-h-screen w-screen items-center justify-center">
      {/* 2. Your centered 375px x 812px mobile canvas */}
      <div className="w-[375px] h-[812px] bg-[#F7F8F9] shadow-lg overflow-y-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

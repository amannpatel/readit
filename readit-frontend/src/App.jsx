import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Home from "./pages/Home";
import { useAppSelector } from "./app/hooks";

function App() {
  const { token } = useAppSelector((state) => state.auth);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={token ? <Home /> : <Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";

function AdminDashboard() {
  return <h2 style={{ textAlign: "center", marginTop: "50px" }}>👨‍💼 Admin Dashboard</h2>;
}

function UserDashboard() {
  return <h2 style={{ textAlign: "center", marginTop: "50px" }}>👤 User Dashboard</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
<Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute roleRequired="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/user"
          element={
            <ProtectedRoute roleRequired="user">
              <UserDashboard />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
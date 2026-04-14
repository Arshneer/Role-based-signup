import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, roleRequired }) {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  // not logged in
  if (!token) {
    return <Navigate to="/login" />;
  }

  // role mismatch
  if (roleRequired && role !== roleRequired) {
    return <Navigate to="/login" />;
  }

  return children;
}
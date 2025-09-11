import { Navigate } from "react-router-dom";
import { useAppSelector } from "../app/hooks";

export default function ProtectedRoute({ children }) {
  const { token } = useAppSelector((state) => state.auth);

  if (!token) {
    // Not authenticated -> redirect to login
    return <Navigate to="/login" replace />;
  }

  // Authenticated -> render child route
  return children;
}

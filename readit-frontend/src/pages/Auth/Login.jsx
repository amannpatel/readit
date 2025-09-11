import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { loginUser } from "../../features/auth/authThunks";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { status, error, token } = useAppSelector((state) => state.auth);

  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(form));
  };

  // If logged in, redirect
  useEffect(() => {
    if (token) navigate("/");
  }, [token, navigate]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 py-6 w-96"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="block w-full px-3 py-2 mb-3 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          required
        />

        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="block w-full px-3 py-2 mb-3 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          required
        />

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          {status === "loading" ? "Signing in..." : "Login"}
        </button>

        <p className="text-sm text-gray-500 mt-4 text-center">
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}

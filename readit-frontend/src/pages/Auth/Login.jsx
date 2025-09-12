import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { loginUser } from "../../features/auth/authThunks";

export default function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { status, error, token } = useAppSelector((state) => state.auth);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // Auto-redirect after successful login
  useEffect(() => {
    if (status === "succeeded" && token) {
      navigate("/", { replace: true });
    }
  }, [status, token, navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(form));
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 py-6 w-96"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>
        {["email", "password"].map((field) => (
          <input
            key={field}
            type={field === "password" ? "password" : "text"}
            name={field}
            placeholder={field}
            value={form[field]}
            onChange={handleChange}
            className="block w-full px-3 py-2 mb-3 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        ))}
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          {status === "loading" ? "Loading..." : "Login"}
        </button>
      </form>
    </div>
  );
}

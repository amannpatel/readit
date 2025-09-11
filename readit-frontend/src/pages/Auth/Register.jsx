import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { registerUser } from "../../features/auth/authThunks";

export default function Register() {
  const dispatch = useAppDispatch();
  const { status, error } = useAppSelector((state) => state.auth);

  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(form));
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 py-6 w-96"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
        {["name", "username", "email", "password"].map((field) => (
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
          {status === "loading" ? "Loading..." : "Register"}
        </button>
      </form>
    </div>
  );
}

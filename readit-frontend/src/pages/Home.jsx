// src/pages/Home.jsx
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { logout } from "../features/auth/authSlice";

export default function Home() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header / Navbar */}
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">Readit</h1>
        <div className="flex items-center space-x-4">
          <span className="text-gray-700 font-medium">
            Hello, {user?.name || "User"}
          </span>
          <button
            onClick={() => dispatch(logout())}
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col justify-center items-center">
        <h2 className="text-3xl font-semibold mb-4">Welcome to Readit 📖</h2>
        <p className="text-gray-600 text-lg">
          This is your home feed. Soon you’ll see posts from authors you follow
          🎉
        </p>
      </main>

      {/* Footer */}
      <footer className="bg-white shadow-md text-center py-4">
        <p className="text-gray-500">
          &copy; {new Date().getFullYear()} Readit
        </p>
      </footer>
    </div>
  );
}

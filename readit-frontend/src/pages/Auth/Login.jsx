import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { loginUser } from "../../features/auth/authThunks";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { SocialButton } from "../../components/ui/SocialButton";
import { Logo } from "../../components/ui/Logo";
import { Divider } from "../../components/ui/Divider";
import { Card } from "../../components/ui/Card";

export default function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { status, error, token } = useAppSelector((state) => state.auth);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  // Auto-redirect after successful login
  useEffect(() => {
    if (status === "succeeded" && token) {
      navigate("/", { replace: true });
    }
  }, [status, token, navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.email) newErrors.email = "Email is required";
    if (!form.password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(loginUser(form));
    }
  };

  const handleSocialLogin = (provider) => {
    // Implement social login logic here
    console.log(`Login with ${provider}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Section */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          <Card className="px-8 py-10">
            {/* Logo */}
            <div className="flex justify-between items-center mb-8">
              <Logo size="medium" />
              <div className="text-sm text-gray-600">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Sign Up
                </Link>
              </div>
            </div>

            {/* Title */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-900">
                Get Started Now
              </h1>
              <p className="mt-2 text-gray-600">
                Please enter your information to access your account.
              </p>
            </div>

            {/* Social Login Buttons */}
            <div className="space-y-3 mb-6">
              <SocialButton
                provider="google"
                onClick={() => handleSocialLogin("google")}
              />
              <SocialButton
                provider="apple"
                onClick={() => handleSocialLogin("apple")}
              />
            </div>

            <Divider text="or" />

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                name="email"
                label="Email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                error={errors.email}
                required
              />

              <Input
                type="password"
                name="password"
                label="Password"
                placeholder="Enter your password"
                value={form.password}
                onChange={handleChange}
                error={errors.password}
                required
              />

              {/* Forgot Password Link */}
              <div className="text-right">
                <Link
                  to="/forgot-password"
                  className="text-sm text-blue-600 hover:text-blue-700"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Error Message */}
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                variant="primary"
                size="large"
                fullWidth
                disabled={status === "loading"}
              >
                {status === "loading" ? "Logging in..." : "Login"}
              </Button>
            </form>

            {/* Footer */}
            <div className="mt-8 text-center text-sm text-gray-500">
              © 2024. All Rights Reserved.
            </div>
          </Card>
        </div>
      </div>

      {/* Right Section - Hero */}
      <div className="hidden lg:flex lg:flex-1 bg-blue-600 items-center justify-center p-12">
        <div className="max-w-lg">
          <h2 className="text-4xl font-bold text-white mb-6">
            The easiest way to take care of your patient
          </h2>

          {/* Progress Dots */}
          <div className="flex space-x-2 mb-8">
            <div className="w-8 h-1 bg-white rounded"></div>
            <div className="w-8 h-1 bg-white/40 rounded"></div>
            <div className="w-8 h-1 bg-white/40 rounded"></div>
            <div className="w-8 h-1 bg-white/40 rounded"></div>
          </div>

          {/* Dashboard Preview */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mt-8">
            <div className="bg-white rounded-xl p-4 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <Logo size="small" />
                  <span className="font-semibold text-gray-900">Dashboard</span>
                </div>
              </div>

              {/* Mini Dashboard Preview */}
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">Patients</span>
                  <span className="text-xl font-bold text-gray-900">6025</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">Revenue</span>
                  <span className="text-xl font-bold text-gray-900">
                    $138,500
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

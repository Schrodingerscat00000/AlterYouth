"use client";

export default function LoginPage() {
  const handleLogin = (event) => {
    event.preventDefault();
    // Add login logic here
    console.log("Login submitted");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50">
      <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-md">
        {/* Welcome Message */}
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-600">Hello!</h1>
        <p className="text-gray-600 text-center mb-8">Welcome back.</p>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-6">
          {/* Email/Phone Field */}
          <div>
            <label htmlFor="emailOrPhone" className="block text-sm font-medium text-gray-700">
              Email or Phone
            </label>
            <input
              type="text"
              id="emailOrPhone"
              name="emailOrPhone"
              placeholder="Enter your email or phone"
              required
              className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
              className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Login Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 focus:outline-none"
            >
              Log In
            </button>
          </div>
        </form>

        {/* Footer Links */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="/signup" className="text-blue-600 hover:underline">
              Sign up
            </a>
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Forgot your password?{" "}
            <a href="/forgot-password" className="text-blue-600 hover:underline">
              Reset it here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

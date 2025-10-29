import { NavLink } from "react-router-dom"

function Login() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Register
                </h1>

                <form className="flex flex-col space-y-4">
                    <input
                        type="password"
                        placeholder="Enter your password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
                    >
                        Login
                    </button>

                    <p className="text-sm text-center text-gray-600">
                        Don't have an account?
                        <span className="text-blue-600 hover:underline cursor-pointer">
                            <NavLink to={"/register"}> Click here to register</NavLink>
                        </span>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login

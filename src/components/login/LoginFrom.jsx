import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Signup from '../signup/Signup';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); // New state for toggling password visibility
    const [isLoading, setIsLoading] = useState(false); // Loading state
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const validateLogin = (e) => {
        e.preventDefault();
        setIsLoading(true); // Start loading

        // Simulate an API call delay
        setTimeout(() => {
            if (email === 'admin@admin.com' && password === 'admin123') {
                navigate('/dashboard'); // Redirect to Dashboard on successful login
            } else {
                alert('Invalid credentials, try again.');
                setIsLoading(false); // Stop loading if credentials are incorrect
            }
        }, 2000); // Simulate a 2 second delay for the loading state
    };

    return (
        <div className="flex items-center justify-center">
            <div className="">
                <h1 className="text-2xl font-bold mb-2 text-[#242731] dark:text-white">Get’s started.</h1>
                <p className="text-sm text-[#353945] dark:text-[#4e5260] mb-6">
                    Don’t have an account? <Link to="/signup" className="text-[#A162F7] hover:underline">Sign up</Link>
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <button className="w-auto bg-transparent border border-[#E6E8EC] dark:border-[#323745] text-[#242731] dark:text-[#E0E4E7] text-[14px] font-medium py-3 px-6 rounded-lg flex items-center justify-center">
                        <img src="images/google.svg" alt="Google" className="mr-2" />
                        Sign in with Google
                    </button>
                    <button className="w-auto bg-[#6776D0] text-white text-[14px] py-3 px-6 rounded-lg flex items-center justify-center">
                        <img src="images/facebook.svg" alt="Facebook" className="mr-2" />
                        Sign in with Facebook
                    </button>
                </div>

                <div className="flex items-center my-6">
                    <hr className="flex-grow border-gray-300" />
                    <span className="px-2 text-gray-500">or</span>
                    <hr className="flex-grow border-gray-300" />
                </div>

                <form onSubmit={validateLogin}>
                    <div className='bg-white border border-[#F4F5F6] dark:border-none dark:bg-[#242731] rounded-xl shadow-md p-4'>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-[#242731] dark:text-[#E0E4E7] mb-3">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="uistore@gmail.com"
                                className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm bg-transparent dark:border-[#323745] border-[#B1B5C3]"
                            />
                        </div>

                        <div className="mb-4 relative">
                            <label className="block text-sm font-medium text-[#242731] dark:text-[#E0E4E7] mb-3">Password</label>
                            <input
                                type={showPassword ? "text" : "password"} // Toggle between text and password
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="********"
                                className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm bg-transparent dark:border-[#323745] border-[#B1B5C3]"
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-3 top-8 text-gray-500"
                                onClick={togglePasswordVisibility} // Toggle password visibility
                            >
                                <img
                                    src={
                                        showPassword
                                            ? "https://img.icons8.com/ios-glyphs/24/000000/invisible.png" // Eye-off icon
                                            : "https://img.icons8.com/ios-glyphs/24/000000/visible.png" // Eye icon
                                    }
                                    alt={showPassword ? "Hide" : "Show"}
                                />
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center justify-between my-6">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="rememberMe"
                                className="h-4 w-4 text-purple-500 border-gray-300 rounded"
                            />
                            <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-600">
                                Remember me
                            </label>
                        </div>

                        <div>
                            <Link to="/forgot-password" className="text-sm text-purple-500 hover:underline">
                                Forgot your password?
                            </Link>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading} // Disable button while loading
                        className={`w-full h-[50px] bg-purple-500 text-white py-2 px-4 rounded-lg transition duration-150 relative ${
                            isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-purple-600'
                        }`}
                    >
                        {isLoading ? (
                            <div className="w-4 h-4 border-2 border-t-transparent border-white border-solid rounded-full animate-spin absolute inset-0 m-auto"></div>
                        ) : (
                            'Sign in'
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;

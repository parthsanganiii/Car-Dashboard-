import React, { useState } from 'react';

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage('');

        // Simulate sending the password reset email (replace this with actual API call)
        setTimeout(() => {
            setIsLoading(false);
            setMessage('If an account with that email exists, a reset link has been sent.');
        }, 2000);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-[#181A1F]">
            <div className="w-full max-w-md p-8 space-y-6 bg-white dark:bg-[#242731] rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center text-[#242731] dark:text-white">Forgot Password</h2>
                <p className="text-sm text-center text-gray-600 dark:text-[#9ca3af]">
                    Enter your email below, and we'll send you a reset link.
                </p>

                {message && (
                    <p className="text-center text-green-500">
                        {message}
                    </p>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-[#242731] dark:text-[#E0E4E7] mb-3">
                            Email Address
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="uistore@gmail.com"
                            required
                            className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm bg-transparent dark:border-[#323745] border-[#B1B5C3]"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`relative w-full h-[50px] bg-purple-500 text-white py-2 px-4 rounded-lg transition duration-150 ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-purple-600'
                            }`}
                    >
                        {isLoading ? (
                            <div className="w-4 h-4 border-2 border-t-transparent border-white border-solid rounded-full animate-spin absolute left-0 right-0 top-0 bottom-0 m-auto"></div>
                        ) : (
                            'Send Reset Link'
                        )}
                    </button>

                </form>

                <div className="text-center mt-4">
                    <a href="/" className="text-sm text-purple-500 hover:underline">
                        Back to login
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;

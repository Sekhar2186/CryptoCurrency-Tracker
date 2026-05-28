import React, { useState } from 'react';
import { Navigate, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/authContext';
import { doCreateUserWithEmailAndPassword } from '../../../firebase/auth';
import websiteLogo from '../../../assets/websiteLogo.png';

const Register = () => {
    const navigate = useNavigate();
    const { userLoggedIn } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isRegistering, setIsRegistering] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!isRegistering && password === confirmPassword) {
            setIsRegistering(true);
            try {
                await doCreateUserWithEmailAndPassword(email, password);
            } catch (error) {
                setErrorMessage('Registration failed. Please try again.');
            } finally {
                setIsRegistering(false);
            }
        } else {
            setErrorMessage("Passwords don't match.");
        }
    };

    if (userLoggedIn) return <Navigate to="/home" replace={true} />;

    return (
        <div className="min-h-screen bg-[#08090a] flex items-center justify-center px-4 relative overflow-hidden">
            {/* Ambient glows */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#7c3aed]/6 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#3a80e9]/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 w-full max-w-4xl flex flex-col md:flex-row items-center gap-12">
                {/* Left: Branding */}
                <div className="flex-1 flex flex-col items-center md:items-start gap-6">
                    <div className="flex items-center gap-3">
                        <div className="w-14 h-14 rounded-2xl bg-[#3a80e9] flex items-center justify-center shadow-[0_0_30px_rgba(58,128,233,0.5)]">
                            <img src={websiteLogo} alt="logo" className="w-10 h-10 rounded-xl object-cover" />
                        </div>
                        <div>
                            <h1 className="text-white font-black text-2xl leading-none">
                                CryptoRadar<span className="text-[#3a80e9]">.</span>
                            </h1>
                            <p className="text-[#4b5563] text-xs font-medium mt-0.5">Real-time crypto tracking</p>
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <h2 className="text-4xl font-black text-white leading-tight mb-3">
                            Join the<br />
                            <span style={{
                                background: "linear-gradient(135deg, #7c3aed, #3a80e9)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}>
                                Crypto Revolution.
                            </span>
                        </h2>
                        <p className="text-[#6b7280] text-sm leading-relaxed max-w-xs">
                            Create your free account and start tracking crypto prices in real time.
                        </p>

                        <div className="flex gap-6 mt-8">
                            {[
                                { value: "100+", label: "Coins" },
                                { value: "24/7", label: "Live Data" },
                                { value: "Free", label: "Forever" },
                            ].map((s) => (
                                <div key={s.label}>
                                    <p className="text-xl font-black text-white">{s.value}</p>
                                    <p className="text-[#6b7280] text-xs font-medium">{s.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right: Register card */}
                <div className="w-full max-w-sm">
                    <div className="bg-[#101114] border border-[#1e2028] rounded-2xl p-8 shadow-[0_0_60px_rgba(0,0,0,0.5)]">
                        <div className="mb-6">
                            <h3 className="text-white font-bold text-xl mb-1">Create account</h3>
                            <p className="text-[#6b7280] text-sm">Sign up to get started with CryptoRadar</p>
                        </div>

                        <form onSubmit={onSubmit} className="flex flex-col gap-4">
                            {/* Email */}
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[#9ca3af] text-xs font-semibold uppercase tracking-wider">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    autoComplete="email"
                                    required
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-[#16181d] border border-[#2a2d35] rounded-xl px-4 py-3 text-white text-sm placeholder-[#4b5563] outline-none focus:border-[#3a80e9] focus:shadow-[0_0_0_3px_rgba(58,128,233,0.15)] transition-all duration-200"
                                />
                            </div>

                            {/* Password */}
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[#9ca3af] text-xs font-semibold uppercase tracking-wider">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    autoComplete="new-password"
                                    required
                                    placeholder="Create a password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    disabled={isRegistering}
                                    className="w-full bg-[#16181d] border border-[#2a2d35] rounded-xl px-4 py-3 text-white text-sm placeholder-[#4b5563] outline-none focus:border-[#3a80e9] focus:shadow-[0_0_0_3px_rgba(58,128,233,0.15)] transition-all duration-200 disabled:opacity-50"
                                />
                            </div>

                            {/* Confirm Password */}
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[#9ca3af] text-xs font-semibold uppercase tracking-wider">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    autoComplete="off"
                                    required
                                    placeholder="Confirm your password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    disabled={isRegistering}
                                    className="w-full bg-[#16181d] border border-[#2a2d35] rounded-xl px-4 py-3 text-white text-sm placeholder-[#4b5563] outline-none focus:border-[#3a80e9] focus:shadow-[0_0_0_3px_rgba(58,128,233,0.15)] transition-all duration-200 disabled:opacity-50"
                                />
                            </div>

                            {/* Error */}
                            {errorMessage && (
                                <div className="bg-[#f94141]/10 border border-[#f94141]/30 rounded-xl px-4 py-3 text-[#f94141] text-sm font-medium">
                                    {errorMessage}
                                </div>
                            )}

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={isRegistering}
                                className={`w-full py-3 rounded-xl font-bold text-sm text-white transition-all duration-300 mt-2
                                    ${isRegistering
                                        ? 'bg-[#1e2028] border border-[#2a2d35] text-[#4b5563] cursor-not-allowed'
                                        : 'bg-[#3a80e9] hover:bg-[#2d6fd4] hover:shadow-[0_0_20px_rgba(58,128,233,0.4)] cursor-pointer'
                                    }`}
                            >
                                {isRegistering ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        Creating Account...
                                    </span>
                                ) : 'Create Account'}
                            </button>
                        </form>

                        <p className="text-center text-[#6b7280] text-sm mt-6">
                            Already have an account?{' '}
                            <Link to="/" className="text-[#3a80e9] font-semibold hover:underline">
                                Sign In
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;

import React, { useState } from 'react';
import classNames from 'classnames';

const Login = ({ onClose }) => {
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [isOtpIncorrect, setIsOtpIncorrect] = useState(false);

  const handleOtpVerification = () => {
    const otpInput = document.getElementById('otp-input').value;
    if (otpInput === '1234') {
      setOtpVerified(true);
      setIsOtpIncorrect(false);
    } else {
      setIsOtpIncorrect(true);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
      {/* Login Form Modal */}
      <form className="relative bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-lg w-full max-w-md">
        {/* Close Button */}
        <button
          type="button"
          className="absolute top-2 right-2 bg-red-600 text-white rounded-full p-2 focus:outline-none"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className="text-3xl font-bold text-white text-center mb-6">Login to ABHA</h2>

        {/* Radio Buttons for Login Method */}
        <div className="mb-4">
          <div className="flex items-center justify-between space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="login-method"
                value="abha-number"
                className="form-radio text-green-600"
              />
              <span className="ml-2 text-black">ABHA Number</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="login-method"
                value="abha-address"
                className="form-radio text-green-600"
              />
              <span className="lg:mr-10 text-black ">ABHA Address</span>
            </label>
          </div>
        </div>

        {/* ABHA ID or ABHA Address Input */}
        <div className="mb-4">
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded bg-white bg-opacity-80"
            placeholder="Enter ABHA ID or ABHA Address"
          />
        </div>

        {/* OTP Button */}
        <div className="mb-4 flex items-center">
          {otpSent ? (
            <button type="button" className="bg-transparent text-black py-2 px-4 rounded" disabled>
              Sent ✓
            </button>
          ) : (
            <button
              type="button"
              className="bg-blue-600 text-white py-2 px-4 rounded"
              onClick={() => setOtpSent(true)}
            >
              Send OTP
            </button>
          )}
        </div>

        {/* OTP Input and Verify Button */}
        {otpSent && (
          <div className="mb-4 flex items-center space-x-2">
            <input
              type="text"
              id="otp-input"
              placeholder="Enter OTP"
              className={classNames(
                'w-full p-2 border border-gray-300 rounded bg-white bg-opacity-80',
                { 'border-red-500 animate-shake': isOtpIncorrect }
              )}
              disabled={otpVerified}
            />

            {otpVerified ? (
              <div className="flex items-center text-white">
                <span>Verified ✓</span>
              </div>
            ) : (
              <button
                type="button"
                className="bg-blue-600 text-white py-2 px-4 rounded"
                onClick={handleOtpVerification}
              >
                Verify OTP
              </button>
            )}
          </div>
        )}

        {/* Login Button */}
        <button
          type="button"
          className={`w-full bg-green-600 text-white py-2 px-4 rounded ${
            !otpVerified ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={!otpVerified}
        >
          Login
        </button>

        <p className="mt-4 text-center text-black">
          Don't have an account? <a href="/register" className="text-blue-400">Create one</a>
        </p>
      </form>
    </div>
  );
};

export default Login;

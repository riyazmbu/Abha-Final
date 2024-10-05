import React, { useState } from 'react';
import classNames from 'classnames';

const CreateAbha = ({ onClose }) => {
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [isOtpIncorrect, setIsOtpIncorrect] = useState(false);

  // Simulate OTP verification
  const handleOtpVerification = () => {
    const otpInput = document.getElementById('otp-input').value;
    if (otpInput === '1234') {
      setOtpVerified(true);
      setIsOtpIncorrect(false); // Clear error if verified
    } else {
      setIsOtpIncorrect(true); // Show error and shake effect
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
      {/* Form Modal */}
      <form className="relative bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-lg w-full max-w-md">
        {/* Close Button */}
        <button
          type="button"
          className="absolute top-2 right-2 bg-red-600 text-white rounded-full p-2 focus:outline-none"
          onClick={onClose}
        >
          ✕
        </button>

        {/* AADHAAR Number Input */}
        <div className="mb-4">
          <label className="block text-white">AADHAAR Number:</label>
          <input type="text" className="w-64 p-2 border border-gray-300 rounded mt-2" />
          
          {/* Send OTP Button */}
          {otpSent ? (
            <button
              type="button"
              className="bg-transparent text-white py-2 px-4 rounded mt-2"
              disabled
            >
              <span>Sent</span>
              <span className="ticksymbol">✓</span>
            </button>
          ) : (
            <button
              type="button"
              className="bg-blue-600 text-white py-2 px-4 rounded mt-2 lg:ml-5"
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
                'w-40 p-2 border border-gray-300 rounded mt-1',
                { 'border-red-500 animate-shake': isOtpIncorrect }
              )}
              disabled={otpVerified} // Disable input after verification
            />

            {otpVerified ? (
              // Show Verified status in the same row
              <div className="flex items-center space-x-1 text-white">
                <span>Verified</span>
                <span className="ticksymbol">✓</span>
              </div>
            ) : (
              // Show Verify button if not verified
              <button
                type="button"
                className="w-1/2 bg-blue-600 text-white py-2 px-4 rounded"
                onClick={handleOtpVerification}
              >
                Verify OTP
              </button>
            )}
          </div>
        )}

        {/* ABHA Address Input (disabled until OTP is verified) */}
        <div className="mb-4">
          <label className="block text-white">ABHA Address:</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            disabled={!otpVerified}
          />
        </div>

        {/* Create ABHA Button */}
        <button
          type="button"
          className={`bg-green-600 text-white py-2 px-4 rounded ${!otpVerified ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={!otpVerified}
        >
          Create ABHA Account
        </button>

        <p className="mt-4 text-center text-white">
          Already have an account?{' '}
          <a href="#" onClick={onClose} className="text-blue-400">
            Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default CreateAbha;

  import React, { useState } from 'react';
  import { useNavigate } from 'react-router-dom';
  import bgImage from './bgdata.png'; // Image for the left side
  import gifImage from './QR Code.gif';
  import confirmed from './Confirmed.gif';
  import fileSent from './Files sent.gif'; 
  import Login from './Login'; // Import the Login component

  function LandingPage() {
      const navigate = useNavigate();
      const [showLogin, setShowLogin] = useState(false); // State to handle login form visibility

      const handleLoginClick = () => {
          setShowLogin(true); // Show login modal
      };

      const handleRegisterClick = () => {
          navigate('./register'); // Navigate to register page
      };

      const handleCloseLogin = () => {
          setShowLogin(false); // Close login modal
      };

      return (
          <div className="bg-gradient-to-br from-green-400 to-blue-500 min-h-screen flex flex-col items-center justify-center relative">
              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-30"></div>

              {/* Header */}
              <header className="z-10 w-full max-w-7xl flex justify-between items-center px-8 py-6">
                  <h1 className="text-4xl font-extrabold text-white tracking-wide">ABHA Health App</h1>
                  <div className="space-x-4">
                      <button 
                          onClick={handleLoginClick} 
                          className="bg-white bg-opacity-20 hover:bg-blue-800 hover:text-white text-black font-semibold px-4 py-2 lg:px-6 lg:py-3 rounded-lg backdrop-blur-md shadow-lg hover:bg-opacity-40 transition-all text-sm lg:text-base mb-5 ml-5">
                          Login
                      </button>
                      <button 
                          onClick={handleRegisterClick} 
                          className="bg-white hover:bg-blue-800 hover:text-white bg-opacity-20 text-black font-semibold px-4 py-2 lg:px-6 lg:py-3 rounded-lg backdrop-blur-md shadow-lg hover:bg-opacity-40 transition-all text-sm lg:text-base ">
                          Register
                      </button>
                  </div>
              </header>

              {/* Main content */}
              <div className="flex-grow flex flex-col lg:flex-row items-center justify-center z-10 mt-12 lg:mt-0">
                  {/* Left Side - Image */}
                  <div className="hidden lg:block lg:w-1/2 relative">
                      <img
                          src={bgImage}
                          alt="ABHA Health"
                          className="w-full h-full object-cover rounded-xl shadow-xl"
                      />
                  </div>

                  {/* Right Side - Video */}
                  <div className="w-full max-w-lg bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-xl shadow-lg mt-12 lg:mt-0 lg:ml-12">
                      <iframe
                          width="100%"
                          height="315"
                          src="https://www.youtube.com/embed/hN_InEusu9k"
                          title="Ayushman Bharat Digital Mission - Benefits of ABHA number, English"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                          className="rounded-lg shadow-lg"
                      ></iframe>
                  </div>
              </div>

              {/* Scan And Share Section */}
              <section className="w-full max-w-7xl px-8 py-12 mt-12 bg-white bg-opacity-80 rounded-lg shadow-lg z-10">
                  <h2 className="text-3xl font-bold text-center mb-6">Scan And Share</h2>
                  <div className="flex flex-col lg:flex-row items-center justify-center">
                      <div className="flex flex-col items-center text-center mb-6 lg:mb-0">
                          <h3 className="text-xl font-semibold">1. Scan</h3>
                          <img 
                              src={gifImage} 
                              alt="Scan and Share GIF"
                              className="w-50 h-50 object-cover"
                          />
                          <p className="mt-2 text-gray-600">
                              Use your device to scan the QR code or barcode for easy access.
                          </p>
                      </div>

                      <div className="flex flex-col items-center text-center mb-6 lg:mb-0">
                          <h3 className="text-xl font-semibold">2. Confirm</h3>
                          <img 
                              src={confirmed} 
                              alt="Confirmed"
                              className="w-50 h-50 object-cover"
                          />
                          <p className="mt-2 text-gray-600">
                              Confirm the shared details after scanning.
                          </p>
                      </div>

                      <div className="flex flex-col items-center text-center">
                          <h3 className="text-xl font-semibold">3. File Sent</h3>
                          <img 
                              src={fileSent} 
                              alt="File Sent"
                              className="w-50 h-50 object-cover"
                          />
                          <p className="mt-2 text-gray-600">
                              Your file has been sent successfully!
                          </p>
                      </div>
                  </div>
              </section>

              {/* Popup Login Form */}
              {showLogin && <Login onClose={handleCloseLogin} />}
          </div>
      );
  }

  export default LandingPage;

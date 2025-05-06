import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-300 via-pink-200 to-yellow-100 flex items-center justify-center">
      <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-md text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Assignment 5: Firebase Auto Deployment
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          This project demonstrates auto deployment using Firebase Hosting and Jenkins Pipeline.
        </p>
        <div className="border-t pt-4 text-gray-700">
          <p className="font-semibold">Submitted by:</p>
          <p>Chanyanat Sodsri - B6508852</p>
          <p>Kaminchanok Thonnondang - B526405</p>
        </div>
      </div>
    </div>
  );
}

export default App;

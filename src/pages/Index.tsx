import React from 'react';
import EmailCaptureForm from '@/components/EmailCaptureForm';

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Get Notified When We Launch!
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Be the first to know when our exciting new channel goes live. Sign up now!
        </p>
        <EmailCaptureForm />
      </div>
    </div>
  );
};

export default Index;
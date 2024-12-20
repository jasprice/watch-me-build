import React from 'react';
import EmailCaptureForm from '@/components/EmailCaptureForm';

const Index = () => {
  const emailSubject = encodeURIComponent("Watch Me Build It Creator Request");
  const emailBody = encodeURIComponent(
    "Thank you for your submission!\n\n" +
    "Please describe your project with as much detail as you can or provide a link to your app, website, design, video, etc. so we can verify your project. We will get back to your shortly.\n\n" +
    
    "P.S. We would love for you to share with your other creator friends and colleagues in order to get a diverse group of creators in on the project. Please forward our website link to them - www.watchmebuid.it"
  );

  return (
    <div className="min-h-screen flex items-start pt-20 justify-center bg-[#1a1a2e] text-white">
      <div className="max-w-4xl w-full px-6 py-8">
        <div className="mb-8 text-center">
          <span className="inline-block px-4 py-2 bg-[#2d2d4a] rounded-full text-sm mb-12">
            Launching Soon!
          </span>
          <h1 className="text-5xl font-bold mb-4">Join our Waitlist!</h1>
          <br></br><br></br>
          <p className="text-lg mb-6">
            Discover how creators bring their digital products to life! &nbsp;&nbsp;From websites and apps to designs 
            and videos, we showcase the unique creative processes behind the scenes. <br></br><br></br>
            Join us to explore how different creators build and shape the digital world.
          </p>
        </div>
        <br></br>
        <EmailCaptureForm />
        <div className="text-center mt-6 relative z-10">
          <p className="text-sm text-gray-400">
            For those who would like to be featured,{' '}
            <a 
              href={`mailto:pricedigitalventures@gmail.com?subject=${emailSubject}&body=${emailBody}`}
              className="text-blue-400 hover:text-blue-300 underline"
            >
              drop us an email
            </a>{' '}
            so we can get you scheduled.
          </p>
        </div>
      </div>
      <div className="absolute inset-0 bg-[url('/network-bg.png')] opacity-10 z-0"></div>
    </div>
  );
};

export default Index;

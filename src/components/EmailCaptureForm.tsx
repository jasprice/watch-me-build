import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { ArrowRight } from 'lucide-react';

const EmailCaptureForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log('Email submitted:', email);
    toast.success('Thank you for joining our waitlist! We\'ll notify you when we launch.');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2">
      <Input
        type="email"
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="flex-grow bg-[#2d2d4a] border-none text-white placeholder-gray-400"
      />
      <Button type="submit" className="bg-white text-black hover:bg-gray-200">
        Join Waitlist <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </form>
  );
};

export default EmailCaptureForm;
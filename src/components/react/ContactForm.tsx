import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    // Basic client-side validation
    if (!formData.name || !formData.email || !formData.message) {
        setStatus('error');
        setErrorMessage('Please fill in all required fields.');
        return;
    }

    // Simulate functionality for now since we don't have a backend.
    // In a real scenario, this would be a fetch call to an API endpoint.
    try {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Success simulation
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-base-100 p-8 rounded-3xl border border-base-content/5 shadow-xl shadow-base-content/5 relative overflow-hidden">
      {status === 'submitting' && (
        <div className="absolute inset-0 bg-base-100/50 backdrop-blur-[1px] z-10 flex items-center justify-center rounded-3xl">
            <div className="flex flex-col items-center gap-3">
                <Loader2 className="w-10 h-10 animate-spin text-primary" />
                <span className="font-medium text-sm">Sending...</span>
            </div>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">Name</span>
          </label>
          <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe" 
            className="input input-bordered w-full border-base-content/20 focus:border-primary focus:outline-none bg-transparent transition-all" 
            required 
            disabled={status === 'submitting'}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">Email</span>
          </label>
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com" 
            className="input input-bordered w-full border-base-content/20 focus:border-primary focus:outline-none bg-transparent transition-all" 
            required 
            disabled={status === 'submitting'}
          />
        </div>
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text font-medium">Subject</span>
        </label>
        <input 
          type="text" 
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Project Inquiry" 
          className="input input-bordered w-full border-base-content/20 focus:border-primary focus:outline-none bg-transparent transition-all" 
          required 
          disabled={status === 'submitting'}
        />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text font-medium">Message</span>
        </label>
        <textarea 
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="textarea textarea-bordered h-32 w-full border-base-content/20 focus:border-primary focus:outline-none bg-transparent transition-all resize-none" 
          placeholder="Tell me about your project..." 
          required
          disabled={status === 'submitting'}
        ></textarea>
      </div>

      <div className="flex flex-col gap-4">
        {status === 'success' ? (
            <div className="alert alert-success bg-success/10 text-success border-success/20 rounded-2xl">
                <CheckCircle size={20} />
                <span>Message sent successfully! I'll get back to you soon.</span>
            </div>
        ) : status === 'error' ? (
            <div className="alert alert-error bg-error/10 text-error border-error/20 rounded-2xl">
                <AlertCircle size={20} />
                <span>{errorMessage || "Failed to send message."}</span>
            </div>
        ) : null}

        <button 
            type="submit" 
            className="btn btn-primary btn-lg w-full md:w-auto rounded-full group"
            disabled={status === 'submitting' || status === 'success'}
        >
            {status === 'submitting' ? 'Sending...' : 'Send Message'}
            {!status && <Send size={18} className="group-hover:translate-x-1 transition-transform" />}
            {status === 'idle' && <Send size={18} className="group-hover:translate-x-1 transition-transform" />}
        </button>
      </div>
    </form>
  );
}

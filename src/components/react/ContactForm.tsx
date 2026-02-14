import { Send } from 'lucide-react';

export default function ContactForm() {
  return (
    <form className="space-y-6 bg-base-100 p-8 rounded-3xl border border-base-content/5 shadow-xl shadow-base-content/5 relative overflow-hidden">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">Name</span>
          </label>
          <input 
            type="text" 
            placeholder="John Doe" 
            className="input input-bordered w-full border-base-content/20 bg-transparent opacity-50 cursor-not-allowed" 
            disabled 
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">Email</span>
          </label>
          <input 
            type="email" 
            placeholder="john@example.com" 
            className="input input-bordered w-full border-base-content/20 bg-transparent opacity-50 cursor-not-allowed" 
            disabled 
          />
        </div>
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text font-medium">Subject</span>
        </label>
        <input 
          type="text" 
          placeholder="Project Inquiry" 
          className="input input-bordered w-full border-base-content/20 bg-transparent opacity-50 cursor-not-allowed" 
          disabled 
        />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text font-medium">Message</span>
        </label>
        <textarea 
          className="textarea textarea-bordered h-32 w-full border-base-content/20 bg-transparent resize-none opacity-50 cursor-not-allowed" 
          placeholder="Tell me about your project..." 
          disabled
        ></textarea>
      </div>

      <div className="flex flex-col gap-3">
        <button 
          type="button" 
          className="btn btn-primary btn-lg w-full md:w-auto rounded-full opacity-50 cursor-not-allowed"
          disabled
        >
          Coming Soon
          <Send size={18} />
        </button>
        <p className="text-sm text-base-content/50 italic">
          🚧 This form is currently a work in progress. In the meantime, feel free to reach out via LinkedIn or GitHub.
        </p>
      </div>
    </form>
  );
}

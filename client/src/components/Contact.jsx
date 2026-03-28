import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ArrowRight, CheckCircle2 } from 'lucide-react';

const contactDetails = [
  { icon: <Mail size={18}/>, label: 'Email', value: 'info@aibunt.com', href: 'mailto:info@aibunt.com' },
  { icon: <Phone size={18}/>, label: 'Phone', value: '+91 9951593345', href: 'tel:+919951593345' },
  { icon: <MapPin size={18}/>, label: 'Location', value: 'Hyderabad, India', href: '#' }
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const resp = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (resp.ok) {
        setSent(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSent(false), 5000);
      } else {
        const err = await resp.json();
        alert(err.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      alert('Failed to connect to the server. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative py-24 overflow-hidden bg-transparent">
      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[var(--accent)] text-[10px] font-bold uppercase tracking-[0.5em] mb-4 block">
            Let's Connect
          </span>
          <h2 className="text-5xl md:text-7xl font-[1000] uppercase italic tracking-tighter mb-4 leading-none">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-base opacity-50 font-medium max-w-xl mx-auto">
            Have a project in mind or want to know more? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">

          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {contactDetails.map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="flex items-center gap-4 p-5 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] hover:border-[var(--accent)]/40 transition-all group"
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-110 group-hover:bg-[var(--accent)] group-hover:text-[var(--bg-primary)]"
                  style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}>
                  {item.icon}
                </div>
                <div>
                  <p className="text-[9px] font-black uppercase tracking-widest opacity-40 mb-0.5">{item.label}</p>
                  <p className="text-sm font-black tracking-tight">{item.value}</p>
                </div>
                <ArrowRight size={14} className="ml-auto opacity-0 group-hover:opacity-40 transition-all -translate-x-2 group-hover:translate-x-0" />
              </a>
            ))}

            {/* Quick note */}
            <div className="p-5 rounded-2xl border border-[var(--accent)]/15 bg-[var(--accent-soft)] mt-2">
              <p className="text-[10px] font-black uppercase tracking-widest text-[var(--accent)] mb-2">Response Time</p>
              <p className="text-sm font-medium opacity-70 leading-relaxed">We typically respond within <strong className="text-[var(--accent)]">24–48 hours</strong> on business days.</p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 p-8 rounded-3xl border border-[var(--border-color)] bg-[var(--bg-card)] relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-48 h-48 bg-[var(--accent)] rounded-full blur-[80px] opacity-5 pointer-events-none" />

            {sent ? (
              <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex flex-col items-center justify-center h-full py-10 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-5" style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}>
                  <CheckCircle2 size={32} />
                </div>
                <h4 className="text-xl font-black uppercase tracking-tighter mb-2">Message Sent!</h4>
                <p className="text-sm opacity-50 font-medium">We'll get back to you within 24–48 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[9px] font-black uppercase tracking-widest opacity-40">Full Name *</label>
                    <input required type="text" name="name" value={formData.name} onChange={handleChange}
                      placeholder="Your name"
                      className="bg-[var(--bg-primary)] border border-[var(--border-color)] px-4 py-3 rounded-xl text-sm font-medium focus:border-[var(--accent)] outline-none transition-all" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[9px] font-black uppercase tracking-widest opacity-40">Email Address *</label>
                    <input required type="email" name="email" value={formData.email} onChange={handleChange}
                      placeholder="your@email.com"
                      className="bg-[var(--bg-primary)] border border-[var(--border-color)] px-4 py-3 rounded-xl text-sm font-medium focus:border-[var(--accent)] outline-none transition-all" />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[9px] font-black uppercase tracking-widest opacity-40">Subject *</label>
                  <input required type="text" name="subject" value={formData.subject} onChange={handleChange}
                    placeholder="How can we help?"
                    className="bg-[var(--bg-primary)] border border-[var(--border-color)] px-4 py-3 rounded-xl text-sm font-medium focus:border-[var(--accent)] outline-none transition-all" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[9px] font-black uppercase tracking-widest opacity-40">Message *</label>
                  <textarea required name="message" value={formData.message} onChange={handleChange}
                    rows={4} placeholder="Tell us about your project or idea..."
                    className="bg-[var(--bg-primary)] border border-[var(--border-color)] px-4 py-3 rounded-xl text-sm font-medium focus:border-[var(--accent)] outline-none transition-all resize-none" />
                </div>
                <div className="flex gap-3 pt-2">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={loading}
                    type="submit"
                    className="flex-1 py-4 rounded-2xl font-black uppercase text-xs tracking-[0.2em] flex items-center justify-center gap-2 shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ background: 'var(--accent)', color: 'var(--bg-primary)' }}
                  >
                    {loading ? (
                      <>Processing...</>
                    ) : (
                      <><Send size={15} /> Send Message</>
                    )}
                  </motion.button>
                  <button type="button"
                    onClick={() => setFormData({ name: '', email: '', subject: '', message: '' })}
                    className="px-6 py-4 rounded-2xl border border-[var(--border-color)] font-black uppercase text-xs tracking-widest hover:border-[var(--accent)]/40 transition-all opacity-60 hover:opacity-100">
                    Clear
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

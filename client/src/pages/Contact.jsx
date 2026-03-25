import React from "react";
import toast from "react-hot-toast";

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const toastId = toast.loading("Sending message...");
        setTimeout(() => {
            toast.success("Message sent successfully!", { id: toastId });
            e.target.reset();
        }, 1500);
    };

    return (
        <div className="animate-fade-in min-h-screen bg-[#0f172a] text-white">
            {/* Background Elements */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-green-900/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-900/20 rounded-full blur-[120px]" />
            </div>

            <div className="relative pt-20 pb-20 px-4 md:px-8">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <span className="inline-block py-1 px-3 rounded-full bg-green-500/10 text-green-400 text-sm font-bold tracking-widest uppercase mb-4 border border-green-500/20">
                        Get in Touch
                    </span>
                    <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
                        Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500">Extraordinary</span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Have a project in mind? We help forward-thinking companies build the future with cutting-edge engineering and AI solutions.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
                    {/* Contact Info Card */}
                    <div className="md:col-span-2 bg-slate-900/80 backdrop-blur-xl p-8 rounded-2xl border border-white/10 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div>
                            <h3 className="text-2xl font-bold mb-8 text-white">Contact Info</h3>
                            <div className="space-y-8">
                                <div className="flex items-start gap-5 group/item">
                                    <div className="p-3.5 rounded-xl bg-[#1e293b] text-green-500 group-hover/item:scale-110 transition-transform duration-300 shadow-lg shadow-black/50">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Email</p>
                                        <p className="text-white font-medium text-lg hover:text-green-400 transition-colors">contact@aibunt.com</p>
                                    </div>
                                </div>
                                <a
                                    href="https://www.google.com/maps/place/People+Tech+Group/@17.4483524,78.3726706,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb93cfef34a9e1:0x9ebd6ff137acb6f1!8m2!3d17.4483524!4d78.3752455!16s%2Fg%2F1ptvsnb4m?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-start gap-5 group/item cursor-pointer"
                                >
                                    <div className="p-3.5 rounded-xl bg-[#1e293b] text-green-500 group-hover/item:scale-110 transition-transform duration-300 shadow-lg shadow-black/50">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Location</p>
                                        <p className="text-white font-medium text-lg group-hover/item:text-green-400 transition-colors">People Tech Group, HITEC City, Hyderabad</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-white/5">
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Business Hours:<br />
                                Mon - Fri, 9am - 6pm IST
                            </p>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="md:col-span-3 bg-slate-900/80 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl">
                        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                            <h3 className="text-2xl font-bold text-white mb-2">Send us a Message</h3>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-semibold text-gray-400">Name</label>
                                    <input
                                        required
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full bg-[#0f172a] border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all duration-300"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-semibold text-gray-400">Email</label>
                                    <input
                                        required
                                        type="email"
                                        placeholder="john@company.com"
                                        className="w-full bg-[#0f172a] border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all duration-300"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold text-gray-400">Subject</label>
                                <div className="relative">
                                    <select className="w-full bg-[#0f172a] border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all duration-300 appearance-none cursor-pointer">
                                        <option value="" className="text-gray-500">Select a subject...</option>
                                        <option>General Inquiry</option>
                                        <option>Project Quote</option>
                                        <option>Consultation</option>
                                        <option>Careers</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold text-gray-400">Message</label>
                                <textarea
                                    required
                                    placeholder="Tell us about your project requirements..."
                                    className="w-full bg-[#0f172a] border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-600 min-h-[150px] resize-none focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all duration-300"
                                />
                            </div>

                            <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transform hover:-translate-y-1 transition-all duration-300 mt-2 flex items-center justify-center gap-2 group">
                                <span>Send Message</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

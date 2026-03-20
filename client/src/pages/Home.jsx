import React from 'react';
import { ArrowRight, Zap, Target, Award, Users, ShieldCheck, Globe, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="flex flex-col space-y-24 pb-24">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden">
                   <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full"></div>
                   <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-indigo-600/10 blur-[100px] rounded-full"></div>
                </div>

                <div className="container mx-auto px-6 text-center">
                    <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full mb-8 animate-fade-in">
                        <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                        <span className="text-blue-400 text-xs font-black uppercase tracking-widest">Innovation Powered by Excellence</span>
                    </div>
                    
                    <h1 className="text-6xl md:text-8xl mb-8 animate-fade-in stagger-1">
                        Precision Engineering <br />
                        <span className="glow-text">Redefined.</span>
                    </h1>
                    
                    <p className="max-w-3xl mx-auto text-xl text-slate-400 mb-12 animate-fade-in stagger-2 leading-relaxed">
                        At ADG Tech, we bridge the gap between imagination and production. High-performance mechanical design, advanced simulation, and AI-driven insights for the industries of tomorrow.
                    </p>
                    
                    <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 animate-fade-in stagger-3">
                        <Link to="/dashboard" className="btn-premium w-full md:w-auto">
                            Explore Platform <ArrowRight size={20} />
                        </Link>
                        <button className="px-8 py-3 bg-slate-800/50 hover:bg-slate-800 text-white font-bold rounded-2xl border border-slate-700 transition-all duration-300 w-full md:w-auto">
                            Our Services
                        </button>
                    </div>
                </div>
            </section>

            {/* Core Capabilities */}
            <section className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl mb-4">Core Capabilities</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto italic">Delivering certainty in every dimension.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <FeatureCard 
                        icon={<Zap className="text-blue-400" size={32} />}
                        title="Mechanical Design"
                        desc="From conceptual drafting to production-ready CAD models with micron-level precision."
                    />
                    <FeatureCard 
                        icon={<Target className="text-indigo-400" size={32} />}
                        title="FEA Simulation"
                        desc="Advanced static, thermal, and dynamic analysis to ensure structural integrity and efficiency."
                    />
                    <FeatureCard 
                        icon={<Globe className="text-blue-400" size={32} />}
                        title="Reverse Engineering"
                        desc="Transforming physical components into high-fidelity digital assets via 3D scanning."
                    />
                    <FeatureCard 
                        icon={<Award className="text-indigo-400" size={32} />}
                        title="Value Engineering"
                        desc="Optimizing designs for cost-effectiveness without compromising quality or performance."
                    />
                    <FeatureCard 
                        icon={<Cpu className="text-blue-400" size={32} />}
                        title="AI Integration"
                        desc="Leveraging machine learning to predict failure modes and optimize geometry automatically."
                    />
                    <FeatureCard 
                        icon={<ShieldCheck className="text-indigo-400" size={32} />}
                        title="Technical Auditing"
                        desc="Rigorous validation and certification support for global engineering standards."
                    />
                </div>
            </section>

            {/* Impact Section */}
            <section className="bg-slate-800/20 py-24 border-y border-slate-800/50">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl mb-16">Global Impact by Numbers</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                        <StatItem value="150+" label="Successful Projects" />
                        <StatItem value="80+" label="Global Clients" />
                        <StatItem value="12" label="Innovation Awards" />
                        <StatItem value="10" label="Years Experience" />
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="container mx-auto px-6">
                <div className="glass-card bg-gradient-to-br from-blue-600/20 to-transparent border-blue-500/20 text-center p-16">
                    <h2 className="text-4xl md:text-5xl mb-6 italic">Ready to accelerate your next project?</h2>
                    <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                        Join the hundreds of engineering firms that rely on ADG Tech for high-fidelity design and analysis.
                    </p>
                    <button className="btn-premium mx-auto">
                        Connect with an Expert <ArrowRight size={20} />
                    </button>
                </div>
            </section>
        </div>
    );
};

const FeatureCard = ({ icon, title, desc }) => (
    <div className="glass-card group">
        <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
            {icon}
        </div>
        <h3 className="text-2xl mb-4 group-hover:text-blue-400 transition-colors uppercase italic font-black tracking-tighter">{title}</h3>
        <p className="text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed">{desc}</p>
    </div>
);

const StatItem = ({ value, label }) => (
    <div className="flex flex-col items-center">
        <span className="text-5xl md:text-6xl font-black text-white mb-2 tracking-tighter">{value}</span>
        <span className="text-blue-400 uppercase tracking-widest text-xs font-bold">{label}</span>
    </div>
);

export default Home;

import React from "react";
import { Home, User, BarChart2, Settings, Layers, Zap, Target } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="flex h-[calc(100vh-80px)] bg-[#0f172a] overflow-hidden">
      {/* Sidebar */}
      <div className="w-72 bg-[#0b1222] border-r border-slate-800/50 flex flex-col">
        <div className="p-8">
            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-blue-500 mb-8">Platform Console</h2>
            <nav className="space-y-4">
              <NavItem icon={<Home size={20} />} label="Overview" active />
              <NavItem icon={<Layers size={20} />} label="Models" />
              <NavItem icon={<Zap size={20} />} label="Simulations" />
              <NavItem icon={<BarChart2 size={20} />} label="Analytics" />
              <NavItem icon={<Target size={20} />} label="Optimization" />
            </nav>
        </div>
        
        <div className="mt-auto p-8 border-t border-slate-800/50">
           <NavItem icon={<User size={20} />} label="My Account" />
           <NavItem icon={<Settings size={20} />} label="Settings" />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="px-10 py-8 flex justify-between items-center bg-[#0f172a]/50 backdrop-blur-sm border-b border-slate-800/30">
          <div>
            <h1 className="text-3xl font-black tracking-tighter mb-1">Engineering Dashboard</h1>
            <p className="text-sm text-slate-400 font-medium">System status: <span className="text-green-400 font-bold">Operational</span></p>
          </div>
          <div className="flex items-center space-x-6">
            <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-white leading-none mb-1">Lead Engineer</p>
                <p className="text-xs text-slate-500 font-medium">engineering-lead@adg.tech</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center text-white font-black shadow-lg shadow-blue-500/10">
              LE
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-10 space-y-10 custom-scrollbar">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <DashboardStat title="Active Projects" value="14" trend="+3 this month" icon={<Layers className="text-blue-400" />} />
            <DashboardStat title="Simulation Hours" value="1,280" trend="+12.5%" icon={<Zap className="text-indigo-400" />} />
            <DashboardStat title="Structural Confidence" value="99.8%" trend="Optimal" icon={<ShieldCheck className="text-blue-400" />} />
          </div>
          
          {/* Two-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Recent Activity */}
            <div className="glass-card !p-0 overflow-hidden">
               <div className="px-8 py-6 border-b border-slate-700/50 flex justify-between items-center">
                  <h2 className="text-xl font-bold italic uppercase tracking-tight">System Activity</h2>
                  <span className="text-blue-400 text-xs font-bold uppercase tracking-widest cursor-pointer hover:underline">View All</span>
               </div>
               <div className="p-2">
                  <ActivityLine text="Completed FEA Stress Analysis - Wing Spat v2" time="14m ago" type="success" />
                  <ActivityLine text="New CAD model uploaded: Optimized Heat Sink" time="1h ago" type="info" />
                  <ActivityLine text="Tolerance stack-up recalculated for Assembly A1" time="3h ago" type="info" />
                  <ActivityLine text="System Backup completed successfully" time="5h ago" type="success" />
               </div>
            </div>

            {/* Project Quick Actions */}
            <div className="glass-card">
               <h2 className="text-xl font-bold italic uppercase tracking-tight mb-8">Engineering Tools</h2>
               <div className="grid grid-cols-2 gap-4">
                  <ToolBtn label="New Simulation" />
                  <ToolBtn label="Upload CAD" />
                  <ToolBtn label="Export Report" />
                  <ToolBtn label="Compare Revisions" />
               </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

const NavItem = ({ icon, label, active = false }) => (
  <div className={`flex items-center space-x-4 p-3 rounded-xl cursor-pointer transition-all duration-300 group ${active ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20" : "text-slate-400 hover:bg-slate-800/50 hover:text-white"}`}>
    <span className={`${active ? "text-white" : "group-hover:scale-110 transition-transform"}`}>{icon}</span>
    <span className="font-bold text-sm tracking-tight">{label}</span>
  </div>
);

const DashboardStat = ({ title, value, trend, icon }) => (
  <div className="glass-card group">
    <div className="flex justify-between items-start mb-6">
        <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-600/20 transition-all">
            {icon}
        </div>
        <span className="text-xs font-black text-blue-500 bg-blue-500/10 px-2 py-1 rounded-md">{trend}</span>
    </div>
    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">{title}</p>
    <p className="text-4xl font-black tracking-tighter text-white">{value}</p>
  </div>
);

const ActivityLine = ({ text, time, type }) => (
  <div className="flex items-center justify-between p-4 hover:bg-slate-700/30 rounded-2xl transition-all cursor-pointer group">
    <div className="flex items-center space-x-4">
        <div className={`w-2 h-2 rounded-full ${type === 'success' ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]' : 'bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]'}`}></div>
        <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">{text}</span>
    </div>
    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">{time}</span>
  </div>
);

const ToolBtn = ({ label }) => (
    <button className="p-4 bg-slate-800/50 hover:bg-blue-600 border border-slate-700/50 hover:border-blue-400 rounded-2xl text-slate-300 hover:text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 active:scale-95">
        {label}
    </button>
);

const ShieldCheck = ({ className, size = 20 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
);

export default Dashboard;

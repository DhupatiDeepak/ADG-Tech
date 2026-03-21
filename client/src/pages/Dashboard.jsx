import React from "react";
import { motion } from "framer-motion";
import { Layers, Zap, ShieldCheck, ArrowUpRight, Settings, BarChart2, Target } from "lucide-react";

const Dashboard = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex flex-col gap-10 pb-20"
    >
      {/* Header */}
      <motion.header variants={itemVariants} className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-4xl font-black tracking-tighter uppercase mb-2 text-[#0F172A]">Platform <span className="text-slate-300 italic">Console</span></h1>
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            System status: <span className="text-slate-900">Operational</span>
          </p>
        </div>
        
        <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
                <p className="text-xs font-bold uppercase tracking-widest text-[#0F172A] leading-none mb-1">Lead Engineer</p>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest">engineering-lead@adg.tech</p>
            </div>
            <div className="w-10 h-10 bg-slate-100 border border-slate-200 text-[#0F172A] rounded-full flex items-center justify-center text-[10px] font-black">
              LE
            </div>
        </div>
      </motion.header>

      {/* Main Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DashboardStat 
          title="Active Projects" 
          value="14" 
          trend="+3" 
          icon={<Layers size={20} />} 
          index={0}
        />
        <DashboardStat 
          title="Simulation Hours" 
          value="1,280" 
          trend="+12%" 
          icon={<Zap size={20} />} 
          index={1}
        />
        <DashboardStat 
          title="Safety Index" 
          value="99.8%" 
          trend="MAX" 
          icon={<ShieldCheck size={20} />} 
          index={2}
        />
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <motion.div variants={itemVariants} className="lg:col-span-2 glass-card !p-0 overflow-hidden bg-white border-slate-100">
           <div className="px-8 py-6 border-b border-slate-50 flex justify-between items-center bg-slate-50/30">
              <h2 className="text-[11px] font-black uppercase tracking-widest text-slate-400">Latest Activity</h2>
              <button className="text-[#0369A1] text-[10px] font-bold uppercase tracking-[0.2em] hover:opacity-70 transition-opacity">View Logs</button>
           </div>
           <div className="p-4">
              <ActivityLine text="Completed FEA Stress Analysis - Wing Spat v2" time="14m ago" />
              <ActivityLine text="New CAD model uploaded: Optimized Heat Sink" time="1h ago" />
              <ActivityLine text="Tolerance stack-up recalculated for Assembly A1" time="3h ago" />
              <ActivityLine text="System Backup completed successfully" time="5h ago" />
           </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div variants={itemVariants} className="glass-card flex flex-col justify-between bg-white border-slate-100">
           <div>
              <h2 className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-8">System Tools</h2>
              <div className="flex flex-col gap-3">
                 <ToolBtn label="New Simulation" />
                 <ToolBtn label="Upload CAD" />
                 <ToolBtn label="Export Report" />
              </div>
           </div>
           
           <div className="mt-8 pt-8 border-t border-slate-50">
              <p className="text-[10px] text-slate-300 uppercase tracking-widest font-bold mb-4">Quick Shortcuts</p>
              <div className="flex gap-2">
                 <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-[#0369A1] hover:text-white hover:border-[#0369A1] transition-all cursor-pointer"><Settings size={14} /></div>
                 <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-[#0369A1] hover:text-white hover:border-[#0369A1] transition-all cursor-pointer"><BarChart2 size={14} /></div>
                 <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-[#0369A1] hover:text-white hover:border-[#0369A1] transition-all cursor-pointer"><Target size={14} /></div>
              </div>
           </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const DashboardStat = ({ title, value, trend, icon, index }) => (
  <motion.div 
    variants={{
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { delay: index * 0.1, duration: 0.6 } }
    }}
    className="glass-card group hover:scale-[1.02] transition-all duration-500 bg-white border-slate-100"
  >
    <div className="flex justify-between items-start mb-8">
        <div className="w-10 h-10 bg-[#E0F2FE] text-[#0369A1] rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
            {icon}
        </div>
        <span className="text-[10px] font-black text-[#0369A1] bg-[#E0F2FE] px-2 py-1 rounded-full uppercase tracking-widest">{trend}</span>
    </div>
    <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mb-1">{title}</p>
    <p className="text-4xl font-black tracking-tighter text-[#0F172A]">{value}</p>
  </motion.div>
);

const ActivityLine = ({ text, time }) => (
  <div className="flex items-center justify-between p-4 hover:bg-slate-50 rounded-2xl transition-all cursor-pointer group">
    <div className="flex items-center gap-4">
        <div className="w-1.5 h-1.5 rounded-full bg-[#0369A1] opacity-20 group-hover:opacity-100 group-hover:scale-125 transition-all" />
        <span className="text-sm font-medium text-slate-600 group-hover:text-[#0F172A] transition-colors">{text}</span>
    </div>
    <div className="flex items-center gap-3">
        <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">{time}</span>
        <ArrowUpRight size={14} className="text-[#0369A1] opacity-0 group-hover:opacity-100 transition-opacity translate-x-1 group-hover:translate-x-0" />
    </div>
  </div>
);

const ToolBtn = ({ label }) => (
    <button className="w-full p-4 bg-slate-50 hover:bg-[#0369A1] border border-slate-100 hover:border-[#0369A1] rounded-2xl text-slate-500 hover:text-white font-bold text-[10px] uppercase tracking-[0.2em] transition-all duration-300 active:scale-95 flex justify-between items-center group">
        {label}
        <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
    </button>
);

export default Dashboard;

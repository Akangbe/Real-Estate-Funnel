import { motion } from 'framer-motion';
import { Database, Layout, BarChart, Globe, Lock, Cpu } from 'lucide-react';

const Authority = () => {
    const tools = [
        { name: 'Meta Ads', icon: Globe },
        { name: 'Google Ads', icon: BarChart },
        { name: 'CRM Systems', icon: Database },
        { name: 'Automation', icon: Cpu },
        { name: 'Landing Pages', icon: Layout },
        { name: 'Security', icon: Lock },
    ];

    return (
        <section className="py-12 bg-slate-950 border-y border-slate-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <p className="text-slate-500 text-sm uppercase tracking-widest font-medium">Powering Real Estate Growth With</p>
                </div>

                <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    {tools.map((tool, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.1, opacity: 1 }}
                            className="flex items-center gap-2 text-slate-400 font-semibold"
                        >
                            <tool.icon className="h-6 w-6" />
                            <span>{tool.name}</span>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <div className="inline-block p-4 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700">
                        <p className="text-slate-300 font-medium">
                            I am a <span className="text-white font-bold underline decoration-emerald-500/50 decoration-2 underline-offset-4">Lead Systems Engineer</span>.
                            <br className="hidden md:block" /> My systems are built for scale, security, and speed.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Authority;

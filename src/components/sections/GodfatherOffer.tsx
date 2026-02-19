import { motion } from 'framer-motion';
import { ShieldCheck, TrendingUp, DollarSign } from 'lucide-react';

const GodfatherOffer = () => {
    return (
        <section className="py-24 bg-slate-900 relative overflow-hidden">
            <div className="absolute inset-0 bg-emerald-500/5 rotate-12 scale-150 blur-3xl rounded-[40%]" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto bg-slate-800/50 backdrop-blur-xl border border-emerald-500/30 rounded-3xl p-8 md:p-12 text-center shadow-2xl shadow-emerald-900/20"
                >
                    <div className="inline-flex items-center justify-center p-3 rounded-xl bg-emerald-500/10 text-emerald-400 mb-8">
                        <ShieldCheck className="h-8 w-8" />
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        The "Godfather" Guarantee
                    </h2>

                    <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed font-light">
                        "I will build you a <span className="text-white font-semibold">7-Figure Lead Engine</span> in 14 days. If it doesn't generate your first <span className="text-emerald-400 font-bold">20 qualified leads within 30 days</span> of going live, I will work for free until it does, or give you a full refund."
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 text-left mb-10">
                        <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700/50">
                            <div className="flex items-start gap-4">
                                <TrendingUp className="h-6 w-6 text-emerald-400 shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-white text-lg">Guaranteed Results</h3>
                                    <p className="text-slate-400 text-sm mt-1">We don't just build websites; we build revenue systems. If you don't scale, we don't sleep.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700/50">
                            <div className="flex items-start gap-4">
                                <DollarSign className="h-6 w-6 text-emerald-400 shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-white text-lg">Sales Script Included</h3>
                                    <p className="text-slate-400 text-sm mt-1">Don't just get leads—close them. We provide the exact script to turn leads into deals.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className="text-slate-500 text-sm italic">
                        *This offer removes 100% of the risk from your shoulders and places it squarely on mine.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default GodfatherOffer;

import { motion } from 'framer-motion';
import { Clock, User } from 'lucide-react';

const ReasonWhy = () => {
    return (
        <section className="py-20 bg-slate-950 text-white">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-500 mb-6">
                        Why I'm Doing This (The "Catch")
                    </h2>
                    <p className="text-lg text-slate-400">
                        Transparency is key. Here is the exact reason I'm making this insane offer.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="flex gap-6">
                            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 font-bold text-xl border border-purple-500/20">1</div>
                            <div>
                                <h3 className="text-2xl font-bold mb-2">Building 2026 Case Studies</h3>
                                <p className="text-slate-400 leading-relaxed">
                                    I am looking to build my portfolio of success stories for 2026. To do that, I need fresh results.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold text-xl border border-blue-500/20">2</div>
                            <div>
                                <h3 className="text-2xl font-bold mb-2">Limited Availability</h3>
                                <p className="text-slate-400 leading-relaxed">
                                    I am taking on exactly <span className="text-white font-bold">7 new clients</span> at a <span className="text-emerald-400 font-bold">40% discount</span>.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400 font-bold text-xl border border-orange-500/20">3</div>
                            <div>
                                <h3 className="text-2xl font-bold mb-2">Use Your Success</h3>
                                <p className="text-slate-400 leading-relaxed">
                                    In exchange for the discount and the guarantee, all I ask is for a video testimonial once we hit your targets.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl border border-slate-700"
                    >
                        <div className="absolute -top-4 -right-4 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold animate-pulse">
                            Only 3 Slots Left
                        </div>
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <User className="text-emerald-400" />
                            Current Availability
                        </h3>

                        <div className="space-y-3">
                            <div className="flex items-center justify-between p-3 bg-slate-950/50 rounded-lg border border-slate-800 opacity-50">
                                <span>Slot #1</span>
                                <span className="text-red-400 text-sm font-mono">[TAKEN]</span>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-slate-950/50 rounded-lg border border-slate-800 opacity-50">
                                <span>Slot #2</span>
                                <span className="text-red-400 text-sm font-mono">[TAKEN]</span>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-slate-950/50 rounded-lg border border-slate-800 opacity-50">
                                <span>Slot #3</span>
                                <span className="text-red-400 text-sm font-mono">[TAKEN]</span>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-slate-950/50 rounded-lg border border-slate-800 opacity-50">
                                <span>Slot #4</span>
                                <span className="text-red-400 text-sm font-mono">[TAKEN]</span>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-emerald-950/30 rounded-lg border border-emerald-500/50">
                                <span className="text-white font-bold">Slot #5</span>
                                <span className="text-emerald-400 text-sm font-mono animate-pulse">[AVAILABLE]</span>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-emerald-950/30 rounded-lg border border-emerald-500/50">
                                <span className="text-white font-bold">Slot #6</span>
                                <span className="text-emerald-400 text-sm font-mono animate-pulse">[AVAILABLE]</span>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-emerald-950/30 rounded-lg border border-emerald-500/50">
                                <span className="text-white font-bold">Slot #7</span>
                                <span className="text-emerald-400 text-sm font-mono animate-pulse">[AVAILABLE]</span>
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-slate-700">
                            <div className="flex items-center gap-2 text-slate-400 text-sm">
                                <Clock className="w-4 h-4" />
                                <span>Offer expires fast.</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ReasonWhy;

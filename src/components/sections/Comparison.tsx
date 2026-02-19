import { Check, X } from 'lucide-react';

const Comparison = () => {
    return (
        <section className="py-24 bg-slate-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">The Contrast Principle</h2>
                    <p className="text-xl text-slate-400">Why a "Cheap" Website is actually the most expensive thing you can buy.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Cheap Website */}
                    <div className="relative bg-slate-950/50 p-8 rounded-2xl border border-slate-800">
                        <div className="absolute top-0 left-0 w-full h-1 bg-red-500/50 rounded-t-2xl"></div>
                        <h3 className="text-2xl font-bold text-slate-400 mb-2">Cheap Website</h3>
                        <div className="text-3xl font-bold text-slate-500 mb-6">₦200,000</div>

                        <ul className="space-y-4 text-slate-400">
                            <li className="flex items-start gap-3">
                                <X className="text-red-500 shrink-0 mt-1" />
                                <span>No Lead Generation Strategy</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <X className="text-red-500 shrink-0 mt-1" />
                                <span>Generic Templates (Low Trust)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <X className="text-red-500 shrink-0 mt-1" />
                                <span>Slow Loading (Kills Conversions)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <X className="text-red-500 shrink-0 mt-1" />
                                <span>Wastes Ad Budget Daily</span>
                            </li>
                        </ul>
                    </div>

                    {/* Sales Machine */}
                    <div className="relative bg-slate-800 p-8 rounded-2xl border-2 border-emerald-500 shadow-2xl shadow-emerald-900/20 transform md:scale-105">
                        <div className="absolute -top-4 right-8 bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                            BEST VALUE
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Sales Machine</h3>
                        <div className="text-3xl font-bold text-emerald-400 mb-1">Worth Over ₦1,200,000+</div>
                        <div className="text-sm text-emerald-500/80 font-medium mb-6 uppercase tracking-wider">In Sales Infrastructure — Discounted for Case Studies</div>

                        <ul className="space-y-4 text-slate-200">
                            <li className="flex items-start gap-3">
                                <Check className="text-emerald-400 shrink-0 mt-1" />
                                <span className="font-medium">Complete Lead Capture System</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="text-emerald-400 shrink-0 mt-1" />
                                <span className="font-medium">Psychology-Based Copywriting</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="text-emerald-400 shrink-0 mt-1" />
                                <span className="font-medium">Automated Follow-Up Sequences</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="text-emerald-400 shrink-0 mt-1" />
                                <span className="font-medium">Analytics & Tracking Setup</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="text-emerald-400 shrink-0 mt-1" />
                                <span className="font-medium">Guaranteed Results (20 Leads)</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Comparison;

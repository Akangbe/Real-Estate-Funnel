
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        question: "What exactly do I get for the price?",
        answer: "You get a complete, done-for-you lead generation system. This includes the high-converting landing page, ad creatives, CRM integration, and the automated follow-up sequences. Plus, I set up your initial ad campaigns."
    },
    {
        question: "How does the guarantee work?",
        answer: "Simple. If the system we launch doesn't generate at least 20 qualified leads within the first 30 days, I will refund your entire investment or keep working for free until we hit that number. Your choice."
    },
    {
        question: "Do I need to pay for ads separately?",
        answer: "Yes, ad spend is paid directly to Meta/Google. I recommend a starting budget of $10-$20/day. My fee covers the system build, strategy, and setup."
    },
    {
        question: "How quickly can we go live?",
        answer: "The build takes exactly 14 days from our kickoff call. On Day 15, we launch ads."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-20 bg-slate-900 border-t border-slate-800/50">
            <div className="container mx-auto px-4 max-w-3xl">
                <h2 className="text-3xl font-bold text-center text-white mb-12">Frequently Asked Questions</h2>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="bg-slate-950 rounded-xl border border-slate-800 overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-900/50 transition-colors"
                            >
                                <span className="text-slate-200 font-medium">{faq.question}</span>
                                {openIndex === idx ? <Minus className="text-emerald-500" /> : <Plus className="text-slate-500" />}
                            </button>

                            <AnimatePresence>
                                {openIndex === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 pt-0 text-slate-400 leading-relaxed border-t border-slate-800/50">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;

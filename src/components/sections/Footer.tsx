
import { Phone } from 'lucide-react';
import Button from '../ui/Button';

const WhatsAppIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
);

const Footer = () => {
    return (
        <footer className="bg-slate-950 border-t border-slate-900">
            {/* Humanized CTA Section */}
            <div className="py-16 md:py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 border border-slate-700/50 shadow-2xl relative overflow-hidden">
                            {/* Decorative glow */}
                            <div className="absolute -top-20 -right-20 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

                            {/* Headshot */}
                            <div className="relative shrink-0">
                                <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border-2 border-emerald-500/30 shadow-lg shadow-emerald-900/20">
                                    <img
                                        src="/headshot.jpeg"
                                        alt="Henry — Lead Systems Engineer"
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>
                                {/* Online indicator */}
                                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-2 border-slate-800 animate-pulse" />
                            </div>

                            {/* Text Content */}
                            <div className="text-center md:text-left flex-1 relative z-10">
                                <p className="text-emerald-400 text-sm font-semibold uppercase tracking-wider mb-2">
                                    A message from Henry
                                </p>
                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                                    Let's Build Your Lead Engine — Together.
                                </h2>
                                <p className="text-slate-400 leading-relaxed mb-6 max-w-lg">
                                    I personally work on every system I build. No outsourcing, no templates — just a hands-on engineer who wants to see you win. Shoot me a message and let's talk about your goals.
                                </p>
                                <div className="flex flex-col sm:flex-row items-center gap-3">
                                    <a
                                        href="https://wa.me/2347017280885?text=Hi%20Henry%2C%20I%27m%20interested%20in%20the%20Lead%20Engine%20system"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full sm:w-auto"
                                    >
                                        <Button size="lg" className="w-full gap-2 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                                            <WhatsAppIcon className="h-5 w-5" />
                                            Message Me on WhatsApp
                                        </Button>
                                    </a>
                                    <a
                                        href="tel:08159103556"
                                        className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors text-sm font-medium px-4 py-3"
                                    >
                                        <Phone className="h-4 w-4" />
                                        or call 0815 910 3556
                                    </a>
                                </div>
                                <p className="mt-4 text-slate-600 text-xs">
                                    Only 7 slots available this month.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="py-6 border-t border-slate-900 text-center">
                <div className="container mx-auto px-4">
                    <p className="text-slate-600 text-sm">&copy; {new Date().getFullYear()} Lead Systems Engineering. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

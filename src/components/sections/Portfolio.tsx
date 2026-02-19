
import { ExternalLink } from 'lucide-react';
import Button from '../ui/Button';

const projects = [
    {
        title: 'Abasit Couture',
        description: 'Clothing Branding - From 0 to Hero. Complete online presence creation.',
        link: 'https://abasitcouture.com.ng/',
        tags: ['E-commerce', 'Branding', 'Identity'],
        color: 'from-pink-500 to-rose-500'
    },
    {
        title: 'Verity Jo Coonan',
        description: 'Vidya Business Builders - Lead With Heart. Scale With Systems. A membership platform built for scale.',
        link: 'https://verityjocoonan.co/vidyabusinessbuilders-0',
        tags: ['Membership', 'Funnel', 'Automation'],
        color: 'from-amber-400 to-orange-500'
    },
    {
        title: 'Constructech Lab',
        description: 'Modern construction technology solutions.',
        link: 'https://constructechlab.com/',
        tags: ['Corporate', 'Technology', 'B2B'],
        color: 'from-blue-400 to-cyan-500'
    }
];

const Portfolio = () => {
    return (
        <section className="py-20 bg-slate-950">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 mb-6">Latest Deployments</h2>
                    <p className="text-slate-400">See the systems I build for my clients.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <div key={idx} className="group relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-slate-600 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-900/10">
                            {/* Decorative gradient header instead of image since we don't have screencaps yet */}
                            <div className={`h-32 bg-gradient-to-br ${project.color} opacity-80 group-hover:opacity-100 transition-opacity`}></div>

                            <div className="p-8">
                                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                                <p className="text-slate-400 text-sm mb-6 h-12 overflow-hidden">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded border border-slate-700">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                                    <Button variant="outline" className="w-full gap-2 group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500 transition-colors">
                                        View Live Site <ExternalLink className="h-4 w-4" />
                                    </Button>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;

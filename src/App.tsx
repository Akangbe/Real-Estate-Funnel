import Hero from './components/sections/Hero';
import Authority from './components/sections/Authority';
import GodfatherOffer from './components/sections/GodfatherOffer';
import ReasonWhy from './components/sections/ReasonWhy';
import Comparison from './components/sections/Comparison';
import Portfolio from './components/sections/Portfolio';
import FAQ from './components/sections/FAQ';
import Footer from './components/sections/Footer';
import FloatingWhatsApp from './components/ui/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-emerald-500/30">
      <Hero />
      <Authority />
      <GodfatherOffer />
      <ReasonWhy />
      <Comparison />
      <Portfolio />
      <FAQ />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;

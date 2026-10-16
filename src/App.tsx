import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ImpactStats } from './components/ImpactStats';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { FeatureExplorer } from './components/FeatureExplorer';
import { CoverageSection } from './components/CoverageSection';
import { PracticalitySection } from './components/PracticalitySection';
import { SavingsCalculator } from './components/SavingsCalculator';
import { HowItWorks } from './components/HowItWorks';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col font-['Plus_Jakarta_Sans',sans-serif] selection:bg-red-500/30 selection:text-white">
      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* Slide 1: Hero Section with Live Mockup */}
        <Hero />

        {/* Slide 7: Impact Statistics (35% Cost Reduction, R$ 300 Savings, 45% Price Delta) */}
        <ImpactStats />

        {/* Slide 2: O Problema (Inflação, Dispersão de Preços, Tempo, Compras por Impulso) */}
        <ProblemSection />

        {/* Slide 3: A Solução (Planejamento Guiado, Comparação Simultânea, 100% Mobile, Passo Fundo) */}
        <SolutionSection />

        {/* Slide 4: Recursos & Funcionalidades (Interativo com simulador de abas) */}
        <FeatureExplorer />

        {/* Slide 5: Cobertura Total (Stock Center, Atacadão, Zaffari, Bourbon, Bairro, Feiras) */}
        <CoverageSection />

        {/* Interactive Financial ROI Calculator */}
        <SavingsCalculator />

        {/* Slide 6: Praticidade (PDF, WhatsApp, Geolocalização, Login Google) */}
        <PracticalitySection />

        {/* Como Funciona em 3 Passos */}
        <HowItWorks />

        {/* Depoimentos Reais de Famílias de Passo Fundo */}
        <Testimonials />

        {/* FAQ Estruturado para SEO */}
        <FaqSection />

        {/* Slide 8: Conclusão & Chamada Final */}
        <FinalCta />
      </main>

      {/* Footer corporativo com dados locais e SEO */}
      <Footer />

      {/* Mobile Sticky Bottom Action Bar */}
      <MobileBottomBar />
    </div>
  );
}

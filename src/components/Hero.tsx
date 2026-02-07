import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-indigo-50 rounded-full blur-3xl opacity-50 -z-10"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-violet-100 rounded-full blur-3xl opacity-30 -z-10"></div>

      <div className="container mx-auto px-6 text-center md:text-left">
        <div className="max-w-4xl">
          <div className="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-100 text-indigo-900 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            <span className="flex items-center"><span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-2"></span>Inovação • Tecnologia • Resultados</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-indigo-950 leading-[1.15] mb-6">
            Transformando ideias em <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-900 to-violet-600">código de alto impacto.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed font-normal">
            A Kode desenvolve soluções digitais sob medida que impulsionam o seu negócio. De landing pages impactantes a sistemas SaaS complexos.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#contato"
              className="w-full sm:w-auto bg-indigo-900 text-white px-10 py-4 rounded-2xl font-bold flex items-center justify-center group hover:bg-indigo-800 transition-all shadow-2xl shadow-indigo-900/20"
            >
              Iniciar projeto
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#servicos"
              className="w-full sm:w-auto bg-white text-indigo-950 border-2 border-slate-100 px-10 py-4 rounded-2xl font-bold hover:border-indigo-900 transition-all flex items-center justify-center"
            >
              Nossos serviços
            </a>
          </div>

          <div className="mt-20 flex flex-wrap items-center justify-center md:justify-start gap-10 opacity-30 grayscale hover:grayscale-0 transition-all">
             <span className="font-extrabold text-xl tracking-widest uppercase text-indigo-950">React</span>
             <span className="font-extrabold text-xl tracking-widest uppercase text-indigo-950">Node.js</span>
             <span className="font-extrabold text-xl tracking-widest uppercase text-indigo-950">TypeScript</span>
             <span className="font-extrabold text-xl tracking-widest uppercase text-indigo-950">Express</span>
             <span className="font-extrabold text-xl tracking-widest uppercase text-indigo-950">HTML</span>
             <span className="font-extrabold text-xl tracking-widest uppercase text-indigo-950">CSS</span>
             <span className="font-extrabold text-xl tracking-widest uppercase text-indigo-950">JavaScript</span>
             <span className="font-extrabold text-xl tracking-widest uppercase text-indigo-950">Tailwind</span>
             <span className="font-extrabold text-xl tracking-widest uppercase text-indigo-950">Python</span>
             <span className="font-extrabold text-xl tracking-widest uppercase text-indigo-950">Java</span>
             <span className="font-extrabold text-xl tracking-widest uppercase text-indigo-950">PostgreSQL</span>
             <span className="font-extrabold text-xl tracking-widest uppercase text-indigo-950">MySQL</span>
             <span className="font-extrabold text-xl tracking-widest uppercase text-indigo-950">MongoDB</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

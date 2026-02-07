import React from 'react';
import { Mail, Send, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-50 rounded-full blur-3xl opacity-40"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto bg-indigo-950 rounded-[3rem] overflow-hidden shadow-[0_35px_60px_-15px_rgba(49,46,129,0.3)] flex flex-col md:grid md:grid-cols-12">

          <div className="md:col-span-5 bg-indigo-900 p-12 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-4xl font-extrabold mb-8 leading-tight">Vamos iniciar algo extraordinário?</h3>
              <p className="text-indigo-200 mb-12 text-lg leading-relaxed">
                Estamos prontos para ouvir sua ideia e transformá-la em uma solução tecnológica de ponta.
              </p>

              <div className="space-y-8">
                <div className="flex items-center space-x-5 group">
                  <div className="bg-indigo-950 p-4 rounded-2xl group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-indigo-300" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Email</p>
                    <p className="text-lg font-semibold">contato@kode.dev</p>
                  </div>
                </div>
                <div className="flex items-center space-x-5 group">
                  <div className="bg-indigo-950 p-4 rounded-2xl group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-indigo-300" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest">WhatsApp</p>
                    <p className="text-lg font-semibold">+55 (85) 99177-9064</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-indigo-800 flex items-center justify-between">
               <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Baseado em CE • Atendemos o mundo</span>
            </div>
          </div>

          <div className="md:col-span-7 bg-white p-12 lg:p-16">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="name" className="text-xs font-black text-indigo-950 uppercase tracking-widest">Nome Completo</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Seu nome"
                    className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:border-indigo-900 focus:ring-4 focus:ring-indigo-900/5 outline-none transition-all placeholder:text-slate-400 font-medium"
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="email" className="text-xs font-black text-indigo-950 uppercase tracking-widest">E-mail Corporativo</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="email@empresa.com"
                    className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:border-indigo-900 focus:ring-4 focus:ring-indigo-900/5 outline-none transition-all placeholder:text-slate-400 font-medium"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label htmlFor="message" className="text-xs font-black text-indigo-950 uppercase tracking-widest">Como podemos ajudar?</label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Descreva seu projeto ou desafio..."
                  className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:border-indigo-900 focus:ring-4 focus:ring-indigo-900/5 outline-none transition-all placeholder:text-slate-400 font-medium resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-900 text-white font-bold py-5 rounded-2xl flex items-center justify-center space-x-3 hover:bg-indigo-800 transition-all shadow-xl shadow-indigo-900/30 active:scale-[0.98] group"
              >
                <span className="text-lg">Enviar Mensagem</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

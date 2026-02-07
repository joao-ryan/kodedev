import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import Ryan from '../assets/team/Ryan.jpeg';
import Micael from '../assets/team/Micael.jpeg';
import Chines from '../assets/team/Chines.jpeg';

const Team: React.FC = () => {
  const members = [
    {
      name: "Micael Rauan",
      role: "Especialista Backend",
      skills: ["React", "TypeScript", "Figma", "Node.js", "MySQL", "MongoDB", "Next.js", "Design", "JavaScript", "Cybersecurity"],
      image: Micael
    },
    {
      name: "João Ryan",
      role: "Especialista Frontend",
      skills: ["React", "TypeScript", "Tailwind", "HTML", "CSS", "Python", "Node.js", "PostgreSQL", "MongoDB", "SQlite"],
      image: Ryan
    },
    {
      name: "Vinicius Fonseca",
      role: "Especialista Data e Backend",
      skills: ["React", "Java", "Python", "Spring Boot", "Flask", "Django", "PostgreSQL", "MongoDB", "MySQL", "SQlite"],
      image: Chines
    }
  ];

  return (
    <section id="equipe" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold text-indigo-950 mb-6">Mentes por trás da Kode</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Três desenvolvedores, uma única paixão: criar soluções digitais que realmente elevam o patamar dos nossos clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {members.map((member, index) => (
            <div key={index} className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all flex flex-col h-full group">
              <div className="aspect-[1/1.2] overflow-hidden grayscale-0 transition-all duration-700">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-10 flex flex-col flex-grow">
                <div className="mb-4">
                  <h4 className="text-2xl font-bold text-indigo-950 mb-1">{member.name}</h4>
                  <span className="text-indigo-600 font-bold text-xs uppercase tracking-widest">{member.role}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-8">
                  {member.skills.map((skill, si) => (
                    <span key={si} className="text-[10px] font-black bg-indigo-50 text-indigo-900 px-3 py-1.5 rounded-lg uppercase">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-5">
                   <button className="text-slate-300 hover:text-indigo-900 transition-colors">
                     <Github size={22} />
                   </button>
                   <button className="text-slate-300 hover:text-indigo-900 transition-colors">
                     <Linkedin size={22} />
                   </button>
                   <button className="text-slate-300 hover:text-indigo-900 transition-colors">
                     <Twitter size={22} />
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

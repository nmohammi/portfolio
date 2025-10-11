'use client';

import { Section } from '@/components/Section';
import Image from 'next/image';
import { Card, ProjectCard } from '@/components/Card';
import { ArticleCard } from '@/components/ArticleCard';
import projectsData from '@/data/projects.json';
import experienceData from '@/data/experience.json';
import educationData from '@/data/education.json';
import articlesData from '@/data/articles.json';
import freelanceData from '@/data/freelance.json';

export default function Home() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;
    
    // Vérifier si Formspree est configuré
    const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
    
    if (formspreeEndpoint) {
      try {
        // Utiliser directement le FormData du formulaire
        const formDataForFormspree = new FormData();
        formDataForFormspree.append('name', name || '');
        formDataForFormspree.append('email', email || '');
        formDataForFormspree.append('message', message || '');
        formDataForFormspree.append('_subject', `Message from ${name || 'Anonymous'} - Portfolio Contact`);
        
        // Debug: vérifier les valeurs
        console.log('Sending to Formspree:', { name, email, message });
        
        const response = await fetch(formspreeEndpoint, {
          method: 'POST',
          body: formDataForFormspree,
        });
        
        if (response.ok) {
          // Message personnalisé plus élégant
          alert('🎉 Merci pour votre message !\n\nJ\'ai bien reçu votre demande et je vous répondrai dans les plus brefs délais.\n\nÀ bientôt !\nNasrallah');
          (e.target as HTMLFormElement).reset();
        } else {
          throw new Error('Erreur lors de l\'envoi');
        }
      } catch (error) {
        console.error('Erreur:', error);
        // Fallback vers mailto si Formspree échoue
        const subject = encodeURIComponent(`Message from ${name} - Portfolio Contact`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
        const mailtoLink = `mailto:nasr.mohammi@gmail.com?subject=${subject}&body=${body}`;
        window.location.href = mailtoLink;
      }
    } else {
      // Utiliser mailto comme fallback
      const subject = encodeURIComponent(`Message from ${name} - Portfolio Contact`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
      const mailtoLink = `mailto:nasr.mohammi@gmail.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="min-h-screen bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="container mx-auto px-4 py-40">
          <div className="max-w-6xl mx-auto">
            {/* Main Title */}
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl text-gray-800 leading-tight font-bold mb-4">
                Welcome to my portfolio, I'm <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">Nasrallah Mohammi</span>
              </h1>
              <h2 className="text-lg sm:text-xl lg:text-2xl text-gray-600 font-bold">
                GenAI <span className="font-serif">&</span> Data Analytics Engineer
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Photo */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative">
                  <div className="w-80 h-[32rem] sm:w-[24rem] sm:h-[36rem] lg:w-[28rem] lg:h-[40rem] relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl transform rotate-3"></div>
                    <div className="relative w-full h-full bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-white">
                      <Image
                        src="/pdp.jpg"
                        alt="Nasrallah MOHAMMI"
                        fill
                        sizes="(min-width: 1024px) 28rem, (min-width: 640px) 24rem, 20rem"
                        className="object-cover object-center"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right side - Content */}
              <div className="text-center lg:text-left">

                <p className="text-base sm:text-lg text-gray-600 mb-4 leading-relaxed text-justify">
                  My journey into AI began with a deep passion for mathematics and statistics, which naturally evolved into expertise in GenAI and data science.
                </p>

                <p className="text-base sm:text-lg text-gray-600 mb-4 leading-relaxed text-justify">
                  Over the past two years, I've built a diverse professional profile by working across multiple industries — from the public sector and research laboratories to banking institutions, French Tech 120 startups, and freelance collaborations spanning healthcare, insurance, and accounting. Through freelancing, I've had the chance to work closely with clients on real business challenges, and I'm proud to have received positive feedback for delivering solutions that are both practical and impactful.
                </p>

                <p className="text-base sm:text-lg text-gray-600 mb-4 leading-relaxed text-justify">
                  My technical expertise covers the entire data-to-AI pipeline: designing and implementing robust data engineering systems, extracting meaningful insights through advanced analytics, and developing machine learning and generative AI models.
                </p>

                <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed text-justify">
                  Beyond my technical work, I'm passionate about knowledge sharing and regularly contribute to the community through technical articles on Medium, where I explore topics from data engineering best practices to the latest in generative AI.
                </p>

                <p className="text-base sm:text-lg text-gray-600 leading-relaxed text-justify">
                  Feel free to explore my portfolio for a selection of projects, articles and client feedback that showcase my work quality.
                </p>

              </div>
            </div>
            
            <div className="max-w-6xl mx-auto mt-32">
              <div className="space-y-8">
                {/* Impact Stats */}
                <div className="bg-gradient-to-r from-primary-50 to-blue-50 p-8 rounded-2xl border border-primary-100 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">🚀 Impact in Numbers</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-600 mb-2">300+</div>
                      <div className="text-sm text-gray-600">Tables in Data Lake</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-600 mb-2">200K+</div>
                      <div className="text-sm text-gray-600">CVs Processed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-600 mb-2">97.23%</div>
                      <div className="text-sm text-gray-600">Model Accuracy</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-600 mb-2">120+</div>
                      <div className="text-sm text-gray-600">Countries Served</div>
                    </div>
                  </div>
                </div>

                {/* Experience Highlights */}
                <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">💼 Diverse Experience Across Industries</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-all duration-300 hover:border-blue-300 h-full">
                        <div className="flex items-start space-x-4">
                          <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">🚀 French Tech 120 Scale-up</h3>
                            <p className="text-sm text-blue-600 mb-3 font-semibold">Opteamis</p>
                            <p className="text-sm text-gray-700 leading-relaxed">Built AI products (Talent Search, RatePricer, Matchmaker, CV Parser) now used daily by HR teams across 120+ countries. Deployed MCP server for ChatGPT-like interface.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="group">
                      <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100 hover:shadow-lg transition-all duration-300 hover:border-green-300 h-full">
                        <div className="flex items-start space-x-4">
                          <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">🏦 Banking & Finance</h3>
                            <p className="text-sm text-green-600 mb-3 font-semibold">Société Générale</p>
                            <p className="text-sm text-gray-700 leading-relaxed">Industrialized dbt pipelines for 7 business lines, automated MicroStrategy dashboards, and standardized KPIs across 21 service centers.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="group">
                      <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-xl border border-purple-100 hover:shadow-lg transition-all duration-300 hover:border-purple-300 h-full">
                        <div className="flex items-start space-x-4">
                          <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center flex-shrink-0">
                            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">🏥 Healthcare & Insurance</h3>
                            <p className="text-sm text-purple-600 mb-3 font-semibold">CHU Metz, Insurance, Finance</p>
                            <p className="text-sm text-gray-700 leading-relaxed">Deployed Microsoft 365 Business, Power BI Copilot, Qdrant vector databases, and AI-augmented BI pipelines for real-time data exploration.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="group">
                      <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-xl border border-orange-100 hover:shadow-lg transition-all duration-300 hover:border-orange-300 h-full">
                        <div className="flex items-start space-x-4">
                          <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0">
                            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">🔬 Research & Innovation</h3>
                            <p className="text-sm text-orange-600 mb-3 font-semibold">ENSEA Research Lab</p>
                            <p className="text-sm text-gray-700 leading-relaxed">Optimized CNNs for computer vision, achieved 97.23% accuracy with FPGA acceleration, and reduced latency by 3x through hardware-software co-design.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Skills & Expertise */}
                <div className="bg-gradient-to-r from-gray-50 to-slate-50 p-8 rounded-2xl border border-gray-200 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">🛠️ Core Expertise</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center group">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Data Engineering</h4>
                      <p className="text-sm text-gray-600">dbt, Airbyte, BigQuery, Snowflake, ETL pipelines, data warehousing</p>
                    </div>
                    <div className="text-center group">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">AI & Machine Learning</h4>
                      <p className="text-sm text-gray-600">CNNs, PyTorch, TensorFlow, Vector DBs, NLP, Computer Vision</p>
                    </div>
                    <div className="text-center group">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Cloud & DevOps</h4>
                      <p className="text-sm text-gray-600">GCP, Azure, Docker, Kubernetes, CI/CD, APIs, Microservices</p>
                    </div>
                  </div>
                </div>
                
                {/* Mission Statement */}
                <div className="text-center bg-gradient-to-r from-primary-50 to-blue-50 p-8 rounded-2xl border border-primary-100 shadow-sm">
                  <div className="max-w-3xl mx-auto">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">🎯 My Mission</h3>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      I'm a <span className="font-bold text-primary-700 bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">versatile data & AI engineer</span> who bridges industries and domains with one clear goal: 
                      <span className="font-bold text-primary-700 bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent"> transforming complex business problems into intelligent, reliable, and scalable solutions</span>.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                      <span className="px-4 py-2 bg-white rounded-full border border-primary-200">🚀 Fast Delivery</span>
                      <span className="px-4 py-2 bg-white rounded-full border border-primary-200">🔧 Production-Ready</span>
                      <span className="px-4 py-2 bg-white rounded-full border border-primary-200">📈 Measurable Impact</span>
                      <span className="px-4 py-2 bg-white rounded-full border border-primary-200">🌍 Global Scale</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>


      {/* Experience Timeline Section */}
      <Section 
        id="experience" 
        title="Professional Journey" 
        subtitle="My career timeline with key achievements and technologies"
        className="bg-white"
      >
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-200 via-primary-400 to-primary-200 transform md:-translate-x-1/2"></div>
            
            {experienceData.map((exp, index) => (
              <div key={exp.id} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 w-3 h-3 bg-primary-600 rounded-full border-3 border-white shadow-md transform md:-translate-x-1/2 z-10"></div>
                
                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-6' : 'md:ml-auto md:pl-6'}`}>
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1 transform group">
                    {/* Date Badge */}
                    <div className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold mb-3">
                      {exp.period}
                    </div>
                    
                    {/* Position & Company */}
                    <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors" dangerouslySetInnerHTML={{ __html: exp.position }}>
                    </h3>
                    <p className="text-primary-600 font-semibold text-base mb-3">{exp.company}</p>
                    
                    {/* Description */}
                    <div className="text-gray-600 leading-relaxed mb-4 text-sm">
                      {exp.description.split('\n').map((line, index) => (
                        <p key={index} className="mb-1" dangerouslySetInnerHTML={{ __html: line }}></p>
                      ))}
                    </div>
                    
                    {/* View Details Button */}
                    <div className="flex justify-center mb-4">
                      <a 
                        href="/experience"
                        className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        See Full Details
                      </a>
                    </div>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1">
                      {exp.technologies.slice(0, 4).map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {exp.technologies.length > 4 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                          +{exp.technologies.length - 4}
                        </span>
                      )}
                    </div>
                    
                    {/* Connection Line to Timeline */}
                    <div className={`absolute top-1/2 w-6 h-1 bg-gradient-to-r from-primary-400 to-primary-600 transform -translate-y-1/2 ${
                      index % 2 === 0 
                        ? 'left-0 md:left-auto md:right-0 md:translate-x-full' 
                        : 'right-0 md:right-auto md:left-0 md:-translate-x-full'
                    }`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="/experience"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-2xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
          >
            View Full Experience
            <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </Section>

      {/* Projects Section */}
      <Section 
        id="projects" 
        title="My Projects" 
        subtitle="Discover some of my recent projects and open source contributions"
        className="bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projectsData.map((project, index) => (
            <div key={project.id} className="group">
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:-translate-y-2 transform">
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {project.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-4 py-2 bg-gradient-to-r from-primary-50 to-primary-100 text-primary-700 rounded-full text-sm font-medium border border-primary-200 hover:from-primary-100 hover:to-primary-200 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all duration-300 font-medium group"
                      >
                        <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        View Code
                      </a>
                    )}
                    {project.demoUrl && (
                      <a 
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all duration-300 font-medium group"
                      >
                        <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="/projects"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-2xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
          >
            View All Projects
            <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </Section>

      {/* Contact CTA Section */}
      <Section 
        title="Let's Work Together" 
        subtitle="Ready to turn your data into insights? Let's discuss your next project"
        className="bg-white"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl p-12 shadow-lg border border-primary-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Ready to get started?</h3>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Whether you need AI solutions, data engineering, or analytics consulting, I'm here to help bring your vision to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="px-8 py-4 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
              >
                Get in Touch
              </a>
              
              <a 
                href="/projects"
                className="px-8 py-4 border-2 border-primary-600 text-primary-600 rounded-xl hover:bg-primary-600 hover:text-white transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Freelance Success Preview */}
      <Section 
        title="Freelance Success" 
        subtitle="Client testimonials and project highlights"
        className="bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {freelanceData.slice(0, 2).map((project) => (
              <div key={project.id} className="group">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1 transform">
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold">
                          {project.sector}
                        </span>
                        <span className="text-gray-500 text-sm">{project.period}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-primary-600 font-semibold text-sm">{project.client}</p>
                    </div>
                    <div className="flex">
                      {Array.from({ length: project.testimonial.rating }, (_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  
                  {/* Testimonial */}
                  <blockquote className="text-gray-600 italic text-sm mb-4 leading-relaxed">
                    "{project.testimonial.text.substring(0, 120)}..."
                  </blockquote>
                  
                  {/* Client Info */}
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white font-semibold text-xs mr-3">
                      {project.testimonial.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{project.testimonial.author}</p>
                      <p className="text-xs text-gray-600">{project.testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <a 
              href="/experience"
              className="inline-flex items-center px-6 py-3 bg-white text-primary-600 rounded-xl hover:bg-primary-50 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl border border-primary-200"
            >
              View All Client Testimonials
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </Section>

      {/* Education Section */}
      <Section 
        id="education" 
        title="Education" 
        subtitle="My academic background and certifications"
        className="bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {educationData.map((edu, index) => (
            <div key={edu.id} className="group">
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2 transform text-center h-full">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-primary-600 font-semibold mb-2">{edu.institution}</p>
                  <p className="text-gray-500 text-sm mb-4">{edu.period}</p>
                  {edu.grade && (
                    <span className="inline-block px-4 py-2 bg-gradient-to-r from-green-100 to-green-200 text-green-700 rounded-full text-sm font-semibold border border-green-300">
                      {edu.grade}
                    </span>
                  )}
                </div>
                
                <p className="text-gray-600 leading-relaxed">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="/education"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-2xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
          >
            View Full Education
            <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </Section>

      {/* Articles Section */}
      <Section 
        id="articles" 
        title="Latest Articles" 
        subtitle="Insights and technical deep-dives from my experience in AI and data engineering"
        className="bg-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {articlesData.slice(0, 4).map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="/articles"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-2xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
          >
            View All Articles
            <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </Section>

      {/* Contact Section */}
      <Section 
        id="contact" 
        title="Contact" 
        subtitle="Feel free to reach out to discuss projects or opportunities"
        className="bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-3xl font-bold text-gray-900 mb-8">Let's stay in touch</h3>
                
                <div className="space-y-8">
                  <div className="flex items-center group">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-6">
                      <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Email</p>
                      <a href="mailto:nasr.mohammi@gmail.com" className="text-lg text-gray-900 hover:text-primary-600 transition-colors font-medium">
                        nasr.mohammi@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center group">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-6">
                      <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">LinkedIn</p>
                      <a 
                        href="https://linkedin.com/in/nasrallah-mohammi" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-lg text-gray-900 hover:text-primary-600 transition-colors font-medium"
                      >
                        linkedin.com/in/nasrallah-mohammi
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center group">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-6">
                      <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">GitHub</p>
                      <a 
                        href="https://github.com/Isendark1" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-lg text-gray-900 hover:text-primary-600 transition-colors font-medium"
                      >
                        github.com/Isendark1
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center group">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                    </div>
                    <div className="ml-6">
                      <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Blog</p>
                      <a 
                        href="https://medium.com/@nasrmohammi" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-lg text-gray-900 hover:text-primary-600 transition-colors font-medium"
                      >
                        medium.com/@nasrmohammi
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-3xl font-bold text-gray-900 mb-8">Quick message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 text-lg"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 text-lg"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 text-lg resize-none"
                      placeholder="Your message..."
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
                  >
                    Send message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}

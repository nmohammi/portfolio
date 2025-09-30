'use client';

import { useState } from 'react'
import { Section } from '@/components/Section'
import { TestimonialCard } from '@/components/TestimonialCard'
import experienceData from '@/data/experience.json'
import freelanceData from '@/data/freelance.json'
import Link from 'next/link'

export default function ExperiencePage() {
  const [selectedExperience, setSelectedExperience] = useState<number | null>(null)

  const formatDetailedDescription = (text: string) => {
    return text.split('\n').map((line, index) => {
      if (line.startsWith('**') && line.endsWith('**')) {
        return <h3 key={index} className="text-xl font-bold text-gray-900 mt-8 mb-4" dangerouslySetInnerHTML={{ __html: line.replace(/\*\*/g, '') }}></h3>
      } else if (line.startsWith('• **')) {
        return <li key={index} className="text-gray-700 mb-3 ml-4 text-lg" dangerouslySetInnerHTML={{ __html: line.replace('• **', '<strong>').replace('**', '</strong>') }}></li>
      } else if (line.startsWith('•')) {
        return <li key={index} className="text-gray-700 mb-3 ml-4 text-lg" dangerouslySetInnerHTML={{ __html: line.replace('•', '') }}></li>
      } else if (line.startsWith('  -')) {
        return <li key={index} className="text-gray-600 mb-2 ml-8 text-base" dangerouslySetInnerHTML={{ __html: line.replace('  -', '') }}></li>
      } else if (line.trim() === '') {
        return <br key={index} />
      } else {
        return <p key={index} className="text-gray-700 mb-4 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: line }}></p>
      }
    })
  }

  const selectedExp = selectedExperience ? experienceData.find(exp => exp.id === selectedExperience) : null

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="container text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Professional <span className="text-primary-600">Experience</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
              My journey through diverse industries, from startups to banking, building AI solutions that make a real impact.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Cards */}
      <Section 
        title="Professional Experience" 
        subtitle="Click on any experience to view detailed information"
        className="bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {experienceData.map((exp) => (
              <div 
                key={exp.id}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 cursor-pointer transform hover:-translate-y-2 ${
                  selectedExperience === exp.id 
                    ? 'border-primary-500 bg-primary-50' 
                    : 'border-gray-100 hover:border-primary-300'
                }`}
                onClick={() => setSelectedExperience(exp.id)}
              >
                {/* Date Badge */}
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary-100 to-primary-200 text-primary-700 rounded-full text-sm font-semibold mb-4">
                  {exp.period}
                </div>
                
                {/* Position & Company */}
                <h3 className="text-xl font-bold text-gray-900 mb-2" dangerouslySetInnerHTML={{ __html: exp.position }}>
                </h3>
                <p className="text-primary-600 font-semibold text-lg mb-4">{exp.company}</p>
                
                {/* Short Description */}
                <div className="text-gray-600 leading-relaxed mb-6">
                  {exp.description.split('\n').slice(0, 3).map((line, lineIndex) => (
                    <p key={lineIndex} className="mb-1 text-sm" dangerouslySetInnerHTML={{ __html: line }}></p>
                  ))}
                  {exp.description.split('\n').length > 3 && (
                    <p className="text-primary-600 text-sm font-medium">...click to view more</p>
                  )}
                </div>
                
                {/* Technologies Preview */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {exp.technologies.length > 4 && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                      +{exp.technologies.length - 4}
                    </span>
                  )}
                </div>
                
                {/* Selection Indicator */}
                {selectedExperience === exp.id && (
                  <div className="mt-4 flex items-center justify-center">
                    <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Detailed View */}
          {selectedExp && (
            <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100">
              <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                  <div className="inline-block px-6 py-3 bg-gradient-to-r from-primary-100 to-primary-200 text-primary-700 rounded-full text-lg font-semibold mb-6">
                    {selectedExp.period}
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-4" dangerouslySetInnerHTML={{ __html: selectedExp.position }}>
                  </h2>
                  <p className="text-2xl text-primary-600 font-semibold mb-8">{selectedExp.company}</p>
                </div>

                {/* Detailed Description */}
                <div className="prose prose-lg max-w-none">
                  {formatDetailedDescription(selectedExp.detailedDescription)}
                </div>

                {/* Technologies */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Technologies & Tools</h3>
                  <div className="flex flex-wrap gap-3 justify-center">
                    {selectedExp.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-4 py-2 bg-gradient-to-r from-primary-100 to-primary-200 text-primary-700 rounded-full text-sm font-medium hover:from-primary-200 hover:to-primary-300 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </Section>

      {/* Key Achievements */}
      <Section 
        title="Key Achievements" 
        subtitle="Highlights from my professional journey"
        className="bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center text-white">
                  🚀
                </div>
                <h3 className="text-2xl font-bold text-gray-900">AI Product Development</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Built and deployed multiple AI products including talent search engines, pricing algorithms, and CV parsers that are now used daily by HR teams, tech teams, and clients across different organizations.
              </p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center text-white">
                  📊
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Analytics Pipeline Industrialization</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Successfully industrialized analytics pipelines at Société Générale, standardizing performance KPIs across multiple business units and enabling data-driven decision making at scale.
              </p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center text-white">
                  🌍
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Multi-Industry Impact</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Successfully delivered AI and cloud infrastructure solutions across healthcare (CHU Metz), insurance, finance, and research sectors, demonstrating versatility and adaptability.
              </p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl flex items-center justify-center text-white">
                  🔬
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Research & Innovation</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Designed and optimized deep learning models including CNNs with FPGA acceleration for computer vision tasks, contributing to cutting-edge research in AI optimization.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Freelance & Client Testimonials */}
      <Section 
        title="Freelance & Client Success" 
        subtitle="Real projects, real results, real testimonials from satisfied clients"
        className="bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {freelanceData.map((project) => (
              <TestimonialCard key={project.id} project={project} />
            ))}
          </div>
          
          {/* Stats Section */}
          <div className="mt-16 bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary-600 mb-2">4+</div>
                <p className="text-gray-600 font-medium">Industries Served</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-600 mb-2">15+</div>
                <p className="text-gray-600 font-medium">Projects Completed</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-600 mb-2">100%</div>
                <p className="text-gray-600 font-medium">Client Satisfaction</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-600 mb-2">70%</div>
                <p className="text-gray-600 font-medium">Avg. Time Savings</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Skills Matrix */}
      <Section 
        title="Technical Expertise" 
        subtitle="Technologies and skills developed across my career"
        className="bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-3xl flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6">
                AI/ML
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Artificial Intelligence</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Deep Learning (CNNs, RNNs)</li>
                <li>• Natural Language Processing</li>
                <li>• Computer Vision</li>
                <li>• LLMs & Embeddings</li>
                <li>• Vector Databases</li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-3xl flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6">
                Cloud
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cloud & DevOps</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• AWS & Azure</li>
                <li>• Kubernetes</li>
                <li>• Docker</li>
                <li>• Apache Airflow</li>
                <li>• dbt & Airbyte</li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-3xl flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6">
                Data
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Data Engineering</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Python & FastAPI</li>
                <li>• PostgreSQL & Redis</li>
                <li>• Snowflake</li>
                <li>• Analytics Pipelines</li>
                <li>• Performance Optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Back to Home */}
      <Section className="bg-gradient-to-br from-gray-50 to-white">
        <div className="text-center">
          <Link 
            href="/"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-2xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
          >
            <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </Section>
    </div>
  )
}

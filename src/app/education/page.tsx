'use client';

import { Section } from '@/components/Section'
import Image from 'next/image'
import educationData from '@/data/education.json'
import Link from 'next/link'

export default function EducationPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="container text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Certifications & <span className="text-primary-600">Education</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
              My academic foundation in mathematics, statistics, and data science that shaped my analytical thinking.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications grid */}
      <Section 
        title="Professional Certifications" 
        subtitle="Verified credentials, issued by recognized organizations"
        className="bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder cards - add items to a data file later */}
          <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center">
                <svg className="w-6 h-6 text-primary-600" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 7 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z"/></svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Certification name</h3>
                <p className="text-sm text-gray-600">Issuer • YYYY</p>
                <a href="#" className="text-sm text-primary-600 hover:text-primary-700">View credential →</a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Education Timeline */}
      <Section 
        title="Academic Journey" 
        subtitle="From mathematics to data science and AI"
        className="bg-white"
      >
        <div className="max-w-5xl mx-auto relative">
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-200 via-primary-400 to-primary-200" />
          <div className="space-y-10">
            {educationData.map((edu) => (
              <div key={edu.id} className="relative flex items-start">
                {/* Dot with logo centered on rail */}
                <div className="absolute left-6 -translate-x-1/2 transform mt-1 w-12 h-12 rounded-full bg-white border-2 border-primary-300 shadow flex items-center justify-center">
                  {edu.logo ? (
                    <Image src={edu.logo} alt={`${edu.institution} logo`} width={40} height={40} className="object-contain" />
                  ) : null}
                </div>
                {/* Card */}
                <div className="ml-20 w-full">
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{edu.degree}</h3>
                    <div className="flex items-center gap-2 mb-1">
                      {edu.logo && (
                        <div className="w-7 h-7 rounded-md overflow-hidden bg-white border border-gray-100 flex items-center justify-center">
                          <Image src={edu.logo} alt={`${edu.institution} logo`} width={22} height={22} className="object-contain" />
                        </div>
                      )}
                      <p className="text-primary-600 font-medium">{edu.institution}</p>
                    </div>
                    <p className="text-gray-500 text-sm mb-3">{edu.period}</p>
                    <div className="text-gray-700 whitespace-pre-line leading-relaxed">
                      {String(edu.description)
                        .split('•')
                        .filter(Boolean)
                        .map((seg, i) => `• ${seg.trim()}`)
                        .join('\n')}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Academic Highlights */}
      <Section 
        title="Academic Highlights" 
        subtitle="Key achievements and specializations"
        className="bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center text-white">
                  🎓
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Master's Thesis</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                "Optimization of Deep Learning Models for Edge Computing Applications" - Research focused on making AI models more efficient for real-world deployment, combining theoretical knowledge with practical implementation.
              </p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center text-white">
                  📊
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Statistical Foundation</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Strong foundation in mathematical modeling, statistical analysis, and computational methods from my Bachelor's in Mathematics & Statistics, providing the analytical rigor essential for data science.
              </p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center text-white">
                  🔬
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Research Experience</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Hands-on experience in designing and optimizing deep learning models, particularly CNNs with FPGA acceleration, contributing to cutting-edge research in computer vision and AI optimization.
              </p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl flex items-center justify-center text-white">
                  🏆
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Academic Excellence</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Consistent academic performance with Distinction and First Class Honours across all degrees, demonstrating commitment to excellence and deep understanding of complex mathematical and computational concepts.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Skills Developed */}
      <Section 
        title="Academic Skills" 
        subtitle="Knowledge and competencies developed through education"
        className="bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-3xl flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6">
                Math
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Mathematical Foundation</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Advanced Calculus</li>
                <li>• Linear Algebra</li>
                <li>• Probability Theory</li>
                <li>• Statistical Inference</li>
                <li>• Mathematical Modeling</li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-3xl flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6">
                AI
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI & Machine Learning</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Deep Learning</li>
                <li>• Neural Networks</li>
                <li>• Computer Vision</li>
                <li>• Model Optimization</li>
                <li>• Edge Computing</li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-3xl flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6">
                CS
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Computer Science</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Algorithm Design</li>
                <li>• Data Structures</li>
                <li>• Software Engineering</li>
                <li>• FPGA Programming</li>
                <li>• Research Methodology</li>
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

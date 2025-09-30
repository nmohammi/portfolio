'use client';

import { Section } from '@/components/Section'
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
              Education & <span className="text-primary-600">Certifications</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
              My academic foundation in mathematics, statistics, and data science that shaped my analytical thinking.
            </p>
          </div>
        </div>
      </section>

      {/* Education Timeline */}
      <Section 
        title="Academic Journey" 
        subtitle="From mathematics to data science and AI"
        className="bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div key={edu.id} className="group">
                <div className="bg-gradient-to-r from-white to-gray-50 rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-1 transform">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                    <div className="flex-1">
                      <div className="flex items-start gap-6 mb-6">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-3xl flex items-center justify-center text-white font-bold text-xl">
                            {index + 1}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-3xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                            {edu.degree}
                          </h3>
                          <p className="text-primary-600 font-semibold text-xl mb-2">{edu.institution}</p>
                          <p className="text-gray-500 font-medium text-lg mb-4">{edu.period}</p>
                          {edu.grade && (
                            <span className="inline-block px-6 py-3 bg-gradient-to-r from-green-100 to-green-200 text-green-700 rounded-full text-lg font-semibold border border-green-300">
                              {edu.grade}
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {edu.description}
                      </p>
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

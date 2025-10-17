'use client';

import { useState, useRef } from 'react'
import { Section } from '@/components/Section'
import projectsData from '@/data/projects.json'
import Link from 'next/link'
import Image from 'next/image'

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const detailedViewRef = useRef<HTMLDivElement>(null)

  const handleProjectClick = (projectId: number) => {
    setSelectedProject(projectId)
    // Smooth scroll to detailed view after a short delay to ensure it's rendered
    setTimeout(() => {
      detailedViewRef.current?.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start',
        inline: 'nearest'
      })
    }, 100)
  }

  const getProjectIcon = (projectId: number) => {
    switch (projectId) {
      case 1: // LSTM
        return (
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        )
      case 2: // Climate Risk - Square Management logo
        return (
          <Image src="/square.png" alt="Square Management" width={32} height={32} className="object-contain" />
        )
      case 3: // CAPM
        return (
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        )
      case 4: // Chatbot
        return (
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )
      default:
        return (
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        )
    }
  }

  const getProjectDetails = (projectId: number) => {
    switch (projectId) {
      case 1: // LSTM
        return {
          overview: "This project demonstrates advanced natural language processing using Long Short-Term Memory (LSTM) neural networks. The model was trained on Arthur Conan Doyle's 'The Adventures of Sherlock Holmes' to learn sequential patterns in text.",
          keyFeatures: [
            "LSTM architecture with 150 units for sequence learning",
            "Embedding layer for word vectorization",
            "Dense layer with softmax activation for word prediction",
            "Achieved 87.54% accuracy after 100 epochs",
            "Categorical crossentropy loss with Adam optimizer"
          ],
          technicalDetails: "The model processes text sequences and predicts the next word based on learned patterns. It uses TensorFlow/Keras for implementation and includes comprehensive text preprocessing, tokenization, and n-gram sequence creation."
        }
      case 2: // Climate Risk
        return {
          overview: "A comprehensive credit risk prediction model developed in collaboration with Square Management Consulting. This project integrates traditional financial data with climate and catastrophe indicators to assess environmental impact on loan repayment.",
          keyFeatures: [
            "Integration of climate data with borrower financial information",
            "Baseline models using Logistic Regression and Random Forest",
            "Performance evaluation with accuracy, precision, recall, and F1-score",
            "Climate factors improved precision and recall for high-risk loans",
            "Feature importance analysis for climate indicators"
          ],
          technicalDetails: "The project uses Python with Pandas, Scikit-learn, and data visualization libraries. It demonstrates how external environmental factors can enhance traditional credit risk models, helping financial institutions make more informed lending decisions."
        }
      case 3: // CAPM
        return {
          overview: "Comprehensive Capital Asset Pricing Model (CAPM) analysis of major NASDAQ technology stocks. This project analyzes the relationship between market returns and individual stock performance using statistical modeling techniques.",
          keyFeatures: [
            "Analysis of 5 major NASDAQ stocks: AAPL, MSFT, AMZN, GOOGL, META",
            "NASDAQ Composite as market index",
            "10-Year US Treasury Bond Yield as risk-free rate",
            "Ordinary least squares estimation of alpha and beta coefficients",
            "Security Market Line (SML) analysis and multifactor modeling"
          ],
          technicalDetails: "Built with Python, Pandas, NumPy, Matplotlib, and Seaborn. The analysis covers data from January 2019 to January 2024, sourced from Yahoo Finance. Includes statistical significance verification and extension to multifactor models incorporating inflation."
        }
      case 4: // Chatbot
        return {
          overview: "An intelligent chatbot system that uses machine learning for intent classification and provides contextually appropriate responses. The system is deployed as a web application using Streamlit for user interaction.",
          keyFeatures: [
            "Intent classification using Logistic Regression",
            "TF-IDF vectorization for text preprocessing",
            "Dynamic response generation based on classified intents",
            "Interactive web interface with Streamlit",
            "Natural language processing with NLTK"
          ],
          technicalDetails: "The chatbot processes user input, classifies intent using machine learning, and provides relevant responses from predefined options. It demonstrates practical application of NLP techniques in conversational AI systems."
        }
      default:
        return {
          overview: "Project details not available.",
          keyFeatures: [],
          technicalDetails: "Technical details not available."
        }
    }
  }

  const selectedProjectData = selectedProject ? projectsData.find(p => p.id === selectedProject) : null
  const selectedProjectDetails = selectedProject ? getProjectDetails(selectedProject) : null

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="container text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              My <span className="text-primary-600">Projects</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Explore my portfolio of AI, machine learning, and data engineering projects that solve real-world problems.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <Section 
        title="Featured Projects" 
        subtitle="A showcase of my most impactful work in AI and data science"
        className="bg-white"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {projectsData.map((project) => (
            <div key={project.id} className="group flex">
              <div 
                className={`bg-gradient-to-br from-white to-gray-50 rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 cursor-pointer transform hover:-translate-y-2 flex flex-col w-full ${
                  selectedProject === project.id 
                    ? 'border-primary-500 bg-primary-50' 
                    : 'border-gray-100 hover:border-primary-300'
                }`}
                onClick={() => handleProjectClick(project.id)}
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center">
                        {getProjectIcon(project.id)}
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                      {project.description}
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3 mb-8 flex-grow">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-4 py-2 bg-gradient-to-r from-primary-50 to-primary-100 text-primary-700 rounded-full text-sm font-medium border border-primary-200 hover:from-primary-100 hover:to-primary-200 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="mt-auto">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all duration-300 font-semibold text-lg group/link"
                    >
                      <svg className="w-6 h-6 mr-3 group-hover/link:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                      </svg>
                      View on GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed View */}
        {selectedProjectData && selectedProjectDetails && (
          <div ref={detailedViewRef} className="mt-16 bg-white rounded-3xl p-12 shadow-2xl border border-gray-100">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center">
                    {getProjectIcon(selectedProjectData.id)}
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900">
                    {selectedProjectData.title}
                  </h2>
                </div>
              </div>

              {/* Overview */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Project Overview</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {selectedProjectDetails.overview}
                </p>
              </div>

              {/* Key Features */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
                <ul className="space-y-3">
                  {selectedProjectDetails.keyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <span className="text-gray-700 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Details */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Implementation</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {selectedProjectDetails.technicalDetails}
                </p>
              </div>

              {/* Technologies */}
              <div className="pt-8 border-t border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Technologies Used</h3>
                <div className="flex flex-wrap gap-3 justify-center mb-8">
                  {selectedProjectData.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-4 py-2 bg-gradient-to-r from-primary-100 to-primary-200 text-primary-700 rounded-full text-sm font-medium hover:from-primary-200 hover:to-primary-300 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* GitHub Link */}
                {selectedProjectData.githubUrl && (
                  <div className="text-center">
                    <a
                      href={selectedProjectData.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all duration-300 font-semibold text-lg group/link"
                    >
                      <svg className="w-6 h-6 mr-3 group-hover/link:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                      </svg>
                      View on GitHub
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </Section>

      {/* Back to Home */}
      <Section className="bg-white">
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
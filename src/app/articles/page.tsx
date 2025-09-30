'use client';

import { Section } from '@/components/Section'
import { ArticleCard } from '@/components/ArticleCard'
import articlesData from '@/data/articles.json'
import Link from 'next/link'

export default function ArticlesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="container text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Articles & <span className="text-primary-600">Blog</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Technical insights, lessons learned, and deep-dives into AI, data engineering, and software development.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <Section 
        title="All Articles" 
        subtitle="Explore my latest thoughts and technical insights"
        className="bg-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {articlesData.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </Section>

      {/* Categories Section */}
      <Section 
        title="Article Categories" 
        subtitle="Browse articles by topic"
        className="bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                AI
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Engineering</h3>
              <p className="text-gray-600 text-sm mb-4">Building and scaling AI systems in production</p>
              <span className="text-primary-600 font-medium text-sm">3 articles</span>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                ML
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Machine Learning</h3>
              <p className="text-gray-600 text-sm mb-4">Deep dives into ML algorithms and techniques</p>
              <span className="text-primary-600 font-medium text-sm">2 articles</span>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                DE
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Engineering</h3>
              <p className="text-gray-600 text-sm mb-4">Pipelines, optimization, and infrastructure</p>
              <span className="text-primary-600 font-medium text-sm">2 articles</span>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                APP
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Applications</h3>
              <p className="text-gray-600 text-sm mb-4">Real-world AI applications across industries</p>
              <span className="text-primary-600 font-medium text-sm">1 article</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Newsletter Signup */}
      <Section 
        title="Stay Updated" 
        subtitle="Get notified when I publish new articles"
        className="bg-white"
      >
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 border border-primary-200">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Subscribe to Updates</h3>
              <p className="text-gray-600 mb-6">
                Get notified about new articles on AI, data engineering, and technical insights. No spam, just quality content.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
                >
                  Subscribe
                </button>
              </form>
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

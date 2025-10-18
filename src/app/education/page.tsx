'use client';

import { Section } from '@/components/Section'
import Image from 'next/image'
import educationData from '@/data/education.json'
import Link from 'next/link'

function getImagePath(imagePath: string): string {
  // For subfolder images, we need to handle basePath manually
  if (imagePath.startsWith('/education/') || imagePath.startsWith('/articles/')) {
    // Check if we're on GitHub Pages by looking at the current URL
    if (typeof window !== 'undefined') {
      const isGitHubPages = window.location.hostname === 'nmohammi.github.io' || window.location.pathname.startsWith('/portfolio');
      return `${isGitHubPages ? '/portfolio' : ''}${imagePath}`;
    }
    // Fallback for SSR - assume GitHub Pages
    return `/portfolio${imagePath}`;
  }
  return imagePath;
}

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

      {/* Professional Certifications */}
      <Section 
        title="Professional Certifications" 
        subtitle="Industry-recognized certifications validating my expertise"
        className="bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Hugging Face Certifications */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 transform">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">🤗</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">AI Agents: Fundamentals</h3>
                  <p className="text-sm text-gray-600">Hugging Face</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">AI Agents</span>
                <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">LangChain</span>
                <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">LLMs</span>
                <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">Prompt Engineering</span>
              </div>
              <a href="https://cas-bridge.xethub.hf.co/xet-bridge-us/67a47037749ea2c4b9fafd4b/c7dc4fc98b0df2925dfdfb075f50028c783a535a338598adba313653d7b5a9ea?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=cas%2F20251017%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20251017T225024Z&X-Amz-Expires=3600&X-Amz-Signature=e490d5a1a82b3bdf6e15ee6cdceecafa80be5ee60d023ef227121ea9e2d7f03b&X-Amz-SignedHeaders=host&X-Xet-Cas-Uid=68457b27d29ba7be47693319&response-content-disposition=inline%3B+filename*%3DUTF-8%27%272025-06-29.png%3B+filename%3D%222025-06-29.png%22%3B&response-content-type=image%2Fpng&x-id=GetObject&Expires=1760745024&Policy=eyJTdGF0ZW1lbnQiOlt7IkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc2MDc0NTAyNH19LCJSZXNvdXJjZSI6Imh0dHBzOi8vY2FzLWJyaWRnZS54ZXRodWIuaGYuY28veGV0LWJyaWRnZS11cy82N2E0NzAzNzc0OWVhMmM0YjlmYWZkNGIvYzdkYzRmYzk4YjBkZjI5MjVkZmRmYjA3NWY1MDAyOGM3ODNhNTM1YTMzODU5OGFkYmEzMTM2NTNkN2I1YTllYSoifV19&Signature=KTxa%7EP1751xRFAFcskNMlHDbGFbqSBpm5j0i46RQL4uuJKGc7xLhMxqNhiXYN%7ErPibh0b%7E9dZnnVCk56V2cNs7oyyfMo4TKF1iGg-7LPFbHEuWQCvt6DXAXf%7E26lYI1mgEy1l-1cIV-O3vVhbcEU1JGM9fR80BkLJrSDVJmwohSP8BFv7rCkB-inSDoISL-Ql-B7cr05sQW7w%7EPl1fTVPeKxqaYbkASWUBChETPlWNy-kh0qaIff4lZUSg%7EiKHywIWvNQMt4f1U7SNzfkjiDusW8dVWXa1JTyu%7E0A1VkRIaCZbxy4e8OfkbGywQ2g9eB5PdlNcqKer5m8UgKeodvzg__&Key-Pair-Id=K2L8F4GPSG1IFC" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-800 text-sm font-medium flex items-center">
                View Credential
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 transform">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">🤗</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">LLMs Fine-Tuning</h3>
                  <p className="text-sm text-gray-600">Hugging Face</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">Fine-Tuning</span>
                <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">PyTorch</span>
                <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">NLP</span>
                <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">Deep Learning</span>
              </div>
              <a href="https://huggingface.co/learn/llm-course/chapter3/7?fw=pt" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-800 text-sm font-medium flex items-center">
                View Credential
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 transform">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">🤗</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">LLMs Fundamentals</h3>
                  <p className="text-sm text-gray-600">Hugging Face</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">Transformers</span>
                <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">Attention</span>
                <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">AI Ethics</span>
                <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">Bias Awareness</span>
              </div>
              <a href="https://huggingface.co/learn/llm-course/chapter1/11?fw=pt" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-800 text-sm font-medium flex items-center">
                View Credential
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 transform">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">🤗</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Model Context Protocol</h3>
                  <p className="text-sm text-gray-600">Hugging Face</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">MCP</span>
                <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">Multi-Agent</span>
                <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">Tool Chaining</span>
                <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">REST APIs</span>
              </div>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-800 text-sm font-medium flex items-center">
                View Credential
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* dbt Labs Certification */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 transform">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">dbt</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">dbt Fundamentals</h3>
                  <p className="text-sm text-gray-600">dbt Labs</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-orange-50 text-orange-700 rounded text-xs">Data Analytics</span>
                <span className="px-2 py-1 bg-orange-50 text-orange-700 rounded text-xs">Data Modeling</span>
                <span className="px-2 py-1 bg-orange-50 text-orange-700 rounded text-xs">SQL</span>
                <span className="px-2 py-1 bg-orange-50 text-orange-700 rounded text-xs">BigQuery</span>
              </div>
              <a href="https://credentials.getdbt.com/fda4da24-9c2b-40e9-8f4b-5070c5cfce76" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-800 text-sm font-medium flex items-center">
                View Credential
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* LinkedIn Certifications */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 transform">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">in</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Google Cloud Foundations</h3>
                  <p className="text-sm text-gray-600">LinkedIn</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">GCP</span>
                <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">BigQuery</span>
                <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">GCS</span>
              </div>
              <a href="https://www.linkedin.com/learning/certificates/d10eacbb4859c9387dfbcefbf9c345f7d65193875dc1b37077c0c29ed014bfd0?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B2ojbgXVzSH6PLSIUwx0%2FEw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
                View Credential
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 transform">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">in</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Agile Project Management</h3>
                  <p className="text-sm text-gray-600">LinkedIn</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">Jira</span>
                <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">Scrum</span>
                <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">Kanban</span>
              </div>
              <a href="https://www.linkedin.com/learning/certificates/43c6197863f0c9a38446252f8d62a5de36f557383e3f4e86e621a5543f89e299?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B2ojbgXVzSH6PLSIUwx0%2FEw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
                View Credential
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 transform">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">in</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Telling Stories with Data</h3>
                  <p className="text-sm text-gray-600">LinkedIn</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">Data Visualization</span>
                <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">Storytelling</span>
              </div>
              <a href="https://www.linkedin.com/learning/certificates/adff1543a85906b1095fccab482d43463e96d6a63ca7bd591dfcf1241850a6ba?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B2ojbgXVzSH6PLSIUwx0%2FEw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
                View Credential
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* 365 Data Science Certifications */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 transform">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">365</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Data Analyst & Power BI</h3>
                  <p className="text-sm text-gray-600">365 Data Science</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-green-50 text-green-700 rounded text-xs">Power BI</span>
                <span className="px-2 py-1 bg-green-50 text-green-700 rounded text-xs">Data Analysis</span>
              </div>
              <a href="https://learn.365datascience.com/certificates/CC-78826C8462/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 text-sm font-medium flex items-center">
                View Credential
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 transform">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">365</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">SQL & MySQL Specialist</h3>
                  <p className="text-sm text-gray-600">365 Data Science</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-green-50 text-green-700 rounded text-xs">SQL</span>
                <span className="px-2 py-1 bg-green-50 text-green-700 rounded text-xs">MySQL</span>
                <span className="px-2 py-1 bg-green-50 text-green-700 rounded text-xs">Databases</span>
              </div>
              <a href="https://learn.365datascience.com/certificates/CC-EC01B571E1/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 text-sm font-medium flex items-center">
                View Credential
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Other Certifications */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 transform">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-800 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Git</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Git and GitHub</h3>
                  <p className="text-sm text-gray-600">ECT Global</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-gray-50 text-gray-700 rounded text-xs">Version Control</span>
                <span className="px-2 py-1 bg-gray-50 text-gray-700 rounded text-xs">GitHub</span>
              </div>
              <a href="https://learn.365datascience.com/certificates/CC-D6FDFBEDA8/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 text-sm font-medium flex items-center">
                View Credential
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 transform">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">TOEIC</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">TOEIC Score</h3>
                  <p className="text-sm text-gray-600">985/990</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-purple-50 text-purple-700 rounded text-xs">English Proficiency</span>
                <span className="px-2 py-1 bg-purple-50 text-purple-700 rounded text-xs">Business English</span>
              </div>
              <a href="#" className="text-purple-600 hover:text-purple-800 text-sm font-medium flex items-center">
                View Credential
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
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
                    <Image src={getImagePath(edu.logo)} alt={`${edu.institution} logo`} width={40} height={40} className="object-contain" unoptimized />
                  ) : null}
                </div>
                {/* Card */}
                <div className="ml-20 w-full">
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{edu.degree}</h3>
                    <div className="flex items-center gap-2 mb-1">
                      {edu.logo && (
                        <div className="w-7 h-7 rounded-md overflow-hidden bg-white border border-gray-100 flex items-center justify-center">
                          <Image src={getImagePath(edu.logo)} alt={`${edu.institution} logo`} width={22} height={22} className="object-contain" unoptimized />
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

      {/* Professional Certifications */}

      {/* Skills Developed */}
      <Section 
        title="Academic Skills" 
        subtitle="Knowledge and competencies developed through education"
        className="bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* AI & Machine Learning */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200 flex flex-col h-full">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-3xl flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                  AI
                </div>
                <h3 className="text-xl font-bold text-gray-900">AI & Machine Learning</h3>
              </div>
              <div className="flex-grow">
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <p className="text-sm font-medium text-gray-800">Deep Learning Applied</p>
                    <p className="text-xs text-gray-600">neural networks, CNNs, RNNs, transformers</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <p className="text-sm font-medium text-gray-800">Machine Learning</p>
                    <p className="text-xs text-gray-600">supervised/unsupervised, deep learning, reinforcement learning</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <p className="text-sm font-medium text-gray-800">Reinforcement Learning</p>
                    <p className="text-xs text-gray-600">Decision Making</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <p className="text-sm font-medium text-gray-800">Computer Vision</p>
                    <p className="text-xs text-gray-600">image analysis, object detection, segmentation</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <p className="text-sm font-medium text-gray-800">Natural Language Processing</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <p className="text-sm font-medium text-gray-800">Diffusion Models</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Data Science & Analytics */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200 flex flex-col h-full">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-3xl flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                  Data
                </div>
                <h3 className="text-xl font-bold text-gray-900">Data Science & Analytics</h3>
              </div>
              <div className="flex-grow">
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <p className="text-sm font-medium text-gray-800">Big Data & Data Engineering</p>
                    <p className="text-xs text-gray-600">distributed systems: Hadoop, Spark; data pipelines, MLOps</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <p className="text-sm font-medium text-gray-800">Big Data Analytics</p>
                    <p className="text-xs text-gray-600">distributed systems, Spark, Hadoop, MapReduce</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <p className="text-sm font-medium text-gray-800">Econometrics & Big-Data</p>
                    <p className="text-xs text-gray-600">panel/time-series, causal inference</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <p className="text-sm font-medium text-gray-800">Time Series & Stochastic</p>
                    <p className="text-xs text-gray-600">forecasting, sequential modeling</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <p className="text-sm font-medium text-gray-800">Stochastic Processes</p>
                    <p className="text-xs text-gray-600">Markov models, multivariate series</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <p className="text-sm font-medium text-gray-800">Signal Processing</p>
                    <p className="text-xs text-gray-600">neural methods for audio/vision</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Mathematical Foundation */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border border-purple-200 flex flex-col h-full">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-3xl flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                  Math
                </div>
                <h3 className="text-xl font-bold text-gray-900">Mathematical Foundation</h3>
              </div>
              <div className="flex-grow">
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <p className="text-sm font-medium text-gray-800">Advanced Mathematics</p>
                    <p className="text-xs text-gray-600">linear algebra, multivariable calculus, vector spaces, differential equations</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <p className="text-sm font-medium text-gray-800">Probabilistic Methods</p>
                    <p className="text-xs text-gray-600">Statistical Inference</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <p className="text-sm font-medium text-gray-800">Optimization Techniques</p>
                    <p className="text-xs text-gray-600">convex optimization, gradient methods, large-scale systems</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <p className="text-sm font-medium text-gray-800">Mathematics for Data Science</p>
                    <p className="text-xs text-gray-600">linear algebra, optimization, probability</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <p className="text-sm font-medium text-gray-800">Discrete Mathematics</p>
                    <p className="text-xs text-gray-600">Graph Theory</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <p className="text-sm font-medium text-gray-800">Probability Theory</p>
                    <p className="text-xs text-gray-600">Discrete & Continuous</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <p className="text-sm font-medium text-gray-800">Metric & Topological Spaces</p>
                  </div>
                </div>
              </div>
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

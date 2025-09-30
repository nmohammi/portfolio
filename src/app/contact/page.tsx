'use client';

import { Section } from '@/components/Section';
import Link from 'next/link';

export default function ContactPage() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;
    
    // Debug: vérifier que les données sont bien récupérées
    console.log('Form data retrieved:', { name, email, message });
    
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
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="container text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Let's <span className="text-primary-600">Connect</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Ready to discuss your next AI project or data challenge? Let's talk about how we can work together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <Section 
        title="Get In Touch" 
        subtitle="Multiple ways to reach out and start a conversation"
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

      {/* Call to Action */}
      <Section 
        title="Ready to Start?" 
        subtitle="Let's discuss your project and see how we can work together"
        className="bg-gradient-to-br from-gray-50 to-primary-50"
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-gray-700 mb-8">
            Whether you're looking to implement AI solutions, optimize your data pipelines, or build intelligent applications, I'm here to help you succeed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:nasr.mohammi@gmail.com"
              className="px-8 py-4 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
            >
              Send me an email
            </a>
            
            <Link 
              href="/projects"
              className="px-8 py-4 border-2 border-primary-600 text-primary-600 rounded-xl hover:bg-primary-600 hover:text-white transition-colors font-semibold text-lg"
            >
              View my projects  
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
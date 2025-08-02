"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { 
  Moon, 
  Sun, 
  Menu, 
  X, 
  ArrowRight, 
  FileText, 
  Brain, 
  BookOpen, 
  Sparkles,
  Star,
  Users,
  Award,
  Zap
} from 'lucide-react';

export default function LandingPage() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const features = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "PDF Summarization",
      description: "Upload any PDF and get instant, intelligent summaries powered by AI to save hours of reading time."
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Auto Quiz Generator",
      description: "Transform your study materials into personalized quizzes that adapt to your learning progress."
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Flashcard Builder",
      description: "Create smart flashcards automatically from your content with spaced repetition algorithms."
    }
  ];

  const testimonials = [
    {
      quote: "Scholar 101 transformed how I study. The AI summaries save me hours every week!",
      author: "Sarah Chen, Medical Student"
    },
    {
      quote: "The quiz generator helps me identify knowledge gaps I never knew I had.",
      author: "Marcus Rodriguez, Law Student"
    }
  ];

  const stats = [
    { icon: <Users className="w-6 h-6" />, value: "50K+", label: "Active Students" },
    { icon: <FileText className="w-6 h-6" />, value: "1M+", label: "PDFs Processed" },
    { icon: <Award className="w-6 h-6" />, value: "95%", label: "Success Rate" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-950 dark:via-slate-900 dark:to-indigo-950 transition-all duration-500">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 dark:bg-gray-950/90 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50 shadow-lg dark:shadow-2xl transition-all duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="relative">
                  <Sparkles className="w-8 h-8 text-blue-600 dark:text-blue-400 drop-shadow-lg" />
                  <div className="absolute inset-0 w-8 h-8 bg-blue-600/20 dark:bg-blue-400/20 rounded-full blur-xl"></div>
                </div>
                <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
                  Scholar 101
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <Link href="#features" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Features
                </Link>
                <Link href="#testimonials" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Reviews
                </Link>
                
                {/* Theme Toggle */}
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="p-2 rounded-xl bg-gray-100/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 shadow-md hover:shadow-lg backdrop-blur-sm"
                >
                  {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>

                {/* Auth Buttons */}
                <SignedOut>
                  <SignInButton mode="modal">
                    <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                      Sign In
                    </button>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  <UserButton 
                    appearance={{
                      elements: {
                        avatarBox: "w-8 h-8"
                      }
                    }}
                  />
                </SignedIn>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-xl bg-gray-100/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-400 shadow-md backdrop-blur-sm"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-gray-100/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-400 shadow-md backdrop-blur-sm"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200/50 dark:border-gray-800/50 bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl shadow-xl">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link href="#features" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  Features
                </Link>
                <Link href="#testimonials" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  Reviews
                </Link>
                <div className="px-3 py-2">
                  <SignedOut>
                    <SignInButton mode="modal">
                      <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-2 rounded-xl font-medium shadow-lg">
                        Sign In
                      </button>
                    </SignInButton>
                  </SignedOut>
                  <SignedIn>
                    <div className="flex items-center space-x-2">
                      <UserButton />
                      <span className="text-sm text-gray-600 dark:text-gray-400">Account</span>
                    </div>
                  </SignedIn>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 dark:from-blue-500/20 dark:to-indigo-500/20"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 dark:bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/20 dark:bg-indigo-400/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight drop-shadow-2xl">
              Your Smart 
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent drop-shadow-none"> Study Buddy</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
              Summarize PDFs, Generate Quizzes, and Learn with Flashcards — all powered by AI in one intelligent platform.
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 bg-white/50 dark:bg-gray-800/50 px-4 py-2 rounded-xl backdrop-blur-sm shadow-lg">
                  <div className="text-blue-600 dark:text-blue-400 drop-shadow-sm">
                    {stat.icon}
                  </div>
                  <span className="font-bold text-lg">{stat.value}</span>
                  <span className="text-sm">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/dashboard">
                <button className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 flex items-center backdrop-blur-sm">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/dashboard">
                <button className="px-8 py-4 rounded-2xl font-semibold text-lg border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-300 flex items-center shadow-xl hover:shadow-2xl backdrop-blur-sm bg-white/50 dark:bg-gray-800/50">
                  Launch Dashboard
                  <Zap className="ml-2 w-5 h-5" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm relative">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent dark:via-blue-950/20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 drop-shadow-lg">
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto drop-shadow-sm">
              Everything you need to accelerate your learning journey with cutting-edge AI technology.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white/80 dark:bg-gray-800/80 p-8 rounded-3xl shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-xl relative overflow-hidden">
                  {/* Card glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 dark:from-blue-400/10 dark:to-indigo-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300 relative z-10 drop-shadow-lg">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 relative z-10">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed relative z-10">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 relative">
        {/* Background effects */}
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-purple-500/10 dark:bg-purple-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-pink-500/10 dark:bg-pink-400/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 drop-shadow-lg">
              Loved by Students Worldwide
            </h2>
            <div className="flex justify-center items-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current drop-shadow-sm" />
              ))}
              <span className="ml-2 text-gray-600 dark:text-gray-300 font-medium drop-shadow-sm">4.9/5 from 10,000+ reviews</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/80 dark:bg-gray-800/80 p-8 rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-1">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current drop-shadow-sm" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg italic">
                  "{testimonial.quote}"
                </p>
                <p className="text-gray-900 dark:text-white font-semibold">
                  {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-black dark:from-gray-950 dark:to-black text-white py-16 relative overflow-hidden">
        {/* Footer background effects */}
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="relative">
                  <Sparkles className="w-8 h-8 text-blue-400 drop-shadow-lg" />
                  <div className="absolute inset-0 w-8 h-8 bg-blue-400/20 rounded-full blur-xl"></div>
                </div>
                <span className="ml-2 text-xl font-bold">Scholar 101</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                Empowering students worldwide with AI-powered learning tools that make studying more efficient and effective.
              </p>
              <div className="flex space-x-4">
                <SignedOut>
                  <SignInButton mode="modal">
                    <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                      Get Started Free
                    </button>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  <Link href="/dashboard">
                    <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                      Go to Dashboard
                    </button>
                  </Link>
                </SignedIn>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-white">Product</h3>
              <ul className="space-y-2">
                <li><Link href="#features" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Features</Link></li>
                <li><Link href="/dashboard" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Dashboard</Link></li>
                <li><Link href="/pricing" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Pricing</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-white">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Terms of Service</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Contact</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800/50 mt-12 pt-8 text-center relative">
            <p className="text-gray-400">
              © 2025 Scholar 101. All rights reserved. Built with ❤️ for students everywhere.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
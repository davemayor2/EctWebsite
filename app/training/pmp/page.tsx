"use client"
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Target,
  Clock,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
  BookOpen,
  TrendingUp,
  Star,
  Zap
} from 'lucide-react'

export default function PMPTrainingPage() {
  const programDetails = {
    title: 'PMP Certification Program',
    duration: '3-6 months',
    format: 'In-person & Online',
    level: 'Professional',
    certification: 'PMP (Project Management Professional)',
    price: 'Contact for pricing'
  }

  const modules = [
    'Project Management Fundamentals',
    'Project Integration Management',
    'Project Scope Management',
    'Project Schedule Management',
    'Project Cost Management',
    'Project Quality Management',
    'Project Resource Management',
    'Project Communications Management',
    'Project Risk Management',
    'Project Procurement Management',
    'Project Stakeholder Management'
  ]

  const benefits = [
    'Globally recognized project management certification',
    'Enhanced career prospects and salary potential',
    'Comprehensive knowledge of PMBOK Guide',
    'Professional credibility and recognition',
    'Flexible study options to fit your schedule',
    'Access to PMI member benefits and resources'
  ]

  const whatToExpect = [
    {
      title: 'PMBOK Guide Mastery',
      description: 'In-depth study of the Project Management Body of Knowledge (PMBOK) Guide',
      icon: <BookOpen className="w-6 h-6 text-primary-500" />
    },
    {
      title: 'Practice Tests & Simulations',
      description: 'Comprehensive practice tests and exam simulations to prepare you for success',
      icon: <Target className="w-6 h-6 text-primary-500" />
    },
    {
      title: 'Real Case Studies',
      description: 'Learn from real-world project management scenarios and case studies',
      icon: <TrendingUp className="w-6 h-6 text-primary-500" />
    },
    {
      title: 'Exam Strategy',
      description: 'Proven strategies and techniques to maximize your exam performance',
      icon: <Zap className="w-6 h-6 text-primary-500" />
    }
  ]

  const requirements = [
    'Secondary degree (high school diploma, associate\'s degree, or global equivalent)',
    '7,500 hours leading and directing projects',
    '35 hours of project management education',
    'OR Bachelor\'s degree or global equivalent',
    '4,500 hours leading and directing projects',
    '35 hours of project management education'
  ]

  return (
    <div className="bg-white text-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-primary-50 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6">
                <Link href="/training" className="inline-flex items-center text-primary-500 hover:text-primary-600 transition-colors">
                  <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                  Back to Training Programs
                </Link>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                <span className="text-primary-500">PMP</span> Certification Program
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                Earn your Project Management Professional (PMP) certification and advance your career in project management with the world's most recognized project management credential.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center bg-white px-4 py-2 border border-gray-200">
                  <Clock className="w-5 h-5 text-primary-500 mr-2" />
                  <span className="text-sm font-medium">{programDetails.duration}</span>
                </div>
                <div className="flex items-center bg-white px-4 py-2 border border-gray-200">
                  <Users className="w-5 h-5 text-primary-500 mr-2" />
                  <span className="text-sm font-medium">{programDetails.format}</span>
                </div>
                <div className="flex items-center bg-white px-4 py-2 border border-gray-200">
                  <Award className="w-5 h-5 text-primary-500 mr-2" />
                  <span className="text-sm font-medium">{programDetails.level}</span>
                </div>
              </div>

              <Link href="/book-appointment" className="bg-primary-500 text-white px-8 py-4 text-lg font-semibold hover:bg-primary-600 transition-colors btn-hover inline-flex items-center">
                Enroll Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-32 h-32 bg-primary-100 mx-auto mb-6 flex items-center justify-center">
                <Target className="w-16 h-16 text-primary-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">PMP Certification</h3>
              <p className="text-gray-600">World's leading project management certification</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Program Overview</h2>
              <p className="text-lg text-gray-600 mb-6">
                The PMP (Project Management Professional) certification is the most important industry-recognized credential for project managers. Our comprehensive program prepares you for the PMP exam by covering all knowledge areas outlined in the PMBOK Guide.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our program combines theoretical knowledge with practical application, ensuring you understand not just the concepts but how to apply them in real-world project scenarios. With expert instruction and proven study methods, you'll be well-prepared to pass the PMP exam and advance your project management career.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Knowledge Areas Covered</h3>
              <div className="space-y-3">
                {modules.map((module, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{module}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What to Expect</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our PMP program provides comprehensive support and resources to ensure your exam success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whatToExpect.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary-100 mx-auto mb-4 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Program Benefits</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <Star className="w-5 h-5 text-primary-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Eligibility Requirements</h3>
              <div className="space-y-4">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{requirement}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Earn Your PMP Certification?
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-8">
              Join thousands of project managers who have advanced their careers with PMP certification. Book your consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book-appointment" className="bg-white text-primary-500 px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-colors btn-hover inline-flex items-center">
                Book Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/contact" className="bg-transparent border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-primary-500 transition-colors btn-hover inline-flex items-center">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

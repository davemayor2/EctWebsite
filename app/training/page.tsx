"use client"
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Award, 
  Users, 
  BookOpen, 
  UserCheck, 
  Network, 
  GraduationCap,
  Target,
  Zap,
  TrendingUp,
  Star,
  CheckCircle,
  ArrowRight
} from 'lucide-react'

type ProgramItem = {
  title: string
  description: string
  icon: React.ReactNode
  features: string[]
  slug: string
}

type ExpectationItem = {
  title: string
  description: string
  icon: React.ReactNode
}

type TestimonialItem = {
  name: string
  role: string
  quote: string
  rating: number
}

const programs: ProgramItem[] = [
  {
    title: 'ACCA Certification',
    description: 'Master the Association of Chartered Certified Accountants qualification with comprehensive preparation covering all 13 papers.',
    icon: <GraduationCap className="w-8 h-8 text-primary-500" />,
    features: ['13 Paper Preparation', 'Mock Exams', 'Study Materials', 'Expert Mentorship'],
    slug: 'acca'
  },
  {
    title: 'PMP Certification',
    description: 'Earn your Project Management Professional certification and advance your career in project management.',
    icon: <Target className="w-8 h-8 text-primary-500" />,
    features: ['PMBOK Guide', 'Practice Tests', 'Real Case Studies', 'Exam Strategy'],
    slug: 'pmp'
  },
  {
    title: 'Taxation & Payroll Training',
    description: 'Comprehensive training in tax compliance, payroll management, and regulatory requirements.',
    icon: <TrendingUp className="w-8 h-8 text-primary-500" />,
    features: ['Tax Compliance', 'Payroll Processing', 'Software Training', 'Regulatory Updates'],
    slug: 'taxation-payroll'
  },
  {
    title: 'Software Implementation & Tools',
    description: 'Hands-on training in accounting software, ERP systems, and digital business tools.',
    icon: <Zap className="w-8 h-8 text-primary-500" />,
    features: ['QuickBooks', 'Xero', 'Sage', 'Custom Solutions'],
    slug: 'software-implementation'
  },
  {
    title: 'Custom Corporate Training',
    description: 'Tailored training programs designed specifically for your organization\'s unique needs.',
    icon: <Users className="w-8 h-8 text-primary-500" />,
    features: ['Custom Curriculum', 'On-site Training', 'Team Building', 'Ongoing Support'],
    slug: 'custom-corporate'
  }
]

const expectations: ExpectationItem[] = [
  {
    title: 'Interactive Classes',
    description: 'Engaging, hands-on learning with real-world case studies and practical exercises.',
    icon: <BookOpen className="w-6 h-6 text-primary-500" />
  },
  {
    title: 'Resource Materials',
    description: 'Comprehensive study materials, guides, and digital resources to support your learning.',
    icon: <Award className="w-6 h-6 text-primary-500" />
  },
  {
    title: 'Mentorship',
    description: 'One-on-one guidance from industry experts and experienced professionals.',
    icon: <UserCheck className="w-6 h-6 text-primary-500" />
  },
  {
    title: 'Networking',
    description: 'Connect with peers, industry professionals, and build valuable professional relationships.',
    icon: <Network className="w-6 h-6 text-primary-500" />
  }
]

const testimonials: TestimonialItem[] = [
  {
    name: 'Sarah Johnson',
    role: 'Senior Accountant',
    quote: 'The ACCA program at EC&T transformed my career. The instructors were exceptional and the practical approach made all the difference.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Project Manager',
    quote: 'EC&T\'s PMP training gave me the confidence and skills to lead complex projects successfully. Highly recommended!',
    rating: 5
  },
  {
    name: 'Aisha Okafor',
    role: 'Finance Director',
    quote: 'The custom corporate training exceeded our expectations. Our team\'s performance improved significantly after the program.',
    rating: 5
  }
]

const benefits = [
  'Industry-relevant certifications',
  'Confidence to handle challenges',
  'Practical skills employers value',
  'Clear career pathway'
]

export default function TrainingPage() {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-primary-50 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              Professional Training Programs{' '}
              <span className="text-primary-500">Designed for Your Success</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-gray-600 max-w-4xl mx-auto mb-8"
            >
              Equip yourself with globally recognized certifications and practical skills that advance your career in finance, management, and technology.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link href="#programs" className="bg-primary-500 text-white px-8 py-4 text-lg font-semibold hover:bg-primary-600 transition-colors btn-hover inline-flex items-center">
                View Upcoming Courses
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Training Programs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Train with <span className="text-primary-500">EC&T?</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Globally Recognized Certifications',
                description: 'Industry-standard qualifications that enhance your professional credibility worldwide.'
              },
              {
                title: 'Experienced Instructors',
                description: 'Learn from industry experts with years of practical experience and teaching excellence.'
              },
              {
                title: 'Practical Approach',
                description: 'Real-world case studies and hands-on exercises that prepare you for actual workplace challenges.'
              },
              {
                title: 'Flexible Learning',
                description: 'Multiple learning formats including in-person, online, and hybrid options to fit your schedule.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-primary-100 mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-primary-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What to <span className="text-primary-500">Expect</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive training approach ensures you get the most out of your learning experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expectations.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary-100 mx-auto mb-4 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs We Offer */}
      <section id="programs" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Programs We <span className="text-primary-500">Offer</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of professional training programs designed to advance your career.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-gray-200 p-8 hover:shadow-lg transition-shadow"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-primary-100 mx-auto mb-4 flex items-center justify-center">
                    {program.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{program.title}</h3>
                  <p className="text-gray-600 mb-6">{program.description}</p>
                </div>
                
                <div className="space-y-2">
                  {program.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary-500 mr-2" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link href={`/training/${program.slug}`} className="mt-6 w-full bg-primary-500 text-white py-3 px-6 font-semibold hover:bg-primary-600 transition-colors btn-hover text-center block">
                  Learn More
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Gain */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What You'll <span className="text-primary-500">Gain</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your career with the skills and certifications that matter most to employers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-primary-100 mx-auto mb-4 flex items-center justify-center">
                  <Star className="w-8 h-8 text-primary-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{benefit}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Success Stories from Our <span className="text-primary-500">Trainees</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from professionals who have transformed their careers with our training programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-gray-200 p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-600 mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-primary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Start Your Training Journey with EC&T Today
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-8">
              Choose from our upcoming programs and take the next step toward your professional growth.
            </p>
            <Link href="/book-appointment" className="bg-white text-primary-500 px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-colors btn-hover inline-flex items-center">
              Enroll Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
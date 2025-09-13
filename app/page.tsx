'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Users, 
  ArrowRight, 
  CheckSquare, 
  Calculator, 
  Coins, 
  MessageCircle, 
  DollarSign, 
  TrendingUp,
  GraduationCap,
  BarChart3,
  Award,
  FileText,
  Star,
  Globe,
  Heart
} from 'lucide-react'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ServiceCard from '@/components/ServiceCard'
import TestimonialCard from '@/components/TestimonialCard'
import Image from 'next/image'

export default function HomePage() {
  const services = [
    {
      icon: CheckSquare,
      title: 'Auditing Services',
      description: 'Comprehensive auditing solutions to ensure compliance and transparency in your financial operations.'
    },
    {
      icon: Calculator,
      title: 'Accounting Services',
      description: 'Professional accounting services to maintain accurate financial records and reporting.'
    },
    {
      icon: Coins,
      title: 'Financial Services',
      description: 'Strategic financial planning and advisory services to optimize your business performance.'
    },
    {
      icon: MessageCircle,
      title: 'Consultancy Services',
      description: 'Expert business consultancy to help you make informed decisions and drive growth.'
    },
    {
      icon: DollarSign,
      title: 'Tax and Payroll Services',
      description: 'Complete tax compliance and payroll management solutions for your business.'
    },
    {
      icon: TrendingUp,
      title: 'Marketing Services',
      description: 'Strategic marketing solutions to enhance your brand presence and drive customer engagement.'
    },
    {
      icon: FileText,
      title: 'Software Implementation and Training',
      description: 'Complete software implementation and comprehensive training programs for your team.'
    },
    {
      icon: GraduationCap,
      title: 'Training in Professional Courses (ACCA, PMP, etc.)',
      description: 'World-class professional training programs to advance your career and skills.'
    }
  ]

  const trainingPrograms = [
    {
      icon: GraduationCap,
      title: 'ACCA (Association of Chartered Certified Accountants)',
      description: 'Advance your accounting and finance career with globally respected ACCA training.',
      link: '/training/acca'
    },
    {
      icon: Award,
      title: 'PMP (Project Management Professional)',
      description: 'Gain recognized expertise in project management and lead with confidence.',
      link: '/training/pmp'
    },
    {
      icon: BarChart3,
      title: 'Taxation & Payroll Training',
      description: 'Master tax compliance and payroll management with comprehensive training.',
      link: '/training/taxation-payroll'
    },
    {
      icon: FileText,
      title: 'Custom Corporate Training',
      description: 'Tailored programs in business strategy, financial management, and leadership.',
      link: '/training/custom-corporate'
    }
  ]

  const testimonials = [
    {
      title: 'A Reliable Partner in Business Growth',
      quote: 'EC&T helped us streamline our accounting and tax processes. Their consultants are not only thorough but also patient in explaining every step. We now have a clearer financial roadmap and greater confidence in compliance.',
      author: 'Adewale O.',
      position: 'CFO, Manufacturing Firm'
    },
    {
      title: 'The Best Support for My ACCA Journey',
      quote: 'The training sessions were well-structured, interactive, and aligned with international standards. Thanks to EC&T, I passed my ACCA papers with confidence and advanced in my career',
      author: 'Chinwe M.',
      position: 'Chartered Accountant'
    },
    {
      title: 'Empowered Our Project Managers',
      quote: 'We enrolled our team in EC&T\'s PMP training, and the results have been outstanding. Our project delivery is now more efficient, and our managers are certified to handle complex assignments.',
      author: 'Samuel D.',
      position: 'HR Manager, Tech Company'
    }
  ]

  const whyChooseUs = [
    {
      title: 'Expert Team',
      description: 'Decades of combined experience in auditing, finance, tax, and professional training give us the credibility to deliver solutions that work.',
      image: '/images/expert-team.png'
    },
    {
      title: 'Proven Results',
      description: 'We don’t believe in one-size-fits-all. Every business is unique, and so are our strategies.',
      image: '/images/proven-results.png'
    },
    {
      title: 'Global Standards',
      description: 'From certification programs to masterclasses, our sessions are designed to equip professionals with practical, real-world skills.',
      image: '/images/global-standards.png'
    },
    {
      title: 'Client-Centered Approach',
      description: 'Your success is our success. We partner with you to ensure long-term impact, not just short-term results.',
      image: '/images/Client-Centered Approach.png'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-image.png" // Replace with your image filename
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center justify-center space-x-2 text-white"
            >
              <Users className="w-5 h-5" />
              <span className="text-lg font-dm-sans">Trusted Consulting & Training Partner</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white font-plus-jakarta leading-[1.4] pb-6 overflow-visible">
                <span className="block">Shaping Businesses</span>
                <span className="block gradient-text pb-4">Empowering Professionals</span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-gray-200 max-w-3xl mx-auto font-dm-sans leading-relaxed"
            >
              From auditing and financial advisory to professional training in ACCA, PMP, and more — EC&T delivers solutions that drive growth and lasting impact.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link href="/contact" className="bg-primary-500 text-white px-8 py-4 text-lg font-semibold rounded-lg hover:bg-primary-600 transition-all duration-300 btn-hover flex items-center space-x-2">
                <span>Request a Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/training" className="border-2 border-white text-white px-8 py-4 text-lg font-semibold rounded-lg hover:bg-white hover:text-primary-500 transition-all duration-300">
                Explore Training
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-8"
          >
            <p className="text-primary-600 text-lg font-inter">
              Trusted by teams at over 20+ of the world's leading organizations, startups and small businesses
            </p>
            
            {/* Company Logos */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center">
              {[
                { name: "adobe", logo: "/logos/adobe.png" },
                { name: "Opendoor", logo: "/logos/opendoor.png" },
                { name: "Amazon", logo: "/logos/amazon.png" },
                { name: "Paypal", logo: "/logos/paypal.png" },
                { name: "Pendo", logo: "/logos/pendo.png" },
                { name: "Postman", logo: "/logos/postman.png" },
                { name: "Zapier", logo: "/logos/zapier.png" }
              ].map((company, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-12 flex items-center justify-center">
                    <Image
                      src={company.logo}
                      alt={`${company.name} logo`}
                      width={80}
                      height={48}
                      className="max-h-12 w-auto object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

            {/* Services Section */}
            <section id="services" className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-primary-50 overflow-hidden">
        {/* Background blur overlay */}
        <div className="absolute inset-0 backdrop-blur-[2px] bg-white/60"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black font-plus-jakarta">
              Our <span className="text-primary-500">Services</span>
            </h2>
            <p className="text-gray-600 text-xl font-dm-sans max-w-3xl mx-auto">
              Comprehensive consulting and training solutions designed to drive your business forward and empower your professional growth.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 0.1}
              />
            ))}
          </div>
          
          {/* Learn More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link href="/services" className="inline-flex items-center gap-2 bg-primary-500 text-white px-8 py-4 text-lg font-semibold hover:bg-primary-600 transition-all duration-300 btn-hover">
              <span>Learn More</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black font-plus-jakarta">
              Why <span className="text-primary-500">Choose Us?</span>
            </h2>
            <p className="text-gray-600 text-xl font-dm-sans max-w-3xl mx-auto">
              At Ekpombang Consulting & Training (EC&T), we combine deep expertise, industry knowledge, and a commitment to client success. Our edge lies not only in what we do, but how we do it.
            </p>
          </motion.div>

          {/* Why Choose Us Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group overflow-hidden rounded-lg h-80"
              >
                {/* Background Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                  <h3 className="text-2xl font-semibold font-plus-jakarta mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-200 font-dm-sans text-sm">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden"
          >
            <button className="bg-primary-500 text-white px-8 py-4 text-lg font-semibold rounded-lg hover:bg-primary-600 transition-all duration-300 btn-hover flex items-center space-x-2 mx-auto">
              <span>Learn More</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Featured Training Programs */}
      <section id="training" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 mb-16"
          >
            <p className="text-primary-500 text-lg font-dm-sans font-semibold">
              Featured Programs
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-black font-plus-jakarta">
              Professional Training That Elevates <span className="text-primary-500">Careers</span>
            </h2>
            <p className="text-gray-600 text-xl font-dm-sans max-w-3xl">
              At EC&T, we prepare professionals to achieve world-class certifications that open doors globally.
            </p>
          </motion.div>

          {/* Training Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trainingPrograms.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-secondary-100 p-6 rounded-lg hover:shadow-lg transition-all duration-300 card-hover"
              >
                <div className="space-y-6">
                  {/* Icon */}
                  <div className="bg-primary-500 p-3 rounded-lg w-fit">
                    <program.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-black font-plus-jakarta">
                      {program.title}
                    </h3>
                    <p className="text-gray-600 text-lg font-dm-sans leading-relaxed">
                      {program.description}
                    </p>
                    <Link href={program.link} className="inline-flex items-center gap-2 bg-primary-500 text-white px-6 py-3 text-lg font-semibold rounded-lg hover:bg-primary-600 transition-all duration-300 btn-hover">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-secondary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4 mb-16"
          >
            <p className="text-white text-lg font-dm-sans">Testimonials</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white font-plus-jakarta">
              Customer Success <span className="text-primary-500">Stories</span>
            </h2>
            <p className="text-gray-300 text-xl font-dm-sans max-w-3xl mx-auto">
              Real stories from organizations and professionals who have experienced growth through our consulting and training solutions.
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                title={testimonial.title}
                quote={testimonial.quote}
                author={testimonial.author}
                position={testimonial.position}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white font-plus-jakarta">
              Experience Solutions like Never before
            </h2>
            <p className="text-gray-200 text-xl font-dm-sans max-w-2xl mx-auto">
              Ready to transform your business and advance your career? Let's discuss how we can help you achieve your goals.
            </p>
            <Link href="/contact" className="bg-primary-500 text-white px-8 py-4 text-lg font-semibold hover:bg-primary-600 transition-all duration-300 btn-hover inline-flex items-center gap-2 mx-auto">
              <span className="inline-block w-5" />
              <span>Contact Us</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
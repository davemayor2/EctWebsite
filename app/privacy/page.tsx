"use client"
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { Shield, Calendar, Mail, Phone, Lock, Eye, Users, CheckCircle } from 'lucide-react'

export default function PrivacyPage() {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-primary-50 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center mb-6"
            >
              <div className="w-16 h-16 bg-primary-100 flex items-center justify-center">
                <Shield className="w-8 h-8 text-primary-500" />
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
            >
              Privacy <span className="text-primary-500">Policy</span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center justify-center space-x-2 text-gray-600"
            >
              <Calendar className="w-5 h-5" />
              <span className="text-lg">Effective Date: 25th September, 2025</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <div className="bg-primary-50 border-l-4 border-primary-500 p-6 mb-8">
              <p className="text-gray-700 text-lg leading-relaxed">
                At Ekpombang Consulting & Training (EC&T) Limited, we value and respect your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you consult with us, enroll in our training programs, or use our website.
              </p>
            </div>

            <div className="space-y-8">
              {/* Section 1: Information We Collect */}
              <div className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Eye className="w-6 h-6 text-primary-500 mr-3" />
                  1. Information We Collect
                </h2>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-3 mt-1">•</span>
                    <span>Personal details (name, email, phone number, address)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-3 mt-1">•</span>
                    <span>Professional and academic information (where required for training programs)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-3 mt-1">•</span>
                    <span>Payment information (when enrolling in paid programs or services)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-3 mt-1">•</span>
                    <span>Technical data (IP address, browser type, device information when using our website)</span>
                  </li>
                </ul>
              </div>

              {/* Section 2: How We Use Your Information */}
              <div className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Users className="w-6 h-6 text-primary-500 mr-3" />
                  2. How We Use Your Information
                </h2>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-3 mt-1">•</span>
                    <span>To provide consulting and training services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-3 mt-1">•</span>
                    <span>To process registrations and payments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-3 mt-1">•</span>
                    <span>To send important updates and program information</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-3 mt-1">•</span>
                    <span>To improve our services and website experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-3 mt-1">•</span>
                    <span>To comply with legal and regulatory requirements</span>
                  </li>
                </ul>
              </div>

              {/* Section 3: Data Protection & Security */}
              <div className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Lock className="w-6 h-6 text-primary-500 mr-3" />
                  3. Data Protection & Security
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We use industry-standard measures to safeguard your data against unauthorized access, disclosure, or misuse.
                </p>
              </div>

              {/* Section 4: Sharing of Information */}
              <div className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Users className="w-6 h-6 text-primary-500 mr-3" />
                  4. Sharing of Information
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We do not sell or rent your personal information. Your data may only be shared with trusted third parties where necessary for service delivery (e.g., payment processors, training partners) or where required by law.
                </p>
              </div>

              {/* Section 5: Your Rights */}
              <div className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 text-primary-500 mr-3" />
                  5. Your Rights
                </h2>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-3 mt-1">•</span>
                    <span>Access and update your personal information</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-3 mt-1">•</span>
                    <span>Request deletion of your data (subject to legal obligations)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-3 mt-1">•</span>
                    <span>Opt-out of non-essential communications</span>
                  </li>
                </ul>
              </div>

              {/* Section 6: Your Acceptance of These Terms */}
              <div className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Acceptance of These Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  By using the Site, you signify your acceptance of this policy. If you do not agree to this policy, please do not use our Site. Your continued use of the Site following the posting of changes to this policy will be deemed your acceptance to those changes.
                </p>
              </div>

              {/* Section 7: Contact Us */}
              <div className="pb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contact Us</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have questions about this Privacy Policy, please contact us at:
                </p>
                <div className="bg-gray-50 p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary-500" />
                    <span className="text-gray-700">Email: info@ect-pro.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary-500" />
                    <span className="text-gray-700">Phone: +237 694064887 or +237 678364320</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Last Updated */}
            <div className="mt-12 p-6 bg-gray-50 border border-gray-200">
              <p className="text-sm text-gray-600 text-center">
                <strong>Last Updated:</strong> September 25, 2025
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

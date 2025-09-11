'use client'

import { motion } from 'framer-motion'
import { Phone, Mail } from 'lucide-react'
import Link from 'next/link'
import NextImage from 'next/image'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { name: 'Home', href: '/' },
      { name: 'About Us', href: '/about' },
      { name: 'Our Services', href: '/services' },
      { name: 'Training Programs', href: '/training' },
      { name: 'Contact Us', href: '/contact' }
    ],
    services: [
      { name: 'Auditing Services', href: '/services' },
      { name: 'Accounting Services', href: '/services' },
      { name: 'Financial Services', href: '/services' },
      { name: 'Consultancy Services', href: '/services' },
      { name: 'Tax and Payroll Services', href: '/services' },
      { name: 'Marketing Services', href: '/services' },
      { name: 'Software Implementation and Training', href: '/services' },
      { name: 'Training in Professional Courses', href: '/services' }
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Careers', href: '/careers' }
    ]
  }

  return (
    <footer className="bg-gray-50">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="space-y-5">
              {/* Logo */}
              <div className="relative w-32 h-14">
                <NextImage
                  src="/ect-logo.png"
                  alt="EC&T Logo"
                  fill
                  className="object-contain"
                />
              </div>
              
              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                Ekpombang Consulting and Training Limited can turn massive ideas into a functioning reality so you can focus on the next steps of their business plan.
              </p>

              {/* Social Icons */}
              <div className="flex space-x-3">
                {[
                  { name: 'Facebook', href: 'https://facebook.com' },
                  { name: 'Twitter', href: 'https://twitter.com' },
                  { name: 'LinkedIn', href: 'https://linkedin.com' },
                  { name: 'Instagram', href: 'https://instagram.com' },
                ].map((item) => (
                  <a
                    key={item.name}
                    aria-label={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 border border-accent-500 flex items-center justify-center hover:bg-accent-500 transition-colors"
                    title={item.name}
                  >
                    {/* minimalist SVG icons */}
                    {item.name === 'Facebook' && (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-accent-500 hover:text-white">
                        <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H7.9V12h2.6V9.8c0-2.6 1.5-4 3.8-4 1.1 0 2.3.2 2.3.2v2.6h-1.3c-1.3 0-1.7.8-1.7 1.6V12h2.9l-.5 2.9h-2.4v7A10 10 0 0 0 22 12Z" />
                      </svg>
                    )}
                    {item.name === 'Twitter' && (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-accent-500 hover:text-white">
                        <path d="M19.6 7.5c.01.2.01.4.01.7 0 7-5.3 15-15 15-3 0-5.8-.9-8.1-2.5.4 0 .8.1 1.2.1 2.5 0 4.8-.8 6.6-2.3a5.3 5.3 0 0 1-5-3.7c.3.1.6.1 1 .1.4 0 .9-.1 1.3-.2a5.3 5.3 0 0 1-4.2-5.2v-.1c.7.4 1.5.7 2.3.7a5.3 5.3 0 0 1-1.6-7 15 15 0 0 0 10.9 5.5 6 6 0 0 1 .1-1.2 5.3 5.3 0 0 1 9.2-2.4 10.4 10.4 0 0 0 3.4-1.3 5.3 5.3 0 0 1-2.3 2.9 10.5 10.5 0 0 0 3-.8 11 11 0 0 1-2.6 2.7Z" />
                      </svg>
                    )}
                    {item.name === 'LinkedIn' && (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-accent-500 hover:text-white">
                        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 8.98h3.96V21H3V8.98Zm7.5 0h3.8v1.64h.06c.53-1 1.83-2.06 3.76-2.06 4.02 0 4.76 2.65 4.76 6.1V21h-3.96v-5.33c0-1.27-.02-2.9-1.77-2.9-1.78 0-2.05 1.38-2.05 2.8V21H10.5V8.98Z" />
                      </svg>
                    )}
                    {item.name === 'Instagram' && (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-accent-500 hover:text-white">
                        <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.4.4.6.2 1 .4 1.4.8.4.4.6.8.8 1.4.2.5.3 1.2.4 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.4 2.4-.2.6-.4 1-.8 1.4-.4.4-.8.6-1.4.8-.5.2-1.2.3-2.4.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.4-.4-.6-.2-1-.4-1.4-.8-.4-.4-.6-.8-.8-1.4-.2-.5-.3-1.2-.4-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.9.4-2.4.2-.6.4-1 .8-1.4.4-.4.8-.6 1.4-.8.5-.2 1.2-.3 2.4-.4C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.1 0-3.4 0-4.7.1-1 .1-1.6.2-2 .4-.5.2-.8.3-1 .6-.3.3-.5.5-.6 1-.2.4-.3 1-.4 2-.1 1.3-.1 1.6-.1 4.7s0 3.4.1 4.7c.1 1 .2 1.6.4 2 .2.5.3.8.6 1 .3.3.5.5 1 .6.4.2 1 .3 2 .4 1.3.1 1.6.1 4.7.1s3.4 0 4.7-.1c1-.1 1.6-.2 2-.4.5-.2.8-.3 1-.6.3-.3.5-.5.6-1 .2-.4.3-1 .4-2 .1-1.3.1-1.6.1-4.7s0-3.4-.1-4.7c-.1-1-.2-1.6-.4-2-.2-.5-.3-.8-.6-1-.3-.3-.5-.5-1-.6-.4-.2-1-.3-2-.4-1.3-.1-1.6-.1-4.7-.1Zm0 3.4a5.6 5.6 0 1 1 0 11.2 5.6 5.6 0 0 1 0-11.2Zm0 1.8a3.8 3.8 0 1 0 0 7.6 3.8 3.8 0 0 0 0-7.6Zm5.7-.9a1.3 1.3 0 1 1-2.6 0 1.3 1.3 0 0 1 2.6 0Z" />
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-gray-900 font-semibold text-sm mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-500 text-sm hover:text-primary-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-gray-900 font-semibold text-sm mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-500 text-sm hover:text-primary-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-gray-900 font-semibold text-sm mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-500 text-sm hover:text-primary-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-gray-900 font-semibold text-sm mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-start space-x-2">
                <span className="text-gray-500 text-sm font-semibold">Email:</span>
                <span className="text-gray-500 text-sm">EkpombangConsultingandTraining@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-500 text-sm font-semibold">Phone:</span>
                <span className="text-gray-500 text-sm">0408651487</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-gray-500 text-xs"
            >
              Copyrights © {currentYear} Ekpombang Consulting and Training. All Rights Reserved.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center space-x-4"
            >
              <a href="#" className="text-gray-500 text-xs hover:text-primary-500 transition-colors">
                Terms of Service
              </a>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <a href="#" className="text-gray-500 text-xs hover:text-primary-500 transition-colors">
                Privacy Policy
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
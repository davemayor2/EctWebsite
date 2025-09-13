'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import NextImage from 'next/image'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      if (currentY > lastScrollY && currentY > 80) {
        setIsHidden(true) // scrolling down
      } else {
        setIsHidden(false) // scrolling up
      }
      setLastScrollY(currentY)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const services = [
    { name: 'Auditing Services', href: '/services#auditing' },
    { name: 'Accounting Services', href: '/services#accounting' },
    { name: 'Financial Services', href: '/services#financial' },
    { name: 'Consultancy Services', href: '/services#consultancy' },
    { name: 'Tax and Payroll Services', href: '/services#tax-payroll' },
    { name: 'Marketing Services', href: '/services#marketing' },
    { name: 'Software Implementation and Training', href: '/services#software' },
    { name: 'Training in Professional Courses', href: '/services#training' },
  ]

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Services', href: '/services', hasDropdown: true },
    { name: 'Training Programs', href: '/training' },
    // { name: 'Resources', href: '/#resources' },
    // { name: 'Careers', href: '/#careers' },
  ]

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    if (href.startsWith('/#')) return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <>
      {/* Fixed Header Wrapper with slide animation */}
      <div className={`fixed top-0 left-0 right-0 z-50 transform transition-transform duration-300 ${isHidden ? '-translate-y-full' : 'translate-y-0'}`}>
      {/* Top Contact Bar */}
      <div className="bg-secondary-900 text-gray-300 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+237 694064887</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm">EkpombangConsultingandTraining@gmail.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              {/* Social Icons with links */}
              <div className="flex space-x-2">
                <Link aria-label="Facebook" href="https://facebook.com" target="_blank" className="w-8 h-8 border border-primary-500 flex items-center justify-center hover:bg-primary-500 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-primary-500 hover:text-white">
                    <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H7.9V12h2.6V9.8c0-2.6 1.5-4 3.8-4 1.1 0 2.3.2 2.3.2v2.6h-1.3c-1.3 0-1.7.8-1.7 1.6V12h2.9l-.5 2.9h-2.4v7A10 10 0 0 0 22 12Z" />
                  </svg>
                </Link>
                <Link aria-label="Twitter" href="https://twitter.com" target="_blank" className="w-8 h-8 border border-primary-500 flex items-center justify-center hover:bg-primary-500 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-primary-500 hover:text-white">
                    <path d="M19.6 7.5c.01.2.01.4.01.7 0 7-5.3 15-15 15-3 0-5.8-.9-8.1-2.5.4 0 .8.1 1.2.1 2.5 0 4.8-.8 6.6-2.3a5.3 5.3 0 0 1-5-3.7c.3.1.6.1 1 .1.4 0 .9-.1 1.3-.2a5.3 5.3 0 0 1-4.2-5.2v-.1c.7.4 1.5.7 2.3.7a5.3 5.3 0 0 1-1.6-7 15 15 0 0 0 10.9 5.5 6 6 0 0 1 .1-1.2 5.3 5.3 0 0 1 9.2-2.4 10.4 10.4 0 0 0 3.4-1.3 5.3 5.3 0 0 1-2.3 2.9 10.5 10.5 0 0 0 3-.8 11 11 0 0 1-2.6 2.7Z" />
                  </svg>
                </Link>
                <Link aria-label="LinkedIn" href="https://linkedin.com" target="_blank" className="w-8 h-8 border border-primary-500 flex items-center justify-center hover:bg-primary-500 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-primary-500 hover:text-white">
                    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 8.98h3.96V21H3V8.98Zm7.5 0h3.8v1.64h.06c.53-1 1.83-2.06 3.76-2.06 4.02 0 4.76 2.65 4.76 6.1V21h-3.96v-5.33c0-1.27-.02-2.9-1.77-2.9-1.78 0-2.05 1.38-2.05 2.8V21H10.5V8.98Z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
        <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0"
            >
              <Link href="/">
                <div className="relative w-32 h-12">
                  <NextImage
                    src="/ect-logo.png"
                    alt="EC&T Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Dropdown Container with extended hover area */}
                  <div
                    className="relative"
                    onMouseEnter={() => item.hasDropdown && setIsServicesDropdownOpen(true)}
                    onMouseLeave={() => item.hasDropdown && setIsServicesDropdownOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center space-x-1 px-3 py-2 text-lg font-medium transition-colors ${
                        isActive(item.href)
                          ? 'text-primary-500'
                          : 'text-gray-700 hover:text-primary-500'
                      }`}
                    >
                      <span>{item.name}</span>
                      {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                    </Link>
                    
                    {/* Invisible bridge to prevent gap */}
                    {item.hasDropdown && isServicesDropdownOpen && (
                      <div className="absolute top-full left-0 right-0 h-1 bg-transparent"></div>
                    )}
                    
                    {/* Services Dropdown */}
                    {item.hasDropdown && isServicesDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 w-80 bg-white shadow-lg border border-gray-200 z-50"
                      >
                        <div className="py-2">
                          {services.map((service, serviceIndex) => (
                            <Link
                              key={serviceIndex}
                              href={service.href}
                              className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                            >
                              <div className="text-sm font-medium">{service.name}</div>
                            </Link>
                          ))}
                          <div className="border-t border-gray-200 mt-2 pt-2">
                            <Link
                              href="/services"
                              className="block px-4 py-3 text-primary-600 hover:bg-primary-50 font-semibold transition-colors"
                            >
                              View All Services →
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact Button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="hidden lg:block"
            >
              <Link href="/contact" className="bg-primary-500 text-white px-8 py-4 text-lg font-semibold hover:bg-primary-600 transition-colors btn-hover">
                Contact Us
              </Link>
            </motion.div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-primary-500 focus:outline-none focus:text-primary-500"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                {navItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className={`block px-3 py-2 text-base font-medium ${
                        isActive(item.href)
                          ? 'text-primary-500 bg-primary-50'
                          : 'text-gray-700 hover:text-primary-500 hover:bg-gray-50'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    
                    {/* Mobile Services Dropdown */}
                    {item.hasDropdown && (
                      <div className="ml-4 space-y-1">
                        {services.map((service, serviceIndex) => (
                          <Link
                            key={serviceIndex}
                            href={service.href}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-primary-500 hover:bg-gray-50"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {service.name}
                          </Link>
                        ))}
                        <Link
                          href="/services"
                          className="block px-3 py-2 text-sm text-primary-600 font-semibold hover:bg-primary-50"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          View All Services →
                        </Link>
                      </div>
                    )}
                  </div>
                ))}
                <Link href="/contact" className="w-full mt-4 bg-primary-500 text-white px-6 py-3 text-lg font-semibold hover:bg-primary-600 transition-colors">
                  Contact Us
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </nav>
      </div>

      {/* Spacer to prevent layout jump when header is fixed */}
      <div className="h-36" />
    </>
  )
}

export default Navbar


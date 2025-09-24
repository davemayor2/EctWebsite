"use client"
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Check } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/about-us-hero-image.png" alt="About hero" fill className="object-cover object-top" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <h1 className="text-white text-4xl sm:text-5xl font-bold">
              About <span className="text-primary-500">Us</span>
            </h1>
            <p className="mt-4 text-white/90">
              From auditing and financial advisory to professional training in ACCA, PMP, and more — EC&T delivers solutions that drive growth and lasting impact.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left image collage placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="h-60 relative overflow-hidden">
              <Image src="/who we are/business-people-discussion.jpg" alt="Business meeting" fill className="object-cover" />
            </div>
            <div className="h-60 relative overflow-hidden">
              <Image src="/who we are/box2.png" alt="Team discussion" fill className="object-cover" />
            </div>
            <div className="col-span-2 h-60 relative overflow-hidden">
              <Image src="/who we are/big box.png" alt="Professional team" fill className="object-cover" />
            </div>
          </motion.div>

          {/* Right content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">Who <span className="text-primary-500">We Are</span></h2>
            <p className="text-gray-600">
            Ekpombang Consulting and Training (EC&T)Limited comprises of trusted consultants with expertise knowledge in the rendering of business consulting and training services. We think globally and act locally with a sound understanding of the client’s business to provide value-adding business solutions to each of our clients. Consider EC&Tas a strategic partner that understands where you are coming from, appreciates where you are now, and recognises where you are going to. Our deep understanding of key markets has established a practice that has become the established standard for assessing our clients. Our consultants have been rendering for over a decade.
            </p>
            <ul className="space-y-3">
              {[
                'Over 15 years powering homes, industries, and innovations.',
                'Fully licensed and certified (NEC, IEC, OSHA compliant).',
                'Trusted by hundreds of clients across sectors.',
                'Qualified. Experienced. Reliable.',
              ].map((t) => (
                <li key={t} className="flex items-start gap-2 text-gray-700">
                  <Check className="w-5 h-5 text-primary-500 mt-0.5" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            
            <Link href="/services" className="inline-block bg-primary-500 text-white px-6 py-3 font-semibold btn-hover">Learn More</Link>
          </motion.div>
        </div>
      </section>

      {/* Purpose & Values */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h3 className="text-2xl md:text-3xl font-semibold text-center">
            Built on <span className="text-primary-500">Purpose</span>, Driven by <span className="text-primary-500">Values</span>
          </h3>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x border-t border-b">
            {[
              { title: 'Our Mission', desc: 'Our mission is to build a great firm that attracts, develops, and retains exceptional people. We are committed to delivering demand-driven, cost-effective consulting and cutting-edge training solutions, while leveraging our network and expertise to strengthen client capabilities and drive significant, sustainable improvements for our SME clients.”' },
              { title: 'Our Vision', desc: 'EC&T will be the premier partner for small and medium-sized businesses, equipping them with the skills and strategies to innovate, grow, and achieve their fullest potential in a competitive market. We will achieve client satisfaction by delivering unequalled value to our clients. Long-term partnerships with clients will be integral to meeting our business objectives. We will be dynamic in meeting the evolving needs of our clients and employees. Our culture will foster diversity, innovation, and growth. People will be eager and proud to be associated with EC&T Consultants.' },
              { 
                title: 'Our Values', 
                desc: 'EC&T\'s core values that represent an assurance of quality, professionalism, and reliability are:',
                values: [
                  'Client-Centricity: Placing client interests and needs at the forefront of every interaction and solution.',
                  'Integrity & Ethics: Upholding the highest professional and ethical standards in all dealings.',
                  'Innovation: Continuously seeking and implementing new ideas and best practices in management and training.',
                  'Expertise: Cultivating a team of skilled professionals to deliver high-quality, data-driven insights and training.',
                  'Collaboration & Partnership: Building enduring relationships with clients and fostering a collaborative internal environment.',
                  'Sustainability: Helping clients build capabilities for sustained long-term improvement and success.',
                  'Accountability: Taking responsibility for client outcomes and delivering on commitments.'
                ]
              },
            ].map((item) => (
              <div key={item.title} className="p-6">
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">{item.desc}</p>
                {item.values && (
                  <ul className="text-gray-600 text-sm leading-relaxed space-y-2">
                    {item.values.map((value, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary-500 mr-2 mt-1">•</span>
                        <span>{value}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h3 className="text-2xl md:text-3xl font-semibold">Meet the Experts Behind <span className="text-primary-500">EC&T</span></h3>
            <p className="text-gray-600 max-w-xl">
              Our team of consultants and professionals brings together deep expertise dedicated to helping you and your organization grow.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Nkongho Ekpombang FCCA', role: 'Co-founder, CEO and Lead Consultant', show: true },
              { name: 'Grace Lovelace', role: 'Head of Training & Development', show: false },
              { name: 'David Olsen', role: 'Senior Financial Consultant', show: false },
              { name: 'Ifeoma Kadiri', role: 'Marketing & Strategy Consultant', show: false },
            ].filter(m => m.show).map((m) => (
              <div key={m.name} className="border bg-white">
                <div className="h-56 relative overflow-hidden">
                  <Image 
                    src="/images/NkonghoProfile.jpg" 
                    alt={m.name} 
                    fill 
                    className="object-cover" 
                  />
                </div>
                <div className="p-4">
                  <p className="font-semibold">{m.name}</p>
                  <p className="text-gray-600 text-sm">{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Dark Teal Background & Regular Text */}
      <section className="bg-teal-900 relative overflow-hidden">
        {/* Abstract background shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-teal-800/30"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-teal-700/20"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-teal-800/40"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-white leading-tight">
              Want to work with our <span className="text-primary-300">experts</span>?
            </h2>
            
            <div className="pt-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-primary-500 text-white px-8 py-4 text-lg font-semibold hover:bg-primary-600 transition-all duration-300 btn-hover"
              >
                Contact Us Today
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
"use client"
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

type ServiceItem = {
  title: string
  description: string
  imageAlt: string
  imagePath: string
}

const services: ServiceItem[] = [
  {
    title: 'Auditing Services',
    description: `At Ekpombang Consulting and Training (EC&T), our Audit and Assurance services are dedicated to enhancing the reliability and integrity of your financial information. We provide comprehensive audit and assurance solutions that help you meet regulatory requirements, improve financial reporting, and build stakeholder confidence.

Our Audit and Assurance Services Include:

• Financial Statement Audit
  – Annual Financial Audits: Conduct thorough audits of your financial statements to ensure accuracy and compliance with accounting standards.
  – Statutory Audits: Perform statutory audits as required by regulatory authorities to meet compliance obligations.
  – Review and Compilation Services: Provide review and compilation services to offer varying levels of assurance based on your needs.

• Internal Audit
  – Internal Control Assessment: Evaluate and strengthen your internal controls to mitigate risks and enhance operational efficiency.
  – Risk Management Audits: Identify, assess, and manage risks to protect your organization's assets and reputation.
  – Operational Audits: Conduct audits to improve the effectiveness and efficiency of your business operations and processes.

• Assurance Services
  – Financial Reporting Advisory: Assist in improving the quality and transparency of your financial reporting.
  – Compliance Reviews: Conduct reviews to ensure compliance with internal policies and external regulations.`,
    imageAlt: 'Auditing discussion',
    imagePath: '/our-services-IMGS/Auditing Services.png',
  },
  {
    title: 'Accounting Services',
    description: `At EC&T, we provide expert accounting and bookkeeping services designed to help businesses manage their financial records with precision and efficiency. Our dedicated team of professionals ensures that your financial operations run smoothly, allowing you to focus on growing your business.

Our Accounting and Bookkeeping Services Include:

• Financial Statement Preparation
  – Monthly, Quarterly, and Annual Statements: Preparation of comprehensive financial statements, including balance sheets, income statements, cash flow statements and accompanying notes.
  – Custom Reports: Generation of customized financial reports tailored to your specific business needs and goals.
  – Management Reporting: Providing insightful management reports to help you make informed business decisions.

• Bookkeeping Services
  – Daily Transaction Recording: Accurate recording of all financial transactions, including sales, purchases, receipts, and payments.
  – Bank Reconciliation: Regular reconciliation of bank statements to ensure consistency and accuracy in your financial records.
  – Accounts Receivable and Payable Management: Efficient management of your receivables and payables to optimize cash flow.`,
    imageAlt: 'Accounting workspace',
    imagePath: '/our-services-IMGS/Accounting Services.png',
  },
  {
    title: 'Financial Services',
    description: `At EC&T, we offer specialized Advisory services designed to support Chief Financial Officers and finance departments in driving financial strategy, optimizing operations, and achieving organizational success. Our team of seasoned experts provides comprehensive guidance across various financial domains, ensuring your business is well-equipped to navigate complex financial landscapes.

Our Financial Advisory services Include:

• Financial Strategy and Planning
  – Strategic Financial Planning: Develop long-term financial plans aligned with business goals, including capital allocation and scenario planning.
  – Budgeting and Forecasting: Create detailed budgets, rolling forecasts, and conduct variance analysis to guide decision-making.

• Financial Performance Management
  – Performance Measurement: Implement KPIs and dashboards to monitor financial and operational performance.
  – Cost Management: Identify cost-saving opportunities and analyse profitability to support strategic decisions.

• Financial Operations and Processes
  – Process Optimization: Streamline financial processes to enhance efficiency and reduce costs through automation and digitalization.
  – Internal Controls and Compliance: Strengthen internal controls, and adhere to financial regulations.

• Treasury and Working Capital Management
  – Treasury Management: Develop cash flow forecasts, manage investments, and optimize debt to maintain liquidity.
  – Working Capital Optimization: Improve receivables, payables, and inventory management to enhance cash flow.

• Risk Management and Mitigation
  – Enterprise Risk Management (ERM): Identify and mitigate financial and operational risks with comprehensive risk management frameworks.
  – Financial Risk Management: Manage credit, market, and liquidity risks through robust policies and strategies.

• Mergers, Acquisitions, and Divestitures
  – M&A Strategy: Identify acquisition targets, conduct due diligence, and provide valuation services.
  – Post-Merger Integration: Develop integration plans to realize synergies and ensure smooth transitions.

• CFO Transition and Interim Management
  – CFO Transition Services: Support smooth transitions of new CFOs with on boarding and interim CFO services.
  – Succession Planning: Develop succession plans to ensure continuity in financial leadership.

• Strategic Advisory
  – Board and Stakeholder Advisory: Prepare and present financial reports and strategic insights to the board of directors and stakeholders.
  – Governance Advisory: Enhance transparency and accountability with corporate governance best practices.`,
    imageAlt: 'Financial planning meeting',
    imagePath: '/our-services-IMGS/Financial Services.png',
  },
  {
    title: 'Consultancy Services',
    description: `Our Services include:
– Strategic Planning: Develop a clear vision and strategy for your business.
– Operational Improvement: Optimize business processes and operations to increase efficiency.
– Change Management: Navigate organizational change and ensure a smooth transition.
– Performance Management: Develop and implement performance metrics to drive business success.
– Leadership Development: Build effective leadership teams and develop leadership skills.

Benefits of Our Consultancy Services
– Improved Efficiency: Streamline processes and reduce waste.
– Increased Profitability: Identify opportunities to increase revenue and reduce costs.
– Enhanced Decision-Making: Make informed decisions with data-driven insights.
– Better Risk Management: Identify and mitigate risks to ensure business continuity.`,
    imageAlt: 'Consultancy collaboration',
    imagePath: '/our-services-IMGS/Consultancy Services.png',
  },
  {
    title: 'Tax and Payroll Services',
    description: `At EC&T, our tax and payroll services are designed to help you manage your tax and payroll obligations efficiently and strategically. Whether you're a sole proprietor or a business, our expert team provides comprehensive tax and payroll solutions to ensure compliance, optimize savings, and reduce liabilities.

Our Tax Services Include:

• Tax Preparation, Planning and Strategy
  – Tax Compliance: Ensuring compliance with all tax regulations and timely filing of tax returns.
  – Tax Planning: Strategic tax planning to minimize liabilities and maximize savings.
  – Audit Support: Providing support during tax audits, including preparation of required documentation and representation.
  – Investment Tax Optimization: Provide advice on tax-efficient investment strategies and structures.
  – Tax Credit and Incentive Utilization: Identify and leverage available tax credits and incentives to reduce your tax burden.

• Corporate Tax Compliance and Preparation
  – Handle preparation and filing of corporate tax returns.

• International Tax Services
  – Cross-Border Tax Planning: Advise on international tax issues, including transfer pricing, tax treaties, and foreign tax credits.
  – Expatriate Tax Services: Provide tax solutions for expatriates and businesses with international operations.
  – Global Tax Compliance: Ensure compliance with global tax regulations and reporting requirements.

• Tax Controversy and Dispute Resolution
  – Audit Support: Assist with tax audits, including preparation of documentation and representation before tax authorities.
  – Dispute Resolution: Provide support in resolving tax disputes and negotiating settlements with tax agencies.
  – Penalties and Appeals: Help manage and appeal against tax penalties and other enforcement actions.

• Estate and Inheritance Tax Planning
  – Estate Planning: Develop strategies to manage estate taxes and ensure efficient transfer of assets to heirs.
  – Trusts and Estates: Advise on the establishment and management of trusts to achieve tax benefits and meet personal objectives.
  – Inheritance Tax Compliance: Ensure compliance with inheritance tax laws and regulations.

• Indirect Taxes
  – Value Added Tax (VAT): Manage VAT compliance, including registration, filing, and audits.
  – Excise and Other Indirect Taxes: Provide guidance on excise taxes and other indirect tax obligations.

Our Payroll Services Include:
– Payroll Processing: Timely and accurate processing of employee payroll, ensuring compliance with all regulatory requirements.
– Tax Filing: Preparation and filing of payroll taxes.
– Employee Records Management: Maintaining up-to-date records of employee compensation and benefits.`,
    imageAlt: 'Tax and payroll discussion',
    imagePath: '/our-services-IMGS/Tax and Payroll Services.png',
  },
  {
    title: 'Marketing Services',
    description: `At EC&T, we help businesses thrive in the digital landscape and also in creating traditional marketing strategies. Our expert marketing services are designed to drive growth, boost brand awareness, and deliver measurable results.

Our Services

• Business Plan Creation
  – Develop a comprehensive business plan that outlines your goals, target market, and marketing strategies.
  – Identify your unique selling proposition (USP) and create a roadmap for success.

• Advert Planning
  – Create effective print, radio, and television ads that reach your target audience.
  – Develop a media plan that maximizes your advertising budget.

• Event Planning
  – Plan and execute successful events that showcase your brand and products.
  – Create engaging experiences that build brand awareness and drive sales.

• Digital Services
  – Search Engine Optimization (SEO): Improve your website's visibility and ranking on search engines.
  – Pay-Per-Click (PPC) Advertising: Reach your target audience and drive conversions with targeted ads.
  – Social Media Marketing: Build your brand and engage with your audience on social media platforms.
  – Content Marketing: Create high-quality, engaging content that resonates with your audience.
  – Email Marketing: Nurture leads and drive conversions with targeted email campaigns.

Get Started
Ready to take your marketing to the next level? Contact us today to learn more about our services and how we can help your business thrive.`,
    imageAlt: 'Marketing workshop',
    imagePath: '/our-services-IMGS/Marketing Services.png',
  },
  {
    title: 'Software Implementation and Training',
    description: `Software Implementation Services
– Needs Assessment: Identify your business needs and recommend suitable accounting software solutions.
– Implementation Planning: Develop a comprehensive implementation plan to minimize disruption and ensure a smooth transition.
– Configuration and Customization: Configure and customize accounting software to meet your specific business requirements.

Software Training Services
– Customized Training Programs: Tailored training sessions to meet your business needs and ensure proficiency in accounting software.
– User Adoption: Ensure successful adoption of new accounting systems, empowering your team to work efficiently.
– Ongoing Support: Provide ongoing support and maintenance to ensure continued success and minimize downtime.`,
    imageAlt: 'Software implementation team',
    imagePath: '/our-services-IMGS/Software Implementation and Training.png',
  },
  {
    title: 'Training in Professional Courses (ACCA, PMP, etc.)',
    description: `At EC&T, we provide comprehensive professional training programs designed to enhance your career prospects and professional expertise. Our expert instructors deliver high-quality training in internationally recognized certifications that open doors to global career opportunities.

Our Professional Training Programs Include:

• ACCA (Association of Chartered Certified Accountants)
  – Complete ACCA Qualification: Comprehensive training covering all 13 ACCA papers from Applied Knowledge to Strategic Professional level.
  – Exam Preparation: Intensive exam-focused training with practice tests, mock exams, and revision sessions.
  – Practical Application: Real-world case studies and practical exercises to bridge theory and practice.
  – Career Guidance: Professional development support and career counseling for ACCA students.

• PMP (Project Management Professional)
  – PMP Certification Training: Complete preparation for PMI's Project Management Professional certification.
  – PMBOK Guide Mastery: In-depth coverage of the Project Management Body of Knowledge (PMBOK) guide.
  – Practical Project Management: Hands-on training with real project scenarios and case studies.
  – Exam Strategy: Proven techniques and strategies for passing the PMP exam on the first attempt.

• Other Professional Certifications
  – CIMA (Chartered Institute of Management Accountants): Training for management accounting and business strategy.
  – CFA (Chartered Financial Analyst): Preparation for investment analysis and portfolio management.
  – CIA (Certified Internal Auditor): Training for internal auditing and risk management.
  – CPA (Certified Public Accountant): Comprehensive accounting and auditing certification training.

Training Benefits:
– Expert Instructors: Learn from certified professionals with extensive industry experience.
– Flexible Learning Options: Choose from classroom, online, or hybrid learning formats.
– Comprehensive Study Materials: Access to official study guides, practice questions, and mock exams.
– Career Advancement: Enhance your professional credentials and unlock new career opportunities.
– Global Recognition: Earn internationally recognized certifications valued by employers worldwide.
– Ongoing Support: Continuous guidance and support throughout your certification journey.`,
    imageAlt: 'Professional training session',
    imagePath: '/our-services-IMGS/Training in Professional Courses.png',
  },
]

export default function ServicesPage() {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl font-bold"
            >
              Our <span className="text-primary-500">Services</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-gray-600 max-w-3xl mx-auto"
            >
              At Ekpombang Consulting and Training we provide tailored solutions that bridge the gap between learning and application. Whether you are an individual seeking growth or an organization driving impact, we are here to support your journey.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="space-y-14">
            {services.map((svc, idx) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.03 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center border-b pb-10"
              >
                {/* Left: Icon + Title + Description */}
                <div className="md:col-span-7">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full border-2 border-primary-400 flex items-center justify-center shrink-0">
                      <div className="w-5 h-5 rounded-sm bg-primary-400"></div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold leading-6">{svc.title}</h3>
                      <div className="mt-3 text-gray-600 text-sm leading-relaxed md:max-w-xl">
                        {svc.title === 'Auditing Services' ? (
                          <div className="space-y-3">
                            <p>At Ekpombang Consulting and Training (EC&T), our Audit and Assurance services are dedicated to enhancing the reliability and integrity of your financial information. We provide comprehensive audit and assurance solutions that help you meet regulatory requirements, improve financial reporting, and build stakeholder confidence.</p>
                            
                            <p className="font-semibold">Our Audit and Assurance Services Include:</p>
                            
                            <div className="space-y-2">
                              <div>
                                <p className="font-medium">• Financial Statement Audit</p>
                                <ul className="ml-4 space-y-1 mt-1">
                                  <li>– Annual Financial Audits: Conduct thorough audits of your financial statements to ensure accuracy and compliance with accounting standards.</li>
                                  <li>– Statutory Audits: Perform statutory audits as required by regulatory authorities to meet compliance obligations.</li>
                                  <li>– Review and Compilation Services: Provide review and compilation services to offer varying levels of assurance based on your needs.</li>
                                </ul>
                              </div>
                              
                              <div>
                                <p className="font-medium">• Internal Audit</p>
                                <ul className="ml-4 space-y-1 mt-1">
                                  <li>– Internal Control Assessment: Evaluate and strengthen your internal controls to mitigate risks and enhance operational efficiency.</li>
                                  <li>– Risk Management Audits: Identify, assess, and manage risks to protect your organization's assets and reputation.</li>
                                  <li>– Operational Audits: Conduct audits to improve the effectiveness and efficiency of your business operations and processes.</li>
                                </ul>
                              </div>
                              
                              <div>
                                <p className="font-medium">• Assurance Services</p>
                                <ul className="ml-4 space-y-1 mt-1">
                                  <li>– Financial Reporting Advisory: Assist in improving the quality and transparency of your financial reporting.</li>
                                  <li>– Compliance Reviews: Conduct reviews to ensure compliance with internal policies and external regulations.</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        ) : svc.title === 'Accounting Services' ? (
                          <div className="space-y-3">
                            <p>At EC&T, we provide expert accounting and bookkeeping services designed to help businesses manage their financial records with precision and efficiency. Our dedicated team of professionals ensures that your financial operations run smoothly, allowing you to focus on growing your business.</p>
                            
                            <p className="font-semibold">Our Accounting and Bookkeeping Services Include:</p>
                            
                            <div className="space-y-2">
                              <div>
                                <p className="font-medium">• Financial Statement Preparation</p>
                                <ul className="ml-4 space-y-1 mt-1">
                                  <li>– Monthly, Quarterly, and Annual Statements: Preparation of comprehensive financial statements, including balance sheets, income statements, cash flow statements and accompanying notes.</li>
                                  <li>– Custom Reports: Generation of customized financial reports tailored to your specific business needs and goals.</li>
                                  <li>– Management Reporting: Providing insightful management reports to help you make informed business decisions.</li>
                                </ul>
                              </div>
                              
                              <div>
                                <p className="font-medium">• Bookkeeping Services</p>
                                <ul className="ml-4 space-y-1 mt-1">
                                  <li>– Daily Transaction Recording: Accurate recording of all financial transactions, including sales, purchases, receipts, and payments.</li>
                                  <li>– Bank Reconciliation: Regular reconciliation of bank statements to ensure consistency and accuracy in your financial records.</li>
                                  <li>– Accounts Receivable and Payable Management: Efficient management of your receivables and payables to optimize cash flow.</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        ) : svc.title === 'Tax and Payroll Services' ? (
                          <div className="space-y-3">
                            <p>At EC&T, our tax and payroll services are designed to help you manage your tax and payroll obligations efficiently and strategically. Whether you're a sole proprietor or a business, our expert team provides comprehensive tax and payroll solutions to ensure compliance, optimize savings, and reduce liabilities.</p>
                            
                            <p className="font-semibold">Our Tax Services Include:</p>
                            
                            <div className="space-y-2">
                              <div>
                                <p className="font-medium">• Tax Preparation, Planning and Strategy</p>
                                <ul className="ml-4 space-y-1 mt-1">
                                  <li>– Tax Compliance: Ensuring compliance with all tax regulations and timely filing of tax returns.</li>
                                  <li>– Tax Planning: Strategic tax planning to minimize liabilities and maximize savings.</li>
                                  <li>– Audit Support: Providing support during tax audits, including preparation of required documentation and representation.</li>
                                  <li>– Investment Tax Optimization: Provide advice on tax-efficient investment strategies and structures.</li>
                                  <li>– Tax Credit and Incentive Utilization: Identify and leverage available tax credits and incentives to reduce your tax burden.</li>
                                </ul>
                              </div>
                              
                              <div>
                                <p className="font-medium">• Corporate Tax Compliance and Preparation</p>
                                <ul className="ml-4 space-y-1 mt-1">
                                  <li>– Handle preparation and filing of corporate tax returns.</li>
                                </ul>
                              </div>
                              
                              <div>
                                <p className="font-medium">• International Tax Services</p>
                                <ul className="ml-4 space-y-1 mt-1">
                                  <li>– Cross-Border Tax Planning: Advise on international tax issues, including transfer pricing, tax treaties, and foreign tax credits.</li>
                                  <li>– Expatriate Tax Services: Provide tax solutions for expatriates and businesses with international operations.</li>
                                  <li>– Global Tax Compliance: Ensure compliance with global tax regulations and reporting requirements.</li>
                                </ul>
                              </div>
                              
                              <div>
                                <p className="font-medium">• Tax Controversy and Dispute Resolution</p>
                                <ul className="ml-4 space-y-1 mt-1">
                                  <li>– Audit Support: Assist with tax audits, including preparation of documentation and representation before tax authorities.</li>
                                  <li>– Dispute Resolution: Provide support in resolving tax disputes and negotiating settlements with tax agencies.</li>
                                  <li>– Penalties and Appeals: Help manage and appeal against tax penalties and other enforcement actions.</li>
                                </ul>
                              </div>
                              
                              <div>
                                <p className="font-medium">• Estate and Inheritance Tax Planning</p>
                                <ul className="ml-4 space-y-1 mt-1">
                                  <li>– Estate Planning: Develop strategies to manage estate taxes and ensure efficient transfer of assets to heirs.</li>
                                  <li>– Trusts and Estates: Advise on the establishment and management of trusts to achieve tax benefits and meet personal objectives.</li>
                                  <li>– Inheritance Tax Compliance: Ensure compliance with inheritance tax laws and regulations.</li>
                                </ul>
                              </div>
                              
                              <div>
                                <p className="font-medium">• Indirect Taxes</p>
                                <ul className="ml-4 space-y-1 mt-1">
                                  <li>– Value Added Tax (VAT): Manage VAT compliance, including registration, filing, and audits.</li>
                                  <li>– Excise and Other Indirect Taxes: Provide guidance on excise taxes and other indirect tax obligations.</li>
                                </ul>
                              </div>
                            </div>
                            
                            <p className="font-semibold">Our Payroll Services Include:</p>
                            
                            <div className="space-y-2">
                              <ul className="ml-4 space-y-1">
                                <li>– Payroll Processing: Timely and accurate processing of employee payroll, ensuring compliance with all regulatory requirements.</li>
                                <li>– Tax Filing: Preparation and filing of payroll taxes.</li>
                                <li>– Employee Records Management: Maintaining up-to-date records of employee compensation and benefits.</li>
                              </ul>
                            </div>
                          </div>
                        ) : svc.title === 'Financial Services' ? (
                          <div className="space-y-3">
                            <p>At EC&T, we offer specialized Advisory services designed to support Chief Financial Officers and finance departments in driving financial strategy, optimizing operations, and achieving organizational success. Our team of seasoned experts provides comprehensive guidance across various financial domains, ensuring your business is well-equipped to navigate complex financial landscapes.</p>
                            
                            <p className="font-semibold">Our Financial Advisory services Include:</p>
                            
                            <div className="space-y-2">
                              <div>
                                <p className="font-medium">• Financial Strategy and Planning</p>
                                <ul className="ml-4 space-y-1 mt-1">
                                  <li>– Strategic Financial Planning: Develop long-term financial plans aligned with business goals, including capital allocation and scenario planning.</li>
                                  <li>– Budgeting and Forecasting: Create detailed budgets, rolling forecasts, and conduct variance analysis to guide decision-making.</li>
                                </ul>
                              </div>
                              
                              <div>
                                <p className="font-medium">• Financial Performance Management</p>
                                <ul className="ml-4 space-y-1 mt-1">
                                  <li>– Performance Measurement: Implement KPIs and dashboards to monitor financial and operational performance.</li>
                                  <li>– Cost Management: Identify cost-saving opportunities and analyse profitability to support strategic decisions.</li>
                                </ul>
                              </div>
                              
                              <div>
                                <p className="font-medium">• Financial Operations and Processes</p>
                                <ul className="ml-4 space-y-1 mt-1">
                                  <li>– Process Optimization: Streamline financial processes to enhance efficiency and reduce costs through automation and digitalization.</li>
                                  <li>– Internal Controls and Compliance: Strengthen internal controls, and adhere to financial regulations.</li>
                                </ul>
                              </div>
                              
                              <div>
                                <p className="font-medium">• Treasury and Working Capital Management</p>
                                <ul className="ml-4 space-y-1 mt-1">
                                  <li>– Treasury Management: Develop cash flow forecasts, manage investments, and optimize debt to maintain liquidity.</li>
                                  <li>– Working Capital Optimization: Improve receivables, payables, and inventory management to enhance cash flow.</li>
                                </ul>
                              </div>
                              
                              <div>
                                <p className="font-medium">• Risk Management and Mitigation</p>
                                <ul className="ml-4 space-y-1 mt-1">
                                  <li>– Enterprise Risk Management (ERM): Identify and mitigate financial and operational risks with comprehensive risk management frameworks.</li>
                                  <li>– Financial Risk Management: Manage credit, market, and liquidity risks through robust policies and strategies.</li>
                                </ul>
                              </div>
                              
                              <div>
                                <p className="font-medium">• Mergers, Acquisitions, and Divestitures</p>
                                <ul className="ml-4 space-y-1 mt-1">
                                  <li>– M&A Strategy: Identify acquisition targets, conduct due diligence, and provide valuation services.</li>
                                  <li>– Post-Merger Integration: Develop integration plans to realize synergies and ensure smooth transitions.</li>
                                </ul>
                              </div>
                              
                              <div>
                                <p className="font-medium">• CFO Transition and Interim Management</p>
                                <ul className="ml-4 space-y-1 mt-1">
                                  <li>– CFO Transition Services: Support smooth transitions of new CFOs with on boarding and interim CFO services.</li>
                                  <li>– Succession Planning: Develop succession plans to ensure continuity in financial leadership.</li>
                                </ul>
                              </div>
                              
                              <div>
                                <p className="font-medium">• Strategic Advisory</p>
                                <ul className="ml-4 space-y-1 mt-1">
                                  <li>– Board and Stakeholder Advisory: Prepare and present financial reports and strategic insights to the board of directors and stakeholders.</li>
                                  <li>– Governance Advisory: Enhance transparency and accountability with corporate governance best practices.</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        ) : svc.title === 'Consultancy Services' ? (
                          <div className="space-y-3">
                            <p className="font-semibold">Our Services include:</p>
                            
                            <div className="space-y-2">
                              <ul className="ml-4 space-y-1">
                                <li>– Strategic Planning: Develop a clear vision and strategy for your business.</li>
                                <li>– Operational Improvement: Optimize business processes and operations to increase efficiency.</li>
                                <li>– Change Management: Navigate organizational change and ensure a smooth transition.</li>
                                <li>– Performance Management: Develop and implement performance metrics to drive business success.</li>
                                <li>– Leadership Development: Build effective leadership teams and develop leadership skills.</li>
                              </ul>
                            </div>
                            
                            <p className="font-semibold">Benefits of Our Consultancy Services</p>
                            
                            <div className="space-y-2">
                              <ul className="ml-4 space-y-1">
                                <li>– Improved Efficiency: Streamline processes and reduce waste.</li>
                                <li>– Increased Profitability: Identify opportunities to increase revenue and reduce costs.</li>
                                <li>– Enhanced Decision-Making: Make informed decisions with data-driven insights.</li>
                                <li>– Better Risk Management: Identify and mitigate risks to ensure business continuity.</li>
                              </ul>
                            </div>
                          </div>
                        ) : svc.title === 'Marketing Services' ? (
                          <div className="space-y-3">
                            <p>At EC&T, we help businesses thrive in the digital landscape and also in creating traditional marketing strategies. Our expert marketing services are designed to drive growth, boost brand awareness, and deliver measurable results.</p>
                            
                            <p className="font-semibold">Our Services</p>
                            
                            <div className="space-y-2">
                              <div>
                                <p className="font-medium">• Business Plan Creation</p>
                                <ul className="ml-4 space-y-1 mt-1">
                                  <li>– Develop a comprehensive business plan that outlines your goals, target market, and marketing strategies.</li>
                                  <li>– Identify your unique selling proposition (USP) and create a roadmap for success.</li>
                                </ul>
                              </div>
                              
                              <div>
                                <p className="font-medium">• Advert Planning</p>
                                <ul className="ml-4 space-y-1 mt-1">
                                  <li>– Create effective print, radio, and television ads that reach your target audience.</li>
                                  <li>– Develop a media plan that maximizes your advertising budget.</li>
                                </ul>
                              </div>
                              
                              <div>
                                <p className="font-medium">• Event Planning</p>
                                <ul className="ml-4 space-y-1 mt-1">
                                  <li>– Plan and execute successful events that showcase your brand and products.</li>
                                  <li>– Create engaging experiences that build brand awareness and drive sales.</li>
                                </ul>
                              </div>
                              
                              <div>
                                <p className="font-medium">• Digital Services</p>
                                <ul className="ml-4 space-y-1 mt-1">
                                  <li>– Search Engine Optimization (SEO): Improve your website's visibility and ranking on search engines.</li>
                                  <li>– Pay-Per-Click (PPC) Advertising: Reach your target audience and drive conversions with targeted ads.</li>
                                  <li>– Social Media Marketing: Build your brand and engage with your audience on social media platforms.</li>
                                  <li>– Content Marketing: Create high-quality, engaging content that resonates with your audience.</li>
                                  <li>– Email Marketing: Nurture leads and drive conversions with targeted email campaigns.</li>
                                </ul>
                              </div>
                            </div>
                            
                            <p className="font-semibold">Get Started</p>
                            <p>Ready to take your marketing to the next level? Contact us today to learn more about our services and how we can help your business thrive.</p>
                          </div>
                        ) : svc.title === 'Software Implementation and Training' ? (
                          <div className="space-y-3">
                            <div className="space-y-2">
                              <div>
                                <p className="font-medium">• Software Implementation Services</p>
                                <ul className="ml-4 space-y-1 mt-1">
                                  <li>– Needs Assessment: Identify your business needs and recommend suitable accounting software solutions.</li>
                                  <li>– Implementation Planning: Develop a comprehensive implementation plan to minimize disruption and ensure a smooth transition.</li>
                                  <li>– Configuration and Customization: Configure and customize accounting software to meet your specific business requirements.</li>
                                </ul>
                              </div>
                              
                              <div>
                                <p className="font-medium">• Software Training Services</p>
                                <ul className="ml-4 space-y-1 mt-1">
                                  <li>– Customized Training Programs: Tailored training sessions to meet your business needs and ensure proficiency in accounting software.</li>
                                  <li>– User Adoption: Ensure successful adoption of new accounting systems, empowering your team to work efficiently.</li>
                                  <li>– Ongoing Support: Provide ongoing support and maintenance to ensure continued success and minimize downtime.</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        ) : svc.title === 'Training in Professional Courses (ACCA, PMP, etc.)' ? (
                          <div className="space-y-3">
                            <p>At EC&T, we provide comprehensive professional training programs designed to enhance your career prospects and professional expertise. Our expert instructors deliver high-quality training in internationally recognized certifications that open doors to global career opportunities.</p>
                            
                            <p className="font-semibold">Our Professional Training Programs Include:</p>
                            
                            <div className="space-y-2">
                              <div>
                                <p className="font-medium">• ACCA (Association of Chartered Certified Accountants)</p>
                                <ul className="ml-4 space-y-1 mt-1">
                                  <li>– Complete ACCA Qualification: Comprehensive training covering all 13 ACCA papers from Applied Knowledge to Strategic Professional level.</li>
                                  <li>– Exam Preparation: Intensive exam-focused training with practice tests, mock exams, and revision sessions.</li>
                                  <li>– Practical Application: Real-world case studies and practical exercises to bridge theory and practice.</li>
                                  <li>– Career Guidance: Professional development support and career counseling for ACCA students.</li>
                                </ul>
                              </div>
                              
                              <div>
                                <p className="font-medium">• PMP (Project Management Professional)</p>
                                <ul className="ml-4 space-y-1 mt-1">
                                  <li>– PMP Certification Training: Complete preparation for PMI's Project Management Professional certification.</li>
                                  <li>– PMBOK Guide Mastery: In-depth coverage of the Project Management Body of Knowledge (PMBOK) guide.</li>
                                  <li>– Practical Project Management: Hands-on training with real project scenarios and case studies.</li>
                                  <li>– Exam Strategy: Proven techniques and strategies for passing the PMP exam on the first attempt.</li>
                                </ul>
                              </div>
                              
                              <div>
                                <p className="font-medium">• Other Professional Certifications</p>
                                <ul className="ml-4 space-y-1 mt-1">
                                  <li>– CIMA (Chartered Institute of Management Accountants): Training for management accounting and business strategy.</li>
                                  <li>– CFA (Chartered Financial Analyst): Preparation for investment analysis and portfolio management.</li>
                                  <li>– CIA (Certified Internal Auditor): Training for internal auditing and risk management.</li>
                                  <li>– CPA (Certified Public Accountant): Comprehensive accounting and auditing certification training.</li>
                                </ul>
                              </div>
                            </div>
                            
                            <p className="font-semibold">Training Benefits:</p>
                            
                            <div className="space-y-2">
                              <ul className="ml-4 space-y-1">
                                <li>– Expert Instructors: Learn from certified professionals with extensive industry experience.</li>
                                <li>– Flexible Learning Options: Choose from classroom, online, or hybrid learning formats.</li>
                                <li>– Comprehensive Study Materials: Access to official study guides, practice questions, and mock exams.</li>
                                <li>– Career Advancement: Enhance your professional credentials and unlock new career opportunities.</li>
                                <li>– Global Recognition: Earn internationally recognized certifications valued by employers worldwide.</li>
                                <li>– Ongoing Support: Continuous guidance and support throughout your certification journey.</li>
                              </ul>
                            </div>
                          </div>
                        ) : (
                          <p>{svc.description}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Image */}
                <div className="md:col-span-5">
                  <div className="relative w-full h-56 md:h-60 overflow-hidden">
                    <Image
                      src={svc.imagePath}
                      alt={svc.imageAlt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits of Our Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black font-plus-jakarta mb-6">
              Benefits of <span className="text-primary-500">Our Services</span>
            </h2>
            <p className="text-gray-600 text-xl font-dm-sans max-w-3xl mx-auto">
              Discover how our comprehensive services can transform your business operations and drive sustainable growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-8 shadow-lg"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-primary-500 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Increased Efficiency</h3>
              <p className="text-gray-600 leading-relaxed">
                Streamline accounting processes, reduce manual errors, and optimize financial workflows to maximize operational efficiency.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 shadow-lg"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-primary-500 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Improved Productivity</h3>
              <p className="text-gray-600 leading-relaxed">
                Enhance user adoption, productivity, and overall financial management through expert training and support.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white p-8 shadow-lg"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-primary-500 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Better Decision-Making</h3>
              <p className="text-gray-600 leading-relaxed">
                Leverage financial data insights to inform business decisions and drive sustainable growth.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Accounting Software Expertise */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black font-plus-jakarta mb-6">
              Accounting Software <span className="text-primary-500">Expertise</span>
            </h2>
            <p className="text-gray-600 text-xl font-dm-sans max-w-3xl mx-auto">
              We specialize in implementing and optimizing leading accounting software solutions for businesses of all sizes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-primary-500 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">QuickBooks</h3>
              <p className="text-gray-600 leading-relaxed">
                Implement and optimize QuickBooks accounting solutions for small businesses.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-primary-500 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Xero</h3>
              <p className="text-gray-600 leading-relaxed">
                Implement Xero accounting solutions for growing businesses.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-primary-500 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Sage Saari</h3>
              <p className="text-gray-600 leading-relaxed">
                Implement Sage Saari accounting solutions for small and medium size entities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-primary-500 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">SAP Accounting</h3>
              <p className="text-gray-600 leading-relaxed">
                Implement and optimize SAP accounting solutions for large enterprises.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black font-plus-jakarta mb-6">
              Why <span className="text-primary-500">Choose Us</span>
            </h2>
            <p className="text-gray-600 text-xl font-dm-sans max-w-3xl mx-auto">
              Discover the advantages that make EC&T the preferred choice for businesses seeking comprehensive financial solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-8 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-primary-500 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Expertise</h3>
              <p className="text-gray-600 leading-relaxed">
                Our team has extensive experience in accounting software implementation and training, ensuring you receive the highest quality service.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-primary-500 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Customized Solutions</h3>
              <p className="text-gray-600 leading-relaxed">
                We tailor our services to meet your unique business needs, ensuring optimal results for your specific requirements.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white p-8 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-primary-500 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ongoing Support</h3>
              <p className="text-gray-600 leading-relaxed">
                We provide ongoing support and maintenance to ensure continued success and minimize downtime for your business.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="rounded-xl overflow-hidden">
            <div className="relative">
              <div className="h-64 w-full relative overflow-hidden">
                <Image
                  src="/get-started-cta.png"
                  alt="Get Started CTA Background"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <h3 className="text-white text-xl sm:text-2xl font-semibold max-w-2xl">
                  Ready to take the next step? Partner with us to unlock your potential and achieve lasting impact.
                </h3>
                <Link href="/contact" className="mt-5 bg-primary-500 text-white px-5 py-3 font-semibold btn-hover">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
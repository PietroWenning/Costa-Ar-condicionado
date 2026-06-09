import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'
import { services } from '../../data'
import { WHATSAPP_URL } from '../../utils/constants'

function ServiceCard({ service, index }) {
  const Icon = service.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#0066FF]/40 hover:shadow-xl hover:shadow-blue-100 transition-all duration-300 cursor-default"
    >
      <div className="w-12 h-12 bg-[#0066FF]/10 group-hover:bg-[#0066FF] rounded-xl flex items-center justify-center mb-5 transition-all duration-300">
        <Icon className="text-[#0066FF] group-hover:text-white text-xl transition-colors duration-300" />
      </div>
      <h3 className="text-[#0F172A] font-bold text-lg mb-3 group-hover:text-[#0066FF] transition-colors">
        {service.title}
      </h3>
      <p className="text-slate-500 text-sm leading-relaxed">
        {service.description}
      </p>
    </motion.div>
  )
}

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section id="servicos" className="py-20 lg:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-block text-[#0066FF] text-sm font-semibold uppercase tracking-widest mb-3"
          >
            O que fazemos
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4"
          >
            Nossos Serviços
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-lg"
          >
            Soluções completas em climatização para cada necessidade, do residencial ao industrial.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
          {/* CTA Card */}
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: services.length * 0.08 }}
            whileHover={{ y: -4 }}
            className="group bg-[#0066FF] rounded-2xl p-6 flex flex-col justify-between min-h-[200px] hover:bg-[#0052CC] transition-all duration-300 hover:shadow-xl hover:shadow-blue-300/40"
          >
            <div>
              <div className="text-white font-bold text-lg mb-3">Precisa de outro serviço?</div>
              <p className="text-blue-100 text-sm leading-relaxed">
                Entre em contato e veja como podemos ajudar você.
              </p>
            </div>
            <div className="flex items-center gap-2 text-white font-semibold text-sm mt-4 group-hover:gap-4 transition-all">
              Falar conosco <FaArrowRight />
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  )
}

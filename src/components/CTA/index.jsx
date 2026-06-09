import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { WHATSAPP_URL } from '../../utils/constants'

export default function CTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contato" className="py-20 lg:py-28 bg-[#0F172A] relative overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0066FF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#0052CC]/10 rounded-full blur-3xl pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="inline-block text-[#0066FF] text-sm font-semibold uppercase tracking-widest mb-4"
        >
          Vamos conversar?
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
        >
          Solicite Seu{' '}
          <span className="text-[#0066FF]">Orçamento</span>{' '}
          Agora
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Nossa equipe está pronta para atender sua residência, empresa ou indústria.
          Resposta rápida e orçamento sem compromisso.
        </motion.p>
        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20B858] text-white font-bold px-10 py-5 rounded-2xl text-lg shadow-2xl shadow-green-500/30 transition-all duration-200"
        >
          <FaWhatsapp size={26} />
          Falar no WhatsApp
        </motion.a>
        <p className="text-slate-600 text-sm mt-6">
          Atendemos toda a Grande Florianópolis — SC
        </p>
      </div>
    </section>
  )
}

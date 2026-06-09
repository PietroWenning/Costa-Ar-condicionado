import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { clients } from '../../data'

export default function Clients() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="clientes" className="py-20 lg:py-24 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-block text-[#0066FF] text-sm font-semibold uppercase tracking-widest mb-3"
          >
            Nossos clientes
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
          >
            Empresas que Já Confiaram em Nosso Trabalho
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg max-w-xl mx-auto"
          >
            Atendemos desde residências até grandes empresas e indústrias na Grande Florianópolis.
          </motion.p>
        </div>

        {/* Logo placeholders */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {clients.map((client, i) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.07 }}
              className="bg-white/5 border border-white/10 rounded-2xl h-24 flex flex-col items-center justify-center gap-2 hover:bg-white/10 hover:border-[#0066FF]/40 transition-all duration-300 group"
            >
              <div className="w-10 h-10 bg-[#0066FF]/20 group-hover:bg-[#0066FF]/40 rounded-full flex items-center justify-center text-[#0066FF] font-bold transition-colors">
                {client.initial}
              </div>
              <span className="text-slate-500 text-xs">Logo do Cliente</span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center text-slate-500 text-sm"
        >
          * Substitua os espaços acima pelos logos reais dos seus clientes e parceiros
        </motion.p>
      </div>
    </section>
  )
}

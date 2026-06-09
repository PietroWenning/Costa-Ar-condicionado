import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaCheckCircle, FaSnowflake } from 'react-icons/fa'
import { COMPANY } from '../../utils/constants'

const values = [
  { label: 'Missão', text: 'Proporcionar conforto térmico com qualidade, agilidade e segurança para residências, empresas e indústrias da Grande Florianópolis.' },
  { label: 'Visão', text: 'Ser referência em climatização na região, reconhecidos pela excelência técnica e pelo compromisso com a satisfação total do cliente.' },
  { label: 'Valores', text: 'Honestidade, responsabilidade, qualidade no serviço e respeito com cada cliente — do primeiro contato até o pós-atendimento.' },
]

const highlights = [
  'Mais de 200 clientes atendidos na Grande Florianópolis',
  'Equipe técnica treinada e certificada',
  'Atendimento residencial, comercial e industrial',
  'Garantia formal em todos os serviços',
  'Suporte técnico pós-instalação',
  'Parceiros autorizados das principais marcas',
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="sobre" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Visual */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Main image placeholder */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0F172A] to-[#0D2347] aspect-[4/3] flex items-center justify-center">
              <div className="text-center text-white/20 p-8">
                <FaSnowflake size={80} className="mx-auto mb-4" />
                <p className="text-sm">Substitua por uma foto da equipe ou instalação</p>
                <p className="text-xs mt-1 opacity-60">Recomendado: 800x600px</p>
              </div>
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-white font-bold text-lg">Costa Ar Condicionado</div>
                <div className="text-slate-300 text-sm">Especialistas em climatização</div>
              </div>
            </div>

            {/* Floating stat */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-[#0066FF] text-white rounded-2xl p-5 shadow-2xl shadow-blue-500/30"
            >
              <div className="text-4xl font-bold">{COMPANY.clients}</div>
              <div className="text-blue-100 text-xs mt-1">Clientes satisfeitos</div>
            </motion.div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <span className="inline-block text-[#0066FF] text-sm font-semibold uppercase tracking-widest mb-3">
              Sobre nós
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-6 leading-tight">
              Conforto e qualidade com quem{' '}
              <span className="text-[#0066FF]">você pode confiar</span>
            </h2>
            <p className="text-slate-500 leading-relaxed mb-6">
              A <strong className="text-[#0F172A]">Costa Ar Condicionado</strong> atua na Grande Florianópolis oferecendo soluções completas em climatização. Nascemos com o propósito de entregar qualidade real, atendimento humano e resultados duradouros.
            </p>
            <p className="text-slate-500 leading-relaxed mb-8">
              Nossa equipe é formada por técnicos especializados e certificados, prontos para atender desde a instalação de um split residencial até projetos industriais de grande porte — sempre com comprometimento e atenção a cada detalhe.
            </p>

            {/* Highlights */}
            <ul className="space-y-3 mb-10">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-slate-600 text-sm">
                  <FaCheckCircle className="text-[#00C853] mt-0.5 flex-shrink-0" />
                  {h}
                </li>
              ))}
            </ul>

            {/* Values */}
            <div className="space-y-4">
              {values.map((v) => (
                <div key={v.label} className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-4">
                  <div className="text-[#0066FF] font-semibold text-sm mb-1">{v.label}</div>
                  <p className="text-slate-500 text-sm leading-relaxed">{v.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

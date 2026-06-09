import { FaWhatsapp, FaInstagram, FaSnowflake, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import { COMPANY, WHATSAPP_URL, NAV_ITEMS } from '../../utils/constants'
import { useScrollToSection } from '../../hooks/useScrollSpy'

export default function Footer() {
  const scrollTo = useScrollToSection()

  return (
    <footer className="bg-[#080F1E] text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-[#0066FF] rounded-lg flex items-center justify-center">
                <FaSnowflake className="text-white text-lg" />
              </div>
              <div>
                <span className="block text-white font-bold text-base leading-tight">Costa</span>
                <span className="block text-[#0066FF] text-xs font-medium leading-tight tracking-wider uppercase">Ar Condicionado</span>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              {COMPANY.description} Especialistas em climatização na Grande Florianópolis.
            </p>
            <div className="flex gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/5 hover:bg-[#25D366] border border-white/10 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={16} />
              </a>
              <a
                href={COMPANY.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/5 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 border border-white/10 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
                aria-label="Instagram"
              >
                <FaInstagram size={16} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Navegação</h4>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => scrollTo(item.href)}
                    className="text-slate-500 hover:text-[#0066FF] text-sm transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services quick list */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Serviços</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              {['Instalação Residencial', 'Instalação Comercial', 'Sistemas Industriais', 'Manutenção Preventiva', 'Manutenção Corretiva', 'Limpeza e Higienização', 'Infraestrutura para Obras'].map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-slate-500">
                <FaMapMarkerAlt className="text-[#0066FF] mt-0.5 flex-shrink-0" />
                {COMPANY.location}
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-500">
                <FaPhone className="text-[#0066FF] flex-shrink-0" />
                <a href={`tel:${COMPANY.whatsapp}`} className="hover:text-white transition-colors">
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-500">
                <FaWhatsapp className="text-[#0066FF] flex-shrink-0" />
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-500">
                <FaInstagram className="text-[#0066FF] flex-shrink-0" />
                <a href={COMPANY.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  {COMPANY.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} Costa Ar Condicionado. Todos os direitos reservados.
          </p>
          <p className="text-slate-700 text-xs">
            Grande Florianópolis - SC
          </p>
        </div>
      </div>
    </footer>
  )
}

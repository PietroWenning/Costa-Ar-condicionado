import { lazy, Suspense } from 'react'
import Hero from '../../components/Hero'
import Services from '../../components/Services'

const About = lazy(() => import('../../components/About'))
const Clients = lazy(() => import('../../components/Clients'))
const Projects = lazy(() => import('../../components/Projects'))
const Diferenciais = lazy(() => import('../../components/Diferenciais'))
const Testimonials = lazy(() => import('../../components/Testimonials'))
const CTA = lazy(() => import('../../components/CTA'))

function SectionLoader() {
  return <div className="h-40 bg-transparent" />
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Suspense fallback={<SectionLoader />}>
        <About />
        <Clients />
        <Projects />
        <Diferenciais />
        <Testimonials />
        <CTA />
      </Suspense>
    </main>
  )
}

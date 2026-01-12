import Hero from '@/components/Hero'
import MissionSection from '@/components/sections/MissionSection'
import AboutPreview from '@/components/sections/AboutPreview'
import ProcessSection from '@/components/sections/ProcessSection'
import ProductsSection from '@/components/sections/ProductsSection'
import B2BSection from '@/components/sections/B2BSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import BlogPreview from '@/components/sections/BlogPreview'

export default function Home() {
  return (
    <>
      <Hero />
      <MissionSection />
      <AboutPreview />
      <ProcessSection />
      <ProductsSection />
      <B2BSection />
      <TestimonialsSection />
      <BlogPreview />
    </>
  )
}


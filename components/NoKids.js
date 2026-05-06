import SectionWrapper from './SectionWrapper'

export default function NoKids() {
  return (
    <SectionWrapper className="py-16 px-6">
      <div className="max-w-xl mx-auto">
        <div className="p-8 rounded-3xl border border-[#F26A4B]/20 bg-[#F26A4B]/3 text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#F26A4B]/10 mb-4">
            <span className="text-2xl">🌿</span>
          </div>

          <h3 className="font-playfair text-xl text-[#2a2a2a] mb-3">Solo adultos</h3>
          <p className="font-cormorant text-lg text-[#2a2a2a] leading-relaxed opacity-80 italic">
            "Aunque amamos a los niños, nuestra boda será solo para adultos. Queremos que en este día solo tengan que preocuparse de pasarlo increíble con nosotros."
          </p>
        </div>
      </div>
    </SectionWrapper>
  )
}

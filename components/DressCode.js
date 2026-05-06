import SectionWrapper from './SectionWrapper'

export default function DressCode() {
  return (
    <SectionWrapper className="py-20 px-6 bg-white">
      <div className="max-w-xl mx-auto text-center">
        <p className="font-inter text-xs tracking-[0.3em] uppercase text-[#3E5B3A] mb-2">Indumentaria</p>
        <h2 className="font-playfair text-3xl md:text-4xl text-[#2a2a2a] mb-10">Código de vestimenta</h2>

        <div className="relative p-8 md:p-12 rounded-3xl border border-[#D8A928]/25 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-3 pointer-events-none">
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[#C93A8B] blur-3xl opacity-10" />
            <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-[#F26A4B] blur-3xl opacity-10" />
          </div>

          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6" style={{ background: 'linear-gradient(135deg, #C93A8B20, #F26A4B20)' }}>
            <svg className="w-7 h-7 text-[#C93A8B]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"/>
            </svg>
          </div>

          <p className="font-playfair text-2xl md:text-3xl text-[#2a2a2a] mb-4">Formal</p>
          <div className="h-px w-16 bg-[#D8A928] mx-auto mb-4 opacity-60" />
          <p className="font-cormorant text-lg text-[#2a2a2a] opacity-70 italic">
            El blanco queda reservado para la novia.
          </p>

          {/* Color swatches hint */}
          <div className="flex justify-center gap-3 mt-8">
            {['#2a2a2a', '#3E5B3A', '#C93A8B', '#D8A928', '#F26A4B', '#e8ddd5'].map((c) => (
              <div
                key={c}
                className="w-6 h-6 rounded-full border border-white shadow-sm"
                style={{ background: c }}
                title={c}
              />
            ))}
          </div>
          <p className="font-inter text-[10px] text-[#3E5B3A] opacity-40 mt-2 tracking-wide">Paleta sugerida</p>
        </div>
      </div>
    </SectionWrapper>
  )
}
